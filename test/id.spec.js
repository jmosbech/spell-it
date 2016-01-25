var expect = require('chai').expect;
var spellFactory = require('spell-it');

describe('spell-it in Bahasa', function(){
	var spell;

	before(function(){
		spell = spellFactory('id');
	});

	it('should return "kosong" when input is 0', function(){
		var output = spell(0);
		expect(output).to.equal('kosong');
	});

	it('should return "lima" if input is 5', function(){
		var output = spell(5);
		expect(output).to.equal('lima');
	});

	it('should return "tujuh belas" if input is 17', function(){
		var output = spell(17);
		expect(output).to.equal('tujuh belas');
	});

	it('should hyphenate compound numbers from dua puluh satu through sembilan puluh sembilan', function(){
		var output = spell(73);
		expect(output).to.equal('tujuh puluh tiga');
	});

	it('should return "seratus" if input is 100', function(){
		var output = spell(100);
		expect(output).to.equal('seratus');
	});

	it('should return "seratus tujuh belas" if input is 117', function(){
		var output = spell(117);
		expect(output).to.equal('seratus tujuh belas');
	});

	it('should return "empat ribu satu" if input is 4001', function(){
		var output = spell(4001);
		expect(output).to.equal('empat ribu satu');
	});

	it('should return "satu juta dua ratus ribu satu" if input is 1200001', function(){
		var output = spell(1200001);
		expect(output).to.equal('satu juta dua ratus ribu satu');
	});

});
