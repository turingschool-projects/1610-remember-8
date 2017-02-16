import Ember from 'ember';
export default Ember.Component.extend({
  store: Ember.inject.service(),

  actions: {
    submitReminder(){
      var date = new Date(this.getProperties("date").date.split("/"))
      return this.get("store").createRecord("reminder",{
        title: this.getProperties("title").title,
        date: date,
        notes: this.getProperties("notes").notes
      }).save();
    }
  }
});
