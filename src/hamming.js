'use strict'

const encode = function(input, options) {
  if(typeof input !== 'string' || input.match(/[^10]/)) throw new Error('Invalid input. Should be a string binary')

  const codeIndexes = [],
        encoded = []
  
  for(let i = 1; input.length / i >= 1; i *= 2)
    codeIndexes.push(i)

  if(message.length === 1) codeIndexes.push(2)

  const getBit = (m, pos) => {

  }

  const getBitInverted = (m, pos) => {

  }

  console.log(message)
  console.log(codeIndexes)

  codeIndexes.forEach(key => {
    let bit = getBit(message, key)
    console.log(`bit at ${key} = ${bit}`)
  })
  
}

const decode = function() {

}