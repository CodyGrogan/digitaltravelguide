import Activity from "./classes/Activity";
//import img from './activity-img/taipei-101-activity.jpg'
let img = './activity-img/image_128.png';
let imgtaipei101 = './activity-img/taipei-101-activity.jpg';
let imgSYS = './activity-img/SYS_Memorial-wikipedia-cary-bass-sm.jpg';
let imgcks = './activity-img/ckssm.jpg';
let imgjiufen = './activity-img/jiufensm.jpg';
let shifenimg = './activity-img/shifensm.jpg';
let imgxiangshan = './activity-img/tigersm.jpg';
let imgqixing = './activity-img/yangmingsm.jpg';
let imgyehliu ='./activity-img/yehliusm.jpg';
let imgsandomingo = './activity-img/sandomingosm.jpg';
let imgfuyang = './activity-img/fuyangsm.jpg';
let imgpalace = './activity-img/National_Palace_Museum_Taipei1.jpg';
let imglongshan = './activity-img/longshan.jpg';
let imgxingtian = './activity-img/xingtian-wintertai.jpg';
let imgtaiwanmuseum = './activity-img/taiwan_museum_taiwanjunior.jpg';
let imgnightmark = './activity-img/nightmarket.jpg';
let imgredhouse = './activity-img/redhouse.jpg';
let imgximen = './activity-img/ximen.jpg';
let imgmaokong = './activity-img/maokong.jpg';
let imgcave = './activity-img/cave.jpg';
let imgoverlook = './activity-img/overlook.jpg';
let imgqsquare = './activity-img/qsquare.jpg';
let imgalcohol = './activity-img/alcohol.jpg'
let imgart = './activity-img/Arts_Museum.jpg'

let dumpling = './activity-img/dumplingssm.jpg';
let imgdigtaifung = './activity-img/Din_Tai_Fung.jpg';
let sushi = './activity-img/sushism.jpg';
let ramen = './activity-img/ramensm.jpg';


// valid types are: art, history, spicy, japanese, chinese, hiking, shopping, sight seeing, nightlife. 
// taipei 101 coord 25.03356359985413, 121.56457490825865

let Taipei101 =  new Activity('Taipei 101', 'No. 7, Section 5, Xinyi Rd, Xinyi District, Taipei City, 110', imgtaipei101, "Taiwan's tallest build", "Come visit the world Tallest build. Have a coffee in the world height Starbucks", ['sight seeing', 'shopping'], 25.03356359985413, 121.56457490825865, false);
let sys =  new Activity('Sun Yatsen Memorial Hall', '106, Taipei City, Da’an District', imgSYS, "Memorial, Museum, and Art Gallery", "Watch the changing of the guard ceremony, browse the museum, and enjoy a number of art galleries", ['art', 'sight seeing', 'history'], 25.040061374178094, 121.56001587047173, false, ['m', 'a']);
let taiwanMuseum =  new Activity('Taiwan Museum', 'Zhongzheng District', imgtaiwanmuseum, "Natural History Museum and Art gallery", "Built by the Japanese colonial government, visit this museum to learn about the natural history of Taiwan", ['history'], 25.04308334099123, 121.51513450556618, false, ['m', 'a']);
let palacemuseum =  new Activity('Palace Museum', 'Shilin District', imgpalace, "Home of the Qing Dynasty's Greatest Treasures", "This museum contains thousands of artifacts taken from the Forbidden City in Beijing. The collection has a storied history of being evacuated from city to city in World War 2 and the Civil War. In 1949 the collection was brought to Taiwan and housed in this incredible museum", ['history', 'art', 'sight seeing'], 25.102137303939113, 121.54829353645836, false, ['m', 'a']);
let cks = new Activity('Chiang Kai Shek Memorial Hall', 'No. 21, Zhongshan S Rd, Zhongzheng District, Taipei City, 100', imgcks, 'Memorial to Chinese President Chiang Kai Shek', 'Visit this massive memorial to controversial former President Chiang Kai-shek. Constructed on the order of his son, President Chiang Ching-kuo, this memorial has long been a site of anti-government protests. It houses a museum and art gallery.', ['sight seeing', 'history', 'art'], 25.034654752412806, 121.52184203783897, false, ['m', 'a']);
let botanicalgarden = new Activity('Taipei Botanical Garden', 'No. 53, Nanhai Rd, Zhongzheng District, Taipei City, 100', img, 'Beautiful Downtown Gardens', 'A botanical garden popular with photographers and landscape artists. Home to many exotic plant species.', ['nature'], 25.032010136308884, 121.5093977084809, false, ['m', 'a']);
let daanpark = new Activity(`Da'an Forest Park`, 'No. 1號, Section 2, Xinsheng S Rd, Da’an District, Taipei City, 106', img, 'Massive public park in downtown Taipei', 'This park is popular amongst families with small Children. There are public performances, playgrounds, and activities for children here, especially on the weekends', ['nature'], 25.03263553010499, 121.53487818122024, false);
let fuyangeco = new Activity('Fuyang Eco Park and Fujhoushan Mountain Park', 'Fuyang St, Da’an District, Taipei City, 106', imgfuyang, `A beautiful secluded park where you can escape the crowds of Taipei`, `This park is deceptively large. Despite being located in bustling Da'an District, this park offers a number of trails with a beautiful overlook of Taipei`, ['nature'], 25.01700463449158, 121.55759036875455, false, ['m', 'a']);
let huashan = new Activity('Huashan 1914 Creative Park', 'No. 1, Section 1, Bade Rd, Zhongzheng District, Taipei City, 100', img, 'Popular Arts and Crafts center', 'Visit the numerous boutique stores and stalls at this popular creative park. There are usually live events on the weekends. Despite its massive size, it still gets packed on weekends.', ['art'], 25.044289109397933, 121.52943415290716, false);
let lungshan = new Activity('Lungshan Temple', 'No. 211, Guangzhou St, Wanhua District, Taipei City, 10853', imglongshan, "Taipei's most famous Temple", 'This temple is dedicated to both Daoist and Buddhist figures. Many young people come to here to pray to find love.', ['sight seeing'], 25.03717712767831, 121.49993783389142, false);
let trainmuseum = new Activity('Rail Museum', 'No. 2, Section 1, Yanping N Rd, Datong District, Taipei City, 103', img, 'Learn about the Hundred Year long history of Taiwan Railways', 'The main building of the museum was the Japanese Colonial era railway Bureau Office. This gorgeous structure now houses the Railway Museum, full of models and actual carriages of historic trains', ['history'], 25.048863376232575, 121.51139384602955, false, ['m', 'a']);
let xingtian = new Activity('Hsingtian Temple (Xingtiangong)', 'No. 109, Section 2, Minquan E Rd, Zhongshan District, Taipei City, 10491', imgxingtian, 'A temple for New Years Worship', 'This magnificent Daoist temple is marvelous example of Chinese religious architecture. Conveneniently located near the Xintian Temple metro station', ['sight seeing'], 25.063211084901774, 121.53382833481075, false);
let linjia = new Activity('Lin Family Mansion and Garden', '220, Taiwan, New Taipei City, Banqiao District', img, 'A Beautiful Qing Era Mansion and Garden', 'This historic site is one of the best preserved pieces of Qing architecture in Taipei. There are guided tours every hour.', ['history', 'sight seeing'], 25.011232083904467, 121.45478259735023, false, ['m', 'a']);
let linantai = new Activity('Lin An Tai Historic House and Museum', 'No. 5, Binjiang St, Zhongshan District, Taipei City, Taiwan 10491', img, 'A Marvelous example of Chinese Architecture', 'A beautiful Mansion and garden in Taipei City. Near the Keelung river, you can visit this site after a short walk from Xingtian Temple MRT Station', ['history', 'sight seeing'], 25.07200208387583, 121.5304882145442, false, ['m', 'a']);
let dalongdong = new Activity('Dalongdong Baoan Confucian Temple', 'No. 61, Hami St, Datong District, Taipei City, Taiwan 103', img, 'The Largest Confucian Temple in Taipei', 'This Temple is worth visiting for anyone interested in historic architecture or Chinese Religion. The Temple is only a short walk fron Yuanshan Station. There is also a small museum on the grounds', ['history', 'sight seeing'], 25.073135869506118, 121.51556892701709, false, ['m', 'a', 'e'])
let songshanart = new Activity('Songshan Creative and Arts Park', 'No. 133, Guangfu S Rd, Xinyi District, Taipei City, Taiwan 110', img, ' Former Tobacco Factory turn workspace for local artists', 'There are dozens of small shops and stalls run by local artists here.', ['art'], 25.043842710393548, 121.56064085224074, false);
let minmuseum = new Activity('Taipei Miniatures Museum', '10489, Taiwan, Taipei City, Zhongshan District, Section 1, Jianguo N Rd, 96號B1', img, 'A Cute Museum of Models, Toys, and Miniatures', 'A quirky museum with lots of cute exhibitions. Anyone who loves building models will enjoy visiting.', ['art'], 25.050435003518846, 121.53607965507568, false, ['m', 'a']);
let whiteterror = new Activity('Jingmei White Terror Memorial Museum', 'No. 131號, Fuxing Rd, Xindian District, New Taipei City, Taiwan 231', img, 'A deeply moving memorial to the victims of the White Terror, from 1949-1987', "This museum about Taiwan's horrific experience during the White Terror is exquisitely designed. The bulk of the museum is located in the prison where political prisoners were kept during the martial law period", ['history'], 24.98813283037689, 121.53236431738074, false, ['m', 'a']);
let sandomingo = new Activity('Fort San Domingo', '251, Taiwan, New Taipei City, Tamsui District, 中正路28巷1號', imgsandomingo, 'A Spanish Colonial Era Fortress on the Sea', 'One of the most popular tourist destinations in Tamsui, New Taipei. This fortress has a beautiful view of the ocean, as well as a well-made museum. Next door is also the former British Consulate, which is another great example of British Colonial Architecture.', ['history', 'sight seeing'], 25.175401763801602, 121.4330518750382, false, ['m', 'a']);
let artmuseum = new Activity('Taipei Fine Arts Museum', 'No. 181, Section 3, Zhongshan N Rd, Zhongshan District, Taipei City, 10491', imgart, 'Contemporary Taiwanese Art', 'One of the most famous museums of modern Art in Taiwan.', ['art'], 25.07242288632136, 121.52485430756019, false, ['m', 'a']);
let martyrshrine = new Activity('National Martyrs Shrine', 'No. 139, Beian Rd, Zhongshan District, Taipei City, 10491', img, 'A World War 2 Memorial', 'This shrine is dedicated to the soldiers of the Republic of China who died in World War 2.', ['history'], 25.07944164475008, 121.53295683520578, false, ['m', 'a']);
let guandu = new Activity('Guandu Temple', 'No. 360, Zhixing Rd, Beitou District, Taipei City, 112', img, 'A Grand Temple on the Riverside', 'This temple is dedicated to both Buddhist and Daoist figures. The temple itself is a remarkable example of Minnan religious architecture, and the view from the top of the temple is stunning.', ['sight seeing'], 25.117557158350323, 121.46393595975921, false);


let yehliu = new Activity('Yehliu Geo Park', '207, Taiwan, New Taipei City, Wanli District, 港東路167-1號', imgyehliu, 'Beautiful Oceanside Park with mysterious rock formations', 'Yehliu is home to many peculiar rock formations, and has been described as looking like Mars on Earth. You can leisurely walk around the most famous section of the park, but there is also a small overlook you can hike up too. Travel here by taking the bus from Taipei Main Station, City Hall Bus Station, or by taxi.', ['nature', 'hiking'], 25.205877172067698, 121.69040265944552, false, ['m', 'a']);
let jiufen = new Activity('Jiufen Old Street', 'Jishan St, Ruifang District, New Taipei City, Taiwan 224', imgjiufen, 'Stunning Mountainside Village', 'This village is immensely popular with tourists, and famous for the architecture of its teahouses. There is also a museum dedicated to the history of gold mining in the region. You must take the train (TRA) to Ruifang Stationm, and then transfer to a bus, to reach Jiufen, but the journey is worth it.', ['sight seeing'], 25.10987374645631, 121.84521148991509, false, ['a']);
let shifen = new Activity('Shifen Old Street and Waterfall', '226, Taiwan, New Taipei City, Pingxi District', shifenimg, 'A famous railway village in the mountains of New Taipei', 'This small village is filled with shops appealing to tourists, and is also home to the famous Pingxi Lantern festival. There is a short walk from the village to visit the stunning Shifen Waterfall. To reach this village, you must take the TRA train to Ruifang, and then transfer to a local train to Shifen.', ['shopping', 'nature', 'sight seeing'], 25.042699587407437, 121.77673898361158, false, ['a']);

//hiking
let elephantmtn = new Activity('Elephant Mountain and Taipei 101 Overlook', 'No. 31, Alley 401, Lane 150, Section 5, Xinyi Rd, Xinyi District, Taipei City, Taiwan 110', imgxiangshan, 'The most Famous Overlook for view Taipei 101', 'This short hike up Elephant Mountain offers one of the best views of Taipei. Although the trailhead starts with an infamously boring and long staircase, the view is worth the 30 minute staricase journey. Dedicated hikers can also keep following the trail to Hushan Mountain for a multi-hour hike and an even better view.', ['hiking'], 25.02738872641467, 121.5708419631042, false, ['m', 'a']);
let airportoverlook = new Activity('Jiantan Hiking Trail and Airport Overlook', '10491, Taiwan, Taipei City, Zhongshan District, 中山北路四段71巷2弄69號', imgoverlook, 'An easy hiking trail with a good view of Songshan Airport', 'This trail involves a number of steep staircases. Once at the top of the ridge, its a leisurely walk with good views of Taipei City and the airport. There are some tennis and badminton courts on top of the mountain, and a few Buddhist temples.', ['hiking'], 25.079215078019377, 121.52496101425193, false, ['m', 'a']);
let qixing = new Activity('Qixing Peak of Yangmingshan', '112, Taiwan, Taipei City, Beitou District, 竹子湖69號', imgqixing, "The heighest peak of Taipei's tallest mountain", "Yangmingshan, an inactive volcano, is the tallest mountain in Taipei. From Qixing peak you can get an amazing view of both Taipei and the ocean. Unfortunately, it can easily get quite foggy suddenly. The trail to Qixing Peak also goes past the Xiaoyoukeng caldera of the volcano", ['hiking'], 25.176493891867924, 121.5469513897998, false, ['m', 'a']);
let yinghecave = new Activity('Yinhe Cave Hiking Trail', 'No. 68, Yinhe Rd, Xindian District, New Taipei City, Taiwan 231', imgcave, 'A gorgeous mountain trail leading to a small temple and waterfall', 'This trail is relatively easy to walk, and like many other Taiwanese trails involves a lot of staircases. To reach the trailhead take the Maokong Gondola from Taipei Zoo MRT Station to the Maokong Station. After that there is clear signage to reach the trail head. You can also take a bus straight to the temple and not walk the trail.', ['hiking'], 24.958936886301068, 121.58122292009809, false, ['m', 'a']);


//shopping
let ximen = new Activity('Ximen Ding Shopping District', 'No. 32-1, Baoqing Rd, Zhongzheng District, Taipei City, Taiwan 100', imgximen, 'Busiest Shopping District in Taipei', 'This area is particularly popular with students. It is considered the fashion district of Taipei', ['shopping'], 25.042240456218888, 121.50831999575811, false, ['a', 'e']);
let qsquare = new Activity('Q Square', 'No. 1, Section 1, Chengde Rd, Datong District, Taipei City, Taiwan 103', imgqsquare, 'Massive Shopping Mall next to Taipei Main Station', 'Labyrinthine shopping mall that interconnects with Taipei Main station. Its easy to get lost in here.', ['shopping'], 25.042240456218888, 121.50831999575811, false, ['a', 'e']);



//night markets
let ningxia =  new Activity('Ningxia Night Market', 'Ningxia Rd, Datong District, Taipei City, Taiwan 103', imgnightmark, 'Find Some Delicious Snacks', 'This popular Night Market in downtown Taipei is packed everynight with Taiwanese locals and tourists looking for late night snacks.', ['shopping', 'sightseeing'], 25.055572448086128, 121.51525739940026, false, ['e']);
let raohe =  new Activity('Raohe Night Market', 'Raohe St, Songshan District, Taipei City, Taiwan 105', imgnightmark, 'A Night Market with both delicious food and cheap, fashionable clothes', 'This night market not only has traditional Taiwanese late night snacks, it also is filled with small boutique shops and tailors. Buy yourself a snazzy new time, a cheap tailored suit, or new handbags here.', ['shopping'], 25.050958972196376, 121.57751149894534, false, ['e']);
let shida =  new Activity('Shida Night Market', 'Lane 39, Shida Rd, Da’an District, Taipei City, Taiwan 106', imgnightmark, 'The most Hip Night Market for young people', 'Shida Night Market, short for National Taiwan Normal University Night Market, is one of the most popular shopping areas for college students in the city. There are dozen of boutique stores and inexpensive restaraunts, as well as the usual Taiwanese snacks you can find at other night markets.', ['shopping'], 25.02481058426111, 121.52947241781224, false, ['e']);

//bars
let revolver = new Activity('Revolver', 'No. 1-1號, Section 1, Roosevelt Rd, Zhongzheng District, Taipei City, Taiwan 100', imgalcohol, 'The Most Popular expat divebar in Taiwan', 'This bar has live music on weekends and is packed with tourists every weekend. A perfect place to make friends for solo tourists, or jam to live music.', ['nightlife'], 25.034303152276244, 121.51743118483404, false, ['e']);
let trainjazz = new Activity('A Train Leads the Way to Jazz', '10491, Taiwan, Taipei City, Zhongshan District, Section 2, Bade Rd, 233號2樓', imgalcohol, 'Listen to smooth Jazz while drinking a smooth cocktail', 'This bar is packed and will probably require a reservation. One of the most popular haunts in Taipei with great live music and even better cocktails.', ['nightlife'], 25.046872703887324, 121.54065545493727, false, ['e']);
let redhouse = new Activity('Red House Bar Scene', 'No. 10, Chengdu Rd, Wanhua District, Taipei City, Taiwan 108', imgredhouse, 'LGBTQ Night Life Center of Taipei', 'The area around the gorgeous Japanese Era "Red House" has become the most vibrant nightlife spot in Taiwan. Famous for it LGBTQ community, the bars in the area are some of the most welcoming (and expensive) in Taipei.', ['nightlife'], 25.042059908166188, 121.50686624855052, false, ['e']);
let twentythree = new Activity('23 Public Craft Beer', 'No. 100號, Section 1, Xinhai Rd, Da’an District, Taipei City, Taiwan 106', imgalcohol, 'Fantastic Craft Beer', 'This bar has a wide variety of local craft beers to try. Also has live music in downstairs area.', ['nightlife'], 25.021534002918532, 121.53192263499372, false, ['e']);
// food below here
let DingTaiFeng =  new Activity('Din Tai Fung', 'xinyi district', imgdigtaifung, "Taiwan's most famous dumplings", "One of Taiwan's most famous restaraunt chains. A major crowd pleaser", ['chinese'], 25.03356359985413, 121.56457490825865, true);
let sushiexpress =  new Activity('Sushi Express', 'No. 89, Section 3, Xinyi Road, Da’an District, Taipei City, 10658', sushi, "Popular sushi chain", "Cheap, good and fast. Conveyor belt sushi perfect for a quick lunch", ['japanese'], 25.03386754133035, 121.5383244857638, true);
let chuanshu = new Activity('Chuan Shu Ma La 川屬麻辣', 'No. 150號, Section 2, Sanhe Rd, Sanchong District, New Taipei City, 241', img, 'Classic Sichuanese style food', 'Spicy and Stinky Tofu and other Classic Sichuanese style dishes', ['spicy'], 25.068363201137778, 121.49953075141521, true);
let malahotpot = new Activity('Ma La Hot Pot', '105, Taipei City, Songshan District, Section 3, Nanjing E Rd, 285號2F', img, 'Classic Taiwanese style spicy Hot Pot', 'All you can eat hot pot with all you can drink Taiwan Beer! Popular amongst young people.', ['spicy'], 25.05208545060892, 121.54593346635244, true);
let ramenkagetsu =  new Activity('Ramen Kagetsu Arashi', '100, Taipei City, Zhongzheng District, Section 1, Zhongxiao W Rd, 38號B1', ramen, "Popular ramen chain", "Cheap, good and fast. Great Japanese food for a quick lunch", ['japanese'], 25.046165752093064, 121.51647595541375, true);
let bafangdumpling =  new Activity('Ba Fang Yun Ji', 'No. 23之5號, Songjiang Rd, Zhongshan District, Taipei City, 10491', dumpling, "Popular dumpling chain", "Cheap, good and fast. Have a fast Chinese style lunch", ['chinese'], 25.047446950292056, 121.53323130810101, true);
let baibayu = new Activity('Bai Ba Yu', 'No. 152, Section 1, Zhongxiao E Rd, Zhongzheng District, Taipei City, 100', sushi, 'Exquisite Sashimi and Japanese Cuisine, for a modest price', 'High quality Sashimi, Sushi, and other Japanese Seafood, for a reasonable price. Popular with Taiwanese families.', ['japanese'], 25.043991869147963, 121.52580146098514, true);
let chuanwei = new Activity('Zhen Chuan Wei Sichuanese Dining', 'No. 42之1號, Lane 25, Kangding Rd, Wanhua District, Taipei City, 108', img, 'Chinese Family Style Dining', 'This popular Sichuanese restaraunt attracts numerous tourists for its authentic cuisine. Particularly popular with South Korean tourists.', ['chinese'], 25.043585099985492, 121.50466135641327, true);
let youshousi = new Activity('You Shou Si Sushi', 'No. 201號, Jinhua St, Da’an District, Taipei City, Taiwan 106', sushi, 'The Best (and most expensive) Sushi in Taipei.', 'A meal here will cost up to 3000 dollars a person, but its worth itto have this experienc at least once in your life', ['japanese'], 25.030132232003307, 121.52812762376107, true)
let ramenogawa = new Activity('Ramen Ogawa', 'No. 190號, Section 2, Fuxing S Rd, Da’an District, Taipei City, Taiwan 106', ramen, 'Authentic Ramen', 'This Ramen is some of the best you can get outside of Japan.', ['japanese'], 25.027151408938188, 121.5432350994897, true);
let baixian = new Activity('Baixian Grill', 'No. 28號, Section 2, Xinsheng S Rd, Da’an District, Taipei City, Taiwan 106', img, 'Taiwanese style Bar and Grill', 'This "Rechao" restaurant has fantastic grilled meals to pair with cheap beer.', ['chinese'], 25.031938557727486, 121.53295099101652, true);
let fourbrother = new Activity('Four Brothers Restaurant', '116, Taiwan, Taipei City, Wenshan District, Lane 38, Section 3, Zhinan Rd, 33-1號2F', imgmaokong, 'Good Food with a Beautiful View from Maokong', 'This restaurant has good traditional Taiwanese cuisine, but more importantly sports a fantastic view from the top of Maokong mountain.', ['chinese'], 24.967145288531352, 121.59075609325362, true);
let activityList = [Taipei101,DingTaiFeng,sushiexpress,sys,taiwanMuseum, ramenkagetsu, bafangdumpling, palacemuseum, cks, botanicalgarden, daanpark, fuyangeco
, chuanshu, malahotpot, huashan, lungshan, trainmuseum, xingtian, baibayu, chuanwei, ningxia, raohe, shida, revolver, trainjazz, elephantmtn, ximen, redhouse, qsquare,
 linjia, linantai, dalongdong, songshanart, yehliu, jiufen, shifen, minmuseum, whiteterror, sandomingo
, airportoverlook, qixing, yinghecave, twentythree, youshousi, ramenogawa, baixian, fourbrother, artmuseum, guandu, martyrshrine];

export default activityList;