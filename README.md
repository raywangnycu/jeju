# 濟州六日備援導航

手機優先的靜態旅遊工具，包含六日行程、OpenStreetMap 地圖、瀏覽器定位，以及 Google Maps、Apple Maps、Naver Map、Kakao Map 導航入口。

網站以兩張地圖分流：

- **每日已排行程地圖**：六日自駕動線、固定／彈性／備案點與即時定位。
- **備用景點・餐廳・購物地圖**：咖啡甜點、東門市場小吃、正餐、香水與伴手禮、景點體驗，可按類型篩選並顯示韓文地標及地址。

## 本機預覽

以任意靜態伺服器開啟此資料夾，例如 `python -m http.server 4173`，再瀏覽 `http://localhost:4173`。

## GitHub Pages

網站不需要建置。將 repository 的 Pages 來源設定為 `main` branch 根目錄即可。

定位功能在 GitHub Pages 的 HTTPS 網址或 localhost 上可用。行程內容可由 Service Worker 快取；地圖圖磚與外部導航仍需要網路。
