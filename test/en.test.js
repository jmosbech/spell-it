var expect = require('chai').expect;
var en = require('../lib/en.js');
var amountToTextFactory = require('../lib/amountToText');

describe('amountToText in English', function(){
	var amountToText;

	before(function(){
		amountToText = amountToTextFactory(en);
	});

	it('should return "zero" when input is 0', function(){
		var output = amountToText(0);
		expect(output).to.equal('zero');
	});

	it('should return "five" if input is 5', function(){
		var output = amountToText(5);
		expect(output).to.equal('five');
	});

	it('should return "seventeen" if input is 17', function(){
		var output = amountToText(17);
		expect(output).to.equal('seventeen');
	});

	it('should return "seventy three" if input is 73', function(){
		var output = amountToText(73);
		expect(output).to.equal('seventy three');
	});

	it('should return "one hundred" if input is 100', function(){
		var output = amountToText(100);
		expect(output).to.equal('one hundred');
	});

	it('should return "one hundred seventeen" if input is 117', function(){
		var output = amountToText(117);
		expect(output).to.equal('one hundred seventeen');
	});

	it('should return "four thousand one" if input is 4001', function(){
		var output = amountToText(4001);
		expect(output).to.equal('four thousand one');
	});

	it('should return "one million two hundred thousand one" if input is 1200001', function(){
		var output = amountToText(1200001);
		expect(output).to.equal('one million two hundred thousand one');
	});

	it('handles plural names correct', function(){
		var output = amountToText(4000000);
		expect(output).to.equal('four million');
	});

});
