exports.clear = function(server) {
  var preperationService = server.getService('preperation')
  return preperationService.clear()
}

exports.loadAnswers = function(server, answers) {
  var preperationService = server.getService('preperation')
  return preperationService.loadAnswers(answers)
}

exports.loadPremises = function(server, premises) {
  var preperationService = server.getService('preperation')
  return preperationService.loadPremises(premises)
}

exports.getAnswers = function(server) {
  var playService = server.getService('play')
  return playService.getPossibleAnswers()
}

exports.submitAnswer = function(server, answerId) {
  var playService = server.getService('play')
  return playService.submitAnswer(answerId)
}

exports.getPremises = function(server) {
  var playService = server.getService('play')
  return playService.getPremises()
}

exports.getResults = function(server) {
  var resultsService = server.getService('results')
  return resultsService.getResults()
}

exports.updateResults = function(server) {
  var resultsService = server.getService('results')
  return resultsService.updateResults()
}
