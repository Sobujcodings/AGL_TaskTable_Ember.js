import { module, test } from 'qunit';
import { setupTest } from 'library-app/tests/helpers';

module('Unit | Route | zone', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:zone');
    assert.ok(route);
  });
});
