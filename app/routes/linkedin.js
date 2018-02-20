import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [{
      id: 'flagship',
      name: 'Flagship',
      location: 'San Francisco',
      description: 'LinkedIn flagship website',
    }, {
      id: 'lts',
      name: 'LTS',
      location: 'Sunnyvale',
      description: 'LinkedIn Talent Solution',
    }, {
      id: 'lss',
      name: 'LSS',
      location: 'Sunnyvale',
      description: 'LinkedIn Sales Solution',
    }];
  }
});
