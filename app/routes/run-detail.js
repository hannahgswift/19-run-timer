import Ember from 'ember';

export default Ember.Route.extend({
  model({ _id }) {
    // const id = params.id;
    // const { id } = params;

    return fetch (`http://tiny-tn.herokuapp.com/collections/runs-hs${_id}`)
      .then((res) => res.json());
  }
});
