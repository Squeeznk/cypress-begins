FROM ubuntu:latest

ARG PROJECT_NAME=cypress_tests
ARG GROUP_ID=5000
ARG USER_ID=5000

ENV VIRTUAL_ENV=/app/${PROJECT_NAME}

# Setting Enviroment variables
ENV NODE_VERSION 21.6.1
ENV NODE_ARCH arm64
ENV TMP /tmp
ENV NODE_FILEPATH node-v$NODE_VERSION-linux-$NODE_ARCH

# Udpating and Installing dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    ca-certificates \
    curl \
    xz-utils \
    openssl \
    git \
    mc \
    libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth xvfb \
    && rm -rf /var/lib/apt/lists/*

# Install Nodejs
RUN curl -SL https://nodejs.org/dist/v$NODE_VERSION/$NODE_FILEPATH.tar.xz -o $TMP/$NODE_FILEPATH.tar.xz \
    && cd $TMP/ && tar -xJf $NODE_FILEPATH.tar.xz && rm $NODE_FILEPATH.tar.xz \
    && mv $NODE_FILEPATH /opt/node \
    && ln -sf /opt/node/bin/node /usr/bin/node \
    && ln -sf /opt/node/bin/npm /usr/bin/npm

# Install the latest version of Yarn
RUN curl -SL https://yarnpkg.com/latest.tar.gz -o $TMP/latest.tar.gz \
    && cd $TMP/ && tar -zxf latest.tar.gz && rm latest.tar.gz \
    && mv $TMP/yarn* /opt/yarn \
    && ln -sf /opt/yarn/bin/yarn /usr/bin/yarn

RUN groupadd --gid ${GROUP_ID} ${PROJECT_NAME} && \
    useradd --home-dir /home/${PROJECT_NAME} --create-home --uid ${USER_ID} \
        --gid ${GROUP_ID} --shell /bin/sh --skel /dev/null ${PROJECT_NAME} && \
    mkdir /home/${PROJECT_NAME}/app && \
    chown -R ${PROJECT_NAME}:${PROJECT_NAME} /home/${PROJECT_NAME}/app

WORKDIR /home/${PROJECT_NAME}/app

USER ${REMOTE_USER}

