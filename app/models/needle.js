import DS from 'ember-data';

export default DS.Model.extend({
  size: DS.attr('number'),
  type: DS.attr('string'),
  patterns: DS.hasMany('pattern')
});
