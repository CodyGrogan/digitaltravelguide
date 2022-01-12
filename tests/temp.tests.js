import itineraryBuilder from '../src/components/itineraryBuilder';
import activityList from '../src/components/activityList';
import Activity from '../src/components/classes/Activity';



const testWeatherObj = {
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


const builder = new itineraryBuilder;

test('builditinerary check with japanese, spicy, history, chinese, nature prefs over 4 days', () => {
    console.log('Expect 20 cards')

    let testDates = {
      "start": "2022-01-10",
      "end": "2022-01-14"
    }
  
    let response = [
      "japanese",
      "spicy",
      "history",
      "chinese",
      "nature"
    ]
    
    let trimWeather = builder.parseAndTrim(testWeatherObj, testDates.start, testDates.end);
    let activityObjArr = builder.matchActivities(response);
    //console.log(activityObjArr);
    let sortedArray = builder.buildDailySchedule(activityObjArr, testDates, trimWeather);
    let length = sortedArray[0].length;
    //console.log(sortedArray[0]);
    expect(length).toBe(20);  //5 cards per day
  });