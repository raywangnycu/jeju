const DAYS = [
  {
    id: 'D1', date: '9/28（一）', title: '機場、舊城與塔洞', note: '紅眼抵達日以休息為主。景點集中在東門、塔洞生活圈。',
    stops: [
      ['06:10','濟州國際機場','제주국제공항',33.5071,126.4928,'main','抵達後前往租車接駁區。',90],
      ['07:00','樂天租車濟州 Auto House','롯데렌터카 제주 오토하우스',33.5067,126.4765,'main','地址：제주시 용해로 92。確認車況、保險與油種。',60],
      ['08:10','宇進解酒湯','우진해장국',33.5115,126.5200,'flex','候位超過 30 分鐘就改附近早餐。',60],
      ['09:30','Island Stay 寄放行李','제주 아일랜드 스테이',33.5182,126.5274,'main','地址：제주시 임항로 36-1。住宿在 3–4 樓且無電梯。',60],
      ['11:30','DOTOREE Kitchen','도토리키친 제주',33.5148,126.5219,'main','午餐候位不可超過 30 分鐘。',60],
      ['12:45','中央地下商街與 Olive Young','제주중앙지하상가',33.5135,126.5233,'main','購物控制在 75 分鐘內。',75],
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
    id: 'D4', date: '10/1（四）', title: '西歸浦瀑布與安德展覽', note: '上午瀑布、下午室內展。牛沼河口只能取代其中一個瀑布，不另外加塞。',
    stops: [
      ['09:00','天地淵瀑布','천지연폭포',33.2447,126.5544,'main','保留 75 分鐘步道與拍照。',75],
      ['10:20','正房瀑布','정방폭포',33.2449,126.5716,'main','步道濕滑時縮短。',55],
      ['11:15','조림명가 午餐','조림명가 서귀포',33.2478,126.5710,'main','候位超過 20 分鐘改偶來市場。',60],
      ['12:45','濟州 Waterworld 航海王展','워터월드 제주 원피스',33.2462,126.5093,'main','出發前確認展期、票券與最後入場。',120],
      ['15:25','Dolcori Forest','돌코리숲',33.3062,126.3522,'main','週二休園；保留 60 分鐘。',60],
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
      ['09:10','涯月漢潭海岸散步路','애월 한담해안산책로',33.4598,126.3104,'main','海岸散步與咖啡，保留至少 100 分鐘。',100],
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

const state = { day: 0, location: null, accuracy: null, selected: null, markers: [], routeLine: null, userMarker: null, accuracyCircle: null, deferredPrompt: null };
const map = L.map('map', { zoomControl: true, preferCanvas: true }).setView([33.38, 126.55], 10);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19, attribution: '&copy; OpenStreetMap contributors' }).addTo(map);
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
document.querySelector('#copyPlaceBtn').addEventListener('click',async()=>{if(!state.selected)return;await navigator.clipboard.writeText(state.selected[2]);showToast('已複製韓文地標名稱');});
window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();state.deferredPrompt=e;document.querySelector('#installBtn').hidden=false;});
document.querySelector('#installBtn').addEventListener('click',async()=>{if(!state.deferredPrompt)return;state.deferredPrompt.prompt();await state.deferredPrompt.userChoice;state.deferredPrompt=null;document.querySelector('#installBtn').hidden=true;});
if('serviceWorker' in navigator) window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js'));
renderAll();
