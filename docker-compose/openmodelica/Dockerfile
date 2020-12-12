FROM ubuntu:20.04
RUN apt-get update
RUN export DEBIAN_FRONTEND=noninteractive
ENV DEBIAN_FRONTEND noninteractive
RUN apt install -y gnupg lsb-release wget

## Add Openmodelica repo
RUN wget -q http://build.openmodelica.org/apt/openmodelica.asc -O- | apt-key add -

## To verify that your key is installed correctly
RUN apt-key fingerprint

# Configure timezone and keyboard type to avoid interactive prompt
ENV TZ=Europe/Kiev
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
COPY ./keyboard /etc/default/keyboard
RUN apt update

# Since the above doesn't seem to work:
RUN apt-get update && apt-get install -y git

# Clone Openmodelica git repo
RUN git clone --single-branch --branch master https://github.com/OpenModelica/OpenModelica.git /tmp/openmodelica-repo # git@github.com:OpenModelica/OpenModelica.git

# Install deps
RUN echo deb http://build.openmodelica.org/apt `lsb_release --short --codename` nightly | tee -a /etc/apt/sources.list
RUN echo deb-src http://build.openmodelica.org/apt `lsb_release --short --codename` nightly | tee -a /etc/apt/sources.list
RUN apt-get update && apt-get build-dep openmodelica -y

# Antlr seems like another implicit dependency?
RUN apt-get install flex -y

# Install from source
RUN cd /tmp/openmodelica-repo && git submodule update --init --recursive
RUN cd /tmp/openmodelica-repo && autoconf && ./configure --with-cppruntime --disable-modelica3d --prefix=/usr
RUN cd /tmp/openmodelica-repo && make
RUN cd /tmp/openmodelica-repo && make install

# Install the test models
RUN cp /tmp/openmodelica-repo/OMCompiler/Examples/* /usr/share/doc/omc/testmodels/

# Install Node
RUN apt-get install curl -y
RUN curl -sL https://deb.nodesource.com/setup_12.x | bash
RUN apt-get install nodejs -y

COPY graphql-server ./graphql-server
RUN cd graphql-server && \
    npm install && npm run build

WORKDIR ./graphql-server
ENTRYPOINT ["node", "./build/index.js"]
# ENTRYPOINT ["OMShell-terminal"]
