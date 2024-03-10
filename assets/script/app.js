'use strict'

import * as utils from './utils.js';

const fadeIn = utils.select('.fade-in');


window.addEventListener('load', () => {
  fadeIn.classList.add('hidden');
});

