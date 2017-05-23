const Block = require('../models/block.js');

var blockNumber = 3754350;
var startBlock = '0xdce303c8bc2d9ddd86f081235f5c0280b08005b4233bd3794afeabc88e69f0ec' //Number = 3754350

function populateMongoDB(startBlockId, n) {
  if (n > 0) {
    Block.getBlock(startBlockId, (block) => {
      if (block != null) {
        console.log('Block number: ' + block.number + ' and count: ' + n);
        populateMongoDB(block.parentHash, n-1);
      }
    })
  }
}

populateMongoDB(startBlock, blockNumber);
