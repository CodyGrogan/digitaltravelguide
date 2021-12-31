const itineraryBuilder = require('../src/itineraryBuilder');
const readResponse = itineraryBuilder.readResponse;

test('response of [{type: history, response: positive}] to be one', () => {

    let response = [{type: 'history', response: 'positive'}] 
    let result = readResponse(response);
    let num = result.get('history');
    expect(num).toBe(1);
  });

  test('response of [{type: history, response: negative}] to be -1', () => {

    let response = [{type: 'history', response: 'negative'}] 
    let result = readResponse(response);
    let num = result.get('history');
    expect(num).toBe(-1);
  });

  test('response of [{type: history, response: negative}, {type: spicy, response: negative}], spicy to be -1', () => {

    let response = [{type: 'history', response: 'negative'},{type: 'spicy', response: 'negative'}] 
    let result = readResponse(response);
    let num = result.get('spicy');
    expect(num).toBe(-1);
  });