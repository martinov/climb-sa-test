# docker build -t mmartinov/climbsatest .
# docker run -p 80:8080 -d mmartinov/climbsatest
# docker ps -> docker logs

FROM node:4.2.1

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN npm install -g bower
RUN npm install
COPY . /usr/src/app
RUN bower install
CMD [ "npm", "start" ]
EXPOSE 8080
