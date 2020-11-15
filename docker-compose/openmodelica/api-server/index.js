
const express = require('express')
const fs = require('fs');

const {compile} = require('./process-util');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

fs.mkdirSync("models", { recursive: true });

// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

app.route("/model/:name")
  /**
    Add/Update and compile a model
    curl -X PUT localhost:3000/model/foo -H "Content-Type: text/plain" -d 'foobarmodelcontent'
  */
  .put((req, res) => {
    if (req.is('text/*')) {
      let name = req.params.name;
      let fileHandle = fs.openSync("models/"+name, 'w');
      console.log("Writing content to file: " + req.body);
      console.log();
      fs.writeSync(fileHandle, req.body);
      compile(fileHandle);
      res.send('Putting model with name: ' + name);
    } else {
      console.log("Unexpected content");
    }
  })
  /**
    Retrieve a model
  */
  .get((req, res) => {
    let fileHandle = fs.openSync("models/"+name);
    let contents = fs.readlinkSync(fileHandle);
    res.send('Model contents: ' + contents);
  });

/**
  Retrieve a list of models
*/
app.get('/models', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
