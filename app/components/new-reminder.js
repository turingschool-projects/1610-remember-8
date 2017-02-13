import Ember from 'ember';
export default Ember.Component.extend({
  store: Ember.inject.service(),
  actions: {
    submitReminder(){
      let date = new Date(document.querySelector(".spec-input-date").value.split("/"));
      return this.get("store").createRecord("reminder", {
        title: document.querySelector(".spec-input-title").value,
        date: date,
        notes: document.querySelector(".spec-input-notes").value,
      }).save();
    }
  }
});
