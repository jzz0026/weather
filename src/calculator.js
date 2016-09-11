'use strict';

class Calculator {
  constructor(data) {
    this.data = data;
  }

  // ------------------------------ public ------------------------------------
  getMin() {
    return Object.keys(this.data).reduce((state, key) => {
      return Math.min(state, this._getDayMin(this.data[key]));
    }, Number.POSITIVE_INFINITY);
  }

  getMax() {
    return Object.keys(this.data).reduce((state, key) => {
      return Math.max(state, this._getDayMax(this.data[key]));
    }, Number.NEGATIVE_INFINITY);
  }

  getAverage() {
    const sum = Object.keys(this.data).reduce((total, key) => {
      return total + this._sum(this.data[key]);
    }, 0);
    const count = Object.keys(this.data).reduce((count, key) => {
      return count + this.data[key].length;
    }, 0);
    return sum / count;
  }

  getMostVariedDate() {
    return this._getDateByVariance((a,b) => a-b, 0);
  }

  getLeastVariedDate() {
    return this._getDateByVariance((a,b) => b-a, Number.POSITIVE_INFINITY);
  }

  // ---------------------------- private -------------------------------------
  _sum(ar) {
    return ar.reduce((total, num) => total + num, 0);
  }

  _average(ar) {
    return this._sum(ar) / ar.length;
  }

  _getDayMin(temps) {
    return temps.reduce((s, t) => Math.min(s, t), Number.POSITIVE_INFINITY);
  }

  _getDayMax(temps) {
    return temps.reduce((s, t) => Math.max(s, t), Number.NEGATIVE_INFINITY);
  }

  _getDateByVariance(comparator, seed) {
    return Object.keys(this.data).reduce((state, key) => {
      const temps = this.data[key];
      const variance = this._getDayMax(temps) - this._getDayMin(temps);
      return comparator(variance, state.variance) > 0
        ? { date: key, variance: variance }
        : state;
    }, { date: undefined, variance: seed }).date;
  }

}

module.exports = Calculator;
