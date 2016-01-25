var expect = require('chai').expect;
var spellFactory = require('../lib/index.js');

describe('spell-it in English', function(){
	var spell;

	before(function(){
		spell = spellFactory('en');
	});

	it('should return "zero" when input is 0', function(){
		var output = spell(0);
		expect(output).to.equal('zero');
	});

	it('should return "five" if input is 5', function(){
		var output = spell(5);
		expect(output).to.equal('five');
	});

	it('should return "seventeen" if input is 17', function(){
		var output = spell(17);
		expect(output).to.equal('seventeen');
	});

	it('should hyphenate compound numbers from twenty-one through ninety-nine', function(){
		var output = spell(73);
		expect(output).to.equal('seventy-three');
	});

	it('should return "one hundred" if input is 100', function(){
		var output = spell(100);
		expect(output).to.equal('one hundred');
	});

	it('should return "one hundred seventeen" if input is 117', function(){
		var output = spell(117);
		expect(output).to.equal('one hundred seventeen');
	});

	it('should return "four thousand one" if input is 4001', function(){
		var output = spell(4001);
		expect(output).to.equal('four thousand one');
	});

	it('should return "one million two hundred thousand one" if input is 1200001', function(){
		var output = spell(1200001);
		expect(output).to.equal('one million two hundred thousand one');
	});

});
