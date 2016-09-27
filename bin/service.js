#!/usr/bin/env node

const ServiceManager = require('glued-common').ServiceManager,
  manager = new ServiceManager(),
  Logger = require('../logger').Logger;

manager.load(new Logger());
