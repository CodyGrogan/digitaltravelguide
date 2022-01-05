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
  test('response of [history, art] to be Huashan 1914 Creative Park at [1]', () => {

    let array = ['art', 'history'];
    let objArr = builder.matchActivities(array);
    console.log(objArr);
    
    expect(objArr[1].title).toBe('Huashan 1914 Creative Park');
  });

  test('get distance from two coords', () => {
    let point = [25.03356359985413, 121.56457490825865];
    let point2 = [25.03386754133035, 121.5383244857638];
    let distance = builder.getDistanceFromLatLonInKm(point[0], point[1], point2[0], point2[1]);
    
    
    expect(distance).toBe(2.644923882528903);
  });

  test('build daily schedule food arr to be sorted by distance', () => {

    let objArr = [
      {
          "title": "Sushi Express",
          "address": "Everywhere",
          "img": "./activity-img/taipei-101-activity.jpg",
          "subtitle": "Popular sushi chain",
          "body": "Cheap, good and fast. Conveyor belt sushi perfect for a quick lunch",
          "type": "japanese",
          "lat": 25.03386754133035,
          "long": 121.5383244857638,
          "food": true
      },
      {
        "title": "foodtest2",
        "address": "Everywhere",
        "img": "./activity-img/taipei-101-activity.jpg",
        "subtitle": "Popular sushi chain",
        "body": "Cheap, good and fast. Conveyor belt sushi perfect for a quick lunch",
        "type": "japanese",
        "lat": 25.05386754133035,
        "long": 121.5383244857638,
        "food": true
    },
    {
      "title": "foodtest3",
      "address": "Everywhere",
      "img": "./activity-img/taipei-101-activity.jpg",
      "subtitle": "Popular sushi chain",
      "body": "Cheap, good and fast. Conveyor belt sushi perfect for a quick lunch",
      "type": "japanese",
      "lat": 25.07386754133035,
      "long": 121.5383244857638,
      "food": true
  },
      {
          "title": "Sun Yatsen Memorial Hall",
          "address": "Xinyi District",
          "img": "./activity-img/SYS_Memorial-wikipedia-cary-bass-sm.jpg",
          "subtitle": "Memorial, Museum, and Art Gallery",
          "body": "Watch the changing of the guard ceremony, browse the museum, and enjoy a number of art galleries",
          "type": "art",
          "lat": 25.040061374178094,
          "long": 121.56001587047173,
          "food": false
      },
      {
          "title": "Taiwan Museum",
          "address": "Zhongzheng District",
          "img": "./activity-img/taipei-101-activity.jpg",
          "subtitle": "Natural History Museum and Art gallery",
          "body": "Built by the Japanese colonial government, visit this museum to learn about the natural history of Taiwan",
          "type": "history",
          "lat": 25.04308334099123,
          "long": 121.51513450556618,
          "food": false
      },
      {
        "title": "Fake Taiwan Museum",
        "address": "Zhongzheng District",
        "img": "./activity-img/taipei-101-activity.jpg",
        "subtitle": "Natural History Museum and Art gallery",
        "body": "Built by the Japanese colonial government, visit this museum to learn about the natural history of Taiwan",
        "type": "history",
        "lat": 25.04308334099123,
        "long": 121.51513450556618,
        "food": false
    }
  ];
    let testarr=builder.buildDailySchedule(objArr)
    
    expect(testarr).toStrictEqual([{"address": "Xinyi District", "body": "Watch the changing of the guard ceremony, browse the museum, and enjoy a number of art galleries", "food": false, "img": "./activity-img/SYS_Memorial-wikipedia-cary-bass-sm.jpg", "lat": 25.040061374178094, "long": 121.56001587047173, "subtitle": "Memorial, Museum, and Art Gallery", "title": "Sun Yatsen Memorial Hall", "type": "art"}, {"address": "Everywhere", "body": "Cheap, good and fast. Conveyor belt sushi perfect for a quick lunch", "food": true, "img": "./activity-img/taipei-101-activity.jpg", "lat": 25.03386754133035, "long": 121.5383244857638, "subtitle": "Popular sushi chain", "title": "Sushi Express", "type": "japanese"}, {"address": "Zhongzheng District", "body": "Built by the Japanese colonial government, visit this museum to learn about the natural history of Taiwan", "food": false, "img": "./activity-img/taipei-101-activity.jpg", "lat": 25.04308334099123, "long": 121.51513450556618, "subtitle": "Natural History Museum and Art gallery", "title": "Taiwan Museum", "type": "history"}, {"address": "Everywhere", "body": "Cheap, good and fast. Conveyor belt sushi perfect for a quick lunch", "food": true, "img": "./activity-img/taipei-101-activity.jpg", "lat": 25.05386754133035, "long": 121.5383244857638, "subtitle": "Popular sushi chain", "title": "foodtest2", "type": "japanese"}, {"address": "Zhongzheng District", "body": "Built by the Japanese colonial government, visit this museum to learn about the natural history of Taiwan", "food": false, "img": "./activity-img/taipei-101-activity.jpg", "lat": 25.04308334099123, "long": 121.51513450556618, "subtitle": "Natural History Museum and Art gallery", "title": "Fake Taiwan Museum", "type": "history"}]);
  });

  /*
  let DingTaiFeng =  new Activity('Ding Tai Feng', 'xinyi district', img, "Taiwan's most famous dumplings", "One of Taiwan's most famous restaraunt chains. A major crowd pleaser", 'chinese', 25.03356359985413, 121.56457490825865);
let sushiexpress =  new Activity('Sushi Express', 'Everywhere', img, "Popular sushi chain", "Cheap, good and fast. Conveyor belt sushi perfect for a quick lunch", 'japanese', 25.03386754133035, 121.5383244857638);
*/