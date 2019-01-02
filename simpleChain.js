SHA256 = require('crypto-js/sha256');

class Block {
  constructor(data) {
    this.height = '';
    this.timeStamp = '';
    this.data = data;
    this.previousHash = '0x';
    this.hash = '';
  }
}

class Blockchain {
  constructor() {
    this.chain = [];
    this.addBlock(new Block('Genesis Block'));
  }

  addBlock(newBlock) {
    if (this.chain.length > 0) {
      newBlock.previousHash = this.chain[this.chain.length - 1].hash;
    }
    newBlock.previousHash = SHA256(JSON.stringify(newBlock)).toString();
    this.chain.push(newBlock);
  }
}

const wow = new Block('Seriously Fucking Stupid');
//console.log(wow);
const bc = new Blockchain();
bc.addBlock(wow);
bc.addBlock(new Block('OMG'));
bc.addBlock(new Block('So Bad'));
console.log(bc.chain);
