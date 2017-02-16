import Ember from 'ember';
export default Ember.Component.extend({
  store: Ember.inject.service(),
  actions: {
    save(){
      this.get("store").findRecord("reminder", this.model.id)
      .then((record) => {
        var date = new Date(record.getProperties("date").date.split("/"))
        record.set("date", date)
        record.save();
      })
    },
    reset(){
      this.get("store").findRecord("reminder", this.model.id)
      .then((record) => {
      record.rollbackAttributes();
      })
    }
  }
});
