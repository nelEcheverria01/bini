# bini
this is a simple package that converts a string to its binary equivalent

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![License](https://img.shields.io/badge/license-MIT-green)](./LICENSE)
![NPM Version](https://img.shields.io/npm/v/%40nelson_echeverria%2Fbini)

# motivation
i have been learning about buffers and streams in Nodejs, and part of what I saw was understanding how Nodejs handles binary data for transfer between computers, and it occurred to me to put into practice what I learned about binary data and I decided to create a silly package with it which one to play

# installation
to start using bini, you can install it from npm:

```bash
npm i @nelson_echeverria/bini
```

# usage
**get started:** create index.js and call bini, like here:

```js
const bini = require('@nelson_echeverria/bini')

console.log(bini('nelson')) // output: '01101110 01100101 01101100 01110011 01101111 01101110'
```

# license
**bini** is developed under the MIT license