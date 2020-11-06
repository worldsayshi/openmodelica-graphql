import os
from OMPython import OMCSessionZMQ
from OMPython import ModelicaSystem
os.chdir("output")
omc = OMCSessionZMQ()
model_path=omc.sendExpression("getInstallationDirectoryPath()") + "/share/doc/omc/testmodels/"
mod=ModelicaSystem(model_path + "BouncingBall.mo","BouncingBall",["Modelica"])
#mod.buildModel()
print(mod.simulate()) # (simflags="stopTime=3.0")
mod.setLinearizationOptions(["stopTime=2.0"])
print(mod.linearize())
#outp = mod.linearize() # mod.getOutputs()
#print(outp)
# cmds = [
#   'loadFile(getInstallationDirectoryPath() + "/share/doc/omc/testmodels/BouncingBall.mo")',
#   "simulate(BouncingBall, stopTime=3.0)",
#   "plot(h)"
#   ]
# for cmd in cmds:
#   answer = omc.sendExpression(cmd)
#   print("\n{}:\n{}".format(cmd, answer))
