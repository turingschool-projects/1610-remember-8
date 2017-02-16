import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  actions: {
    delete(reminder){
      debugger;
      this.get("store").findRecord("reminder", this.reminder.id, {reload: true})
      .then(function(record){
        record.destroyRecord();
      })
    }
  }
});
