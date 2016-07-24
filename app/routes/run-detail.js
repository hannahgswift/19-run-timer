import Ember from 'ember';

export default Ember.Route.extend({
  model(_id) {
    console.log(_id);
    // const id = params.id;
    // const { id } = params;

    return fetch (`http://tiny-tn.herokuapp.com/collections/runs-hs/${_id.detail}`)
      .then((res) => res.json());
  }
});
