import Ember from 'ember';
export default Ember.Component.extend({
  store: Ember.inject.service(),
  actions: {
    edit(data){
      console.log(this);
      // this.get("store").findRecord("reminder", params.reminder_id)
      //   .then(function(data){
      //     data.destroyRecord()
      //   })
      //   .then(function(data){
      //     data.createRecord("reminder", {
      //       title: document.querySelector(".spec-edit-title").innerHTML,
      //       date: document.querySelector(".spec-edit-date").innerHTML,
      //       notes: document.querySelector(".spec-edit-notes").innerHTML,
      //     })
      //   }).save();
      // let date = new Date(document.querySelector(".spec-input-date").value.split("/"));
      // return this.get("store").createRecord("reminder", {
      //   title: document.querySelector(".spec-input-title").value,
      //   date: date,
      //   notes: document.querySelector(".spec-input-notes").value,
      // }).save();
    }
  }
});
