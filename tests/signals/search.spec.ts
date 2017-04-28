import { search } from '../../src/signals';
import { getLocation, parseSearch, QueryMap } from '../../src/utils';
import { assert } from 'chai';


describe('Signals', function() {
  describe('search', function() {
    it('should return Signal with initial value of {}', function() {
      const initialSearch: string = getLocation().search;
      const actual: QueryMap = search.get();
      const expected: QueryMap = parseSearch(initialSearch);

      assert.deepEqual(actual, expected);
    });
  });
});