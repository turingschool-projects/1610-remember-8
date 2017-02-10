import Ember from 'ember';

export default Ember.Component.extend({

  store: Ember.inject.service(),

  actions: {
    submitReminder(){
      let date = new Date(document.querySelector(".date").value.split("/"));
      return this.get("store").createRecord("reminder", {
        title: document.querySelector(".title").value,
        date: date,
        notes: document.querySelector(".notes").value,
      }).save();
    }
  }

});
