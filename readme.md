# @lucy/prism

This is a Prism plugin for Lucy syntax highlighting.

## Usage

This package exports a function that takes a `Prism` object. Typical usage looks like:

```js
const Prism = require('prismjs');
const addLucy = require('@lucy/prism');

addLucy(Prism);

// Now use Prism as normal.
```

## License

BSD-2-Clause