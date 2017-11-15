'use strict'

const encode = function(input, options) {
  if(typeof input !== 'string' || input.match(/[^10]/)) throw new Error('Invalid input. Should be a string binary')

  const encoded = [...input.split('')]
  let numParityBits = 0

  //Calculate the number of parity bits necessary for the message
  while(encoded.length > (Math.pow(2, numParityBits) - numParityBits - 1))
    numParityBits++

  //Create the encoded message with the parity bits  
  for(let i = 0; i < numParityBits; i++)
    encoded.splice((Math.pow(2, i) - 1), 0, null)
  
  for(let i = encoded.length; i >= 0; i--) {
    if(encoded[i] !== null) continue

    encoded[i] = '' + encoded.reduce((acc, val, curIndex) => {
      if(i >= curIndex) return acc

      // If this bit is covered by the current parity bit, XOR to parity
      if((curIndex + 1) & (i + 1)) return Number(val)^acc;

      return acc
    }, 0)
  }

  return encoded.join('')
}

const decode = function(input, options) {
  if(typeof input !== 'string' || input.match(/[^10]/)) throw new Error('Invalid input. Should be a string binary')

  let numParityBits = 0

  //Discover how many bits are parity bits
  while(input.length > (Math.pow(2, numParityBits) - 1))
    numParityBits++

  const parityBitsPos = []
  for(let i = 0; i < numParityBits; i++) 
    parityBitsPos.push(Math.pow(2, i) - 1)

  console.log(parityBitsPos)

  parityBitsPos.forEach()
}