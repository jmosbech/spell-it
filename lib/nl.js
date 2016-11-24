// See https://onzetaal.nl/taaladvies/getallen-uitschrijven
module.exports = {
	ones: ['nul', 'één', 'twee', 'drie', 'vier', 'vijf', 'zes', 'zeven', 'acht', 'negen', 'tien', 'elf', 'twaalf', 'dertien', 'veertien', 'vijftien', 'zestien', 'zeventien', 'achttien', 'negentien'],
	tens: ['', 'tien', '+twintig', '+dertig', '+veertig', '+vijftig', '+zestig', '+zeventig', '+tachtig', '+negentig'],
	groupNamesSingular: ['één', 'honderd', 'duizend ', 'één miljoen ', 'één miljard '],
	groupNamesPlural: ['', 'honderd', 'duizend ', ' miljoen ', ' miljard '],
	groupSeparator: '',
	space: '',
	reverseOnes: true,
	postTransform: function(str){
		str = str.replace(/^\+/g,'');
		str = str.replace(/e\+/,'eën');
		str = str.replace(/\+/,'en');
		return str;
	}
};
