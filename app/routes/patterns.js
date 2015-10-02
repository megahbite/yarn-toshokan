import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return [
      {
        name: 'Baby Owl Ornaments',
        image: 'http://i.imgur.com/l3G5AYV.jpg',
        author: 'Josephine Wu'
      },
      {
        name: 'Skull shawl/Döskallesjal',
        image: 'http://images4.ravelrycache.com/uploads/FrkHansen/161263109/doskallesjal_medium.jpg',
        author: 'kungen och majkis'
      }
    ];
  }
});
