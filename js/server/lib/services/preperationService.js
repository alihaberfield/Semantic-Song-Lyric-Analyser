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
    var sem = require('/MarkLogic/semantics.xqy')
    premises.forEach(function(premise) {
      let str = processStatement(premise)
      sem.rdfInsert(
        sem.triple(
          sem.iri(`http://logic/${str}`),
          sem.iri('http://logic/is'),
          sem.iri(`http://logic/true`)))
      xdmp.documentInsert(`/premises/${str}`, premise)
    })

    function processStatement(statement) {
      let str = toString(statement)
      switch (statement.kind) {
        case StatementKind.NEGATION:
          sem.rdfInsert(
            sem.triple(
              sem.iri(`http://logic/${str}`),
              sem.iri('http://logic/not'),
              sem.iri(`http://logic/${processStatement(statement.a) }`)))
          break
        case StatementKind.AND:
          sem.rdfInsert(
            sem.triple(
              sem.iri(`http://logic/${str}`),
              sem.iri('http://logic/and'),
              sem.iri(`http://logic/${processStatement(statement.a) }`)))
          sem.rdfInsert(
            sem.triple(
              sem.iri(`http://logic/${str}`),
              sem.iri('http://logic/and'),
              sem.iri(`http://logic/${processStatement(statement.b) }`)))
          break
        case StatementKind.OR:
          sem.rdfInsert(
            sem.triple(
              sem.iri(`http://logic/${str}`),
              sem.iri('http://logic/or'),
              sem.iri(`http://logic/${processStatement(statement.a) }`)))
          sem.rdfInsert(
            sem.triple(
              sem.iri(`http://logic/${str}`),
              sem.iri('http://logic/or'),
              sem.iri(`http://logic/${processStatement(statement.b) }`)))
          break
        case StatementKind.IMPLIES:
          sem.rdfInsert(
            sem.triple(
              sem.iri(`http://logic/${str}`),
              sem.iri('http://logic/leftImplies'),
              sem.iri(`http://logic/${processStatement(statement.a) }`)))
          sem.rdfInsert(
            sem.triple(
              sem.iri(`http://logic/${str}`),
              sem.iri('http://logic/rightImplies'),
              sem.iri(`http://logic/${processStatement(statement.b) }`)))
          break
      }
      return str
    }
    return resolve(true)
  }
}
