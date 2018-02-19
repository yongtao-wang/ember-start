import { test } from 'qunit';
import moduleForAcceptance from 'ember-start/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | ember start');

test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});
