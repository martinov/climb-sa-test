# Climbing Performance Assessment

A basic MEAN app around a [Climbing Self-assessment test](http://www.edenrockclimbing.com/blog/posts/climbing-performance-self-assessment-test).

#### Use regularly to improve your climbing skills.

## climb-sa-test

Built with [Node.js](https://nodejs.org) and [Angular Material](https://material.angularjs.org).

### Tests

Run with `npm test`.

### Random notes

    $ docker run -it --link mymongo:mongo --rm mongo sh -c 'exec mongo "$MONGO_PORT_27017_TCP_ADDR:$MONGO_PORT_27017_TCP_PORT/climb-sa-test"'

    $ mongoexport -h $MONGO_PORT_27017_TCP_ADDR -d climb-sa-test -c questions -o questions.json

    $ mongoimport -h <host>:<port> -d climb-sa-test -c questions -u <user> -p <pass> --file questions.json
