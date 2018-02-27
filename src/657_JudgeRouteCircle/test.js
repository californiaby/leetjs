let assert = require('chai').assert;
let solution = require('./index');

describe('Judge Route Circle', function () {
  
  it('UDLR > true', () => {
    assert.equal(solution('UDLR'), true);
  });

  it('LRRL > true', () => {
    assert.equal(solution('LRRL'), true);
  });

  it('UDL > false', () => {
    assert.equal(solution('UDL'), false);
  });

  it('Empty, null, undefined string > false', () => {
    assert.equal(solution(''), false);
    assert.equal(solution(null), false);
    assert.equal(solution(undefined), false);
  });

  it('Not valid characters > false', () => {
    assert.equal(solution('UZDL'), false);
  });

});
