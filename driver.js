'use strict';

const events = require('./events');


events.on('driverPickup', payload => {
  setTimeout(() => {
    console.log(`DRIVER: The order with an ID of ${payload.orderId} picked up`);
    events.emit('InTransit', payload);
  }, 1000);
});


events.on('driverInTransit', payload => {
  setTimeout(() => {
    console.log(`DRIVER: The order with an ID of ${payload.orderId} Just Delivered`);
    events.emit('vendorDelivered', payload);
  }, 3000);
});

