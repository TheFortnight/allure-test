var assert = require("assert");
const allureMocha = require("allure-mocha/runtime");
describe("Array", function () {
  describe("#indexOf()", function () {
    it("should return -1 when the value is not present", function () {
      allureMocha.allure.tag("tag1");
      allureMocha.allure.startStep("step1");
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});