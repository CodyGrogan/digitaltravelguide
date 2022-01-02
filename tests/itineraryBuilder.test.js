const itineraryBuilder = require('../src/components/itineraryBuilder');
const readResponse = itineraryBuilder.readResponse;
const parseActivities = itineraryBuilder.parseActivities;

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

  test('response of [{type: history, response: negative}, {type: spicy, response: positive}], itineraryBuilder array to be [spicy]', () => {

    let response = [{type: 'history', response: 'negative'},{type: 'spicy', response: 'positive'}] 
    let result = readResponse(response);
    let itineraryArr = parseActivities(result);
    
    expect(itineraryArr).toContain('spicy');
  });

  test('response of [{type: history, response: negative}, {type: spicy, response: positive}], itineraryBuilder arr[0] not "history"', () => {

    let response = [{type: 'history', response: 'negative'},{type: 'spicy', response: 'positive'}] 
    let result = readResponse(response);
    let itineraryArr = parseActivities(result);
    
    expect(itineraryArr[0]).not.toBe('history');
  });