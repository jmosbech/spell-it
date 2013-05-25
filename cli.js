#! /usr/bin/env node

var spell = require('spell-it')(process.argv[3]);

var input = parseInt(process.argv[2], 10);
console.log(spell(input));