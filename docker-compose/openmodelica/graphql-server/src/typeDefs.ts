import {gql} from "apollo-server";

export default gql` 
  
  type Model {
    name: String
  }
  
  type Query {
    models: [Model]
    model(name: String): Model
  }
  
  type MutationResult {
    ok: Boolean
    message: String
  }
  
  type Mutation {
    putModel(name: String, model: String): MutationResult
    startModel(name: String): MutationResult
    stopModel(name: String): MutationResult
  }
`;