var expect = require('chai').expect;
var spellFactory = require('../lib/index.js');

describe('spell-it in Dutch', function(){
	var spell;

	before(function(){
		spell = spellFactory('nl');
	});

	it('should return "nul" when input is 0', function(){
		var output = spell(0);
		expect(output).to.equal('nul');
	});

	it('should return "vijf" if input is 5', function(){
		var output = spell(5);
		expect(output).to.equal('vijf');
	});

	it('should return "zeventien" if input is 17', function(){
		var output = spell(17);
		expect(output).to.equal('zeventien');
	});

	it('should combine compound numbers from twenty-one through ninety-nine', function(){
		var output = spell(21);
		expect(output).to.equal('éénentwintig');
	});

	it('should add a dieresis for compound numbers', function(){
		var output = spell(73);
		expect(output).to.equal('drieënzeventig');
	});

	it('should return "honderd if input is 100', function(){
		var output = spell(100);
		expect(output).to.equal('honderd');
	});

	it('should return "honderdzeventien" if input is 117', function(){
		var output = spell(117);
		expect(output).to.equal('honderdzeventien');
	});

	it('should return "vierduizend één" if input is 4001', function(){
		var output = spell(4001);
		expect(output).to.equal('vierduizend één');
	});

	it('should return "driehonderdtwaalfduizend vijfhonderdzevenenzeventig" if input is 312577', function(){
		var output = spell(312577);
		expect(output).to.equal('driehonderdtwaalfduizend vijfhonderdzevenenzeventig');
	});

	it('should return "één miljoen tweehonderdduizend één" if input is 1200001', function(){
		var output = spell(1200001);
		expect(output).to.equal('één miljoen tweehonderdduizend één');
	});

	it('should return "één miljard vijf miljoen tweehonderdduizend één" if input is 1005200001', function(){
		var output = spell(1005200001);
		expect(output).to.equal('één miljard vijf miljoen tweehonderdduizend één');
	});

	it('should return "vijf miljard vijf miljoen tweehonderdduizend één" if input is 5005200001', function(){
		var output = spell(5005200001);
		expect(output).to.equal('vijf miljard vijf miljoen tweehonderdduizend één');
	});
});
