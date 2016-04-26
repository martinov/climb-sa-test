# cp config.sample.js config.js
# docker build -t mmartinov/climbsatest .
# docker run -d --name climbsa-test-app mmartinov/climbsatest
# docker ps -> docker logs
# docker inspect to see the IP

FROM node:5

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN npm install -g bower
RUN npm install
COPY . /usr/src/app
RUN bower install --allow-root

EXPOSE 8080
CMD [ "npm", "start" ]
