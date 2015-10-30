# cp config.sample.js config.js
# docker build -t mmartinov/climbsatest .
# docker run -d --name climbsa-test-app mmartinov/climbsatest
# docker ps -> docker logs
# docker inspect to see the IP

FROM node:4.2.1

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN npm install -g bower
RUN npm install
COPY . /usr/src/app
# Do the following only if needed?
RUN bower install --allow-root
CMD [ "npm", "start" ]
EXPOSE 8080
