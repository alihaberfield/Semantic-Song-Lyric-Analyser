//var StatementKind = require('../lib/models/statement').StatementKind

exports.answers = [
  {
    id: 1,
    values: [{
      symbol: 'tell a lie'
      //value: false
    }, {
      symbol: 'hurt you'
    }]
  },
  {
    id: 2,
    values: [{
      symbol: 'desert you'
      //value: true
    }]
  },
  {
    id: 3,
    values: [{
      symbol: 'make you cry'
     // value: false
    },{
      symbol: 'say goodbye'
     // value: false
    }]
  }
]

exports.premises = [
  {
    kind: 'cease',
    a: {
      proposition: 'give you up'
    }
  },
  {
    kind: 'disappoint',
    a: {
      proposition: 'let you down'
    }
  }, 
  {
    kind: 'abandon',
    a: {
      proposition: 'run around'
    }
  }
]
