import {StatementKind, toString} from '../models/statement'
import {resolve, resolveIterator, METHOD} from 'markscript-uservices'
import {variable, prefix, select} from 'speckle'
import {incrementCounter} from 'markscript-core'

export class PlayService {
  getPremises() {
    return resolveIterator(xdmp.directory('/premises/'))
  }

  getPossibleAnswers() {
    return resolveIterator(xdmp.directory('/answers/'))
  }

  findValue(symbol) {
    return resolve(this._findValue(symbol))
  }

  submitAnswer(answerId) {
    incrementCounter('/guesses/' + answerId)

    let guess = cts.doc('/answers/' + answerId).root.toObject()

    if (answerId == 2) {
      return resolve(true)
    } else {
      return resolve(false)
    }
  }

  _findValue(symbol) {
    let value = variable('value')
    let sem = require('/MarkLogic/semantics.xqy')
    let logic = prefix('l', 'http://logic/')
    let queryResult = sem.sparql(select(value).where(logic.uri(symbol), logic.uri('is'), value).toSparql())
    if (queryResult.count !== 1) {
      return null
    } else {
      return queryResult.next().value.value.toString() === 'http://logic/true'
    }
  }
}
