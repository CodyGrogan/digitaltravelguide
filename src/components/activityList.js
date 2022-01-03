import Activity from "./classes/Activity";
//import img from './activity-img/taipei-101-activity.jpg'
let img = './activity-img/taipei-101-activity.jpg'

// valid types are: art, history, religion, spicy, japanese food, chinese food, sichuanese food, cats, hiking, parks, site seeing, night life. 


let Taipei101 =  new Activity('Taipei 101', 'xinyi district', img, "Taiwan's tallest build", "Come visit the world Tallest build. Have a coffee in the world height Starbucks", 'sight seeing');
let DingTaiFeng =  new Activity('Ding Tai Feng', 'xinyi district', img, "Taiwan's most famous dumplings", "One of Taiwan's most famous restaraunt chains. A major crowd pleaser", 'chinese');
let sushiexpress =  new Activity('Sushi Express', 'Everywhere', img, "Popular sushi chain", "Cheap, good and fast. Conveyor belt sushi perfect for a quick lunch", 'japanese');
let artGallery =  new Activity('Sun Yatsen Memorial Hall', 'Xinyi District', img, "Memorial, Museum, and Art Gallery", "Watch the changing of the guard ceremony, browse the museum, and enjoy a number of art galleries", 'art');
let taiwanMuseum =  new Activity('Taiwan Museum', 'Zhongzheng District', img, "Natural History Museum and Art gallery", "Built by the Japanese colonial government, visit this museum to learn about the natural history of Taiwan", 'history');

let activityList = [Taipei101,DingTaiFeng,sushiexpress,artGallery,taiwanMuseum];

export default activityList;