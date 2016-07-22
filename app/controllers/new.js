import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addRun() {
      const data = {
        time: this.time,
        date: this.date,
        notes: this.notes,
      };
      fetch('http://tiny-tn.herokuapp.com/collections/runs-hs', {
        headers: {
          'Content-type': 'application/json',
          'Accept': 'application/json'
        },
        method: 'post',
        body: JSON.stringify(data),
      });
    }
  }
});
