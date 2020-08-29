const { randomBytes } = require('../Crypto')

const { IVLENGTHS } = require('../registry')

module.exports = alg => randomBytes(IVLENGTHS.get(alg) / 8)
