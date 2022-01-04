import Activity from "./classes/Activity";
//import img from './activity-img/taipei-101-activity.jpg'
let img = './activity-img/taipei-101-activity.jpg'
let imgSYS = './activity-img/SYS_Memorial-wikipedia-cary-bass-sm.jpg'

// valid types are: art, history, religion, spicy, japanese food, chinese food, sichuanese food, cats, hiking, parks, site seeing, night life. 
// taipei 101 coord 25.03356359985413, 121.56457490825865

let Taipei101 =  new Activity('Taipei 101', 'No. 7, Section 5, Xinyi Rd, Xinyi District, Taipei City, 110', img, "Taiwan's tallest build", "Come visit the world Tallest build. Have a coffee in the world height Starbucks", 'sight seeing', 25.03356359985413, 121.56457490825865);
let DingTaiFeng =  new Activity('Ding Tai Feng', 'xinyi district', img, "Taiwan's most famous dumplings", "One of Taiwan's most famous restaraunt chains. A major crowd pleaser", 'chinese', 25.03356359985413, 121.56457490825865);
let sushiexpress =  new Activity('Sushi Express', 'Everywhere', img, "Popular sushi chain", "Cheap, good and fast. Conveyor belt sushi perfect for a quick lunch", 'japanese', 25.03386754133035, 121.5383244857638);
let sys =  new Activity('Sun Yatsen Memorial Hall', 'Xinyi District', imgSYS, "Memorial, Museum, and Art Gallery", "Watch the changing of the guard ceremony, browse the museum, and enjoy a number of art galleries", 'art', 25.040061374178094, 121.56001587047173);
let taiwanMuseum =  new Activity('Taiwan Museum', 'Zhongzheng District', img, "Natural History Museum and Art gallery", "Built by the Japanese colonial government, visit this museum to learn about the natural history of Taiwan", 'history', 25.04308334099123, 121.51513450556618);

let activityList = [Taipei101,DingTaiFeng,sushiexpress,sys,taiwanMuseum];

export default activityList;