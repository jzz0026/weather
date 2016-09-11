'use strict';

const expect = require('chai').expect;
const aggregator = require('../src/aggregator');

describe('aggregator', () => {
  it('should aggregate', () => {
    const input = [
      {
        ID: 3989197,
        ObservationTime: 3,
        ObservationDate: '2015-01-05T00:00:00',
        ScreenTemperature: 18,
        SiteName: 'CASTLEDERG (3904)'
      },
      {
        ID: 3989198,
        ObservationTime: 4,
        ObservationDate: '2015-01-05T00:00:00',
        ScreenTemperature: 20,
        SiteName: 'CASTLEDERG (3904)'
      }
    ];
    const actual = aggregator(input);
    expect(actual).to.deep.equal({
      '2015-01-05T00:00:00': [18,20]
    });
  });
});
