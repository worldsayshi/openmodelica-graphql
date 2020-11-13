FROM ubuntu:20.04
RUN apt-get update
RUN export DEBIAN_FRONTEND=noninteractive
ENV DEBIAN_FRONTEND noninteractive
RUN apt install -y gnupg lsb-release wget

RUN for deb in deb deb-src; do echo "$deb http://build.openmodelica.org/apt `lsb_release -cs` stable"; done | tee /etc/apt/sources.list.d/openmodelica.list
RUN wget -q http://build.openmodelica.org/apt/openmodelica.asc -O- | apt-key add -

# To verify that your key is installed correctly
RUN apt-key fingerprint

# Configure timezone to avoid interactive prompt
ENV TZ=Europe/Kiev
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

COPY ./keyboard /etc/default/keyboard
RUN apt update
RUN DEBIAN_FRONTEND=noninteractive apt install -yq openmodelica

# Installs optional Modelica libraries (most have not been tested with OpenModelica)
RUN apt-get install omlib-.*
## for PKG in `apt-cache search "omlib-.*" | cut -d" " -f1`; do apt-get install -y "$PKG"; done

ENTRYPOINT ["/bin/bash"]
