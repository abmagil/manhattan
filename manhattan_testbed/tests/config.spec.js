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
});