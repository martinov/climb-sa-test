# docker build -t mmartinov/climbsatest .
# make sure bower is installed and bower install is run.
# docker run -p 80:8080 -d mmartinov/climbsatest
# docker ps -> docker logs

FROM node:4.2.1-onbuild
EXPOSE 8080
