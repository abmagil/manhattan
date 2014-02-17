describe("A suite", function() {
  it("contains spec with an expectation", function() {
    expect(true).toBe(true);
  });
});

describe("Config module", function() {
	it("returns an object with only the right keys", function() {
		var config = require('../config')('local');
		var knownKeys = ['mode', 'port', 'env'];
		expect(Object.keys(config)).toEqual(knownKeys);
	});

	it("defaults to the development configuration", function() {
		var config = require('../config');
		expect(config().env).toMatch('dev');
		expect(config('local').env).toMatch('dev');
		expect(config('staging').env).toMatch('qa');

	})
});