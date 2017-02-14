import Ember from 'ember';
export default Ember.Component.extend({
  store: Ember.inject.service(),
  actions: {
    edit(){
      this.get("store").findRecord("reminder", this.model.id)
      .then(function(record){
        var date = new Date(
          document.querySelector(".spec-edit-date").innerHTML.split("/"));
        record.set("title",
          document.querySelector(".spec-edit-title").innerHTML);
        record.set("date", date);
        record.set("notes",
          document.querySelector(".spec-edit-notes").innerHTML);
      })
    },
    reset(){
      this.get("store").findRecord("reminder", this.model.id)
      .then(function(record){
        document.querySelector(".spec-edit-title")
          .innerHTML = record.data.title;
        document.querySelector(".spec-edit-date")
          .innerHTML = record.data.date;
        document.querySelector(".spec-edit-notes")
          .innerHTML = record.data.notes;
      })
    }
  }
});
