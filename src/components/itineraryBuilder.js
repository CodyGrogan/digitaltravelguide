//import activity list
//response is a responseObj generated by the quiz
//this will check the activity type and response type(positive, neutral negative)
//and add points to those types
// sort the array based on highest obj num
// then pick the higher scored items first to build activityCards for
// maximum of 6 activity cards per day in schedule (3 food, 3 other)
import { type } from "@testing-library/user-event/dist/type";
import ActivityCard from "./AcitivityCard";
import activityList from "./activityList";
import Activity from "./classes/Activity";
import apikey from "../secrets";
import regeneratorRuntime from "regenerator-runtime";
import Weather from "./classes/Weather";
class itineraryBuilder{

   
    readResponse(response){
   //this function returns a map with all types and a numeric value.
   //higher means the user likes the type more
   console.log('readResponse fired')
   let typeMap = new Map;
   typeMap.set('japanese', 0);
   typeMap.set('history', 0);
   typeMap.set('art', 0);
   typeMap.set('spicy', 0);
   typeMap.set('chinese', 0);
   typeMap.set('nature', 0);
   typeMap.set('sight seeing', 0);
   typeMap.set('nightlife', 0);
   typeMap.set('shopping', 0);
   typeMap.set('hiking', 0);
  


   for (let i = 0; i < response.length; i++){
      let thisType = response[i].type;
     
      let currentVal = typeMap.get(thisType);
      if (response[i].response == 'positive'){
         currentVal = currentVal+1;
      }
      else if (response[i].response == 'negative'){
         currentVal = currentVal - 1;
      }
      else if (response[i].response == 'neutral'){
         currentVal = currentVal;
      }
      typeMap.set(thisType, currentVal);
      //console.log(thisType + "=" + typeMap.get(thisType))
   }
   return typeMap;

}

 parseActivities(typeMap){
   //this read each value in the map and check if its value is above 0. Only recommend activities that are
   //over 0.
   // valid types are: art, history, religion, spicy, japanese, chinese, sichuanese, cats, hiking, parks, sight seeing, night life. 

   //let possibleTypes = ['art', 'history', 'spicy', 'japanese', 'chinese', 'nature', 'sight seeing']
   let possibleTypes = ['japanese', 'spicy', 'art', 'history', 'chinese', 'nature', 'sight seeing', 'nightlife', 'shopping', 'hiking'];
   //it will return an array of activity Objects
   let activityArr = [];
   let nonPrefActivityArr=[];
   
   for (let i = 0; i < possibleTypes.length; i++){
      let thisType = possibleTypes[i];
      let thisVal = typeMap.get(thisType);
      if (thisVal >= 0){
         activityArr.push(thisType);
      }
   }
   

   return activityArr;
}

 matchActivities(activityArr){
   
   //activityArr is a list of types that the user likes
   //this function will match the activityArr with those in the activitylist, and return
   //an array of all the matching activity Objects in an array.
   //activityList is imported from activityList.js
   console.log('matchActivities fired')
   
   let activityObjArr = [];
   let nonPrefObjArr = [];
   let nonPrefMap =  new Map;
   let prefMap = new Map;
  
   if (activityArr.length == 0){
      activityArr = ['sight seeing', 'chinese'];
   }


   let numOfActivities = activityList.length;
   for (let i = 0; i < numOfActivities; i++){ //iterates through all objects
      let result = this.checkTypes(activityArr, activityList[i].type);
      if (result == true){
         activityObjArr.push(activityList[i]);
      }
      else{
         nonPrefObjArr.push(activityList[i]);
      }

   }



   console.log(nonPrefObjArr.length + 'non prefs')

   return [activityObjArr, nonPrefObjArr];
   

   

}

   checkTypes(userPrefTypes, objTypes){
   
      for (let i = 0; i < userPrefTypes.length; i++){
         for(let j = 0; j< objTypes.length; j++){
            if(userPrefTypes[i] == objTypes[j]){
               return true
            }
         }
      }

      return false;

   }

 pushMore(otherArr, nonPrefOtherArr, max){   //max should be 2 for food, 3 for activities
   if (otherArr.length < max ){
      //if not enough push enough activities into otherArr
      let neededNum = max - otherArr.length;
      for (let i = 0; i< neededNum; i++){
         otherArr.push(nonPrefOtherArr[0]);
         nonPrefOtherArr.splice(0,1);
      }
      
   }
 }

 pushActivityForTime(otherArr, nonPrefOtherArr, sortedActivity, time){  //time should be the string 'm' 'a' or 'e'
   for (let i = 0; i < otherArr.length; i++){
      if (this.checkTime(otherArr[i], time) == true){

       
         sortedActivity.push(otherArr[i]);

         otherArr.splice(i, 1);  //remove activity from original array so it cannot be selected again;
      

         break;
      }
      else if (i == otherArr.length-1){
         console.log('looking at non pref');
         for (let i2 = 0; i2 < nonPrefOtherArr.length; i2++){
            if (this.checkTime(nonPrefOtherArr[i2], time) == true){
               sortedActivity.push(nonPrefOtherArr[i2]);
               nonPrefOtherArr.splice(i2, 1);  //remove activity from original array so it cannot be selected again;
              
               break;
            }

         }
      }
      
   }

 }

 filterTime(activityArr, time){
   let filteredTime = [];
   
   for (let i = 0; i < activityArr.length; i++){
      if (this.checkTime(activityArr[i], time) == true){
         filteredTime.push({item: activityArr[i], index: i});

      }
   }
   return filteredTime;

 }

 sortByDistance(otherArr, sortedActivity, originalArr, event){
    //otherArr is an array, with [0] being the array of item,
    console.log('sorting by distance');
   let otherSortArr = [];
   for (let i = 0; i < otherArr.length; i++){
      //put foodObj index and distance in an an array [index, distance]
      let distance = this.getDistanceFromLatLonInKm(sortedActivity[event].lat, sortedActivity[event].long, otherArr[i].item.lat, otherArr[i].item.long);
      let thisother = [otherArr[i].index, distance];  
      otherSortArr.push(thisother)
   }
   otherSortArr.sort(function (a, b) {
      return a[1] - b[1];
   });
   if (otherSortArr.length > 0){
   let indexofClosest = otherSortArr[0][0];
   sortedActivity.push(originalArr[indexofClosest]);
   originalArr.splice(indexofClosest,1);
   }
   else{
      sortedActivity.push(otherArr[0]);
      originalArr.splice(0,1);
   }
   
 }

 buildDailySchedule(activityObjArrs, requestedDates, trimmedWeather) {
   //this function will check how close the activities are.
   //and will place activity cards into days 
   //then build the component with the completed information (date and activity object)
   //and return them in an array.

   //weatherArray should be the result of trimWeather()

   // there are 5 cards per day. 2 food and 3 other.
   let activityObjArr = activityObjArrs[0];
   let nonPrefObjArr = activityObjArrs[1]; //these will be used if there is a failure to find enough preferred activities

   console.log('buildDailySchedule fired');

   console.log('pref objects ' + activityObjArr.length);
   console.log('non pref objects ' + nonPrefObjArr.length);

   let foodArr = [];
   let otherArr =[]
   let tempOtherArr =[]; //temp arrays will hold nature/hiking activities on rainy days and will be passed back to otherArr/nonprefotherarr at end of day

   let nonPrefFoodArr = [];
   let nonPrefOtherArr = [];
   let tempNonPrefOtherArr=[];
   
   let sortedActivity = []
   let dateInfo = [];

   let weather = [];
   console.log('weather array passed into build schedule')
   console.log(trimmedWeather)
   //date info format {date: date, day: num, time: morning, lunch, afternoon, dinner, evening}

   //parse requested dates
   let startDate = new Date(requestedDates.start);
   let endDate = new Date(requestedDates.end);
   const diffTime = Math.abs(endDate - startDate);
   const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));  
   let totaldays = diffDays 
    //first separate food from other
    for (let i = 0; i < activityObjArr.length; i ++){
       if (activityObjArr[i].food == true){
          foodArr.push(activityObjArr[i]);
       }
       else{
          otherArr.push(activityObjArr[i]);
       }
    }

    for (let i = 0; i < nonPrefObjArr.length; i ++){
      if (nonPrefObjArr[i].food == true){
         nonPrefFoodArr.push(nonPrefObjArr[i]);
      }
      else{
         nonPrefOtherArr.push(nonPrefObjArr[i]);
      }
   }

   console.log('length of otherarr is ' + otherArr.length);

    //put a random other activity into sortedActivity
    //then check for closest food from foodArr
    //then check for closest otherArr
    //then for foodArr
    //then otherArr

    for (let j = 0; j < totaldays; j++){
         
 //one day     ////////////////////////////////////////////////////////////// there are 3 activities and 2 food in a day
                                                                       //// so we can check that there are enough left in the arr
     otherArr = this.shuffle(otherArr);  //shuffle the array each day so the first event chosen is randmom
     nonPrefOtherArr = this.shuffle(nonPrefOtherArr);
     console.log('day ' + j + ' length of otherarr is ' + otherArr.length + 'nonpref length ' + nonPrefOtherArr.length);
                                                                 
         console.log('trimweather length ' + trimmedWeather.length);
         if (j < trimmedWeather.length){
            weather.push(trimmedWeather[j].weather);
            weather.push(trimmedWeather[j].weather);

            weather.push(trimmedWeather[j].weather);

            weather.push(trimmedWeather[j].weather);

            weather.push(trimmedWeather[j].weather);


         }

         else{
            weather.push('unknown');
            weather.push('unknown');

            weather.push('unknown');

            weather.push('unknown');
            weather.push('unknown');

         }
       

         //filterout outdoor activities if raining
      if (trimmedWeather[j]!= undefined){
         if (trimmedWeather[j].weather == 'Rain'){
            console.log('day ' + j + ' length of otherarr is ' + otherArr.length);
            let indexToDeletePref = [];
            let indexToDeleteNonPref = [];
            for (let i = 0; i < otherArr.length; i ++){
               let result = this.checkOutdoor(otherArr[i]);
               console.log(otherArr[i].title + 'outdoor is' + result);
               if (result == true){
                     tempOtherArr.push(otherArr[i]);
                     indexToDeletePref.push(i);
               }
            }
            for (let i = 0; i < nonPrefOtherArr.length; i ++){
               let result = this.checkOutdoor(nonPrefOtherArr[i]);
               console.log(nonPrefOtherArr[i].title + 'outdoor is' + result);

               if (result == true){
                     tempNonPrefOtherArr.push(nonPrefOtherArr[i]);
                     indexToDeleteNonPref.push(i);
               }
            }

            if (indexToDeletePref.length > 0){
            for (let i = indexToDeletePref.length-1; i >= 0; i--){
               otherArr.splice(indexToDeletePref[i], 1);
            }
            }

            if (indexToDeleteNonPref.length > 0){
            for (let i = indexToDeleteNonPref.length-1; i >= 0; i--){
               nonPrefOtherArr.splice(indexToDeleteNonPref[i], 1);
            }
            }

            console.log('filtered outdoor');
            console.log(tempOtherArr.length, tempNonPrefOtherArr.length);
            console.log('remaining otherArr objects pref and nonpref')
            console.log(otherArr.length);
            console.log(nonPrefOtherArr.length);
         }
      }




         //first figure out what the date is
         let newDate = new Date(startDate);
         newDate.setDate(startDate.getDate()+j);

         //check that enough preferred food remain
      this.pushMore(foodArr, nonPrefFoodArr, 2);
     
         
      //push first activity
      
      this.pushActivityForTime(otherArr, nonPrefOtherArr, sortedActivity, 'm');
      dateInfo.push({date: newDate, day: j+1, time: 'Morning'});
        
      let foodSortArr = [];
         for (let i = 0; i < foodArr.length; i++){
            //put foodObj index and distance in an an array [index, distance]
            let distance = this.getDistanceFromLatLonInKm(sortedActivity[0].lat, sortedActivity[0].long, foodArr[i].lat, foodArr[i].long);
            let thisfood = [i, distance];
            foodSortArr.push(thisfood);
            
            

         }
         foodSortArr.sort(function (a, b) {
            return a[1] - b[1];
         });
         //console.log(foodSortArr);
         let indexofClosest = foodSortArr[0][0];
         
         sortedActivity.push(foodArr[indexofClosest]);
         //push lunch and its time info
         foodArr.splice(indexofClosest, 1);
         dateInfo.push({date: newDate, day: j+1, time: 'Lunch'});

         //get second activity closest to food 1

         console.log('one activity and one food');
         
         let filteredActivity2 = this.filterTime(otherArr, 'a');
         
         if (filteredActivity2.length > 1 ){
            this.sortByDistance(filteredActivity2, sortedActivity, otherArr, 1);
         }
         else
         {
            if (filteredActivity2.length > 1){
            filteredActivity2 = this.filterTime(nonPrefOtherArr, 'a');
            this.sortByDistance(filteredActivity2, sortedActivity, nonPrefOtherArr, 1);
            }
            else{
               console.log('neither filtered activity long enough')
            }

         }
         dateInfo.push({date: newDate, day: j+1, time: 'Afternoon'});
         
         //get second food
         foodSortArr = [];
         for (let i = 0; i < foodArr.length; i++){
            //put foodObj index and distance in an an array [index, distance]
            let distance = this.getDistanceFromLatLonInKm(sortedActivity[2].lat, sortedActivity[2].long, foodArr[i].lat, foodArr[i].long);
            let thisfood = [i, distance];
            foodSortArr.push(thisfood)

         }
         foodSortArr.sort(function (a, b) {
            return a[1] - b[1];
         });
         //console.log(foodSortArr);
         indexofClosest = foodSortArr[0][0];
         sortedActivity.push(foodArr[indexofClosest]);
         
         dateInfo.push({date: newDate, day: j+1, time: 'Dinner'});
         foodArr.splice(indexofClosest,1);

         //get third activity
        
         let filteredActivity3 = this.filterTime(otherArr, 'e');
         if (filteredActivity3.length > 1 ){
            this.sortByDistance(filteredActivity3, sortedActivity, otherArr, 0);
         }
         else
         {
            
            filteredActivity3 = this.filterTime(nonPrefOtherArr, 'e');
            if (filteredActivity3.length > 1){
            this.sortByDistance(filteredActivity3, sortedActivity, nonPrefOtherArr, 0);
            }
            else
            {
               console.log('filtered activity 3 not long enough');
               console.log(otherArr.length);
               console.log(nonPrefOtherArr.length);
            }

         }

         dateInfo.push({date: newDate, day: j+1, time: 'Evening'});



          //put back removed outdoor activities;

         otherArr = otherArr.concat(tempOtherArr);
         tempOtherArr = [];
         

         nonPrefOtherArr = nonPrefOtherArr.concat(tempNonPrefOtherArr);
         tempNonPrefOtherArr = [];
         ////// End of day

      }

     


    //console.log(sortedActivity);
    console.log(weather);
    console.log(sortedActivity);
   return [sortedActivity, dateInfo, weather];
   
}

 checkTime(activity, time){
    // time should be an string containing a value  of 'm', 'a', 'e' for morning afternoon evening
    //this should be compared against the activity's time property. if any of the time property matches the time parameter, return true
    for (let i = 0; i < activity.time.length; i++){
       if (activity.time[i] == time){
          return true
       }
    }
    return false;

 }

 checkOutdoor(activity){
   //checks if activity is outdoor
   for (let i = 0; i < activity.type.length; i++){
      if (activity.type[i] === 'hiking' || activity.type[i] === 'nature'){
         return true;
      }
   }
   return false;

}

 buildCards(info){
    //build cards takes an array of two arrays, the activityobjArr is at [0] and time info array at[1];
   let activityObjArr = info[0];
   let timeInfo = info[1];
   let weatherInfo = info[2];
   
   
   let cardArr = []

   for (let i = 0; i < activityObjArr.length; i++){
      let weatherString = weatherInfo[i];
      let newjsx = <ActivityCard obj={activityObjArr[i]} timeInfo={timeInfo[i]} weatherInfo={weatherString} />;
      cardArr.push(newjsx);
   }

   return cardArr;
}

 async buildItinerary(response, dates){
   console.log('build itinerary fired')
   let typeMap = this.readResponse(response);
   let activityArr = this.parseActivities(typeMap);
   let activityObjArr = this.matchActivities(activityArr);
  
   let weather = await this.checkWeather();
   
   let trimmedWeather= this.parseAndTrim(weather, dates.start, dates.end);
  
   let sortedArray = this.buildDailySchedule(activityObjArr, dates, trimmedWeather);
   let cardArr = this.buildCards(sortedArray);
   return cardArr;


}
   deg2rad(deg){
      return deg * (Math.PI/180)
   }

 getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
   //from stackoverflow. use this to calculate the distance between different activities.
   
   var R = 6371; // Radius of the earth in km
   var dLat = this.deg2rad(lat2-lat1);  // deg2rad below
   var dLon = this.deg2rad(lon2-lon1); 
   var a = 
     Math.sin(dLat/2) * Math.sin(dLat/2) +
     Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) * 
     Math.sin(dLon/2) * Math.sin(dLon/2)
     ; 
   var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
   var d = R * c; // Distance in km
   return d;
 }

async checkWeather(){
  // api.openweathermap.org/data/2.5/forecast/daily?q=London&units=metric&cnt=7&appid={API key}
  var axios = require("axios").default;
   let weather;
  var options = {
    method: 'GET',
    url: 'https://community-open-weather-map.p.rapidapi.com/forecast/daily',
    params: {
      q: 'taipei',
      cnt: '16',
      units: 'metric'
    },
    headers: {
      'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
      'x-rapidapi-key': apikey
    }
  };
  
   await axios.request(options).then(function (response) {
      weather = response.data;
     return weather;

     
  }).catch(function (error) {
     console.error(error);
     weather = null
     return weather;
  });
  return weather;
 }

 parseAndTrim(weather, startDate, endDate){

   let weatherObjArr = [];
   console.log(weather.list.length);
   console.log(weather.list[0]);
   
   for (let i = 0; i < weather.list.length; i++){
      let newDate = new Date;
      let ms = weather.list[i].dt;
      ms = ms*1000;
      newDate.setTime(ms);
      let dateString = this.convertDateToString(newDate);
      let mainWeather= weather.list[i].weather[0].main;
      let weatherObj = new Weather(dateString, mainWeather);
      weatherObjArr.push(weatherObj);

   }

   console.log(weatherObjArr[0].weather);


   // trim

   let indexOfStart = 0;
   let indexOfEnd = 0;
   let trimmedArray = [];


      for (let i = 0; i < weatherObjArr.length; i++){
         console.log('objDate' + weatherObjArr[i].date + weatherObjArr[i].weather + ' startdate ' + startDate);
         if (weatherObjArr[i].date === startDate){
            indexOfStart = i;
            break
         }
      }

      for (let i = indexOfStart; i< weatherObjArr.length; i++){
         if (weatherObjArr[i].date === endDate){
            indexOfEnd = i;
            break;
         }
      }

      for (let i = indexOfStart; i <= indexOfEnd; i++){
         
         trimmedArray.push(weatherObjArr[i]);

      }

   console.log('inside trim weather arr()');
   console.log(trimmedArray);
   //console.log(trimmedArray[0].date);
   //console.log(trimmedArray[0].weather);

   return trimmedArray;




 }

 parseWeather(weather){

 
   let weatherObjArr = [];
   console.log(weather.list.length);
   console.log(weather.list[0]);
   
   for (let i = 0; i < weather.list.length; i++){
      let newDate = new Date;
      let ms = weather.list[i].dt;
      ms = ms*1000;
      newDate.setTime(ms);
      let dateString = this.convertDateToString(newDate);
      let mainWeather= weather.list[i].weather[0].main;
      let weatherObj = new Weather(dateString, mainWeather);
      weatherObjArr.push(weatherObj);

   }

   console.log(weatherObjArr[0].weather);
   return weatherObjArr;
    

 }

 convertDateToString(dateToConvert){
   let dd = dateToConvert.getDate();
   let mm = dateToConvert.getMonth()+1;
   let yyyy = dateToConvert.getFullYear();
   if (dd<10){
       dd = '0' + dd;
   }
   if (mm < 10){
       mm = '0' + mm;
   }
   let dateString = `${yyyy}-${mm}-${dd}`;
   return dateString;

 }


 trimWeatherArr(weatherObjArr, startDate, endDate){
      let indexOfStart = 0;
      let indexOfEnd = 0;
      let trimmedArray = [];


         for (let i = 0; i < weatherObjArr.length; i++){
            console.log('objDate' + weatherObjArr[i].date + weatherObjArr[i].weather + ' startdate ' + startDate);
            if (weatherObjArr[i].date === startDate){
               indexOfStart = i;
               break
            }
         }

         for (let i = indexOfStart; i< weatherObjArr.length; i++){
            if (weatherObjArr[i].date === endDate){
               indexOfEnd = i;
               break;
            }
         }

         for (let i = indexOfStart; i <= indexOfEnd; i++){
            
            trimmedArray.push(weatherObjArr[i]);

         }

      console.log('inside trim weather arr()');
      console.log(trimmedArray);
      //console.log(trimmedArray[0].date);
      //console.log(trimmedArray[0].weather);

      return trimmedArray;

    }
    
    //from stack overflow, fisheryates shuffle
     shuffle(array) {
      let currentIndex = array.length,  randomIndex;
    
      // While there remain elements to shuffle...
      while (currentIndex != 0) {
    
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
    
        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex], array[currentIndex]];
      }
    
      return array;
    }
    
   

 }
 









export default itineraryBuilder;