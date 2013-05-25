var t;

function isNumber(obj) {
	return toString.call(obj) == '[object Number]';
}

// throw away any decimals
function group(amount) {
	var str = amount.toString().split('.')[0];
	var groups = [];
	var place = 0;
	for (var i=str.length; i--; ){
		var item=str[i];
		if(place <= 1){
			// tens
			groups[0] = item + (groups[0] || '');
		} else if(place == 2){
			// hundreds
			groups[1] = item;
		} else if(place <= 5){
			// thousands
			groups[2] = item + (groups[2] || '');
		} else if(place <= 8){
			// millions
			groups[3] = item + (groups[3] || '');
		} else {
			//billions
			groups[4] = item + (groups[4] || '');
		}

		place++;
	}
	return groups;
}

function amountToText(amount) {
	if(!isNumber(amount)) {
		throw new Error('Input is not a number');
	}
	if(t.ones[amount] != null) {
		return t.ones[amount];
	}
	if(amount <= 99) {
		var str = amount.toString();
		return (t.tens[str[0]] + ' ' + t.ones[str[1]]).trim();
	}

	var groups = group(amount);
	var output = '';
	for(var i = 0; i < groups.length; i++){
		var num = parseInt(groups[i], 10);
		if(num !== 0) {
			var sep = output ? t.groupSeparator : ' ';
			var groupName = num > 1 ? amountToText(num) + ' ' + t.groupNamesPlural[i] : t.groupNamesSingular[i];
			output =  groupName + sep + output;
		}
	}
	return output.trim();
}

module.exports = function(texts){
	t = texts;
	return amountToText;
};

//