import Route from '@ember/routing/route';

export default class MonkeysRoute extends Route {
    model(){

        return[
            {
                species: 'Proboscis Monkey',
                size: 'Large',
                socialOrder: 'Proboscis live in small groups, usually with one male, several female, and the offspring thereof.'
                
            }, 
            {
                species: 'Rhesus Macaque',
                size: 'Small',
                socialOrder: 'Almost all varieties of macaques live close to water.  This species of monkey frequently siwms for food, or for pursuit of new habitat.'
                
            }, 
            {
                species: 'Baboon',
                size: 'Large',
                socialOrder: 'Baboons typically live in large groups with many ethnic bloodlines within one group.  Groups have strict social hierarchies which are established through a series of rituals to determine those most physically fit.'
                
            }, 
            {
                species: 'Capuchin Monkey',
                size: 'Medium',
                socialOrder: 'The Most commonly domesticated species of monkey in the world.  In the wild, capuchins live in groups of up to 40 and social hierarchy within the group is determined by age and sex .'

            
            }, 
            

        ]
    }
}
