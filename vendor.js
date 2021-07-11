'use strict';

const events = require('./events');
const faker = require('faker');
require('dotenv').config();
require('./driver');



setTimeout(() => {
  const  fakeOrder = {
    storeName: process.env.STORE_NAME,
    orderId: faker.datatype.uuid(),
    customerName: faker.name.findName(),
    address: faker.address.cityName(),
    street: faker.address.streetAddress(),
  };

  events.emit('Pickup', fakeOrder);
}, 5000);


events.on('vendorDelivered', payload => {
  console.log(`VENDOR: Thank You for delivering my order with the ID of ${payload.orderId}`);
  events.emit('Delivered', payload);
});

