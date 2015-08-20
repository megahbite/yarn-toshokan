import DS from 'ember-data';

export default DS.Model.extend({
  plyNumber: DS.attr('number'),
  commonName: DS.attr('string'),
  patterns: DS.hasMany('pattern')
});
