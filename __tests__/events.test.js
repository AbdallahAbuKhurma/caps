'use strict';

const { afterEach, it, expect } = require('@jest/globals');
const events = require('../events');

describe('events', () => {
  let consoleSpy;
  
  const output = {
    storeName: 'JUNIOR',
    orderId: '8424025c-71e8-4501-91b6-60108a2f56cb',
    customerName: 'Wade Bahringer',
    address: 'Wilmington',
    street: '014 Velma Islands',
  };

  beforeEach(() => {
    consoleSpy = jest.spyOn (console,'log').mockImplementation();
  });

  afterEach(() => consoleSpy.mockRestore());

  it('should pickup an event', async () => {
    events.emit('pick-up', output);
    await consoleSpy();
    expect(consoleSpy).toHaveBeenCalled();
  });

  it('should transit an event', async () => {
    events.emit ('transit',output);
    await consoleSpy();
    expect(consoleSpy).toHaveBeenCalled();
  });

  it('should deliver an event', async () => {
    events.emit ('delivered',output);
    await consoleSpy();
    expect(consoleSpy).toHaveBeenCalled();
  });
});