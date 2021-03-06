const SHA256 = require('./node_modules/crypto-js/sha256')

class Block {
  constructor(timestamp, data, hashPrev = ''){
    this.timestamp = timestamp
    this.data = data
    this.hashPrev = hashPrev
    this.wildcard = 0
    this.hash = this.calculeHash()
  }
  calculeHash(){
    return SHA256(this.timestamp + this.hashPrev + JSON.stringify(this.data) + this.wildcard).toString()
  }
  mineBlock(difficulty){
    while(this.hash.substring(0, difficulty) !== Array(difficulty+1).join('0')){
      this.wildcard++
      this.hash = this.calculeHash()
    }
    console.log('Mine Block: ' + this.hash)
  }
}

module.exports = Block