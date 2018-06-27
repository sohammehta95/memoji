# Memoji
Memoji is an NPM library to help you find your perfect memoji in ASCII Art

## Installation

You need to run the following command to install memoji

`npm install memoji --save`


## Including in your index.js

```bash
var memoji = require('memoji');
```

## Get the Starter memoji help
```bash
memoji.help();
```
## Example Memify

The memoji can have either gender: male or female and spectacles: true or false.
```bash
var person = {
	gender : male,
	spectacles: true
}

console.log( memoji.memify(person) );
```

##Disclaimer

This package is developed as a fun learning project and to help users get their personal memojis. If you find any copyrighted content then please mail the authors and the package will be immidiately taken down. 