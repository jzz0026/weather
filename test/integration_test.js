'use strict';

const expect = require('chai').expect;
const fs = require('fs');
const Converter = require("csvtojson").Converter;

const aggregator = require('../src/aggregator');
const Calculator = require('../src/calculator');

describe("data file", function(){
  it("should be readable, parsable, and calculable", function(done){
    const converter = new Converter({});
    converter.on("end_parsed", (objectArray) => {
      const data = aggregator(objectArray);
      const calc = new Calculator(data);

      const min = calc.getMin();
      const max = calc.getMax();
      const avg = calc.getAverage();
      const most = calc.getMostVariedDate();
      const least = calc.getLeastVariedDate();

      expect(min).to.equal(-4.8);
      expect(max).to.equal(27.3);
      expect(avg).to.equal(9.222507841265509);
      expect(most).to.equal('2016-04-20T00:00:00');
      expect(least).to.equal('2016-01-05T00:00:00');

      done();
    });
    fs.createReadStream("./data/2015-CASTLEDERG.csv").pipe(converter);
  });
});
