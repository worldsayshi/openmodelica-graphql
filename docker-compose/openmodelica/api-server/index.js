
const express = require('express')
const fs = require('fs');

const {compile, startModel, initModelRuntime} = require('./process-util');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

fs.mkdirSync("models", { recursive: true });

// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

let modelsRuntime = initModelRuntime({

});

app.route("/model/:name")
  /**
    Add/Update and compile a model
    curl -X PUT localhost:3000/model/foo -H "Content-Type: text/plain" -d 'foobarmodelcontent'
  */
  .put((req, res) => {
    if (req.is('text/*')) {
      let name = req.params.name;
      let filepath = "models/"+name+".mo";
      let fileHandle = fs.openSync(filepath, 'w');
      console.log("Writing content to file: " + req.body);
      fs.writeSync(fileHandle, req.body+"\n");
      console.log("Compiling...");
      compile(filepath);
      modelsRuntime[name] = modelsRuntime[name] || {};
      res.send('Putting model with name: ' + name);
    } else {
      console.log("Unexpected content type");
      res.status(400).send({
        message: "Unexpected content type"
      });
    }
  })
  /**
    Retrieve a model
  */
  .get((req, res) => {
    let name = req.params.name;
    let fileHandle = fs.openSync("models/"+name);
    let contents = fs.readlinkSync(fileHandle);
    res.send('Model contents: ' + contents);
  });

app.post("/model/:name/start", (req, res) => {
  let name = req.params.name;
  if(!(typeof modelsRuntime[name] === 'object' && modelsRuntime[name] !== null)) {
    res.status(400).send({
      message: 'Not a known model: '+name
    });
    return;
  }
  // let filepath = "output/"+name;
  let process = startModel("./"+name, { cwd: "output" });
  modelsRuntime[name] = {
    ...modelsRuntime[name],
    process,
  };
  res.send("Model started: " + name);
});

app.post("/model/:name/stop", (req, res) => {
  let name = req.params.name;
  if(!(typeof modelsRuntime[name] === 'object' && modelsRuntime[name] !== null)) {
    res.status(400).send({
      message: 'Not a known model: '+name
    });
    return;
  }
  modelsRuntime[name].process.kill();
  res.send("Model stopped: " + name);
});

/**
  Retrieve a list of models
*/
app.get('/models', (req, res) => {
  res.send(Object.keys(modelsRuntime));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
