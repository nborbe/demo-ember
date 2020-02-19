import DS from 'ember-data';


const {Model} = DS;


export default DS.Model.extend({


type: DS.attr(),
species: DS.attr(),
size: DS.attr(),
socialOrder: DS.attr(),
image: DS.attr(),




});
