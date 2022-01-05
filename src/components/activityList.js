import Activity from "./classes/Activity";
//import img from './activity-img/taipei-101-activity.jpg'
let img = './activity-img/taipei-101-activity.jpg'
let imgSYS = './activity-img/SYS_Memorial-wikipedia-cary-bass-sm.jpg'

// valid types are: art, history, religion, spicy, japanese food, chinese food, sichuanese food, cats, hiking, parks, site seeing, night life. 
// taipei 101 coord 25.03356359985413, 121.56457490825865

let Taipei101 =  new Activity('Taipei 101', 'No. 7, Section 5, Xinyi Rd, Xinyi District, Taipei City, 110', img, "Taiwan's tallest build", "Come visit the world Tallest build. Have a coffee in the world height Starbucks", 'sight seeing', 25.03356359985413, 121.56457490825865, false);
let sys =  new Activity('Sun Yatsen Memorial Hall', 'Xinyi District', imgSYS, "Memorial, Museum, and Art Gallery", "Watch the changing of the guard ceremony, browse the museum, and enjoy a number of art galleries", 'art', 25.040061374178094, 121.56001587047173, false);
let taiwanMuseum =  new Activity('Taiwan Museum', 'Zhongzheng District', img, "Natural History Museum and Art gallery", "Built by the Japanese colonial government, visit this museum to learn about the natural history of Taiwan", 'history', 25.04308334099123, 121.51513450556618, false);
let palacemuseum =  new Activity('Palace Museum', 'Shilin District', img, "Natural History Museum and Art gallery", "Houses China's imperial treasures", 'history', 25.102137303939113, 121.54829353645836, false);
let cks = new Activity('Chiang Kai Shek Memorial Hall', 'Zhongzheng District', img, 'Memorial to Chinese President Chiang Kai Shek', 'Visit this massive memorial to controversial former President Chiang Kai-shek. Constructed on the order of his son, President Chiang Ching-kuo, this memorial has long been a site of anti-government protests. It houses a museum and art gallery.', 'sight seeing', 25.034654752412806, 121.52184203783897, false);
let botanicalgarden = new Activity('Taipei Botanical Garden', 'No. 53, Nanhai Rd, Zhongzheng District, Taipei City, 100', img, 'Beautiful Downtown Gardens', 'A botanical garden popular with photographers and landscape artists. Home to many exotic plant species.', 'nature', 25.032010136308884, 121.5093977084809, false);
let daanpark = new Activity(`Da'an Forest Park`, 'No. 1號, Section 2, Xinsheng S Rd, Da’an District, Taipei City, 106', img, 'Massive public park in downtown Taipei', 'This park is popular amongst families with small Children. There are public performances, playgrounds, and activities for children here, especially on the weekends', 'nature', 25.03263553010499, 121.53487818122024, false);
let fuyangeco = new Activity('Fuyang Eco Park and Fujhoushan Mountain Park', 'Fuyang St, Da’an District, Taipei City, 106', img, `A beautiful secluded park where you can escape the crowds of Taipei`, `This park is deceptively large. Despite being located in bustling Da'an District, this park offers a number of trails with a beautiful overlook of Taipei`, 'nature', 25.01700463449158, 121.55759036875455, false);
let huashan = new Activity('Huashan 1914 Creative Park', 'No. 1, Section 1, Bade Rd, Zhongzheng District, Taipei City, 100', img, 'Popular Arts and Crafts center', 'Visit the numerous boutique stores and stalls at this popular creative park. There are usually live events on the weekends. Despite its massive size, it still gets packed on weekends.', 'art', 25.044289109397933, 121.52943415290716, false);

let DingTaiFeng =  new Activity('Ding Tai Feng', 'xinyi district', img, "Taiwan's most famous dumplings", "One of Taiwan's most famous restaraunt chains. A major crowd pleaser", 'chinese', 25.03356359985413, 121.56457490825865, true);
let sushiexpress =  new Activity('Sushi Express', 'Everywhere', img, "Popular sushi chain", "Cheap, good and fast. Conveyor belt sushi perfect for a quick lunch", 'japanese', 25.03386754133035, 121.5383244857638, true);
let chuanshu = new Activity('Chuan Shu Ma La 川屬麻辣', 'No. 150號, Section 2, Sanhe Rd, Sanchong District, New Taipei City, 241', img, 'Classic Sichuanese style food', 'Spicy and Stinky Tofu and other Classic Sichuanese style dishes', 'spicy', 25.068363201137778, 121.49953075141521, true);
let malahotpot = new Activity('Ma La Hot Pot', '105, Taipei City, Songshan District, Section 3, Nanjing E Rd, 285號2F', img, 'Classic Taiwanese style spicy Hot Pot', 'All you can eat hot pot with all you can drink Taiwan Beer! Popular amongst young people.', 'spicy', 25.05208545060892, 121.54593346635244, true);
let ramenkagetsu =  new Activity('Ramen Kagetsu Arashi', '100, Taipei City, Zhongzheng District, Section 1, Zhongxiao W Rd, 38號B1', img, "Popular ramen chain", "Cheap, good and fast. Great Japanese food for a quick lunch", 'japanese', 25.046165752093064, 121.51647595541375, true);
let bafangdumpling =  new Activity('Ba Fang Yun Ji', 'No. 23之5號, Songjiang Rd, Zhongshan District, Taipei City, 10491', img, "Popular dumpling chain", "Cheap, good and fast. Have a fast Chinese style lunch", 'chinese', 25.047446950292056, 121.53323130810101, true);

let activityList = [Taipei101,DingTaiFeng,sushiexpress,sys,taiwanMuseum, ramenkagetsu, bafangdumpling, palacemuseum, cks, botanicalgarden, daanpark, fuyangeco
, chuanshu, malahotpot, huashan];

export default activityList;