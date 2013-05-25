// http://www.french-linguistics.co.uk/tutorials/numbers/
// http://french.about.com/od/vocabulary/ss/numbers_5.htm

var expect = require('chai').expect;
var spellFactory = require('spell-it');

describe('spell-it in French', function(){
	var spell;

	before(function(){
		spell = spellFactory('fr');
	});

	it('should return "un" when input is 1', function(){
		var output = spell(1);
		expect(output).to.equal('un');
	});

	it('should handle multiples of ten', function(){
		var output = spell(30);
		expect(output).to.equal('trente');
	});

	it('should handle the "et-un" suffix', function(){
		var output = spell(31);
		expect(output).to.equal('trente-et-un');
	});

	it('should return "trente-six" when input is 36', function(){
		var output = spell(36);
		expect(output).to.equal('trente-six');
	});

	it('should return "quatre-vingts" when input is 180', function(){
		var output = spell(80);
		expect(output).to.equal('quatre-vingts');
	});

	it('should return "quatre-vingt-douze" when input is 92', function(){
		var output = spell(92);
		expect(output).to.equal('quatre-vingt-douze');
	});

	it('should return "cent" when input is 100', function(){
		var output = spell(100);
		expect(output).to.equal('cent');
	});

	it('should handle multiples of hundred', function(){
		var output = spell(200);
		expect(output).to.equal('deux-cents');
	});

	it('should return "quatre-vingt-deux" when input is 182', function(){
		var output = spell(182);
		expect(output).to.equal('cent-quatre-vingt-deux');
	});

	it('should return "deux cent deux" when input is 202', function(){
		var output = spell(202);
		expect(output).to.equal('deux-cent-deux');
	});

	it('should handle multiples of thousand', function(){
		var output = spell(2000);
		expect(output).to.equal('deux-mille');
	});

	it('should return "trois mille soixante-dix-neuf" when input is 3079', function(){
		var output = spell(3079);
		expect(output).to.equal('trois-mille-soixante-dix-neuf');
	});

	it('should handle one million', function(){
		var output = spell(1000000);
		expect(output).to.equal('un-million');
	});

	it('should return "trois millions huit mille" when input is 3008001', function(){
		var output = spell(3008001);
		expect(output).to.equal('trois-millions-huit-mille-un');
	});

	it('should return "trois millions huit cent mille cent sept" when input is 3800107', function(){
		var output = spell(3800107);
		expect(output).to.equal('trois-millions-huit-cent-mille-cent-sept');
	});

	it('should not add more than one spacer between groups', function(){
		var output = spell(560000);
		expect(output).to.equal('cinq-cent-soixante-mille');
	});


});
