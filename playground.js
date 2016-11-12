var moment = require('moment');

var time = moment();

// console.log(moment().format());

var now = moment().unix();

//console.log(now)

var timestamp = 1478905376;

var currentMoment = moment.unix(timestamp)

console.log('currentMoment', currentMoment.format('MMMM Do, YYYY @ h:mm A'))