function addLucy(Prism) {
  Prism.languages.lucy = Prism.languages.extend('clike', {
    'class-name': [
      Prism.languages.clike['class-name']
    ],

    'keyword': [
      {
        pattern: /\b(?:state|context|var|final|initial|machine)\b/,
        lookbehind: true
      },
      {
        pattern: /\b(?:use)\b/,
        lookbehind: true
      },
      {
        pattern: /\b(?:action|guard)\s+(?!\()\b/,
        lookbehind: true
      }
    ],
    'function': [
      {
        pattern: /\b(?:invoke)\b/
      },
      {
        pattern: /\b(?:assign|delay|guard|action)\(\b/
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