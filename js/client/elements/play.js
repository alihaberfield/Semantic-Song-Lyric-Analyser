var StatementKind = {
  PROPOSITION: 0,
  NEGATION: 1,
  AND: 2,
  OR: 3,
  IMPLIES: 4
}

Polymer({
  is: 'marklogic-play',
  properties: {
    answers: Array,

    premises: Array,

    selectedAnswer: Object,

    isCorrect: Boolean,

    formattedPremises: {
      type: Array,
      readOnly: true,
      notify: true
    },

    formattedAnswers: {
      type: Array,
      readOnly: true,
      notify: true
    },

    guess: {
      type: Array,
      readOnly: true,
      notify: true
    },

    answeredCorrectly: {
      type: Boolean,
      readOnly: true,
      notify: true
    },

    hasAnswered: {
      type: Boolean,
      readOnly: true,
      notify: true
    }
  },
  observers: [
    'onAnswers(answers)',
    'onPremises(premises)',
    'onIsCorrect(isCorrect)'
  ],
  onAnswers: function() {
    this.notifyPath('formattedAnswers', formatAnswers(this.answers))
  },
  onPremises: function() {
    function formatStatement(statement) {
      return "Never gonna " + statement.a.proposition;
    }

    this.notifyPath('formattedPremises', this.premises.map(formatStatement))
  },
  onIsCorrect: function() {
    if (this.isCorrect) {
      this.notifyPath('answeredCorrectly', true)
      this.notifyPath('answeredIncorrectly', false)
    } else {
      this.notifyPath('answeredIncorrectly', true)
      this.notifyPath('answeredCorrectly', false)
    }
  },
  submit: function() {
    this.notifyPath('hasAnswered', true)
    this.notifyPath('guess', [this.selectedAnswer.id])
  }
})
