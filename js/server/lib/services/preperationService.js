import {StatementKind, toString} from '../models/statement'
import {resolve, METHOD} from 'markscript-uservices'
import {createCounter, deleteAll, deleteGraph} from 'markscript-core'

export class PreperationService {
  clear() {
    var sem = require('/MarkLogic/semantics.xqy')
    deleteAll('/answers')
    deleteAll('/premises')
    deleteAll('/guesses')
    deleteGraph()
    return resolve(true)
  }

  loadAnswers(answers) {
    answers.forEach(function(answer) {
      xdmp.documentInsert(`/answers/${answer.id}`, answer)
      createCounter(`/guesses/${answer.id}`)
    })
    return resolve(true)
  }

  loadPremises(premises) {
    premises.forEach(function(premise) {
      let str = premise.kind
      xdmp.documentInsert(`/premises/${str}`, premise)
    })

    function processStatement(statement) {
      let str = "Never gonna " + toString(statement)
      return str
    }
    return resolve(true)
  }
}
