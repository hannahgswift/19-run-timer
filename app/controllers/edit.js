import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    edit(_id) {
      const data = this.model;
      fetch(`http://tiny-tn.herokuapp.com/collections/runs-hs/${_id}`, {
        headers: {
          'Content-type': 'application/json',
          'Accept': 'application/json'
        },
        method: 'PUT',
        body: JSON.stringify(data)
      }).then((res) => res.json())
      .then(() => {
        this.transitionToRoute('run-detail');
      });
    }
  }
});
