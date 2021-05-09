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
    ]
  });

  Prism.languages.insertBefore('lucy', 'keyword', {
    'function': [
      {
        pattern: /\b(?:action|assign|invoke|delay|guard|send|spawn|on)(?=\()\b/
      }
    ],
    'number': [
      {
        pattern: /\b([0-9]+(ms|s|m)*)\b/
      }
    ],
    'symbol': [
      {
        pattern: /(@(entry|exit))/
      },
      {
        pattern: /(^|[^:]):[a-zA-Z_]\w*(?:[?!]|\b)/,
			  lookbehind: true
      }
    ],
    'variable': /[@$]+[a-zA-Z_]\w*(?:[?!]|\b)/,
  });

  Prism.languages.lucy['class-name'][0].pattern = /(\b(?:state)\s+)[\w.\\]+/;
}

module.exports = addLucy;