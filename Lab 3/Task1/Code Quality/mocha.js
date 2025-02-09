/*TASK1. What's wrong in the test?*/
//What’s wrong in the test of pow below?

it("Raises x to the power n", function() {
  let x = 5;

  let result = x;
  assert.equal(pow(x, 1), result);

  result *= x;
  assert.equal(pow(x, 2), result);

  result *= x;
  assert.equal(pow(x, 3), result);
});

/* result is modified between assertions, making tests dependent on execution order.
If one test fails, it affects the next one, since result is updated dynamically.
Not structured properly for unit testing, as all cases are inside a single it block instead of separate ones.
It would be much better to break the test into multiple it blocks with clearly written inputs and outputs.*/

describe("Raises x to power n", function() {
    it("5 in the power of 1 equals 5", function() {
      assert.equal(pow(5, 1), 5);
    });
  
    it("5 in the power of 2 equals 25", function() {
      assert.equal(pow(5, 2), 25);
    });
  
    it("5 in the power of 3 equals 125", function() {
      assert.equal(pow(5, 3), 125);
    });
  });

