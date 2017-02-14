import Ember from 'ember';
export default Ember.Route.extend({
  model(params){
    console.log("reminder params", params);
    return this.get("store").findRecord("reminder", params.reminder_id)
  }
});
