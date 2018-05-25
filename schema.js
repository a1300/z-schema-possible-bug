
let schema = {
  type: 'array',
  minItems: 5,
  uniqueItems: true,
  items: [
    {
      type: 'string',
      format: 'bip39'
    }
  ]
}

module.exports = schema
