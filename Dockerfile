FROM yarnpkg/node-yarn:0.20-node7

ENV YARN_VERSION 0.22.0-1
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
    apt-get update && apt-get install yarn=${YARN_VERSION}

WORKDIR /opt/rf-docs

COPY yarn.lock package.json /opt/rf-docs/

RUN yarn install --pure-lockfile

COPY . /opt/rf-docs/
