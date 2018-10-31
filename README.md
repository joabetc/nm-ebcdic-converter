# nm-ebcdic-converter <img src="https://img.shields.io/badge/Project%20Type-Product-brightgreen.svg" /> <img src="https://img.shields.io/badge/Project%20Stage-Development-yellowgreen.svg" />
A simple Node module for converting EBCDIC char to ASCII char and vice-versa.

## Technologies/Languages

* [NodeJS](https://nodejs.org/)
* [ES2015/ES6](http://es6-features.org/) 
* [Babel](http://babeljs.io/)
* [Webpack](https://webpack.js.org/)
* [Mocha](https://mochajs.org/)

# Usage

For this version use `require`.
`import` will be provided in the future.

Sample:
````
const EBCDIC = require('nm-ebcdic-converter');

var ascii = EBCDIC.toASCII('C6');
````

Or if you prefer you can play around with [StackBlitz](https://stackblitz.com/edit/nm-ebcdic-converter)