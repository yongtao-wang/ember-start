import { test } from 'qunit';
import moduleForAcceptance from 'ember-start/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | ember start');

test('visiting /', function(assert) {
  visit('/');
  andThen(function() {
    assert.equal(currentURL(), '/linkedin', 'Will Redirect automatically');
  });

});

test('links to about', function(assert){
  visit('/');
  click('a:contains("About")');
  andThen(function(){
    assert.equal(currentURL(), '/about', 'Will Show About');
  });

});

test('link to contact', function(assert){
  visit('/');
  click('a:contains("Contact")');
  andThen(function(){
    assert.equal(currentURL(), '/contact', 'Will show Contact');
  });
});

test('display products', function(assert){
  visit('/');
  andThen(function() {
    assert.equal(find('.listing').length, 3, 'Will display three items');
  });
});
