import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  author: DS.attr('string'),
  yarnPly: DS.belongsTo('ply'),
  needles: DS.hasMany('needle'),
  yardage: DS.attr('number'),
  tags: DS.hasMany('tag'),
  image: DS.attr('string')
});
