const {sayHello} = require('./module-1')
const getName = require('./module-2')


console.log('main module')
sayHello(getName())
