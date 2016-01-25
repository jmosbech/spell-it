module.exports = {
	ones: ['kosong', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan','sepuluh', 'sebelas', 'dua belas', 'tiga belas', 'empat belas', 'lima belas', 'enam belas', 'tujuh belas', 'delapan belas', 'sembilan belas'],
	tens: ['', 'sepuluh','dua puluh','tiga puluh','empat puluh','lima puluh','enam puluh','tujuh puluh','delapan puluh','sembilan puluh'],
	groupNamesSingular: ['satu', 'seratus', 'seribu', 'satu juta', 'satu milyar'],
	groupNamesPlural: ['', 'ratus', 'ribu', 'juta', 'milyar'],
	groupSeparator: ' ',
	space: ' ',
	postTransform: function(str){
		str = str.replace(/seribu\ milyar/g,'satu triliun');
		str = str.replace(/ribu\ milyar/g,'triliun');
		return str;
	}
};
