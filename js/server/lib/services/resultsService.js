import {AbstractMLService, Doc, resolve} from 'markscript-uservices'
import {Counter} from 'markscript-core'

export class ResultsService extends AbstractMLService {
  updateResults() {
    return this.observableFactory().map(function(value) {
      return [parseInt(value.uri.substring('/guesses/'.length)), value.content.root.count]
    })
  }

  getResults() {
    let docs = xdmp.directory('/guesses/')
    let results = {}
    while (true) {
      var item = docs.next()
      if (item.done) {
        break
      }
      results[parseInt(item.value.baseURI.substring('/guesses/'.length))] = item.value.root.count
    }

    return resolve(results)
  }
}
