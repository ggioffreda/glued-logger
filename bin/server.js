#!/usr/bin/env node

const ProcessorManager = require('glued-common').ProcessorManager,
  manager = new ProcessorManager(),
  Logger = require('../index').Logger;

manager.load(new Logger());
