export default function() {
  this.namespace = '/api';







  this.get('/monkeys', function() {
    return {
      data: [{
        type: 'monkeys',
        id: '0000000001',
        attributes: {
          species: 'Proboscis Monkey',
          size: 'Large',
          socialOrder: 'Proboscis live in small groups, usually with one male, several female, and the offspring thereof.',
          image: 'https://tse1.mm.bing.net/th?id=OIP.KTs4bWi2JPNrRZOkkSpl_wHaHa&pid=Api&P=0&w=300&h=300'
        }
      }, {
        type: 'monkeys',
        id: '0000000002',
        attributes: {
          species: 'Rhesus Macaque',
          size: 'Small',
          socialOrder: ' Small groups.  Social hierarchy is determined through maternal bloodline.  Almost all varieties of macaques live close to water.  This species of monkey frequently siwms for food, or for pursuit of new habitat.',
          image: 'https://tse3.mm.bing.net/th?id=OIP.XVXGmRb62RcBtKANe1ybfQHaJp&pid=Api&P=0&w=300&h=300'
        }
      }, {
        type: 'monkeys',
        id: '0000000003',
        attributes: {
          species: 'Baboon',
          size: 'Large',
          socialOrder: 'Baboons typically live in large groups with many ethnic bloodlines within one group.  Groups have strict social hierarchies which are established through a series of rituals to determine those most physically fit.',
          image: 'https://tse4.mm.bing.net/th?id=OIP.yaepAtlmMlR2JiuyqazJtAHaFj&pid=Api&P=0&w=220&h=165'
        }
      },
      {
        type: 'monkeys',
        id: '0000000004',
        attributes: {
          species: 'Capuchin Monkey',
          size: 'Medium',
          socialOrder: 'The Most commonly domesticated species of monkey in the world.  In the wild, capuchins live in groups of up to 40 and social hierarchy within the group is determined by age and sex .',
          image: 'https://tse4.mm.bing.net/th?id=OIP.w7bqB-9abATQU9eW_6SgWQHaFc&pid=Api&P=0&w=278&h=205'
        }
      }]
    };
  });
}

