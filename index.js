const ZSchema = require('z-schema')
const Mnemonic = require('bitcore-mnemonic')
const chalk = require('chalk')
const data = require('./data')
const schema = require('./schema')


ZSchema.registerFormat('bip39', (secret) => {
  console.log(chalk.magenta('validating secret:'), chalk.yellow(`${secret}`))
  return Mnemonic.isValid(secret)
})

let validator = new ZSchema({
  reportPathAsArray: true,
  breakOnFirstError: false,
  forceItems: true
})

let valid = validator.validate(data, schema)
if (valid === true) {
  console.log(chalk.green('data is valid'))
} else {
  console.log('data not valid')
  let errors = validator.getLastErrors()
  console.log(chalk.red(JSON.stringify(errors)))
}
