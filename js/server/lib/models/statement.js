var StatementKind = {
  PROPOSITION: 0,
  NEGATION: 1,
  AND: 2,
  OR: 3,
  IMPLIES: 4
}
exports.StatementKind = StatementKind

var toString = function(statement) {
  switch (statement.kind) {
    case StatementKind.PROPOSITION:
      return statement.proposition
    case StatementKind.NEGATION:
      return 'NOT_' + toString(statement.a)
    case StatementKind.AND:
      return 'AND_' + toString(statement.a) + '_' + toString(statement.b)
    case StatementKind.OR:
      return 'OR_' + toString(statement.a) + '_' + toString(statement.b)
    case StatementKind.IMPLIES:
      return 'IMPLIES_' + toString(statement.a) + '_' + toString(statement.b)
  }
}

exports.toString = toString
