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
    # Compile a model and start its process
    putModel(name: String, model: String): MutationResult
    # Start a model process if not running and start the simulation
    startModel(name: String): MutationResult
    # Stop the model simulation
    stopModel(name: String): MutationResult
    # Pause a model simulation
    pauseModel(name: String): MutationResult
    # Restart a model process and leave the simulation paused
    rewindModel(name: String): MutationResult
    debugClient: MutationResult
    # Start a model process
    wakeModel(name: String): MutationResult
  }
`;