import itineraryBuilder from '../src/components/itineraryBuilder';
import activityList from '../src/components/activityList';
import Activity from '../src/components/classes/Activity';

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
    let prefArr = objArr[0];
    
    expect(prefArr[0].title).toBe('Sun Yatsen Memorial Hall');
  });


  test('expect no non-pref when all things positive', () => {
    //let response = [{type: 'history', response: 'positive'},{type: 'spicy', response: 'positive'},{type: 'chinese', response: 'positive'},{type: 'japanese', response: 'positive'},{type: 'art', response: 'positive'},{type: 'sight seeing', response: 'positive'}];
    //let typemap = builder.readResponse(response);
    //let parsed = builder.parseActivities(typemap)
    let preftypearray = ['art', 'history', 'sight seeing', 'spicy', 'chinese', 'japanese', 'nature', 'nightlife', 'shopping', 'hiking'];
    let arrays = builder.matchActivities(preftypearray);
    let preflength = arrays[0].length;
    let length = arrays[1].length;
    console.log('should be zero: preflength' + preflength + 'nonpreflength' + length);
    console.log(arrays[1]);
    console.log(arrays[0]);
    expect(length).toBe(0);
  });

  test('get distance from two coords', () => {
    let point = [25.03356359985413, 121.56457490825865];
    let point2 = [25.03386754133035, 121.5383244857638];
    let distance = builder.getDistanceFromLatLonInKm(point[0], point[1], point2[0], point2[1]);
    
    
    expect(distance).toBe(2.644923882528903);
  });

  test('build daily schedule one day,  food arr to be sorted by distance', () => {

    let objArr = [
      {
          "title": "Sushi Express",
          "address": "Everywhere",
          "img": "./activity-img/taipei-101-activity.jpg",
          "subtitle": "Popular sushi chain",
          "body": "Cheap, good and fast. Conveyor belt sushi perfect for a quick lunch",
          "type": ["japanese"],
          "lat": 25.03386754133035,
          "long": 121.5383244857638,
          "food": true,
          "time": ['m', 'a', 'e']
      },
      {
        "title": "foodtest2",
        "address": "Everywhere",
        "img": "./activity-img/taipei-101-activity.jpg",
        "subtitle": "Popular sushi chain",
        "body": "Cheap, good and fast. Conveyor belt sushi perfect for a quick lunch",
        "type": ["japanese"],
        "lat": 25.05386754133035,
        "long": 121.5383244857638,
        "food": true,
        "time": ['m', 'a', 'e']
    },
    {
      "title": "foodtest3",
      "address": "Everywhere",
      "img": "./activity-img/taipei-101-activity.jpg",
      "subtitle": "Popular sushi chain",
      "body": "Cheap, good and fast. Conveyor belt sushi perfect for a quick lunch",
      "type": ["japanese"],
      "lat": 25.07386754133035,
      "long": 121.5383244857638,
      "food": true,
      "time": ['m', 'a', 'e']
  },
      {
          "title": "Sun Yatsen Memorial Hall",
          "address": "Xinyi District",
          "img": "./activity-img/SYS_Memorial-wikipedia-cary-bass-sm.jpg",
          "subtitle": "Memorial, Museum, and Art Gallery",
          "body": "Watch the changing of the guard ceremony, browse the museum, and enjoy a number of art galleries",
          "type": ["art"],
          "lat": 25.040061374178094,
          "long": 121.56001587047173,
          "food": false,
          "time": ['m', 'a', 'e']
      },
      {
          "title": "Taiwan Museum",
          "address": "Zhongzheng District",
          "img": "./activity-img/taipei-101-activity.jpg",
          "subtitle": "Natural History Museum and Art gallery",
          "body": "Built by the Japanese colonial government, visit this museum to learn about the natural history of Taiwan",
          "type": ["history"],
          "lat": 25.04308334099123,
          "long": 121.51513450556618,
          "food": false,
          "time": ['m', 'a', 'e']
      },
      {
        "title": "Fake Taiwan Museum",
        "address": "Zhongzheng District",
        "img": "./activity-img/taipei-101-activity.jpg",
        "subtitle": "Natural History Museum and Art gallery",
        "body": "Built by the Japanese colonial government, visit this museum to learn about the natural history of Taiwan",
        "type": ["history"],
        "lat": 25.04308334099123,
        "long": 121.51513450556618,
        "food": false,
        "time": ['m', 'a', 'e']
    }
  ];
  //this test will need to be updates with dates for the parameter rather than an int
  let testDates = {
    "start": "2022-01-03",
    "end": "2022-01-04"
  }

  let nonpref = [];
  let objArrs = [objArr, nonpref];
    let testarr=builder.buildDailySchedule(objArrs, testDates);
    //buildDailySchedule returns an array with two objects, on on activities, the other on time/date
    let testObjArr = testarr[0];
    
    expect(testObjArr[0].title).toBe('Sun Yatsen Memorial Hall')  });

  test('build daily schedule food arr to be sorted by distance after 2 days', () => {
    //this test will need to be updates with dates for the parameter rather than an int

    let objArr = [
      {
          "title": "Sushi Express",
          "address": "Everywhere",
          "img": "./activity-img/taipei-101-activity.jpg",
          "subtitle": "Popular sushi chain",
          "body": "Cheap, good and fast. Conveyor belt sushi perfect for a quick lunch",
          "type": ["japanese"],
          "lat": 25.03386754133035,
          "long": 121.5383244857638,
          "food": true,
          "time": ['m', 'a', 'e']
      },
      {
        "title": "foodtest2",
        "address": "Everywhere",
        "img": "./activity-img/taipei-101-activity.jpg",
        "subtitle": "Popular sushi chain",
        "body": "Cheap, good and fast. Conveyor belt sushi perfect for a quick lunch",
        "type": ["japanese"],
        "lat": 25.05386754133035,
        "long": 121.5383244857638,
        "food": true,
        "time": ['m', 'a', 'e']
    },
    {
      "title": "foodtest3",
      "address": "Everywhere",
      "img": "./activity-img/taipei-101-activity.jpg",
      "subtitle": "Popular sushi chain",
      "body": "Cheap, good and fast. Conveyor belt sushi perfect for a quick lunch",
      "type": ["japanese"],
      "lat": 25.07386754133035,
      "long": 121.5383244857638,
      "food": true,
      "time": ['m', 'a', 'e']
  },
      {
          "title": "Sun Yatsen Memorial Hall",
          "address": "Xinyi District",
          "img": "./activity-img/SYS_Memorial-wikipedia-cary-bass-sm.jpg",
          "subtitle": "Memorial, Museum, and Art Gallery",
          "body": "Watch the changing of the guard ceremony, browse the museum, and enjoy a number of art galleries",
          "type": ["art"],
          "lat": 25.040061374178094,
          "long": 121.56001587047173,
          "food": false,
          "time": ['m', 'a', 'e']
      },
      {
          "title": "Taiwan Museum",
          "address": "Zhongzheng District",
          "img": "./activity-img/taipei-101-activity.jpg",
          "subtitle": "Natural History Museum and Art gallery",
          "body": "Built by the Japanese colonial government, visit this museum to learn about the natural history of Taiwan",
          "type": ["history"],
          "lat": 25.04308334099123,
          "long": 121.51513450556618,
          "food": false,
          "time": ['m', 'a', 'e']
      },
      {
        "title": "Fake Taiwan Museum",
        "address": "Zhongzheng District",
        "img": "./activity-img/taipei-101-activity.jpg",
        "subtitle": "Natural History Museum and Art gallery",
        "body": "Built by the Japanese colonial government, visit this museum to learn about the natural history of Taiwan",
        "type": ["history"],
        "lat": 25.04308334099123,
        "long": 121.51513450556618,
        "food": false,
        "time": ['m', 'a', 'e']
    },
    {
      "title": "Sushi Express",
      "address": "Everywhere",
      "img": "./activity-img/taipei-101-activity.jpg",
      "subtitle": "Popular sushi chain",
      "body": "Cheap, good and fast. Conveyor belt sushi perfect for a quick lunch",
      "type": ["japanese"],
      "lat": 25.03386754133035,
      "long": 121.5383244857638,
      "food": true,
      "time": ['m', 'a', 'e']
  },
  {
    "title": "foodtest2",
    "address": "Everywhere",
    "img": "./activity-img/taipei-101-activity.jpg",
    "subtitle": "Popular sushi chain",
    "body": "Cheap, good and fast. Conveyor belt sushi perfect for a quick lunch",
    "type": ["japanese"],
    "lat": 25.05386754133035,
    "long": 121.5383244857638,
    "food": true,
    "time": ['m', 'a', 'e']
},
{
  "title": "foodtest3",
  "address": "Everywhere",
  "img": "./activity-img/taipei-101-activity.jpg",
  "subtitle": "Popular sushi chain",
  "body": "Cheap, good and fast. Conveyor belt sushi perfect for a quick lunch",
  "type": ["japanese"],
  "lat": 25.07386754133035,
  "long": 121.5383244857638,
  "food": true,
  "time": ['m', 'a', 'e']
},
  {
      "title": "Sun Yatsen Memorial Hall",
      "address": "Xinyi District",
      "img": "./activity-img/SYS_Memorial-wikipedia-cary-bass-sm.jpg",
      "subtitle": "Memorial, Museum, and Art Gallery",
      "body": "Watch the changing of the guard ceremony, browse the museum, and enjoy a number of art galleries",
      "type": ["art"],
      "lat": 25.040061374178094,
      "long": 121.56001587047173,
      "food": false,
      "time": ['m', 'a', 'e']
  },
  {
      "title": "Taiwan Museum",
      "address": "Zhongzheng District",
      "img": "./activity-img/taipei-101-activity.jpg",
      "subtitle": "Natural History Museum and Art gallery",
      "body": "Built by the Japanese colonial government, visit this museum to learn about the natural history of Taiwan",
      "type":[ "history"],
      "lat": 25.04308334099123,
      "long": 121.51513450556618,
      "food": false,
      "time": ['m', 'a', 'e']
  },
  {
    "title": "Fake Taiwan Museum",
    "address": "Zhongzheng District",
    "img": "./activity-img/taipei-101-activity.jpg",
    "subtitle": "Natural History Museum and Art gallery",
    "body": "Built by the Japanese colonial government, visit this museum to learn about the natural history of Taiwan",
    "type": ["history"],
    "lat": 25.04308334099123,
    "long": 121.51513450556618,
    "food": false,
    "time": ['m', 'a', 'e']
}
  ];
    let testDates = {
      "start": "2022-01-03",
      "end": "2022-01-05"
    }
    let nonpreffarr = [];
    let objArrs = [objArr, nonpreffarr];
    let testarr=builder.buildDailySchedule(objArrs, testDates);
    let testObjArr = testarr[0];
    
    expect(testObjArr[1].title).toBe('Sushi Express')});

  test('after not enough prefObjs adds nonPrefs to final list ', () => {

    let objArr = [
      {
          "title": "Sushi Express",
          "address": "Everywhere",
          "img": "./activity-img/taipei-101-activity.jpg",
          "subtitle": "Popular sushi chain",
          "body": "Cheap, good and fast. Conveyor belt sushi perfect for a quick lunch",
          "type": ["japanese"],
          "lat": 25.03386754133035,
          "long": 121.5383244857638,
          "food": true,
          "time": ['m', 'a', 'e']
      },
      {
        "title": "foodtest2",
        "address": "Everywhere",
        "img": "./activity-img/taipei-101-activity.jpg",
        "subtitle": "Popular sushi chain",
        "body": "Cheap, good and fast. Conveyor belt sushi perfect for a quick lunch",
        "type": ["japanese"],
        "lat": 25.05386754133035,
        "long": 121.5383244857638,
        "food": true,
        "time": ['m', 'a', 'e']
    },
    {
      "title": "foodtest3",
      "address": "Everywhere",
      "img": "./activity-img/taipei-101-activity.jpg",
      "subtitle": "Popular sushi chain",
      "body": "Cheap, good and fast. Conveyor belt sushi perfect for a quick lunch",
      "type": ["japanese"],
      "lat": 25.07386754133035,
      "long": 121.5383244857638,
      "food": true,
      "time": ['m', 'a', 'e']
  },
      {
          "title": "Sun Yatsen Memorial Hall",
          "address": "Xinyi District",
          "img": "./activity-img/SYS_Memorial-wikipedia-cary-bass-sm.jpg",
          "subtitle": "Memorial, Museum, and Art Gallery",
          "body": "Watch the changing of the guard ceremony, browse the museum, and enjoy a number of art galleries",
          "type": ["art"],
          "lat": 25.040061374178094,
          "long": 121.56001587047173,
          "food": false,
          "time": ['m', 'a', 'e']
      },
      {
          "title": "Taiwan Museum",
          "address": "Zhongzheng District",
          "img": "./activity-img/taipei-101-activity.jpg",
          "subtitle": "Natural History Museum and Art gallery",
          "body": "Built by the Japanese colonial government, visit this museum to learn about the natural history of Taiwan",
          "type": ["history"],
          "lat": 25.04308334099123,
          "long": 121.51513450556618,
          "food": false,
          "time": ['m', 'a', 'e']
      }
    
  ];

  let nonPrefArr = [  {
    "title": "Fake Taiwan Museum",
    "address": "Zhongzheng District",
    "img": "./activity-img/taipei-101-activity.jpg",
    "subtitle": "Natural History Museum and Art gallery",
    "body": "Built by the Japanese colonial government, visit this museum to learn about the natural history of Taiwan",
    "type": ["history"],
    "lat": 25.04308334099123,
    "long": 121.51513450556618,
    "food": false,
    "time": ['m', 'a', 'e']
    },
    {
      "title": "Sushi Express",
      "address": "Everywhere",
      "img": "./activity-img/taipei-101-activity.jpg",
      "subtitle": "Popular sushi chain",
      "body": "Cheap, good and fast. Conveyor belt sushi perfect for a quick lunch",
      "type": ["japanese"],
      "lat": 25.03386754133035,
      "long": 121.5383244857638,
      "food": true,
      "time": ['m', 'a', 'e']
  },
  {
    "title": "foodtest2",
    "address": "Everywhere",
    "img": "./activity-img/taipei-101-activity.jpg",
    "subtitle": "Popular sushi chain",
    "body": "Cheap, good and fast. Conveyor belt sushi perfect for a quick lunch",
    "type": ["japanese"],
    "lat": 25.05386754133035,
    "long": 121.5383244857638,
    "food": true,
    "time": ['m', 'a', 'e']
  },
  {
  "title": "foodtest3",
  "address": "Everywhere",
  "img": "./activity-img/taipei-101-activity.jpg",
  "subtitle": "Popular sushi chain",
  "body": "Cheap, good and fast. Conveyor belt sushi perfect for a quick lunch",
  "type": ["japanese"],
  "lat": 25.07386754133035,
  "long": 121.5383244857638,
  "food": true,
  "time": ['m', 'a', 'e']
  },
  {
      "title": "Sun Yatsen Memorial Hall",
      "address": "Xinyi District",
      "img": "./activity-img/SYS_Memorial-wikipedia-cary-bass-sm.jpg",
      "subtitle": "Memorial, Museum, and Art Gallery",
      "body": "Watch the changing of the guard ceremony, browse the museum, and enjoy a number of art galleries",
      "type": ["art"],
      "lat": 25.040061374178094,
      "long": 121.56001587047173,
      "food": false,
      "time": ['m', 'a', 'e']
  },
  {
      "title": "Taiwan Museum",
      "address": "Zhongzheng District",
      "img": "./activity-img/taipei-101-activity.jpg",
      "subtitle": "Natural History Museum and Art gallery",
      "body": "Built by the Japanese colonial government, visit this museum to learn about the natural history of Taiwan",
      "type": ["history"],
      "lat": 25.04308334099123,
      "long": 121.51513450556618,
      "food": false,
      "time": ['m', 'a', 'e']
  }]
  //this test will need to be updates with dates for the parameter rather than an int
  let testDates = {
    "start": "2022-01-03",
    "end": "2022-01-04"
  }

  
  let objArrs = [objArr, nonPrefArr];
    let testarr=builder.buildDailySchedule(objArrs, testDates);
    //buildDailySchedule returns an array with two objects, on on activities, the other on time/date
    let testObjArr = testarr[0];
    let length = testObjArr.length;
    expect(length).toBe(5);  
    
  });


  
  test('check if build function works with all negative food responses', () => {

    let testDates = {
      "start": "2022-01-03",
      "end": "2022-01-04"
    }
  
    let response = [{type: 'history', response: 'negative'},{type: 'spicy', response: 'negative'},{type: 'chinese', response: 'negative'},{type: 'japanese', response: 'negative'}] 

    
    let typeMap = builder.readResponse(response);
    let activityArr = builder.parseActivities(typeMap);
    let activityObjArr = builder.matchActivities(activityArr);
    let sortedArray = builder.buildDailySchedule(activityObjArr, testDates);
    let length = sortedArray[0].length;
    expect(length).toBe(5);  //5 cards per day
  });

    
  test('check if build function works with all negative responses', () => {

    let testDates = {
      "start": "2022-01-03",
      "end": "2022-01-04"
    }
  
    let response = [{type: 'history', response: 'negative'},{type: 'spicy', response: 'negative'},{type: 'chinese', response: 'negative'},{type: 'japanese', response: 'negative'}
    ,{type: 'art', response: 'negative'},{type: 'sight seeing', response: 'negative'},{type: 'nature', response: 'negative'}] 

    
    let typeMap = builder.readResponse(response);
    let activityArr = builder.parseActivities(typeMap);
    let activityObjArr = builder.matchActivities(activityArr);
    let sortedArray = builder.buildDailySchedule(activityObjArr, testDates);
    let length = sortedArray[0].length;
    expect(length).toBe(5);  //5 cards per day
  });

  test('builditinerary check with japanese, spicy, history, chinese, nature prefs', () => {

    let testDates = {
      "start": "2022-01-03",
      "end": "2022-01-04"
    }
  
    let response = [
      "japanese",
      "spicy",
      "history",
      "chinese",
      "nature"
    ]
    
   
    let activityObjArr = builder.matchActivities(response);
    let sortedArray = builder.buildDailySchedule(activityObjArr, testDates);
    let length = sortedArray[0].length;
    expect(length).toBe(5);  //5 cards per day
  });

  test('builditinerary check with japanese, spicy, history, chinese, nature prefs over 4 days', () => {

    let testDates = {
      "start": "2022-01-03",
      "end": "2022-01-07"
    }
  
    let response = [
      "japanese",
      "spicy",
      "history",
      "chinese",
      "nature"
    ]
    
   
    let activityObjArr = builder.matchActivities(response);
    //console.log(activityObjArr);
    let sortedArray = builder.buildDailySchedule(activityObjArr, testDates);
    let length = sortedArray[0].length;
    //console.log(sortedArray[0]);
    expect(length).toBe(20);  //5 cards per day
  });

  test('expect checktype of [history] and {type:[history, chinese]} to be true', () => {

    
    let array = ['history'];
    let objType = ['history', 'chinese']
    let result = builder.checkTypes(array, objType);
    
    expect(result).toBe(true);
  });
  test('expect checktype of [japanese] and type:[history, chinese] to be false', () => {

    
    let array = ['japanese'];
    let objType = ['history', 'chinese']
    let result = builder.checkTypes(array, objType);
    
    expect(result).toBe(false);
  });

  test('expect checktype of [japanese, history, art] and type:[nature, chinese, history]} to be true', () => {

    
    let array = ['japanese', 'history', 'art'];
    let objType = ['nature', 'chinese', 'history']
    let result = builder.checkTypes(array, objType);
    
    expect(result).toBe(true);
  });

  test('expect checktime of [m, a, e] and "a" to be true', ()=>{
    let taipei101 = activityList[0];
    let result = builder.checkTime(taipei101, 'a');
    expect(result).toBe(true);


  });
  test('expect checktime of [e] and "a" to be false', ()=>{
    
    let testobj = {time: ['e']};
    let result = builder.checkTime(testobj, 'a');
    expect(result).toBe(false);


  });

  test('evening activities only appear at night', ()=>{
  
    console.log('evening test starts here');
    let testDates = {
      "start": "2022-01-03",
      "end": "2022-01-04"
    }
    let img = 'test';
    let trainmuseum = new Activity('Rail Museum', 'No. 2, Section 1, Yanping N Rd, Datong District, Taipei City, 103', img, 'Learn about the Hundred Year long history of Taiwan Railways', 'The main building of the museum was the Japanese Colonial era railway Bureau Office. This gorgeous structure now houses the Railway Museum, full of models and actual carriages of historic trains', ['history'], 25.048863376232575, 121.51139384602955, false);
    let xingtian = new Activity('Hsingtian Temple (Xingtiangong)', 'No. 109, Section 2, Minquan E Rd, Zhongshan District, Taipei City, 10491', img, 'A temple for New Years Worship', 'This magnificent Daoist temple is marvelous example of Chinese religious architecture. Conveneniently located near the Xintian Temple metro station', ['sight seeing'], 25.063211084901774, 121.53382833481075, false);
       
    let DingTaiFeng =  new Activity('Ding Tai Feng', 'xinyi district', img, "Taiwan's most famous dumplings", "One of Taiwan's most famous restaraunt chains. A major crowd pleaser", ['chinese'], 25.03356359985413, 121.56457490825865, true);
    let sushiexpress =  new Activity('Sushi Express', 'Everywhere', img, "Popular sushi chain", "Cheap, good and fast. Conveyor belt sushi perfect for a quick lunch", ['japanese'], 25.03386754133035, 121.5383244857638, true);

    let huashan = new Activity('Huashan 1914 Creative Park', 'No. 1, Section 1, Bade Rd, Zhongzheng District, Taipei City, 100', img, 'Popular Arts and Crafts center', 'Visit the numerous boutique stores and stalls at this popular creative park. There are usually live events on the weekends. Despite its massive size, it still gets packed on weekends.', ['art'], 25.044289109397933, 121.52943415290716, false);
    let lungshan = new Activity('Lungshan Temple', 'No. 211, Guangzhou St, Wanhua District, Taipei City, 10853', img, "Taipei's most famous Temple", 'This temple is dedicated to both Daoist and Buddhist figures. Many young people come to here to pray to find love.', ['sight seeing'], 25.03717712767831, 121.49993783389142, false);


    let testeveningonly1 =  new Activity('Evening Test 1', 'No. 109, Section 2, Minquan E Rd, Zhongshan District, Taipei City, 10491', img, 'A temple for New Years Worship', 'This magnificent Daoist temple is marvelous example of Chinese religious architecture. Conveneniently located near the Xintian Temple metro station', ['nightlife'], 25.063211084901774, 121.53382833481075, false, ['e']);
    console.log(testeveningonly1);
    console.log('was above undefined?')    

    
    let pref = [testeveningonly1, trainmuseum, xingtian, sushiexpress, DingTaiFeng];
    let nonpref = [huashan, lungshan];
    let arrays=[pref, nonpref];
  
    let result = builder.buildDailySchedule(arrays, testDates);
    console.log(result[0]);
    expect(result[0][4].title).toBe('Evening Test 1');
  });



  

  test('check weatherdata returns true', async () =>{

   const weather = await builder.checkWeather();
   
   expect(weather.list.length).toBe(16);

  });

  test('check parsing of weatherdata', ()=>{

    
    const testWeather = {
      "city": {
          "id": 1668341,
          "name": "Taipei",
          "coord": {
              "lon": 121.5319,
              "lat": 25.0478
          },
          "country": "TW",
          "population": 7871900,
          "timezone": 28800
      },
      "cod": "200",
      "message": 5.8440368,
      "cnt": 7,
      "list": [
          {
              "dt": 1641614400,
              "sunrise": 1641595218,
              "sunset": 1641633600,
              "temp": {
                  "day": 16.09,
                  "min": 15.62,
                  "max": 16.59,
                  "night": 16.38,
                  "eve": 15.98,
                  "morn": 15.82
              },
              "feels_like": {
                  "day": 15.79,
                  "night": 16.19,
                  "eve": 15.8,
                  "morn": 15.65
              },
              "pressure": 1022,
              "humidity": 78,
              "weather": [
                  {
                      "id": 500,
                      "main": "Rain",
                      "description": "light rain",
                      "icon": "10d"
                  }
              ],
              "speed": 3.91,
              "deg": 61,
              "gust": 6.61,
              "clouds": 100,
              "pop": 0.36,
              "rain": 0.37
          },
          {
              "dt": 1641700800,
              "sunrise": 1641681625,
              "sunset": 1641720043,
              "temp": {
                  "day": 16.09,
                  "min": 15.36,
                  "max": 16.17,
                  "night": 15.5,
                  "eve": 15.55,
                  "morn": 15.45
              },
              "feels_like": {
                  "day": 15.92,
                  "night": 15.27,
                  "eve": 15.33,
                  "morn": 15.3
              },
              "pressure": 1019,
              "humidity": 83,
              "weather": [
                  {
                      "id": 804,
                      "main": "Clouds",
                      "description": "overcast clouds",
                      "icon": "04d"
                  }
              ],
              "speed": 3.4,
              "deg": 63,
              "gust": 5.96,
              "clouds": 100,
              "pop": 0.37
          },
          {
              "dt": 1641787200,
              "sunrise": 1641768031,
              "sunset": 1641806486,
              "temp": {
                  "day": 16.28,
                  "min": 15.24,
                  "max": 17.16,
                  "night": 16.17,
                  "eve": 17.16,
                  "morn": 15.24
              },
              "feels_like": {
                  "day": 16.16,
                  "night": 16.11,
                  "eve": 17.02,
                  "morn": 15.07
              },
              "pressure": 1019,
              "humidity": 84,
              "weather": [
                  {
                      "id": 500,
                      "main": "Rain",
                      "description": "light rain",
                      "icon": "10d"
                  }
              ],
              "speed": 3.27,
              "deg": 64,
              "gust": 5.77,
              "clouds": 100,
              "pop": 0.39,
              "rain": 0.39
          },
          {
              "dt": 1641873600,
              "sunrise": 1641854436,
              "sunset": 1641892930,
              "temp": {
                  "day": 13.69,
                  "min": 11.49,
                  "max": 15.88,
                  "night": 11.49,
                  "eve": 12.58,
                  "morn": 15.34
              },
              "feels_like": {
                  "day": 13.39,
                  "night": 10.42,
                  "eve": 11.67,
                  "morn": 15.38
              },
              "pressure": 1023,
              "humidity": 87,
              "weather": [
                  {
                      "id": 501,
                      "main": "Rain",
                      "description": "moderate rain",
                      "icon": "10d"
                  }
              ],
              "speed": 4,
              "deg": 46,
              "gust": 7.26,
              "clouds": 100,
              "pop": 0.89,
              "rain": 10.57
          },
          {
              "dt": 1641960000,
              "sunrise": 1641940839,
              "sunset": 1641979374,
              "temp": {
                  "day": 14.28,
                  "min": 10.56,
                  "max": 15.19,
                  "night": 12.77,
                  "eve": 14.45,
                  "morn": 10.56
              },
              "feels_like": {
                  "day": 13.3,
                  "night": 12.09,
                  "eve": 13.62,
                  "morn": 9.45
              },
              "pressure": 1024,
              "humidity": 59,
              "weather": [
                  {
                      "id": 804,
                      "main": "Clouds",
                      "description": "overcast clouds",
                      "icon": "04d"
                  }
              ],
              "speed": 5.27,
              "deg": 93,
              "gust": 7.37,
              "clouds": 95,
              "pop": 0
          },
          {
              "dt": 1642046400,
              "sunrise": 1642027240,
              "sunset": 1642065818,
              "temp": {
                  "day": 14.21,
                  "min": 12.61,
                  "max": 14.61,
                  "night": 12.63,
                  "eve": 13.82,
                  "morn": 12.8
              },
              "feels_like": {
                  "day": 13.7,
                  "night": 11.65,
                  "eve": 12.9,
                  "morn": 12.04
              },
              "pressure": 1025,
              "humidity": 77,
              "weather": [
                  {
                      "id": 500,
                      "main": "Rain",
                      "description": "light rain",
                      "icon": "10d"
                  }
              ],
              "speed": 4.45,
              "deg": 59,
              "gust": 7.02,
              "clouds": 100,
              "pop": 0.3,
              "rain": 0.23
          },
          {
              "dt": 1642132800,
              "sunrise": 1642113641,
              "sunset": 1642152263,
              "temp": {
                  "day": 15.53,
                  "min": 12.24,
                  "max": 15.53,
                  "night": 14.38,
                  "eve": 14.88,
                  "morn": 12.3
              },
              "feels_like": {
                  "day": 14.6,
                  "night": 13.96,
                  "eve": 14.12,
                  "morn": 11.26
              },
              "pressure": 1025,
              "humidity": 56,
              "weather": [
                  {
                      "id": 803,
                      "main": "Clouds",
                      "description": "broken clouds",
                      "icon": "04d"
                  }
              ],
              "speed": 5.19,
              "deg": 85,
              "gust": 6.51,
              "clouds": 63,
              "pop": 0.16
          }
      ]
  }

    const testWeatherObjArr = builder.parseWeather(testWeather);
    let day1weather = testWeatherObjArr[0].weather;
    //1642276800
    expect(day1weather).toBe('Rain');
  })

  /*



  let DingTaiFeng =  new Activity('Ding Tai Feng', 'xinyi district', img, "Taiwan's most famous dumplings", "One of Taiwan's most famous restaraunt chains. A major crowd pleaser", 'chinese', 25.03356359985413, 121.56457490825865);
let sushiexpress =  new Activity('Sushi Express', 'Everywhere', img, "Popular sushi chain", "Cheap, good and fast. Conveyor belt sushi perfect for a quick lunch", 'japanese', 25.03386754133035, 121.5383244857638);
*/