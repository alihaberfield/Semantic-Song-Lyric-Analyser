var StatementKind = require('../lib/models/statement').StatementKind

exports.answers = [
  {
    id: 1,
    values: [{
      symbol: 'R',
      value: false
    }, {
        symbol: 'S',
        value: false
      }]
  },
  {
    id: 2,
    values: [{
      symbol: 'R',
      value: true
    }, {
        symbol: 'S',
        value: false
      }]
  },
  {
    id: 3,
    values: [{
      symbol: 'R',
      value: false
    }, {
        symbol: 'S',
        value: true
      }]
  },
  {
    id: 4,
    values: [{
      symbol: 'R',
      value: true
    }, {
        symbol: 'S',
        value: true
      }]
  }
]

exports.premises = [
  {
    kind: StatementKind.AND,
    a: {
      kind: StatementKind.PROPOSITION,
      proposition: 'P'
    },
    b: {
      kind: StatementKind.PROPOSITION,
      proposition: 'Q'
    }
  },
  {
    kind: StatementKind.IMPLIES,
    a: {
      kind: StatementKind.PROPOSITION,
      proposition: 'S'
    },
    b: {
      kind: StatementKind.PROPOSITION,
      proposition: 'R'
    }
  }, {
    kind: StatementKind.IMPLIES,
    a: {
      kind: StatementKind.PROPOSITION,
      proposition: 'P'
    },
    b: {
      kind: StatementKind.NEGATION,
      a: {
        kind: StatementKind.AND,
        a: {
          kind: StatementKind.PROPOSITION,
          proposition: 'R'
        },
        b: {
          kind: StatementKind.PROPOSITION,
          proposition: 'Q'
        }
      }
    }
  }
]
