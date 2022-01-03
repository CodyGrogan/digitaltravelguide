import itineraryBuilder from '../src/components/itineraryBuilder';

const builder = new itineraryBuilder;







test('response of [{type: history, response: positive}] to be one', () => {

    let response = [{type: 'history', response: 'positive'}] 
    let result = builder.readResponse(response);
    let num = result.get('history');
    expect(num).toBe(1);
  });

  test('response of [{type: history, response: negative}] to be -1', () => {

    let response = [{type: 'history', response: 'negative'}] 
    let result = builder.readResponse(response);
    let num = result.get('history');
    expect(num).toBe(-1);
  });

  test('response of [{type: history, response: negative}, {type: spicy, response: negative}], spicy to be -1', () => {

    let response = [{type: 'history', response: 'negative'},{type: 'spicy', response: 'negative'}] 
    let result = builder.readResponse(response);
    let num = result.get('spicy');
    expect(num).toBe(-1);
  });

  test('response of [{type: history, response: negative}, {type: spicy, response: positive}], itineraryBuilder array to be [spicy]', () => {

    let response = [{type: 'history', response: 'negative'},{type: 'spicy', response: 'positive'}] 
    let result = builder.readResponse(response);
    let itineraryArr = builder.parseActivities(result);
    
    expect(itineraryArr).toContain('spicy');
  });

  test('response of [{type: history, response: negative}, {type: spicy, response: positive}], itineraryBuilder arr[0] not "history"', () => {

    let response = [{type: 'history', response: 'negative'},{type: 'spicy', response: 'positive'}] 
    let result = builder.readResponse(response);
    let itineraryArr = builder.parseActivities(result);
    
    expect(itineraryArr[0]).not.toBe('history');
  });
  test('response of [history, art] to to be Sun Yatsen Memorial Hall at [0]', () => {

    let array = ['art', 'history'];
    let objArr = builder.matchActivities(array);
    
    expect(objArr[0].title).toBe('Sun Yatsen Memorial Hall');
  });
  test('response of [history, art] to be Taiwan Museum at [1]', () => {

    let array = ['art', 'history'];
    let objArr = builder.matchActivities(array);
    
    expect(objArr[1].title).toBe('Taiwan Museum');
  });