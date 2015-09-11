function formatAnswers(answers) {
  return answers.map(function (answer) {
    return {
      id: answer.id, title: answer.values.reduce(function (previousValue, currentValue) {
        return "Never gonna " + currentValue.symbol
      }, '')
    }
  })
}
