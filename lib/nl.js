// See https://onzetaal.nl/taaladvies/getallen-uitschrijven
module.exports = {
	ones: ['nul', 'een', 'twee', 'drie', 'vier', 'vijf', 'zes', 'zeven', 'acht', 'negen', 'tien', 'elf', 'twaalf', 'dertien', 'veertien', 'vijftien', 'zestien', 'zeventien', 'achttien', 'negentien'],
	tens: ['', 'tien', '+twintig', '+dertig', '+veertig', '+vijftig', '+zestig', '+zeventig', '+tachtig', '+negentig'],
	groupNamesSingular: ['een', 'honderd', 'duizend ', 'één miljoen ', 'één miljard '],
	groupNamesPlural: ['', 'honderd', 'duizend ', ' miljoen ', ' miljard '],
	groupSeparator: '',
	space: '',
	reverseOnes: true,
	postTransform: function(str){
		str = str.replace(/^\+/g,'');
		str = str.replace(/e\+/,'eën');
		str = str.replace(/\+/,'en');
		str = str.replace(/(^|\s)een(\s|$)/, '$1één$2');
		return str;
	}
};
