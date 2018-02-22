export default function () {
  // this.namespace = '/api';

  this.get('/li-products', function () {
    return {
      data: [{
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
      }]
    }
  })
}
