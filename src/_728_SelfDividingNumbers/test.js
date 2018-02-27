let assert = require('chai').assert;
let solution = require('./index');

describe('Self Dividing Numbers', function () {
  
  it('Normal scenario', () => {
    assert.deepEqual(solution(1, 5), [1, 2, 3, 4, 5]);
  });

  it('Some numbers not matching', () => {
    assert.deepEqual(solution(20, 25), [22, 24]);
  });

  it('No results', () => {
    assert.deepEqual(solution(37, 38), []);
  });

  it('Incorrect min / max', () => {
    assert.deepEqual(solution(5, 1), []);
  });

});
