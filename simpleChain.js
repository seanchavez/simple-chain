class Block {
  constructor(data) {
    this.height = '';
    this.timeStamp = '';
    this.data = data;
    this.previousHash = '0x';
    this.hash = '';
  }
}

const wow = new Block('Seriously Fucking Stupid');
console.log(wow);
