const secret = 'Super Secre';
const john = 'john';
const peter = 'peter';

const sayHi = (name) => {
  console.log(`Hello there ${name}`);
};

sayHi('SUSAN');
sayHi(john);
sayHi(peter);
// The real code
const name = require('./4-name');
const func = require('./5-second');

func('SUSAN');
func(name.john);
func(name.peter);
// another example
const name = require('./4-name');
const func = require('./5-second');
const obj = require('./6-alternative');
console.log(obj);
require('./7-seven');
func('SUSAN');
func(name.john);
func(name.peter);
