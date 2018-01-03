
function encode(constraint, polynomials, message) {
  if(polynomials.constructor !== Array) {
    throw new Error('Expected an array of integers for polynomials')
  }

  const buffer = Array(constraint).fill(0)
  let msg = message.split('')
  let encoded = []
  
  for(let i = 0; i < msg.length; ++i) {
    buffer.unshift(msg[i])
    buffer.pop()

    polynomials.forEach(poly => {
      let toP = poly & buffer.join('')

      let p = toP.toString(2).split('').reduce((acc, curr) => {
        return acc ^ curr
      }, 0)

      encoded.push(p)
    })
  }

  return encoded.join('')
}

function decode(constraint, polynomials, message) {
  
}