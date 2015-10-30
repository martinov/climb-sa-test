# Climbing Performance Assessment

A basic MEAN app around [this test](http://www.edenrockclimbing.com/blog/posts/climbing-performance-self-assessment-test).

#### Use regularly to improve your climbing skills.

## climb-sa-test

REST API built with Node.js for backend and [Angular Material](https://material.angularjs.org) for frontend.

    $ docker run -it --link mymongo:mongo --rm mongo bash

    $ mongoexport -h $MONGO_PORT_27017_TCP_ADDR -d climb-sa-test -c questions -o questions.json

    $ mongoimport -h <host>:<port> -d climb-sa-test -c questions -u <user> -p <pass> --file questions.json
