// http://en.wiktionary.org/wiki/Appendix:French_numbers

var ones = ['zéro', 'et-un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf', 'dix', 'onze', 'douze', 'treize', 'quatorze', 'quinze', 'seize'];

ones[71] = "soixante-et-onze";
ones[72] = "soixante-douze";
ones[73] = "soixante-treize";
ones[74] = "soixante-quatorze";
ones[75] = "soixante-quinze";
ones[76] = "soixante-seize";

ones[80] = 'quatre-vingts';
ones[81] = 'quatre-vingt-un';

ones[91] = 'quatre-vingt-onze';
ones[92] = 'quatre-vingt-douze';
ones[93] = 'quatre-vingt-treize';
ones[94] = 'quatre-vingt-quatorze';
ones[95] = 'quatre-vingt-quinze';
ones[96] = 'quatre-vingt-seize';

module.exports = {
	ones: ones,
	tens: ['', 'dix', 'vingt', 'trente', 'quarante', 'cinquante', 'soixante', 'soixante-dix', 'quatre-vingt', 'quatre-vingt-dix'],
	groupNamesSingular: ['un', 'cent', 'mille', 'un-million', 'un-milliard'],
	groupNamesPlural: ['', 'cent', 'mille', 'millions', 'milliards'],
	groupSeparator: '-',
	space: '-',
	postTransform: function(str){
		// when cent is at the end of the number, it takes an s, but when it's followed by another number, the s is dropped.
		str = str.replace(/-cent$/,'-cents');
		// fix 1
		str = str.replace(/^et-un$/,'un');
		return str;
	}
};
