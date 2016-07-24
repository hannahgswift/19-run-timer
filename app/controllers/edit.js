import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    edit() {
      const data = this.model;
      fetch(`http://tiny-tn.herokuapp.com/collections/runs-hs${data._id}`, {
        headers: {
          'Content-type': 'application/json',
          'Accept': 'application/json'
        },
        method: 'PUT',
        body: JSON.stringify(data)
      });
      this.transitionToRoute('run-detail');

    }
  }
});
