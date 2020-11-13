FROM ubuntu:20.04
RUN apt-get update

RUN DEBIAN_FRONTEND=noninteractive apt install -y gnupg lsb-release wget

RUN for deb in deb deb-src; do echo "$deb http://build.openmodelica.org/apt `lsb_release -cs` stable"; done | tee /etc/apt/sources.list.d/openmodelica.list
RUN wget -q http://build.openmodelica.org/apt/openmodelica.asc -O- | apt-key add -

# To verify that your key is installed correctly
RUN apt-key fingerprint

RUN apt update
RUN apt install -y openmodelica
