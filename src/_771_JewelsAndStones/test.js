let assert = require('chai').assert;
let solution = require('./index');

describe('Jewels and Stones', function () {
  
  it('Normal scenario', () => {
    assert.equal(solution('abc', 'acdaa'), 4);
  });

  it('Case sensitive', () => {
    assert.equal(solution('aA', 'bAbAA'), 3);
  })

  it('No jewels mathc', () => {
    assert.equal(solution('abc', 'xyz'), 0);
  })

  it('Empty list of Jewels', () => {
    assert.equal(solution('', 'abc'), 0);
  });

  it('Empty lis of Stones', () => {
    assert.equal(solution('abc', ''), 0);
  });

  it('Null values', () => {
    assert.equal(solution(null, null), 0);
  })

  it('Undefined values', () => {
    assert.equal(solution(undefined, undefined), 0);
  })

});
