#! /usr/bin/env node

var spell = require('./lib/index.js')(process.argv[3]);

var input = parseInt(process.argv[2], 10);
console.log(spell(input));