# spell-it
Small Node.js module that writes out numbers as words in:

 - English
 - French
 - Indian English
 - Indonesian
 - Danish
 - Dutch

## Usage
Install locally:
```
npm install spell-it
```
or globally:
```
npm install spell-it -g
```

From node.js:
```js
var spell = require('spell-it') ('fr');
console.log(spell(42));
// quarante-deux
```
From the shell:
```sh-session
$ spell-it 42 en
forty-two
```

## License
MIT
