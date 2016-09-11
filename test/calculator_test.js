'use strict';

const expect = require('chai').expect;
const Calculator = require('../src/calculator');

describe('Calculator', () => {
  it('should be able to find the min', () => {
    const data = {
      '2016-09-10': [20,22,24],
      '2016-09-11': [18,20,22]
    };
    const calc = new Calculator(data);
    const min = calc.getMin();
    expect(min).to.equal(18);
  });

  it('should be able to find the max', () => {
    const data = {
      '2016-09-10': [20,22,24],
      '2016-09-11': [18,20,22]
    };
    const calc = new Calculator(data);
    const max = calc.getMax();
    expect(max).to.equal(24);
  });

  it('should be able to find the average', () => {
    const data = {
      '2016-09-10': [16,20,24],
      '2016-09-11': [18,20,22]
    };
    const calc = new Calculator(data);
    const avg = calc.getAverage();
    expect(avg).to.equal(20);
  });

  it('should be able to find the day with the largest variance', () => {
    const data = {
      '2016-09-10': [17,22,24],
      '2016-09-11': [18,20,22]
    };
    const calc = new Calculator(data);
    const date = calc.getMostVariedDate();
    expect(date).to.equal('2016-09-10');
  });

  it('should be able to find the day with the least variance', () => {
    const data = {
      '2016-09-10': [17,22,24],
      '2016-09-11': [18,20,22]
    };
    const calc = new Calculator(data);
    const date = calc.getLeastVariedDate();
    expect(date).to.equal('2016-09-11');
  });
});
