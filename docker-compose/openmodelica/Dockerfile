FROM ubuntu:20.04
RUN apt-get update
RUN export DEBIAN_FRONTEND=noninteractive
ENV DEBIAN_FRONTEND noninteractive
RUN apt install -y gnupg lsb-release wget

RUN for deb in deb deb-src; do echo "$deb http://build.openmodelica.org/apt `lsb_release -cs` stable"; done | tee /etc/apt/sources.list.d/openmodelica.list
RUN wget -q http://build.openmodelica.org/apt/openmodelica.asc -O- | apt-key add -

# To verify that your key is installed correctly
RUN apt-key fingerprint

# Configure timezone and keyboard type to avoid interactive prompt
ENV TZ=Europe/Kiev
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
COPY ./keyboard /etc/default/keyboard
RUN apt update
RUN DEBIAN_FRONTEND=noninteractive apt install -yq openmodelica

# Installs optional Modelica libraries (most have not been tested with OpenModelica)
# RUN apt-get install omlib-.*
RUN for PKG in `apt-cache search "omlib-.*" | cut -d" " -f1`; do apt-get install -y "$PKG"; done

# Since the above doesn't seem to work:
RUN apt-get install -y git
#RUN mkdir ~/.ssh
#RUN touch ~/.ssh/known_hosts
#RUN echo "github.com,140.82.118.3 ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEAq2A7hRGmdnm9tUDbO9IDSwBK6TbQa+PXYPCPy6rbTrTtw7PHkccKrpp0yVhp5HdEIcKr6pLlVDBfOLX9QUsyCOV0wzfjIJNlGEYsdlLJizHhbn2mUjvSAHQqZETYP81eFzLQNnPHt4EVVUh7VfDESU84KezmD5QlWpXLmvU31/yMf+Se8xhHTvKSCZIFImWwoG6mbUoWf9nzpIoaSjB+weqqUUmpaaasXVal72J+UX2B+2RPW3RcT0eOzQgqlJL3RKrTJvdsjE3JEAvGq3lGHSZXy28G3skua2SmVi/w4yCE6gbODqnTWlg7+wC604ydGXA8VJiS5ap43JXiUFFAaQ==" >> ~/.ssh/known_hosts
RUN git clone --single-branch --branch maintenance/v1.16 https://github.com/OpenModelica/OpenModelica.git /tmp/openmodelica-repo # git@github.com:OpenModelica/OpenModelica.git
# COPY /tmp/openmodelica-repo/OMCompiler/Examples/* /usr/share/doc/omc/testmodels/
RUN cp /tmp/openmodelica-repo/OMCompiler/Examples/* /usr/share/doc/omc/testmodels/


# Install Node
RUN curl -sL https://deb.nodesource.com/setup_12.x | bash
RUN apt-get install nodejs

COPY api-server ~/api-server
RUN cd api-server && \
    npm install

ENTRYPOINT ["node", "~/api-server/index.js"]
# ENTRYPOINT ["OMShell-terminal"]
