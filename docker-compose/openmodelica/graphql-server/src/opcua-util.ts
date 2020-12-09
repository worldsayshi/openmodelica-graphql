import { OPCUAClient, SecurityPolicy } from "node-opcua";

let endpointUrl = "opc.tcp://localhost:4841";

let options = {
  applicationName: "OPCUA-GraphQL-experiment",
  securityPolicy: SecurityPolicy.None,
};

let opcuaClient = OPCUAClient.create(options);

export async function debugClient() {
  try {
    await opcuaClient.connect(endpointUrl);
    const session = await opcuaClient.createSession();
    const browseResult = await session.browse("RootFolder");
    if(browseResult===null) {
      throw new Error("browseResult is null");
    }
    console.log("references of RootFolder :");
    // @ts-ignore
    for (const reference of browseResult.references) {
      console.log("   -> ", reference.browseName.toString());
    }
    await session.close();
    await opcuaClient.disconnect();
  } catch (err) {
    console.error(err.stack);
  }

  return {
    ok: true,
  }
}

export async function startSimulation({ name }: { name:  string }) {
  await opcuaClient.connect(endpointUrl);
  const session = await opcuaClient.createSession();
  await session.close();
  await opcuaClient.disconnect();
}

