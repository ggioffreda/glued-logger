#!/usr/bin/env node

const ServiceManager = require('glued-common').ServiceManager
const manager = new ServiceManager()
const Logger = require('../logger').Logger

manager.load(new Logger(), require('../package.json'))
