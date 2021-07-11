'use strict';

const events = require('./events');
require('./driver');
require('./vendor');


events.on('Pickup', payload => {
  console.log('EVENT:', {
    event: 'pick-up',
    date: new Date(),
    payload: payload,
  });
  events.emit('driverPickup', payload);
});

events.on('InTransit', payload => {
  console.log('EVENT:', {
    event: 'transit',
    date: new Date(),
    payload: payload,
  });
  events.emit('driverInTransit', payload);
});

events.on('Delivered', payload => {
  console.log('Event:', {
    event: 'delivered',
    date: new Date(),
    payload: payload,
  });
  events.emit('driverDelivered', payload);
});

