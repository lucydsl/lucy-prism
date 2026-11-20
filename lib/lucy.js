function addLucy(Prism) {
  Prism.languages.lucy = Prism.languages.extend('clike', {
    'class-name': [
      Prism.languages.clike['class-name'],
      // The type in `event name(Type)` and `input name(Type)`.
      {
        pattern: /(\b(?:event|input)\s+[a-zA-Z_]\w*\s*\(\s*)[a-zA-Z_]\w*(?=\s*\))/,
        lookbehind: true
      }
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
      // `event name`, but not an event called event (`event => idle`).
      {
        pattern: /\bevent(?=\s+[a-zA-Z_])/
      },
      // `input name`, likewise.
      {
        pattern: /\binput(?=\s+[a-zA-Z_])/
      },
      // Values, in a spawn's block and as the data of a send: event.data,
      // and self and parent after the = or the comma (and parent in
      // send(parent, ...)). An event or a state called self or parent is
      // neither.
      {
        pattern: /\bevent(?=\.data\b)/
      },
      {
        pattern: /([=(]\s*)(?:self|parent)\b/,
        lookbehind: true
      },
      // The last argument of a send, not a name in a use list.
      {
        pattern: /(,\s*)(?:self|parent)(?=\s*\))/,
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
        pattern: /\b(?:action|assign|append|remove|invoke|delay|guard|send|spawn|on)(?=\()\b/
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