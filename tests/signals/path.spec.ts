import { path } from '../../src/signals';
import { getLocation } from '../../src/utils';
import { assert } from 'chai';


describe('Signals', function() {
  describe('path', function() {
    it('should return Signal with initial value', function() {
      const actual: string = path.get();
      const expected: string = getLocation().pathname;

      assert.equal(actual, expected);
    });
  });
});