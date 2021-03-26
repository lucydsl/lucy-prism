function addLucy(Prism) {
  Prism.languages.lucy = Prism.languages.extend('clike', {
    'class-name': [
      Prism.languages.clike['class-name']
    ],

    'keyword': [
      {
        pattern: /\b(?:state|context|var|action|guard|final|initial|machine)\b/,
        lookbehind: true
      },
      {
        pattern: /\b(?:use)\b/,
        lookbehind: true
      }
    ],
    'function': [
      {
        pattern: /\b(?:assign|invoke|delay)\b/
      }
    ],
    'number': [
      {
        pattern: /\b([0-9]+(ms|s|m)*)\b/
      }
    ]
  });

  Prism.languages.lucy['class-name'][0].pattern = /(\b(?:state)\s+)[\w.\\]+/;
}

module.exports = addLucy;