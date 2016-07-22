import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    fetch('http://tiny-tn.herokuapp.com/collections/runs-hs')
      .then((res) => res.json());
  }
});
