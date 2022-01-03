
const itineraryBuilder = require('./itineraryBuilder');
const readResponse = itineraryBuilder.readResponse;
const parseActivities = itineraryBuilder.parseActivities;
const matchActivities = itineraryBuilder.matchActivities; 
const buildDailySchedule = itineraryBuilder.buildDailySchedule;





function buildItinerary(response, dates){
    console.log('build itinerary fired')
    let typeMap = readResponse(response);
    let activityArr = parseActivities(typeMap);
    let activityObjArr = matchActivities(activityArr);
    let cardArr = buildDailySchedule(activityObjArr, dates);
    return cardArr;
 
 
 }

 export default buildItinerary;