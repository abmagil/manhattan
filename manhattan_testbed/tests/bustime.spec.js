describe("A suite", function() {
  it("contains spec with an expectation", function() {
    expect(true).toBe(true);
  });
});

describe("Bustime modules", function() {
	it("contains a getRoutes function", function() {
		var bustime = require('../bustime')('local');
		console.log(bustime);
		expect(bustime.getRoutes).toBeDefined();
	});

	it("responds to the environment", function() {
		var bustime = require('../bustime')('staging');
		expect(bustime.baseURL).toMatch("app.qa.obanyc.com");
	});
});