import Route from '@ember/routing/route';

export default class ScientistsRoute extends Route {
    model() {
            return ['Marie Curie', 'Jane Goodall', 'Albert Einstein'];
          }
}
