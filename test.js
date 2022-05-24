const { assert } = require('chai');
const { factorial } = require('./factorial.js');

describe('factorial test', () => {
  it('gives the factorial of 1', () => {
    assert.equal(factorial(1), 1);
  });
  it('gives the factorial of 2', () => {
    assert.equal(factorial(2), 2);
  });
  it('gives the factorial of 6', () => {
    assert.equal(factorial(6), 720);
  });
  it('gives the factorial of 24', () => {
    assert.equal(factorial(24), 6.204484017332394e+23);
  });
  it('gives the factorial of 720', () => {
    assert.equal(factorial(720), Infinity);
  });
});
