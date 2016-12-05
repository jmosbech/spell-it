module.exports = {
	ones: ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine','ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
	tens: ['', 'ten', 'twenty-', 'thirty-', 'forty-', 'fifty-', 'sixty-', 'seventy-', 'eighty-', 'ninety-'],
	groupNamesSingular: ['one', 'one hundred', 'one thousand', 'one lakh', 'one crore'],
	groupNamesPlural: ['', 'hundred', 'thousand', 'lakh', 'crore'],
	groupPowers: [0, 2, 3, 5, 7],
	groupSeparator: ' ',
	space: ' ',
	lang: 'in',
	postTransform: function(str){
		// fix hyphens
		str = str.replace(/- /g,'-');
		str = str.replace(/-$/,'');
		return str;
	}
};
