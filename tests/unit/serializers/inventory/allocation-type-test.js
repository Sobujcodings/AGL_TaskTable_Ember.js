import { module, test } from 'qunit';

import { setupTest } from 'library-app/tests/helpers';

module('Unit | Serializer | inventory/allocation type', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let serializer = store.serializerFor('inventory/allocation-type');

    assert.ok(serializer);
  });

  test('it serializes records', function (assert) {
    let store = this.owner.lookup('service:store');
    let record = store.createRecord('inventory/allocation-type', {});

    let serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
