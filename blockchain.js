const Block = require('./block')
const Transactions = require('./transactions')
class BlockChain {
  constructor(){
    this.chain = [this.createBlockMain()]
    this.difficulty = 4
    this.pendingTransactions = []
    this.miningRewards = 100
  }
  createBlockMain(){
    return new Block('01/01/2019', 'Block Genesis', '0')
  }
  getLastBlock(){
    return this.chain[this.chain.length-1]
  }
  // addBlock(newBlock){
  //   newBlock.hashPrev = this.getLastBlock().hash
  //   // newBlock.hash = newBlock.calculeHash()
  //   newBlock.mineBlock(this.difficulty)
  //   this.chain.push(newBlock)
  // }
  addTransaction(transaction) {
    this.pendingTransactions.push(transaction)
  }
  minePendingTransaction(addressMiner){
    let block = new Block(Date.now(), this.pendingTransactions)
    block.hashPrev = this.getLastBlock().hash
    block.mineBlock(this.difficulty)
    console.log('Sussesfull mine Block')

    this.chain.push(block)
    this.pendingTransactions = [
      new Transactions(null, addressMiner, this.miningRewards)
    ]
  }
  getBalanceOfAddress(address) {
    let balance = 0
    for( const block of this.chain) {
      for( const trans of block.transactions) {
        if(trans.fromAddress === address) {
          balance -= trans.amount
        }

        if(trans.toAddress === address) {
          balance += trans.amount
        }
      }
    }
    return balance
  }
  validateChain(){
    for(let i = 1; i < this.chain.length; i++){
      const blockCurrent = this.chain[i]
      const blockPrev = this.chain[i-1]

      if(blockCurrent.hash !== blockCurrent.calculeHash()){
        return false
      }

      if(blockCurrent.hashPrev !== blockPrev.hash){
        return false
      }
    }
    return true
  }
}

module.exports = BlockChain