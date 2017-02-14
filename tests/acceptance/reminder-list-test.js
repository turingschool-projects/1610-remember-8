/* globals server */

import { test } from 'qunit';
import moduleForAcceptance from 'remember/tests/helpers/module-for-acceptance';

import Ember from 'ember';

moduleForAcceptance('Acceptance | reminders list');

test('viewing the homepage', function(assert) {
  server.createList('reminder', 5);

  visit('/reminders');

  andThen(function() {
    assert.equal(currentURL(), '/reminders');
    assert.equal(Ember.$('.spec-reminder-item').length, 5);
  });
});

test('clicking on an individual item', function(assert) {
  server.createList('reminder', 5);

  visit('/');
  click('.spec-reminder-item:first');

  andThen(function() {
    assert.equal(currentURL(), '/reminders/1');
    assert.equal($('.spec-reminder-item:first').text().trim(), $('.spec-reminder-title').text().trim());
  });
});

test('clicking the Add reminder button renders a new reminder', function(assert){
    server.createList('reminder', 0);

    visit('/reminders');
    click('.spec-view-form');
    andThen(function() {
      assert.equal(currentURL(), '/reminders/new');
    });

    fillIn('.spec-input-title', "test text")
    fillIn('.spec-input-date', '01/28/1991');
    fillIn('.spec-input-notes', 'These are test notes');
    click('.spec-add-new');
    andThen(function() {
      assert.equal(currentURL(), '/reminders/new', 'current url is /reminders/new');
      click(".spec-reminder-item")
    });
    andThen(function(){
      assert.equal(currentURL(), '/reminders/1', 'current URL is /reminders/1');
      assert.equal(Ember.$('.spec-reminder-title').text().trim(), 'test text', 'adds title to reminder list on submit');
      assert.equal(Ember.$('.spec-reminder-date').text().trim(), 'Mon Jan 28 1991 00:00:00 GMT-0700 (MST)', 'adds date to reminder list on submit');
    })
  });

test("if there are no reminders display no reminders text",
function(assert){
  server.createList('reminder', 0);

  visit('/reminders');
  andThen(function(){
    assert.equal(find('.no-notes-display').length, 1);
    assert.equal(find(".no-notes-display").text().trim(),
      "No notes found.Click \"New Reminder\" to create a new note.");
  })
})

test("clicking the edit button on a reminder lets you edit the reminder", function(assert){
  server.createList("reminder", 5);
  visit("/reminders");
  click('.spec-reminder-item:first');
  andThen(function(){
    click(".spec-edit-button")
  })
  andThen(function(){
    assert.equal(currentURL(), "/reminders/1/edit",
      "current url is edit/1")
    find(".spec-edit-title").text("title test")
    keyEvent(".spec-edit-title", "keyup", 13)
  })
  andThen(function(){
    assert.equal(find(".spec-edit-title").text().trim(), "title test",
      "title has been edited to 'title test'")
  })
  andThen(function(){
    click(".spec-save-button")
  })
  andThen(function(){
    assert.equal(currentURL(), "/reminders/1", "current url is reminders/1")
    assert.equal(find(".spec-reminder-title").text().trim(), "title test",
      "after clicking save, reminder title now has the new title 'title test'")
  })
})
