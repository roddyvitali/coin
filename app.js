const Block = require('./block')
const BlockChain = require('./blockchain')
const Transactions = require('./transactions')


let coin = new BlockChain()
// console.log('Mine Block 1...')
// coin.addBlock(new Block('19/01/2019', {qty : 10 }))
// console.log('Mine Block 2...')
// coin.addBlock(new Block('19/01/2019', {qty : 10 }))
// console.log('Mine Block 3...')
// coin.addBlock(new Block('20/01/2019', {qty : 2 }))
// console.log('Mine Block 4...')
// coin.addBlock(new Block('20/01/2019', {qty : 18 }))

// console.log(coin.validateChain())

// coin.chain[1].data = { qty: 200 }
// coin.chain[1].hash = coin.chain[1].calculeHash()

// console.log(coin.validateChain())

coin.addTransaction(new Transactions('Codetzi', 'Roy', 100))
coin.addTransaction(new Transactions('Pdr', 'MD', 50))

console.log('Starts Mining...')
coin.minePendingTransaction('Codetzi')

console.log('Starts Mining...')
coin.minePendingTransaction('Codetzi')

console.log('The balance is ', coin.getBalanceOfAddress('Codetzi'))

console.log(JSON.stringify(coin, null, 4))