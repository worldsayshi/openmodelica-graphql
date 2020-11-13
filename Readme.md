

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
