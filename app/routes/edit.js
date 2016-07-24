import Ember from 'ember';

export default Ember.Route.extend({
  model(edit) {
    return fetch (`http://tiny-tn.herokuapp.com/collections/runs-hs${edit._id}`)
      .then((res) => res.json());
  }
});
