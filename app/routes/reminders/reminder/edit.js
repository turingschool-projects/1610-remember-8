import Ember from 'ember';
export default Ember.Route.extend({
  model(params){
    // return this.get("store").findRecord("reminder", params.model_id)
    console.log("edit params", params);
    // return {
    //   // title: document.querySelector(".spec-reminder-title").innerHTML,
    //   // date: document.querySelector(".spec-reminder-date").innerHTML,
    //   // notes: document.querySelector(".spec-reminder-notes").innerHTML
    // };
  }
});
