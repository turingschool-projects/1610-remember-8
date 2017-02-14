import Ember from 'ember';
export default Ember.Component.extend({
  store: Ember.inject.service(),

  title: "",
  date: "",
  notes: "",

  actions: {
    save(){
      this.get("store").findRecord("reminder", this.model.id)
      .then((record) => {
        var date = new Date(this.get("date").split("/"))

        this.get("title") ? record.set("title", this.get("title")) :
        record.set("title", this.model.data.title)

        this.get("date") ? record.set("date", date) :
        record.set("date", this.model.data.date)

        this.get("notes") ? record.set("notes", this.get("notes")) :
        record.set("notes", this.model.data.notes)

        record.save();
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
    },
    update(data, field, i){
      this.set(field, data.element.children[i].textContent)
    },
  }
});
