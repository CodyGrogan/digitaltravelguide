import Question from "./classes/questions";


// this will contain the list of question objects for the quiz
// valid types are: art, history, religion, spicy, japanese food, chinese food, sichuanese food, cats, hiking, parks, site seeing, night life. 



let dumpling = new Question('chinese', 'dumplings');
let chinese = new Question('chinese', 'Chinese food');
let gallery = new Question('art', 'art galleries');
let spicy = new Question('spicy', 'spicy food')
let sushi = new Question('japanese', 'sushi');
let outdoor = new Question('nature', 'the great outdoors');
let museum = new Question('history', 'history museums');
let tall = new Question('sight seeing', 'tall buildings');
let noodles = new Question('japanese', 'noodles');
let sites = new Question('history', 'historic sites');
let garden = new Question('nature', 'gardens');
let artsandcrafts = new Question('art', 'arts and crafts');
let nightlife = new Question('nightlife', 'night life');
let shopping = new Question('shopping', 'shopping');
let hiking = new Question('hiking', 'hiking');

let questionObjArr = [dumpling, museum, chinese, spicy, gallery, sushi, outdoor, tall, noodles, sites, garden, artsandcrafts, nightlife, shopping, hiking];


export default questionObjArr;
