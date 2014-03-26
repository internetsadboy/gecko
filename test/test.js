var gecko = require('../gecko').gecko()
	, assert = require('assert')
	, str = 'nodejs'
	, binary = gecko.toBinary(str)
	, hex = gecko.toHex(str)
	, keys = Object.keys(hex).length

var actual = JSON.stringify(binary)
var expected = JSON.stringify({n:'01101110',o:'01101111',d:'01100100',e:'01100101',j:'01101010',s:'01110011'})
assert.equal(actual, expected, 'gecko.toBinary(str) failed')

var actual = JSON.stringify(hex)
var expected = JSON.stringify({n:'6e',o:'6f',d:'64',e:'65',j:'6a',s:'73'})
assert.equal(actual, expected, 'gecko.toHex(str) failed')

console.log('yay everything passed')





/*
{ n: '01101110',
  o: '01101111',
  d: '01100100',
  e: '01100101',
  j: '01101010',
  s: '01110011' }
{ n: 6e,
  o: 6f,
  d: 64,
  e: 65,
  j: 6a,
  s: 73 }
*/