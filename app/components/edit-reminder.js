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
    update(field, i){
      this.set(field, this.element.children[i].textContent)
    },
  }
});
