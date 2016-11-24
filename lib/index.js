	var langs = {
	en: require('./en'),
	id: require('./id'),
	da: require('./da'),
	fr: require('./fr'), 
	in: require('./in'),
	nl: require('./nl')
};


function isNumber(obj) {
	return obj != null && !isNaN(obj) && toString.call(obj) == '[object Number]';
}

function trim(input, space) {
	if (space === '') {
		return input;
	}

	var trimmer = new RegExp('^' + space + '+|' + space + '+$', 'g');
	return input.replace(trimmer, '');
}

function group(amount) {
	var str = amount.toString();
	if(t.lang !== 'in'){

		return [
			str.slice(-2), // tens & ones
			str.slice(-3,-2), // hundreds
			str.slice(-6, -3), // thousands
			str.slice(-9, -6), // millions
			str.slice(0, -9) // billions
		];
	}else{

		return [
			str.slice(-2),		//tens &ones 
			str.slice(-3,-2), 	//hundreds
			str.slice(-5,-3), 	//thousands
			str.slice(-7,-5), 	//lakhs
			str.slice(0,-7)		//crores

		];	
	}
	
}

function amountToText(amount) {
	if (t.ones[amount]) {
		return t.ones[amount];
	}
	// this part is a bit iffy
	if (amount <= 99) {
		var str = amount.toString();
		var ret = t.tens[str[0]];
		if (str[1] !== '0') {
			ret = t.reverseOnes ? t.ones[str[1]] + t.space + ret :
				ret + t.space + t.ones[str[1]];
		}
		return trim(ret, t.space);
	}

	var groups = group(amount);
	var output = '';
	for (var i = 0; i < groups.length; i++) {
		var num = parseInt(groups[i], 10);
		if (num > 0) {
			var sep = output ? t.groupSeparator : '';
			var groupName = num > 1 ?
				amountToText(num) + t.space + t.groupNamesPlural[i] :
				t.groupNamesSingular[i];
			output =  groupName + sep + output;
		}
	}
	return trim(output, t.space);
}

function wrap(amount) {
	if (!isNumber(amount)) {
		throw new Error('Input is not a number');
	}
	amount = Math.floor(amount); // discard decimals
	var res = amountToText(amount);
	if (t.postTransform) {
		res = t.postTransform(res);
	}
	return res;
}

module.exports = function(lang) {
	t = langs[lang || 'en'];
	return wrap;
};


