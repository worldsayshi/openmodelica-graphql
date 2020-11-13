FROM ubuntu:20.04

ARG DEBIAN_FRONTEND=noninteractive

for deb in deb deb-src; do echo "$deb http://build.openmodelica.org/apt `lsb_release -cs` stable"; done | sudo tee /etc/apt/sources.list.d/openmodelica.list
wget -q http://build.openmodelica.org/apt/openmodelica.asc -O- | sudo apt-key add -
# To verify that your key is installed correctly
apt-key fingerprint

sudo apt update
sudo apt install openmodelica
