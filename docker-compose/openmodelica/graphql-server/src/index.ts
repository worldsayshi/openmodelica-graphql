import fs from "fs";

import typeDefs from "./typeDefs";
import {ApolloServer} from "apollo-server";
import {compile, initModelRuntime, startModel } from "./process-util";

const resolvers = {
  Query: {
    models: () => Object.keys(modelsRuntime).map((name) => ({ name })),
    model: (_ : {}, { name }: { name: string }) => {
      let model = modelsRuntime[name];
      if (!model) {
        return null;
      }
      return model;
    },
  },
  Mutation: {
    putModel: (_: {}, { name, model }: { name: string, model: string }) => {
      let filepath = "models/"+name+".mo";
      let fileHandle = fs.openSync(filepath, 'w');
      console.log("Writing content to file: " + model);
      fs.writeSync(fileHandle, model+"\n");
      console.log("Compiling...");
      compile(filepath);
      modelsRuntime[name] = modelsRuntime[name] || {};
    },
    startModel: (_: {}, { name }: { name: string }) => {
      if(!(typeof modelsRuntime[name] === 'object' && modelsRuntime[name] !== null)) {
        return {
          ok: false,
          message: 'Not a known model: '+name
        };
      }
      let process = startModel("./"+name, { cwd: "output" });
      modelsRuntime[name] = {
        ...modelsRuntime[name],
        process,
      };
      return {
        ok: true,
        message: "Model started: " + name
      };
    },
    stopModel: (_: {}, { name }: { name: string }) => {
      if(!(typeof modelsRuntime[name] === 'object' && modelsRuntime[name] !== null)) {
        return {
          ok: false,
          message: 'Not a known model: '+name
        };
      }
      modelsRuntime[name].process.kill();
      return {
        ok: true,
        message: "Model stopped: " + name,
      };
    },
  },
};

// Init model file storage and model registry in memory
fs.mkdirSync("models", { recursive: true });
let modelsRuntime = initModelRuntime({});

new ApolloServer({ typeDefs, resolvers }).listen().then(({ url }: { url: string }) => {
  console.log(`🚀  Server ready at ${url}`);
});