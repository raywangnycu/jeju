const DAYS = [
  {
    id: 'D1', date: '9/28（一）', title: '機場、舊城與塔洞', note: '紅眼抵達日以休息為主。景點集中在東門、塔洞生活圈。',
    stops: [
      ['06:10','濟州國際機場','제주국제공항',33.5071,126.4928,'main','抵達後前往租車接駁區。',90],
      ['07:00','樂天租車濟州 Auto House','롯데렌터카 제주 오토하우스',33.5067,126.4765,'main','地址：제주시 용해로 92。確認車況、保險與油種。',60],
      ['08:10','宇進解酒湯','우진해장국',33.5115,126.5200,'flex','候位超過 30 分鐘就改附近早餐。',60],
      ['09:30','Island Stay 寄放行李','제주 아일랜드 스테이',33.5182,126.5274,'main','地址：제주시 임항로 36-1。住宿在 3–4 樓且無電梯。',60],
      ['11:30','DOTOREE Kitchen','도토리키친 제주',33.5148,126.5219,'main','午餐候位不可超過 30 分鐘。',60],
      ['12:45','中央地下商街與 Olive Young','제주중앙지하상가',33.5135,126.5233,'main','購物控制在 60 分鐘內。',60],
      ['13:50','Mandarin Island 濟州限定香水','만다린 아일랜드',33.5139,126.5243,'main','必去。先以店家最新地圖核對舊城門市；預留 30 分鐘選香與採買。',30],
      ['14:25','The Islander 選物／小香水','더 아일랜더',33.5135,126.5225,'flex','地址：제주시 관덕로4길 7；可與 Mandarin Island 同段完成。',25],
      ['15:30','Island Stay 入住休息','제주 아일랜드 스테이',33.5182,126.5274,'main','至少保留 75 分鐘休息。',75],
      ['17:00','東門傳統市場','동문재래시장',33.5127,126.5280,'main','晚餐、小吃與伴手禮。Umu 排隊太長就略過。',150],
      ['雨天','ARARIO Museum 塔洞','아라리오뮤지엄 탑동시네마',33.5171,126.5233,'backup','市區雨天備案，先確認休館日。',90]
    ]
  },
  {
    id: 'D2', date: '9/29（二）', title: '咸德、史努比與城山', note: '東線時間較緊。西烏峰與世化只在不影響 Aqua Planet 時加入。',
    stops: [
      ['08:45','咸德海水浴場','함덕해수욕장',33.5431,126.6691,'main','海邊、Odourang 麵包與 Olive Young 合計約 85 分鐘。',85],
      ['09:10','西烏峰下段','서우봉',33.5456,126.6776,'flex','只有提早抵達才走下段 20–25 分鐘，10:10 前離開咸德。',25],
      ['10:40','Snoopy Garden','스누피가든',33.4444,126.7785,'main','保留 120 分鐘走精華路線。',120],
      ['12:40','London Bagel／星巴克備選','런던베이글뮤지엄 제주',33.4359,126.7195,'flex','候位超過 15 分鐘立刻改星巴克或便利商店。',40],
      ['13:25','世化海邊短停','세화해수욕장',33.5253,126.8613,'flex','只在 13:35 前可離開時停 20–30 分鐘。',25],
      ['14:05','Aqua Planet Jeju','아쿠아플라넷 제주',33.4328,126.9278,'main','至少 165 分鐘，表演時段優先。',165],
      ['17:20','城山 Marina Hotel','성산마리나호텔',33.4488,126.9181,'main','地址：서귀포시 성산읍 고성오조로 94。',60],
      ['雨天','濟州海女博物館','제주해녀박물관',33.5237,126.8630,'backup','東線室內備案；與世化海邊同區。',90]
    ]
  },
  {
    id: 'D3', date: '9/30（三）', title: '城山日出、牛島與西歸浦', note: '船班受風浪影響。一般租車留在城山港，返程延誤就取消涉地可支。',
    stops: [
      ['06:20','城山日出峰','성산일출봉',33.4581,126.9425,'main','精華步道，天候不佳縮短。',65],
      ['07:25','廣峙其海邊','광치기해변',33.4525,126.9236,'flex','拍攝日出峰，短停約 15 分鐘。',15],
      ['07:45','城山浦港綜合旅客碼頭','성산포항 종합여객터미널',33.4717,126.9334,'main','填寫登船資料並確認回程末班船。',75],
      ['09:00','牛島','우도',33.5064,126.9534,'main','搭島內循環巴士、電動計程車或步行。',190],
      ['12:40','城山港附近午餐','성산항 점심',33.4699,126.9320,'main','船班延誤就外帶，不犧牲入住緩衝。',60],
      ['14:10','涉地可支','섭지코지',33.4239,126.9306,'flex','牛島回程順利才停留，約 60 分鐘。',60],
      ['16:40','The First70 Hotel','서귀포 더퍼스트70 호텔',33.2480,126.5660,'main','地址：서귀포시 명동로 46。',45],
      ['18:00','西歸浦每日偶來市場','서귀포매일올레시장',33.2501,126.5638,'main','市場晚餐，步行回飯店。',120],
      ['停航','光之地堡','빛의벙커',33.4390,126.8991,'backup','牛島停航時啟動城山東線室內備案。',80]
    ]
  },
  {
    id: 'D4', date: '10/1（四）', title: '休愛里、瀑布與安德展覽', note: '上午先完成必去休愛里，再進西歸浦。牛沼河口只能取代正房瀑布或下午行程之一。',
    stops: [
      ['09:00','休愛里自然生活公園','휴애리 자연생활공원',33.3330,126.6344,'main','必去。地址：서귀포시 남원읍 신례동로 256；花況與柑橘體驗以當日公告為準。',125],
      ['11:25','正房瀑布','정방폭포',33.2449,126.5716,'main','步道濕滑時縮短。',55],
      ['12:30','조림명가 午餐','조림명가 서귀포',33.2478,126.5710,'main','候位超過 20 分鐘改偶來市場。',55],
      ['13:45','濟州 Waterworld 航海王展','워터월드 제주 원피스',33.2462,126.5093,'main','出發前確認展期、票券與最後入場。',110],
      ['15:55','Dolcori Forest','돌코리숲',33.3062,126.3522,'main','週二休園；保留 60 分鐘。',60],
      ['16:40','返回 The First70','서귀포 더퍼스트70 호텔',33.2480,126.5660,'main','不再補景點，留休息時間。',65],
      ['替換','牛沼河口','쇠소깍',33.2522,126.6230,'backup','取代天地淵或正房其中一個；往返與停留約 90–120 分鐘。',105]
    ]
  },
  {
    id: 'D5', date: '10/2（五）', title: '茶園、博物館與西岸', note: '龍頭海岸依潮汐與風浪決定。17:15 是 ARTE 決策點，延誤直接去機場附近住宿。',
    stops: [
      ['10:00','OSULLOC 茶博物館','오설록 티뮤지엄',33.3059,126.2895,'main','與 Innisfree Jeju House 合計 95 分鐘。',95],
      ['11:50','本態博物館','본태박물관 제주',33.3034,126.3926,'main','至少 90–95 分鐘。',95],
      ['13:35','In’s Mill','인스밀 제주',33.2426,126.3054,'main','午餐簡餐；候位超過 20 分鐘改安德簡餐。',55],
      ['14:45','山房山與龍頭海岸','용머리해안',33.2343,126.3146,'main','龍頭海岸只在開放時入內。',80],
      ['16:45','新昌風車海岸道路','신창풍차해안도로',33.3430,126.1745,'flex','含移動與短停；風大、下雨或延誤就略過。',30],
      ['17:55','ARTE Museum Jeju','아르떼뮤지엄 제주',33.3966,126.3455,'flex','只有 17:15 前離開新昌才前往。',105],
      ['20:20','Hotel Mer Bleue Jeju','호텔 메르블루 제주',33.5160,126.4870,'main','地址：제주시 서해안로 368。機場附近住宿。',45],
      ['雨天','山房山碳酸溫泉','산방산 탄산온천',33.2487,126.2990,'backup','龍頭海岸關閉或疲勞時替換；泡湯就取消新昌或 ARTE。',120]
    ]
  },
  {
    id: 'D6', date: '10/3（六）', title: '涯月、西線採買與返程', note: '最晚 18:30 離開晚餐、19:30 還車。西部延誤時直接取消景點與購物。',
    stops: [
      ['08:50','Gonaeri 港前海岸道路・海豚觀察','고내리포구 앞 해안도로',33.4688,126.3523,'main','必去。Stanford Hotel & Resort Jeju 附近海岸；停 20 分鐘仔細觀察海面。野生海豚非定時出沒，勿追逐或餵食。',20],
      ['09:15','ASISI 涯月紀念品','애월아시시',33.4693,126.3521,'main','必去。地址：제주시 애월읍 애월해안로 474 지하1층；預留 25 分鐘採買。',25],
      ['10:00','涯月漢潭海岸散步路','애월 한담해안산책로',33.4598,126.3104,'main','海岸散步與咖啡，保留 90 分鐘；前段有延誤就縮短咖啡。',90],
      ['11:50','翰林刀削麵 濟州本店','한림칼국수 제주본점',33.4126,126.2682,'main','候位超過 20 分鐘改協載刀削麵。',70],
      ['13:15','月令里仙人掌群落','월령리 선인장군락지',33.3787,126.2153,'flex','雨天或延誤取消。',30],
      ['14:20','UNIQLO 濟州道南店','유니클로 제주도남점',33.4909,126.5263,'main','服飾採買約 60 分鐘。',60],
      ['15:25','Daiso 濟州道南店','다이소 제주도남점',33.4912,126.5267,'flex','快速補貨，最多約 15 分鐘。',15],
      ['15:50','E-Mart 濟州店','이마트 제주점',33.5180,126.5215,'main','零食與最後伴手禮；注意大型超市公休日。',60],
      ['17:00','Restaurant Mayonnaise','식당마요네즈',33.4852,126.4816,'main','最遲 18:30–18:45 離店。',75],
      ['19:30','樂天租車還車','롯데렌터카 제주 오토하우스',33.5067,126.4765,'main','加油後還車，搭接駁進機場。',45],
      ['20:15','濟州國際機場','제주국제공항',33.5071,126.4928,'main','辦理 LJ763 報到與登機。',120],
      ['替換','挾才海水浴場','협재해수욕장',33.3940,126.2397,'backup','只能取代月令里或縮短購物 30–45 分鐘。',35]
    ]
  }
];

// 備用點位刻意與每日行程分圖呈現；座標供地圖定位，導航以韓文店名為準。
const BACKUP_PLACES = [
  ['Gonaeri 港前海岸道路・海豚觀察','고내리포구 앞 해안도로','景點／體驗','涯月','제주시 애월읍 고내리 포구 앞 해안도로 (Stanford Hotel & Resort Jeju 인근)',33.4688,126.3523,'必去。建議 08:50 左右短停觀察海面；野生海豚並非每天同時出現，請保持距離、不餵食。'],
  ['ASISI 涯月紀念品','애월아시시','購物／伴手禮','涯月','제주시 애월읍 애월해안로 474 지하1층',33.4693,126.3521,'必去。紀念品、香氛與咖啡甜點可一起採買；營業時間請出發前確認。'],
  ['鹽田春天 Aewol 店','소금빵집 봄날 애월점','咖啡甜點','涯月','제주시 애월읍 애월로 1길 24',33.4634,126.3091,'海邊鹽可頌；與漢潭散步同段。'],
  ['Haejigae 海景咖啡','해지개','咖啡甜點','涯月','제주시 애월읍 애월북서길 52',33.4739,126.3517,'可看海與夕陽，適合作為涯月的替代咖啡。'],
  ['Fritz Coffee Company 濟州','프릳츠 제주','咖啡甜點','濟州市區','제주시 구좌읍 동복로 5',33.5540,126.7060,'知名烘豆咖啡；請以地圖營業資訊為準。'],
  ['London Bagel Museum Jeju','런던베이글뮤지엄 제주','咖啡甜點','東線','제주시 구좌읍 동복로 85',33.4359,126.7195,'D2 彈性午點；候位超過 15 分鐘就跳過。'],
  ['Audrant Bakery','아오랑 베이커리','咖啡甜點','咸德','제주시 조천읍 조함해안로 552-3',33.5431,126.6691,'咸德海邊麵包，可與 D2 一起選。'],
  ['TEAM BLOW CAFE','카페 팀블로우','咖啡甜點','涯月','제주시 애월읍 애월로 19-5',33.4609,126.3108,'漢潭海岸上方的海景咖啡。'],
  ['Gyulmedal House','귤메달 하우스','咖啡甜點','舊城／塔洞','제주시 탑동로 17',33.5180,126.5226,'柑橘甜點與飲品，可併入 D1 塔洞。'],
  ['UMU 布丁','우무','咖啡甜點','東門市場','제주시 관덕로8길 40-1',33.5125,126.5272,'東門市場外；原味有奶香，依口味選購。'],
  ['Abebe Bakery','아베베 베이커리 제주점','咖啡甜點','東門市場','제주시 동문로 6',33.5127,126.5280,'冰麵包；早一點去選擇較多。'],
  ['牛島冰淇淋','우도땅콩아이스크림','咖啡甜點','牛島','제주시 우도면 우도해안길 1200-6',33.5064,126.9534,'牛島移動時的在地甜點。'],
  ['Mochiron 達克瓦茲','모찌롱','購物／伴手禮','新濟州','제주시 노연로 69 신라면세점 1층',33.4843,126.4896,'新羅免稅店一樓；可與免稅採買一起完成。'],
  ['Mandarin Island 濟州限定香水','만다린 아일랜드','購物／伴手禮','舊城／塔洞','제주시 관덕로 일대 · 出發前以品牌官方地圖確認門市',33.5139,126.5243,'必去。濟州限定香水；店點可能異動，請點導航後核對。'],
  ['The Islander','더 아일랜더','購物／伴手禮','舊城／塔洞','제주시 관덕로4길 7',33.5135,126.5225,'濟州選物與小香水，可順逛東門市場。'],
  ['Hetras 香水店','헤트라스 제주','購物／伴手禮','濟州市區','제주시 노형동 일대 · 出發前確認分店',33.4855,126.4805,'香氛選物；以導航搜尋韓文名選最近分店。'],
  ['My Jeju Gift','마이제주 기프트','購物／伴手禮','舊城／塔洞','제주시 관덕로 일대 · 出發前確認門市',33.5137,126.5238,'紀念品店，適合補貨。'],
  ['Welcome Jeju','웰컴제주','購物／伴手禮','舊城／塔洞','제주시 관덕로 일대 · 出發前確認門市',33.5137,126.5238,'紀念品與伴手禮；以導航確認當日店點。'],
  ['Lounge J','라운지제이','購物／伴手禮','機場西側','제주시 도두일동 697',33.5055,126.4718,'可排在機場／還車前後。'],
  ['Olive Young 中央地下商街','올리브영 제주중앙지하상가점','購物／伴手禮','舊城／塔洞','제주시 중앙로 지하 60',33.5135,126.5233,'D1 固定逛街段已有安排。'],
  ['Daiso 東門市場店','다이소 제주동문시장점','購物／伴手禮','東門市場','제주시 동문로 14',33.5129,126.5271,'旅行小物、收納與零食補給。'],
  ['新羅免稅店濟州店','신라면세점 제주점','購物／伴手禮','新濟州','제주시 노연로 69',33.4843,126.4896,'與 Mochiron 同棟，可先比價。'],
  ['樂天免稅店濟州店','롯데면세점 제주점','購物／伴手禮','新濟州','제주시 도령로 83',33.4891,126.4888,'與新羅比價後再買。'],
  ['樂天百貨濟州店','롯데백화점 제주점','購物／伴手禮','新濟州','제주시 도령로 83',33.4891,126.4888,'服飾、鞋帽、餐飲一次逛。'],
  ['東門傳統市場','동문재래시장','市場小吃','東門市場','제주시 관덕로14길 20',33.5127,126.5280,'3 號門：五日場辣炒年糕／魚板／血腸（BP 同款）、Solbre；另找水果大福與現榨橘子汁。'],
  ['Solbre 冰淇淋可頌','솔브레','市場小吃','東門市場','제주시 동문로 16 일대 · 3號門附近',33.5129,126.5278,'東門市場 3 號門進來一帶；依現場招牌確認。'],
  ['三無麵條','삼무국수','正餐','新濟州','제주시 삼무로3길 46',33.4894,126.4930,'原始清單地址：271-10 Yeon-dong。'],
  ['Dodoreum 韓牛黑豬烤肉','도두름','正餐','新濟州','제주시 연동 272-2',33.4868,126.4914,'韓牛與黑豬烤肉；晚餐建議先確認候位。'],
  ['萬德參雞湯','만덕삼계탕','正餐','新濟州','제주시 노형동 923-17',33.4851,126.4778,'適合雨天或想吃熱湯的備案。'],
  ['BHC 炸雞','BHC 치킨','正餐','全島外送','住宿地址下單（배달의민족 App）',33.5071,126.4928,'不設固定店圖釘；以飯店地址在外送民族搜尋最近門市。'],
  ['橋村炸雞','교촌치킨','正餐','全島多分店','以 Naver／Kakao 搜尋住宿附近分店',33.5071,126.4928,'分店眾多，適合用導航找最近門市。'],
  ['女王韓服','여왕한복','景點／體驗','舊城／塔洞','제주시 관덕로 일대 · 預約前確認地址',33.5135,126.5233,'與牧官衙、觀德亭一起拍照最順。'],
  ['牧官衙・觀德亭','제주목 관아 / 관덕정','景點／體驗','舊城／塔洞','제주시 관덕로 25',33.5139,126.5234,'舊城文化景點，可和 D1 購物串聯。'],
  ['月汀里沙灘','월정리해변','景點／體驗','東線','제주시 구좌읍 월정리 33-3',33.5561,126.7938,'海邊咖啡可找 Mongle 二樓，依天氣調整。'],
  ['城山日出峰','성산일출봉','景點／體驗','城山','서귀포시 성산읍 성산리 1',33.4581,126.9425,'已排 D3 清晨主行程。'],
  ['涉地可支','섭지코지','景點／體驗','城山','서귀포시 성산읍 섭지코지로 107',33.4239,126.9306,'已列 D3 彈性點，牛島船班順利才去。']
  ,['Monsant de Aewol（GD 咖啡）','몽상드애월','咖啡甜點','涯月','제주시 애월읍 애월로1길 25',33.4625,126.3108,'漢潭海岸代表性玻璃海景咖啡；中午光線好、人潮也多。'],
  ['Lazy Pump','레이지펌프','咖啡甜點','涯月','제주시 애월읍 애월로 1길 36',33.4682,126.3180,'二樓方框海景窗是拍照重點；可替代漢潭咖啡。'],
  ['Slowboat Atelier','슬로보트','咖啡甜點','涯月','제주시 애월읍 애월로1길 일대 · 韓文導航定位',33.4735,126.3260,'安靜的手沖／布丁選擇；出發前確認是否有年齡或拍攝規範。'],
  ['Liboire','리부아르','咖啡甜點','涯月','제주시 애월읍 애월로1길 일대 · 韓文導航定位',33.4630,126.3120,'夕陽海景座位；適合與漢潭步道擇一停留。'],
  ['Bomnal Cafe','봄날','咖啡甜點','涯月','제주시 애월읍 애월로1길 25',33.46246,126.30959,'《心情好又暖》取景海景咖啡；可與 Monsant 擇一。'],
  ['Aewol The Sunset','애월더선셋','咖啡甜點','涯月','제주시 애월읍 애월로1길 일대 · 韓文導航定位',33.4580,126.3050,'海景法式吐司與夕陽；適合晚午後。'],
  ["Randy's Donuts 涯月",'랜디스도넛 애월제주점','咖啡甜點','涯月','제주시 애월읍 애월로1길 일대 · 韓文導航定位',33.4620,126.3098,'甜甜圈外帶選項；行程緊時比坐咖啡館有效率。'],
  ['Cafe Delmoondo','카페 델문도','咖啡甜點','咸德','제주시 조천읍 조함해안로 519-10',33.54379,126.668846,'咸德海中岩礁上的海景麵包咖啡；可取代 D2 的其他咖啡。'],
  ['Melts in Villages','멜츠인빌리지','咖啡甜點','咸德','제주시 조천읍 함덕리 일대 · 韓文導航定位',33.5410,126.6650,'咸德巷內法式吐司；避開海邊大店的人潮選擇。'],
  ['Coffee Temple','커피템플','咖啡甜點','朝天','제주시 조천읍 조천리 일대 · 韓文導航定位',33.5280,126.6350,'朝天路段的咖啡備案；適合往東線移動時短停。'],
  ['Blue Bottle Jeju','블루보틀 제주','咖啡甜點','舊左','제주시 구좌읍 송당리 일대 · 韓文導航定位',33.4410,126.7790,'史努比花園周邊的連鎖精品咖啡備案。'],
  ['Gujwa Sanghoe','구좌상회','咖啡甜點','月汀里','제주시 구좌읍 월정리 일대 · 韓文導航定位',33.5530,126.7960,'胡蘿蔔蛋糕與月汀里海岸散步可一起排。'],
  ['Cafe Gongjaksoo','카페공작소','咖啡甜點','世化','제주시 구좌읍 세화리 일대 · 韓文導航定位',33.5250,126.8520,'世化短停時的柑橘茶／甜點備案。'],
  ['Orrrn','오른','咖啡甜點','城山','서귀포시 성산읍 성산리 일대 · 韓文導航定位',33.4560,126.9150,'清水模景觀與牛島花生拿鐵；城山回程可選。'],
  ['ONE AND ONLY','원앤온리','咖啡甜點','安德','서귀포시 안덕면 산방로 141',33.23923,126.3192943,'前看海、後看山房山的早午餐咖啡；山房山段替代點。'],
  ['Manor Blanc','마노르블랑','咖啡甜點','安德','서귀포시 안덕면 일주서로2100번길 46 1층',33.254242,126.29465,'季節花園咖啡；10 月花況與營業時間請先確認。'],
  ['The Cliff','더클리프','咖啡甜點','中文','서귀포시 중문관광로 154-17',33.2814107,126.4111118,'中門海灘夕陽酒吧／咖啡；19:00 後可能有年齡限制。'],
  ['귤꽃다락','귤꽃다락','咖啡甜點','西歸浦','서귀포시 서귀동 일대 · 韓文導航定位',33.2550,126.5820,'市區柑橘系甜點備案，可接偶來市場。'],
  ['숙성도 黑豬肉','숙성도','正餐','新濟州','제주시 노연로 36',33.4860,126.4910,'熱門熟成黑豬肉；建議先用 CatchTable 抽號，現場久候就改其他正餐。'],
  ['豚舍豚','돈사돈','正餐','新濟州','제주시 우평로 19',33.4810,126.4700,'厚切黑豬肉選項；適合機場附近晚餐。'],
  ['明珍鮑魚','명진전복','正餐','舊左','제주시 구좌읍 해맞이해안로 1282',33.53242,126.84985,'鮑魚石鍋飯與烤鮑魚；官方資訊顯示週二休，避開尖峰。'],
  ['Gommak 食堂','곰막식당','正餐','金寧','제주시 구좌읍 구좌해안로 64',33.5520,126.7120,'生魚片拌麵；咸德往東線途中可替換午餐。'],
  ['Olle Guksu','올래국수','正餐','新濟州','제주시 귀아랑길 24',33.4915,126.4975,'濟州豬肉湯麵；開店與晚餐尖峰易排隊。'],
  ['Jeju Olle Myeonok','제주올레면옥 제주공항본점','正餐','機場周邊','제주시 광평동로 19 1층',33.481808,126.47048,'海鮮湯底冷麵／拌麵；機場周邊最後一餐備案。'],
  ['公泉浦食堂','공천포식당','正餐','南元','서귀포시 남원읍 공천포로 일대 · 韓文導航定位',33.2680,126.6720,'水拌生魚片；可與休愛里／南線景點組合。'],
  ['Soonokine Myeongga','순옥이네명가','正餐','機場西側','제주시 도두동 일대 · 韓文導航定位',33.5050,126.4710,'海女海鮮、鮑魚水拌生魚片；還車前備案。'],
  ['Aewol Donkatsu','애월돈가스','正餐','涯月','제주시 애월읍 애월로1길 26-8',33.4620,126.3110,'漢潭周邊黑豬排；適合不想吃海鮮時。'],
  ['西歸浦偶來市場','서귀포매일올레시장','市場小吃','西歸浦','서귀포시 중앙로62번길 18',33.2490,126.5630,'晚餐與伴手禮集中地；海鮮建議選現點現做，避免久放盒裝生魚片。'],
  ['七星路購物街','칠성로쇼핑타운','購物／伴手禮','舊城／塔洞','제주시 칠성로길 일대',33.5145,126.5248,'中央地下商街以外的服飾、鞋帽與在地店家集中區。'],
  ['Nuwemaru 街','누웨마루거리','購物／伴手禮','新濟州','제주시 연동7길 일대',33.4898,126.4955,'新濟州晚間逛街與餐廳密集區；可接免稅店。'],
  ['Shop Jeju 機場店','샵제주 공항점','購物／伴手禮','涯月／機場西側','제주시 애월읍 애월해안로 867',33.4877605,126.3904307,'濟州紀念品、橘子帽與娃娃；海岸道路採買順路。'],
  ['你好 Aewol','애월아안녕','購物／伴手禮','涯月／機場西側','제주시 애월읍 애월해안로 869',33.4878,126.3905,'小而齊全的濟州雜貨與柑橘主題紀念品。'],
  ['9.81 Park Jeju','9.81파크 제주','景點／體驗','涯月','제주시 애월읍 천덕로 880-24',33.3895,126.3736,'重力賽車與室內遊戲；下雨或想要動態體驗時的備案。'],
  ['Eco Land','에코랜드 테마파크','景點／體驗','朝天','제주시 조천읍 번영로 1278-169',33.4564,126.6704,'森林小火車；適合雨天／親子，需預留至少 2 小時。'],
  ['榧子林','비자림','景點／體驗','舊左','제주시 구좌읍 비자숲길 55',33.4907,126.8081,'林蔭步道；雨後濕滑，與東線行程搭配。'],
  ['金寧迷路公園','김녕미로공원','景點／體驗','舊左','제주시 구좌읍 만장굴길 122',33.5447,126.7692,'迷宮與輕鬆散步；適合東線空檔。'],
  ['山君不離','산굼부리','景點／體驗','城山內陸','제주시 조천읍 비자림로 768',33.4302,126.6936,'火山口草原；10 月芒草景色需視當年花況與風勢。'],
  ['大浦柱狀節理帶','대포주상절리대','景點／體驗','中文','서귀포시 이어도로 36-30',33.2374,126.4260,'火山柱狀節理海岸；風大時注意步道與拍照安全。'],
  ['獨立岩','외돌개','景點／體驗','西歸浦','서귀포시 서홍동 791',33.2390,126.5424,'西歸浦海岸散步與礁岩地景；可替換其中一個瀑布。'],
  ['黃牛地海岸','황우지해안','景點／體驗','西歸浦','서귀포시 서홍동 766-1',33.2396,126.5452,'天然岩池海岸；海況不佳時不要下水。']
];
const BACKUP_TYPES = ['全部','咖啡甜點','購物／伴手禮','市場小吃','正餐','景點／體驗'];
const state = { day: 0, location: null, accuracy: null, selected: null, markers: [], routeLine: null, userMarker: null, accuracyCircle: null, deferredPrompt: null, backupType: '全部', backupMarkers: [] };
const map = L.map('map', { zoomControl: true, preferCanvas: true }).setView([33.38, 126.55], 10);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19, attribution: '&copy; OpenStreetMap contributors' }).addTo(map);
const backupMap = L.map('backupMap', { zoomControl: true, preferCanvas: true }).setView([33.38, 126.55], 10);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19, attribution: '&copy; OpenStreetMap contributors' }).addTo(backupMap);
const dayTabs = document.querySelector('#dayTabs');
const stopList = document.querySelector('#stopList');
const gpsStatus = document.querySelector('#gpsStatus');
const navDialog = document.querySelector('#navDialog');
const toast = document.querySelector('#toast');

function kmBetween(aLat, aLng, bLat, bLng) {
  const R = 6371, toRad = d => d * Math.PI / 180;
  const dLat = toRad(bLat-aLat), dLng = toRad(bLng-aLng);
  const a = Math.sin(dLat/2)**2 + Math.cos(toRad(aLat))*Math.cos(toRad(bLat))*Math.sin(dLng/2)**2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
}
function formatDistance(stop) {
  if (!state.location) return '';
  const km = kmBetween(state.location.lat, state.location.lng, stop[3], stop[4]);
  return km < 1 ? `${Math.round(km*1000)} m` : `${km.toFixed(km < 10 ? 1 : 0)} km`;
}
function pinIcon(index, kind) {
  return L.divIcon({ className: '', html: `<div class="marker-pin ${kind}"><span>${index+1}</span></div>`, iconSize:[30,30], iconAnchor:[15,29], popupAnchor:[0,-28] });
}
function showToast(text) {
  toast.textContent = text; toast.classList.add('show');
  clearTimeout(showToast.timer); showToast.timer = setTimeout(()=>toast.classList.remove('show'), 2400);
}
function backupColor(type) {
  return ({'咖啡甜點':'#b45309','購物／伴手禮':'#7c3aed','市場小吃':'#db2777','正餐':'#dc2626','景點／體驗':'#15803d'})[type] || '#0284c7';
}
function backupIcon(place) {
  return L.divIcon({ className: '', html: `<div class="backup-pin" style="--pin:${backupColor(place[2])}"><span>●</span></div>`, iconSize:[27,27], iconAnchor:[13,26], popupAnchor:[0,-25] });
}
function backupNavHtml(place) {
  const query = encodeURIComponent(`${place[1]} 제주`);
  return `<div class="popup-title">${place[0]}</div><div class="popup-address">${place[4]}</div><a class="popup-nav" target="_blank" rel="noopener" href="https://map.naver.com/p/search/${encodeURIComponent(place[1])}">Naver 導航</a> · <a class="popup-nav" target="_blank" rel="noopener" href="https://www.google.com/maps/search/?api=1&query=${query}">Google 地圖</a>`;
}
function renderBackup() {
  const visible = BACKUP_PLACES.filter(p => state.backupType === '全部' || p[2] === state.backupType);
  const filters = document.querySelector('#backupFilters');
  filters.innerHTML = BACKUP_TYPES.map(type => `<button class="filter-button ${state.backupType === type ? 'selected' : ''}" data-type="${type}" type="button">${type}</button>`).join('');
  filters.querySelectorAll('button').forEach(btn => btn.addEventListener('click', () => { state.backupType = btn.dataset.type; renderBackup(); }));
  state.backupMarkers.forEach(marker => backupMap.removeLayer(marker)); state.backupMarkers = [];
  const bounds = [];
  visible.forEach(place => {
    const marker = L.marker([place[5], place[6]], { icon: backupIcon(place) }).addTo(backupMap).bindPopup(backupNavHtml(place));
    state.backupMarkers.push(marker); bounds.push([place[5], place[6]]);
  });
  document.querySelector('#backupCount').textContent = `顯示 ${visible.length} 個備用點 · 點選地址可導航`;
  document.querySelector('#backupList').innerHTML = visible.map(place => `<article class="backup-card"><span class="backup-type" style="--tag:${backupColor(place[2])}">${place[2]}</span><h3>${place[0]}</h3><p class="ko-name">${place[1]}</p><p class="address">地址：${place[4]}</p><p>${place[7]}</p><div class="stop-actions"><button class="show-button" data-backup-show="${BACKUP_PLACES.indexOf(place)}">地圖顯示</button><a class="navigate-button link-button" target="_blank" rel="noopener" href="https://map.naver.com/p/search/${encodeURIComponent(place[1])}">Naver 導航</a></div></article>`).join('');
  document.querySelectorAll('[data-backup-show]').forEach(btn => btn.addEventListener('click', () => {
    const place = BACKUP_PLACES[Number(btn.dataset.backupShow)]; backupMap.setView([place[5], place[6]], 15, { animate: true });
  }));
  if (bounds.length) backupMap.fitBounds(bounds, { padding:[30,30], maxZoom:11 });
}
function showView(view) {
  const itinerary = view === 'itinerary';
  document.querySelector('#itineraryView').hidden = !itinerary;
  document.querySelector('#backupView').hidden = itinerary;
  document.querySelectorAll('.view-button').forEach(btn => btn.classList.toggle('active', btn.dataset.view === view));
  setTimeout(() => { if (itinerary) map.invalidateSize(); else { backupMap.invalidateSize(); renderBackup(); } }, 0);
}
function renderTabs() {
  dayTabs.innerHTML = DAYS.map((d,i)=>`<button class="day-tab" role="tab" aria-selected="${i===state.day}" data-day="${i}"><strong>${d.id}</strong><small>${d.date}</small></button>`).join('');
  dayTabs.querySelectorAll('button').forEach(btn=>btn.addEventListener('click',()=>{ state.day=Number(btn.dataset.day); renderAll(); }));
}
function renderDay() {
  const day = DAYS[state.day];
  document.querySelector('#dayDate').textContent = `${day.id} · ${day.date}`;
  document.querySelector('#dayTitle').textContent = day.title;
  document.querySelector('#dayNote').textContent = day.note;
  stopList.innerHTML = day.stops.map((s,i)=>{
    const dist = formatDistance(s);
    const duration = s[7] ? `<small>停留 ${s[7]} 分</small>` : '';
    return `<article class="stop-card ${s[5]}" data-index="${i}">
      <div class="stop-time">${s[0]}${duration}</div>
      <div><div class="stop-header"><div><h3>${s[1]}</h3><p class="ko-name">${s[2]}</p></div>${dist?`<span class="distance">${dist}</span>`:''}</div>
      <p class="stop-note">${s[6]}</p><div class="stop-actions"><button class="navigate-button" data-nav="${i}">選擇導航</button><button class="show-button" data-show="${i}">地圖顯示</button></div></div>
    </article>`;
  }).join('');
  stopList.querySelectorAll('[data-nav]').forEach(b=>b.addEventListener('click',()=>openNav(Number(b.dataset.nav))));
  stopList.querySelectorAll('[data-show]').forEach(b=>b.addEventListener('click',()=>showOnMap(Number(b.dataset.show))));
}
function renderMarkers() {
  state.markers.forEach(m=>map.removeLayer(m)); state.markers=[];
  if (state.routeLine) map.removeLayer(state.routeLine);
  const bounds=[];
  const routePoints=[];
  DAYS[state.day].stops.forEach((s,i)=>{
    const m=L.marker([s[3],s[4]],{icon:pinIcon(i,s[5])}).addTo(map);
    m.bindPopup(`<div class="popup-title">${i+1}. ${s[1]}</div><div>${s[2]}</div><a href="#" class="popup-nav" data-popup-nav="${i}">選擇導航</a>`);
    m.on('popupopen',()=>setTimeout(()=>document.querySelector(`[data-popup-nav="${i}"]`)?.addEventListener('click',e=>{e.preventDefault();openNav(i);}),0));
    state.markers.push(m); bounds.push([s[3],s[4]]);
    if (s[5] !== 'backup') routePoints.push([s[3],s[4]]);
  });
  state.routeLine=L.polyline(routePoints,{color:'#0ea5e9',weight:4,opacity:.62,dashArray:'8 9',lineCap:'round'}).addTo(map);
  state.routeLine.bringToBack();
  if (bounds.length) map.fitBounds(bounds,{padding:[30,30],maxZoom:12});
}
function renderAll() { renderTabs(); renderDay(); renderMarkers(); }
function showOnMap(index) { const s=DAYS[state.day].stops[index]; map.setView([s[3],s[4]],15,{animate:true}); state.markers[index].openPopup(); document.querySelector('#map').scrollIntoView({behavior:'smooth',block:'center'}); }
function openNav(index) {
  const s=DAYS[state.day].stops[index]; state.selected=s;
  const query=encodeURIComponent(`${s[2]} 제주`);
  const origin=state.location?`${state.location.lat},${state.location.lng}`:'';
  const google=`https://www.google.com/maps/dir/?api=1${origin?`&origin=${origin}`:''}&destination=${query}&travelmode=driving`;
  const apple=`https://maps.apple.com/?daddr=${query}&dirflg=d`;
  const naver=`https://map.naver.com/p/search/${encodeURIComponent(s[2])}`;
  const kakao=`https://map.kakao.com/link/search/${encodeURIComponent(s[2])}`;
  document.querySelector('#navTitle').textContent=s[1];
  document.querySelector('#navSubtitle').textContent=`${s[2]}${formatDistance(s)?` · 距目前位置約 ${formatDistance(s)}`:''}`;
  document.querySelector('#navOptions').innerHTML=`<a class="nav-option google" target="_blank" rel="noopener" href="${google}">Google Maps</a><a class="nav-option apple" target="_blank" rel="noopener" href="${apple}">Apple Maps</a><a class="nav-option naver" target="_blank" rel="noopener" href="${naver}">Naver Map</a><a class="nav-option kakao" target="_blank" rel="noopener" href="${kakao}">Kakao Map</a>`;
  navDialog.showModal();
}
function updateUserPosition(pos) {
  state.location={lat:pos.coords.latitude,lng:pos.coords.longitude}; state.accuracy=pos.coords.accuracy;
  const ll=[state.location.lat,state.location.lng];
  if(state.userMarker){state.userMarker.setLatLng(ll);state.accuracyCircle.setLatLng(ll).setRadius(state.accuracy);} else {
    state.userMarker=L.circleMarker(ll,{radius:9,color:'#fff',weight:4,fillColor:'#2563eb',fillOpacity:1}).addTo(map).bindPopup('你的目前位置');
    state.accuracyCircle=L.circle(ll,{radius:state.accuracy,color:'#2563eb',weight:1,fillColor:'#60a5fa',fillOpacity:.12}).addTo(map);
  }
  gpsStatus.textContent=`定位完成 · 誤差約 ${Math.round(state.accuracy)} 公尺`; gpsStatus.className='status-pill active';
  map.setView(ll,14); renderDay();
}
function locate() {
  if(!navigator.geolocation){gpsStatus.textContent='此瀏覽器不支援定位';gpsStatus.className='status-pill error';return;}
  gpsStatus.textContent='正在取得位置…'; gpsStatus.className='status-pill';
  navigator.geolocation.getCurrentPosition(updateUserPosition,err=>{ gpsStatus.textContent=err.code===1?'請允許瀏覽器使用位置':'無法取得位置，請稍後重試'; gpsStatus.className='status-pill error'; },{enableHighAccuracy:true,timeout:12000,maximumAge:15000});
}
function nearest() {
  if(!state.location){locate();showToast('請先允許定位，再找最近景點');return;}
  let best={i:0,d:Infinity}; DAYS[state.day].stops.forEach((s,i)=>{const d=kmBetween(state.location.lat,state.location.lng,s[3],s[4]);if(d<best.d)best={i,d};});
  showOnMap(best.i); showToast(`最近：${DAYS[state.day].stops[best.i][1]}，約 ${best.d.toFixed(1)} 公里`);
}
document.querySelector('#locateBtn').addEventListener('click',locate);
document.querySelector('#fitDayBtn').addEventListener('click',renderMarkers);
document.querySelector('#nearestBtn').addEventListener('click',nearest);
document.querySelectorAll('.view-button').forEach(btn=>btn.addEventListener('click',()=>showView(btn.dataset.view)));
document.querySelector('#fitBackupBtn').addEventListener('click',()=>{
  const visible = state.backupMarkers.map(marker => marker.getLatLng());
  if (visible.length) backupMap.fitBounds(visible,{padding:[30,30],maxZoom:11});
});
document.querySelector('#clearFiltersBtn').addEventListener('click',()=>{state.backupType='全部';renderBackup();});
document.querySelector('#copyPlaceBtn').addEventListener('click',async()=>{if(!state.selected)return;await navigator.clipboard.writeText(state.selected[2]);showToast('已複製韓文地標名稱');});
window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();state.deferredPrompt=e;document.querySelector('#installBtn').hidden=false;});
document.querySelector('#installBtn').addEventListener('click',async()=>{if(!state.deferredPrompt)return;state.deferredPrompt.prompt();await state.deferredPrompt.userChoice;state.deferredPrompt=null;document.querySelector('#installBtn').hidden=true;});
if('serviceWorker' in navigator) window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js'));
renderAll();
renderBackup();
