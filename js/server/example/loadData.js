var s = require('../server')
var data = require('./data')

exports.loadData = function(server) {
  return s.clear(server).then(function() {
    return s.loadPremises(server, data.premises)
  }).then(function() {
    return s.loadAnswers(server, data.answers)
  }).then(function() {
    process.exit()
  }).catch(function(e) {
    console.log(e)
    console.log(e.stack)
    process.exit()
  })
}
