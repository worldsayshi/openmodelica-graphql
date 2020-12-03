

# Setup

## Download and install Open Modelica

https://openmodelica.org/

## Install OMPython

https://github.com/OpenModelica/OMPython

# Run

```bash
$ pip install asyncua # maybe?
$ python main.py
```

# Recipe

```
loadFile(getInstallationDirectoryPath() + "/share/doc/omc/testmodels/BouncingBall.mo")
buildModel(BouncingBall)
```
Then run, in bash:
```
cd /tmp/OpenModelica
./BouncingBall.exe -embeddedServer=opc-ua
```
(See https://liu.diva-portal.org/smash/get/diva2:1118383/FULLTEXT01.pdf)


# Other: Alt recipe
```
simulate(BouncingBall, startTime=0.0, stopTime=1.0)
list(BouncingBall)
val()
```

# Run ocpua

pip install PyQt5

"Enabling  an  embedded  simulation  server  means  that  simulation  flow  controls  are  re-quired.   The client has to contact the server to somehow make the simulation run.   Thereare two ways of controlling the simulation. RPC and writing values to variables via OPC UA.A client can use the OPC UA interface for writing values to specific simulation control nodeson the server side or call remote functions.  For example, asking the OPC UA server to takea step forward in the simulation through RPC would require the client to call the procedurestep(). The other approach for the client would be to write the valuetrueto the value attributeassociated  with  a simulation  control  node.   Currently,  the  embedded  OPC  UA simulationserver supports the writing to simulation control nodes way of simulation flow control. Thereason behind is that OPC DA do not have support for RPC and some commercial systemsare just a bridge between OPC UA and OPC DA. Taking the approach supported by bothOPC UA and OPC DA could therefore include a wider scope [22]."

- https://liu.diva-portal.org/smash/get/diva2:1118383/FULLTEXT01.pdf


# Recipe command line

omc +s modelname.mo
make -f modelname.makefile

