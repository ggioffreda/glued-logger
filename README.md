Glue - Logger
=============

Logging micro service for monitoring the message bus.

[![Build Status](https://travis-ci.org/ggioffreda/glued-logger.svg?branch=master)](https://travis-ci.org/ggioffreda/glued-logger)
[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

Please note at this stage this is meant for non production environments, not 
because of its stability but because every single message will be logged in 
its entirety, no matter how big it is or where it comes from, and this might
not be the best approach when handling sensitive or large data. In future 
releases there wil be a way of filtering the messages, their content and a
way of routing them to different destinations.

Installation
------------

To run the service you can install with the `-g` flag and then run the
`glued-logger` command:

    $ npm install -g glued-logger
    $ glued-logger

The logger will try and connect to the AMQP message bus using the default
values, you can customise them by setting the *GLUED_AMQP* and 
*GLUED_MESSAGE_BUS* environment variables. You can find more information in the
[Glue Common Utilities](https://github.com/ggioffreda/glued-common)
documentation.
