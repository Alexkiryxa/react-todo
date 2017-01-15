let moment = require('moment');

console.log(moment().format());

let now = moment();

console.log(`Current timestamp`, now.unix());

let timestamp = 1484485602;

let currentMoment = moment.unix(timestamp);

console.log('Current moment', currentMoment.format('MMM D, YYYY @ HH:mm'));
