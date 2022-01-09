import Activity from "./classes/Activity";
//import img from './activity-img/taipei-101-activity.jpg'
let img = './activity-img/taipei-101-activity.jpg'
let imgSYS = './activity-img/SYS_Memorial-wikipedia-cary-bass-sm.jpg'

// valid types are: art, history, religion, spicy, japanese food, chinese food, sichuanese food, cats, hiking, parks, site seeing, night life. 
// taipei 101 coord 25.03356359985413, 121.56457490825865

let Taipei101 =  new Activity('Taipei 101', 'No. 7, Section 5, Xinyi Rd, Xinyi District, Taipei City, 110', img, "Taiwan's tallest build", "Come visit the world Tallest build. Have a coffee in the world height Starbucks", ['sight seeing', 'shopping'], 25.03356359985413, 121.56457490825865, false);
let sys =  new Activity('Sun Yatsen Memorial Hall', 'Xinyi District', imgSYS, "Memorial, Museum, and Art Gallery", "Watch the changing of the guard ceremony, browse the museum, and enjoy a number of art galleries", ['art', 'sight seeing', 'history'], 25.040061374178094, 121.56001587047173, false, ['m', 'a']);
let taiwanMuseum =  new Activity('Taiwan Museum', 'Zhongzheng District', img, "Natural History Museum and Art gallery", "Built by the Japanese colonial government, visit this museum to learn about the natural history of Taiwan", ['history'], 25.04308334099123, 121.51513450556618, false, ['m', 'a']);
let palacemuseum =  new Activity('Palace Museum', 'Shilin District', img, "Natural History Museum and Art gallery", "Houses China's imperial treasures", ['history', 'art', 'sight seeing'], 25.102137303939113, 121.54829353645836, false);
let cks = new Activity('Chiang Kai Shek Memorial Hall', 'Zhongzheng District', img, 'Memorial to Chinese President Chiang Kai Shek', 'Visit this massive memorial to controversial former President Chiang Kai-shek. Constructed on the order of his son, President Chiang Ching-kuo, this memorial has long been a site of anti-government protests. It houses a museum and art gallery.', ['sight seeing', 'history', 'art'], 25.034654752412806, 121.52184203783897, false, ['m', 'a']);
let botanicalgarden = new Activity('Taipei Botanical Garden', 'No. 53, Nanhai Rd, Zhongzheng District, Taipei City, 100', img, 'Beautiful Downtown Gardens', 'A botanical garden popular with photographers and landscape artists. Home to many exotic plant species.', ['nature'], 25.032010136308884, 121.5093977084809, false, ['m', 'a']);
let daanpark = new Activity(`Da'an Forest Park`, 'No. 1號, Section 2, Xinsheng S Rd, Da’an District, Taipei City, 106', img, 'Massive public park in downtown Taipei', 'This park is popular amongst families with small Children. There are public performances, playgrounds, and activities for children here, especially on the weekends', ['nature'], 25.03263553010499, 121.53487818122024, false);
let fuyangeco = new Activity('Fuyang Eco Park and Fujhoushan Mountain Park', 'Fuyang St, Da’an District, Taipei City, 106', img, `A beautiful secluded park where you can escape the crowds of Taipei`, `This park is deceptively large. Despite being located in bustling Da'an District, this park offers a number of trails with a beautiful overlook of Taipei`, ['nature'], 25.01700463449158, 121.55759036875455, false, ['m', 'a']);
let huashan = new Activity('Huashan 1914 Creative Park', 'No. 1, Section 1, Bade Rd, Zhongzheng District, Taipei City, 100', img, 'Popular Arts and Crafts center', 'Visit the numerous boutique stores and stalls at this popular creative park. There are usually live events on the weekends. Despite its massive size, it still gets packed on weekends.', ['art'], 25.044289109397933, 121.52943415290716, false);
let lungshan = new Activity('Lungshan Temple', 'No. 211, Guangzhou St, Wanhua District, Taipei City, 10853', img, "Taipei's most famous Temple", 'This temple is dedicated to both Daoist and Buddhist figures. Many young people come to here to pray to find love.', ['sight seeing'], 25.03717712767831, 121.49993783389142, false);
let trainmuseum = new Activity('Rail Museum', 'No. 2, Section 1, Yanping N Rd, Datong District, Taipei City, 103', img, 'Learn about the Hundred Year long history of Taiwan Railways', 'The main building of the museum was the Japanese Colonial era railway Bureau Office. This gorgeous structure now houses the Railway Museum, full of models and actual carriages of historic trains', ['history'], 25.048863376232575, 121.51139384602955, false, ['m', 'a']);
let xingtian = new Activity('Hsingtian Temple (Xingtiangong)', 'No. 109, Section 2, Minquan E Rd, Zhongshan District, Taipei City, 10491', img, 'A temple for New Years Worship', 'This magnificent Daoist temple is marvelous example of Chinese religious architecture. Conveneniently located near the Xintian Temple metro station', ['sight seeing'], 25.063211084901774, 121.53382833481075, false);
let linjia;
let linantai;
let yehliu;
let jiufen;
let shifen;

//hiking
let elephantmtn = new Activity('Elephant Mountain and Taipei 101 Overlook', 'No. 31, Alley 401, Lane 150, Section 5, Xinyi Rd, Xinyi District, Taipei City, Taiwan 110', img, 'The most Famous Overlook for view Taipei 101', 'This short hike up Elephant Mountain offers one of the best views of Taipei. Although the trailhead starts with an infamously boring and long staircase, the view is worth the 30 minute staricase journey. Dedicated hikers can also keep following the trail to Hushan Mountain for a multi-hour hike and an even better view.', ['hiking'], 25.02738872641467, 121.5708419631042, false, ['m', 'a']);
let airportoverlook;
let qixing;
let yinghecave;


//shopping
let ximen = new Activity('Ximen Ding Shopping District', 'No. 32-1, Baoqing Rd, Zhongzheng District, Taipei City, Taiwan 100', img, 'Busiest Shopping District in Taipei', 'This area is particularly popular with students. It is considered the fashion district of Taipei', ['shopping'], 25.042240456218888, 121.50831999575811, false, ['a', 'e']);

//night markets
let ningxia =  new Activity('Ningxia Night Market', 'Ningxia Rd, Datong District, Taipei City, Taiwan 103', img, 'Find Some Delicious Snacks', 'This popular Night Market in downtown Taipei is packed everynight with Taiwanese locals and tourists looking for late night snacks.', ['shopping', 'sightseeing'], 25.055572448086128, 121.51525739940026, false, ['e']);
let raohe =  new Activity('Raohe Night Market', 'Raohe St, Songshan District, Taipei City, Taiwan 105', img, 'A Night Market with both delicious food and cheap, fashionable clothes', 'This night market not only has traditional Taiwanese late night snacks, it also is filled with small boutique shops and tailors. Buy yourself a snazzy new time, a cheap tailored suit, or new handbags here.', ['shopping'], 25.050958972196376, 121.57751149894534, false, ['e']);
let shida =  new Activity('Shida Night Market', 'Lane 39, Shida Rd, Da’an District, Taipei City, Taiwan 106', img, 'The most Hip Night Market for young people', 'Shida Night Market, short for National Taiwan Normal University Night Market, is one of the most popular shopping areas for college students in the city. There are dozen of boutique stores and inexpensive restaraunts, as well as the usual Taiwanese snacks you can find at other night markets.', ['shopping'], 25.02481058426111, 121.52947241781224, false, ['e']);

//bars
let revolver = new Activity('Revolver', 'No. 1-1號, Section 1, Roosevelt Rd, Zhongzheng District, Taipei City, Taiwan 100', img, 'The Most Popular expat divebar in Taiwan', 'This bar has live music on weekends and is packed with tourists every weekend. A perfect place to make friends for solo tourists, or jam to live music.', ['nightlife'], 25.034303152276244, 121.51743118483404, false, ['e']);
let trainjazz = new Activity('A Train Leads the Way to Jazz', '10491, Taiwan, Taipei City, Zhongshan District, Section 2, Bade Rd, 233號2樓', img, 'Listen to smooth Jazz while drinking a smooth cocktail', 'This bar is packed and will probably require a reservation. One of the most popular haunts in Taipei with great live music and even better cocktails.', ['nightlife'], 25.046872703887324, 121.54065545493727, false, ['e']);
let redhouse = new Activity('Red House Bar Scene', 'No. 10, Chengdu Rd, Wanhua District, Taipei City, Taiwan 108', img, 'LGBTQ Night Life Center of Taipei', 'The area around the gorgeous Japanese Era "Red House" has become the most vibrant nightlife spot in Taiwan. Famous for it LGBTQ community, the bars in the area are some of the most welcoming (and expensive) in Taipei.', ['nightlife'], 25.042059908166188, 121.50686624855052, false, ['e']);

// food below here
let DingTaiFeng =  new Activity('Ding Tai Feng', 'xinyi district', img, "Taiwan's most famous dumplings", "One of Taiwan's most famous restaraunt chains. A major crowd pleaser", ['chinese'], 25.03356359985413, 121.56457490825865, true);
let sushiexpress =  new Activity('Sushi Express', 'Everywhere', img, "Popular sushi chain", "Cheap, good and fast. Conveyor belt sushi perfect for a quick lunch", ['japanese'], 25.03386754133035, 121.5383244857638, true);
let chuanshu = new Activity('Chuan Shu Ma La 川屬麻辣', 'No. 150號, Section 2, Sanhe Rd, Sanchong District, New Taipei City, 241', img, 'Classic Sichuanese style food', 'Spicy and Stinky Tofu and other Classic Sichuanese style dishes', ['spicy'], 25.068363201137778, 121.49953075141521, true);
let malahotpot = new Activity('Ma La Hot Pot', '105, Taipei City, Songshan District, Section 3, Nanjing E Rd, 285號2F', img, 'Classic Taiwanese style spicy Hot Pot', 'All you can eat hot pot with all you can drink Taiwan Beer! Popular amongst young people.', ['spicy'], 25.05208545060892, 121.54593346635244, true);
let ramenkagetsu =  new Activity('Ramen Kagetsu Arashi', '100, Taipei City, Zhongzheng District, Section 1, Zhongxiao W Rd, 38號B1', img, "Popular ramen chain", "Cheap, good and fast. Great Japanese food for a quick lunch", ['japanese'], 25.046165752093064, 121.51647595541375, true);
let bafangdumpling =  new Activity('Ba Fang Yun Ji', 'No. 23之5號, Songjiang Rd, Zhongshan District, Taipei City, 10491', img, "Popular dumpling chain", "Cheap, good and fast. Have a fast Chinese style lunch", ['chinese'], 25.047446950292056, 121.53323130810101, true);
let baibayu = new Activity('Bai Ba Yu', 'No. 152, Section 1, Zhongxiao E Rd, Zhongzheng District, Taipei City, 100', img, 'Exquisite Sashimi and Japanese Cuisine, for a modest price', 'High quality Sashimi, Sushi, and other Japanese Seafood, for a reasonable price. Popular with Taiwanese families.', ['japanese'], 25.043991869147963, 121.52580146098514, true);
let chuanwei = new Activity('Zhen Chuan Wei Sichuanese Dining', 'No. 42之1號, Lane 25, Kangding Rd, Wanhua District, Taipei City, 108', img, 'Chinese Family Style Dining', 'This popular Sichuanese restaraunt attracts numerous tourists for its authentic cuisine. Particularly popular with South Korean tourists.', ['chinese'], 25.043585099985492, 121.50466135641327, true);

let activityList = [Taipei101,DingTaiFeng,sushiexpress,sys,taiwanMuseum, ramenkagetsu, bafangdumpling, palacemuseum, cks, botanicalgarden, daanpark, fuyangeco
, chuanshu, malahotpot, huashan, lungshan, trainmuseum, xingtian, baibayu, chuanwei, ningxia, raohe, shida, revolver, trainjazz, elephantmtn, ximen, redhouse];

export default activityList;