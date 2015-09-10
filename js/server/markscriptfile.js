var UServicesPlugin = require('markscript-uservices').UServicesPlugin
var logicRuleSet = require('./lib/logicRuleSet').logicRuleSet
var path = require('path')
var databaseModel = require('./lib/databaseModel').databaseModel
var test = require('./test/test').test
var loadData = require('./example/loadData').loadData

var COMMON = {
  appName: 'ml-nordic-entry',
  ml: {
    port: 8009,
    host: 'alis-dev-machine.local',
    user: 'admin',
    password: 'admin'
  },
  koa: {
    host: 'localhost',
    port: 8080
  }
}

exports.buildOptions = {
  database: {
    host: COMMON.ml.host,
    httpPort: COMMON.ml.port,
    adminPort: 8001,
    configPort: 8002,
    user: COMMON.ml.user,
    password: COMMON.ml.password,
    modules: './lib/**/*.js',
    ruleSets: [logicRuleSet()],
    model: databaseModel(COMMON)
  },
  middle: {
    host: COMMON.koa.host,
    port: COMMON.koa.port
  },
  plugins: {
    uservices: [UServicesPlugin, {}]
  }
}

exports.runOptions = {
  database: {
    databaseName: COMMON.appName + '-content',
    host: COMMON.ml.host,
    port: COMMON.ml.port,
    user: COMMON.ml.user,
    password: COMMON.ml.password
  }, middle: {
    host: COMMON.koa.host,
    port: COMMON.koa.port,
    fileServerPath: path.join('../client')
  }
}

exports.tasks = {
  test: test,
  loadData: loadData
}
