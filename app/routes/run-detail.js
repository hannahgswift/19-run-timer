import Ember from 'ember';

export default Ember.Route.extend({
  model(_id) {
    return fetch (`http://tiny-tn.herokuapp.com/collections/runs-hs/${_id.detail}`)
      .then((res) => res.json());
  }
});
