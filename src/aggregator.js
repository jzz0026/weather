'use strict';

function aggregator(jsonArray) {
  return jsonArray
    .filter((cur) => cur.ScreenTemperature != -99.0)
    .reduce((state, cur) => {
      (state[cur.ObservationDate] = state[cur.ObservationDate] || []).push(cur.ScreenTemperature)
      return state;
    }, {});
}

module.exports = aggregator;
