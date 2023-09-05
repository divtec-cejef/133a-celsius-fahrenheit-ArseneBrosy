/**
 * Conversion de degrés Celsius en Farenheit
 * @author  Steve Fallet
 * @version 0.1
 * @since   2019-08-19
 */

(function main() {
  'use strict';

  const app = new Vue({
    el: '#app',
    data: {
      celsius: ''
    },
    computed: {
      fahrenheit() {
        return +this.celsius * 9 / 5 + 32
      }
    },
  })
}()); // Main IIFE
