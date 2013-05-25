module.exports = {
	ones: ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine','ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sizteen', 'seventeen', 'eighteen', 'ninteen'],
	tens: ['', 'ten', 'twenty-', 'thirty-', 'fourty-', 'fifty-', 'sixty-', 'seventy-', 'eighty-', 'ninety-'],
	groupNamesSingular: ['one', 'one hundred', 'one thousand', 'one million', 'one billion'],
	groupNamesPlural: ['', 'hundred', 'thousand', 'million', 'billion'],
	groupSeparator: ' ',
	space: ' ',
	postTransform: function(str){
		// fix hyphens
		str = str.replace(/- /g,'-');
		str = str.replace(/-$/,'');
		return str;
	}
};
