import Ember from 'ember';
export default Ember.Component.extend({
  store: Ember.inject.service(),

  // title: "",
  // date: "",
  // notes: "",

  actions: {
    save(){
      this.get("store").findRecord("reminder", this.model.id)
      .then((record) => {
        // var date = new Date(this.get("date").split("/"))

        // this.get()
        // this.get("title") ? record.set("title", this.get("title")) :
        // record.set("title", this.model.data.title)
        //
        // this.get("date") ? record.set("date", date) :
        // record.set("date", this.model.data.date)
        //
        // this.get("notes") ? record.set("notes", this.get("notes")) :
        // record.set("notes", this.model.data.notes)

        record.save();
      })
    },
    reset(){
      this.element.children[0].textContent = this.model.data.title;
      this.element.children[1].textContent = this.model.data.date;
      this.element.children[2].textContent = this.model.data.notes;
    },
    update(field, i){
      this.set(field, this.element.children[i].textContent)
    },
  }
});
