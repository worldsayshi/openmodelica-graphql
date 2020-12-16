// import {
//   ApolloClient,
// } from "@apollo/client";
//
// const client = new ApolloClient({
//   uri: 'http://localhost:4000/'
// });
const chai = require("../util/chai");
const fetch = require('node-fetch');

var query = `
mutation m1($name: String, $model: String) {
  putModel(name:$name, model:$model) {ok}
  debugClient {ok}
}
`;

const model = `
model BouncingBall2
  parameter Real e=0.7 "coefficient of restitution";
  parameter Real g=9.81 "gravity acceleration";
  Real h(fixed=true, start=1) "height of ball";
  Real v(fixed=true) "velocity of ball";
  Boolean flying(fixed=true, start=true) "true, if ball is flying";
  Boolean impact;
  Real v_new(fixed=true);
  Integer foo;

equation
  impact = h <= 0.0;
  foo = if impact then 1 else 2;
  der(v) = if flying then -g else 0;
  der(h) = v;

  when {h <= 0.0 and v <= 0.0,impact} then
    v_new = if edge(impact) then -e*pre(v) else 0;
    flying = v_new > 0;
    reinit(v, v_new);
  end when;

end BouncingBall2;
`;

const putModel = () => fetch('http://localhost:4000', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables: { name: "BouncingBall2", model },
    })
  })
  .then(r => r.json());
  // .then(data => console.log('data returned:', data));

describe('openmodelica model service', () => {
  it('compiles and starts', async () => {
    const { m1: { debugClient: { ok } } } = await putModel();
    chai.expect().to.be.true;
    // const {} = await debugClient();
  });
});