var data = require('../example/data')
var s = require('../server')

function printValue(answerId) {
  return function(value) {
    console.log('Submitted answerId ' + answerId + ': ' + value)
    return
  }
}

exports.test = function(server) {
  return s.clear(server).then(function() {
    return s.loadPremises(server, data.premises)
  }).then(function() {
    return s.loadAnswers(server, data.answers)
  }).then(function() {
    s.updateResults(server).subscribe({
      onNext: function(result) {
        console.log('Updated result:')
        console.log(JSON.stringify(result))
      }, onError: function(e) {
        console.log(e)
        console.log(e.stack)
      }, onCompleted: function() {
        throw 'UpdateResults Should never complete'
      }
    })

    return s.getPremises(server)
  }).then(function(premises) {
    console.log('Got Premises:')
    console.log(JSON.stringify(premises))

    return s.getAnswers(server)
  }).then(function(answers) {
    console.log('Got Answers:')
    console.log(JSON.stringify(answers))

    return Promise.all([
      s.submitAnswer(server, 1).then(printValue(1)),
      s.submitAnswer(server, 2).then(printValue(1)),
      s.submitAnswer(server, 3).then(printValue(1)),
      s.submitAnswer(server, 4).then(printValue(1))
    ])
  }).then(function() {
    return s.getResults(server).then(function(results) {
      console.log('Got Results:')
      console.log(JSON.stringify(results))
      return
    })
  }).then(function() {
    process.exit()
  }).catch(function(e) {
    console.log(e)
    console.log(e.stack)
    process.exit()
  })
}
