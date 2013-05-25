var expect = require('chai').expect;
var spellFactory = require('spell-it');

describe('spell-it in Danish', function(){
	var spell;

	before(function(){
		spell = spellFactory('da');
	});

	it('should return "nul" when input is 0', function(){
		var output = spell(0);
		expect(output).to.equal('nul');
	});

	it('should return "fem" if input is 5', function(){
		var output = spell(5);
		expect(output).to.equal('fem');
	});

	it('should return "sytten" if input is 17', function(){
		var output = spell(17);
		expect(output).to.equal('sytten');
	});

	it('should return "tyve" if input is 20', function(){
		var output = spell(20);
		expect(output).to.equal('tyve');
	});

	it('should return "toti to" if input is 22', function(){
		var output = spell(22);
		expect(output).to.equal('toti to');
	});

	it('should return "treti" if input is 30', function(){
		var output = spell(30);
		expect(output).to.equal('treti');
	});

	it('should return "syvti tre" if input is 73', function(){
		var output = spell(73);
		expect(output).to.equal('syvti tre');
	});

	it('should return "et hundrede" if input is 100', function(){
		var output = spell(100);
		expect(output).to.equal('et hundrede');
	});

	it('should return "et hundrede og sytten" if input is 117', function(){
		var output = spell(117);
		expect(output).to.equal('et hundrede og sytten');
	});

	it('should return "fire tusind og et" if input is 4001', function(){
		var output = spell(4001);
		expect(output).to.equal('fire tusind og et');
	});

	it('should return "en million og to hundrede tusind og et" if input is 1200001', function(){
		var output = spell(1200001);
		expect(output).to.equal('en million og to hundrede tusind og et');
	});

	it('handles plural names', function(){
		var output = spell(4000000);
		expect(output).to.equal('fire millioner');
	});

	it('should throw an error if input is not a number', function(){
		expect(function(){spell('not-a-number');}).to.Throw(Error);
	});

	it('handles large amounts', function(){
		var output = spell(400000000000);
		expect(output).to.equal('fire hundrede milliarder');
	});

});
