import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return [
      {
        name: 'Baby Owl Ornaments',
        image: 'http://i.imgur.com/l3G5AYV.jpg',
        author: 'Josephine Wu'
      }
    ];
  }
});
