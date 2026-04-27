const mapData = {
    story: {
        title: "女力故事 ✨",
        content: `
            <div class="placeholder-card">
                <h2>那些年的轉型之路</h2>
                <p style="color: #636e72; line-height: 1.6;">這裡會以網誌的形式，展示各式各樣的轉型故事。員工的心路歷程、公司政策的變化等等。故事總是充滿啟發，看看他們是如何克服困難，突破舒適圈的吧！</p>
                <div style="margin-top: 15px; font-size: 0.9rem; color: #b2bec3;">發布於 2024-04-10</div>
            </div>
            <div class="placeholder-card">
                <h2>從零到一的挑戰</h2>
                <p style="color: #636e72; line-height: 1.6;">閱讀更多關於真實發生的職場成長記。面對未知領域，我們需要的是勇氣與不斷學習的能力。</p>
                <div style="margin-top: 15px; font-size: 0.9rem; color: #b2bec3;">發布於 2024-03-22</div>
            </div>
        `
    },
    quiz: {
        title: "職缺測驗 🎯",
        content: `
            <div class="placeholder-card" style="text-align: center; padding: 60px 20px;">
                <h2 style="font-size: 2rem; margin-bottom: 20px;">不知道該往哪裡發展嗎？</h2>
                <p style="margin-bottom: 40px; color: #636e72; font-size: 1.1rem;">透過 5 分鐘的小測驗，幫您找到最適合您的事業體與相關職缺！</p>
                <button style="background: var(--primary-color); color: white; border: none; padding: 15px 40px; border-radius: 30px; font-size: 1.2rem; cursor: pointer; font-weight: bold; transition: opacity 0.2s; box-shadow: 0 4px 15px rgba(255, 107, 107, 0.4);">
                    開始測驗 ▶
                </button>
            </div>
        `
    },
    units: {
        title: "事業體介紹 🏢",
        content: `
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px;">
                <div class="placeholder-card" style="cursor: pointer; border-top: 5px solid #0984e3;">
                    <h2 style="color: #0984e3;">水泥與循環經濟</h2>
                    <p style="color: #636e72; line-height: 1.6; font-weight: bold;">「半世紀的堅持，只為構築更美好的家。」
                    <p style="color: #636e72; line-height: 1.6; margin-bottom: 15px;">嘉新水泥自 1954 年成立以來，始終秉持『品質為先，客戶為重』的初心 。我們不只是台灣最大的水泥倉儲與裝卸專家，在台中、基隆兩大港口擁有高達 8.3 萬噸的穩健供給力 ，更是環保裝卸與循環經濟的先行者 。

現在，我們正踏上多角化與國際化的全新征途 。透過策略性投資與密閉式環保設施，我們將傳統產業的「韌性」轉化為守護地球的「永續力」 。在嘉新，水泥不再只是冰冷的建材，而是連結國際佈局、實踐社會責任的溫度連結 。我們誠摯邀請你，與嘉新一同在環境永續的藍圖上，蓋出屬於你的價值堡壘。</p>
                </div>
                <div class="placeholder-card" style="cursor: pointer; border-top: 5px solid #00b894;">
                    <h2 style="color: #00b894;">資產管理</h2>
                    <p style="color: #636e72; line-height: 1.6; font-weight: bold;">「不只是活化資產，我們更在定義未來的空間價值。」
                    <p style="color: #636e72; line-height: 1.6; margin-bottom: 15px;">嘉新資產開發以集團自有資產的活化、管理及都市更新為核心使命 。我們不僅僅是土地的管理者，更是價值的創造者，透過整合內部資源與外部投資，讓每一吋土地都能配合集團目標，發揮最大的社會與經濟影響力 。

從高雄岡山廠、亞洲新灣區到大崗山，我們精準佈局，持續提升資產價值 。我們專注於優化每一項物業管理，確保租賃績效與永續發展並進 。在嘉新，資產開發是一場「空間的深度對話」，我們誠邀具備遠見的你，與我們一起將鋼鐵與水泥的場域，轉化為更具生命力的城市風景。</p>
                </div>
                <div class="placeholder-card" style="cursor: pointer; border-top: 5px solid #fdcb6e;">
                    <h2 style="color: #e1b12c;">健康照護</h2>
                    <p style="color: #636e72; line-height: 1.6; font-weight: bold;">「從生命起點到銀髮悠然，守護每一刻的理想生活。」
                    <p style="color: #636e72; line-height: 1.6; margin-bottom: 15px;">嘉新健康照護事業以翻轉人生、成就理想生活為基準，針對不同人生階段的『健康』需求，提供從飲食到運動的全方位支持。我們深信，無論處於哪一個階段，每個人都值得擁有健康且自在的成就感。
                    <ul style="padding-left: 20px; line-height: 2; color: #636e72;">
                        <li><strong>人之初產後護理之家：</strong>整合醫療、五星旅宿與客製化健身飲食，讓產後調養化身為極致的放鬆享受 。
                        <li><strong>健康建築標竿：</strong>比照 WELL 健康建築標準，嚴選建材融合陽光、空氣、水，打造最安全純淨的照護環境。
                        <li><strong>專業跨界團隊：</strong>結合中西醫、營養師、物理治療師與專業教練，客製化調理身體機能，強化肌力與靈活性，帶你找回年輕的狀態。
                        <li><strong>全齡生態圈布局：</strong>2021 年起，我們策略性投資「智齡科技」與「吉品養生」，將健康照護延伸至高齡生活與養生食品，建構完整的健康照護生態圈。</p>
                </div>
                <div class="placeholder-card" style="cursor: pointer; border-top: 5px solid #d63031;">
                    <h2 style="color: #d63031;">旅宿服務</h2>
                    <p style="color: #636e72; line-height: 1.6; margin-bottom: 15px; font-weight: bold;">「不只經營飯店，我們在城市中策畫一場人文盛宴。」</p>
                    <p style="color: #636e72; line-height: 1.6; margin-bottom: 15px;">嘉新旅宿事業以提供更美好的生活為目標，將在地人文、地方共生與生活風格融入互動聚落。我們希望旅客不只是短暫停留，而是能深度體驗當地的藝術風情，帶走一場獨一無二的旅遊回憶。</p>
                    <ul style="padding-left: 20px; line-height: 2; color: #636e72;">
                        <li><strong>Hotel Collective（沖繩那霸）：</strong>集合在地人文藝術，展現多元文化與種族的完美融合，落腳於歷史豐富的沖繩，激盪出獨特的文化共融體驗。</li>
                        <li><strong>強強聯手：</strong>與 洲際酒店集團 合作打造「沖繩豐崎渡假酒店」，並與 LDC 雲朗觀光 共同投資羅馬渡假酒店「A. Roma」，展現嘉新在國際市場的雄心。</li>
                        <li><strong>策略性投資與佈局：</strong>取得雲朗觀光集團 23.1% 股權，透過策略性結盟拓展服務版圖，期待提供人們更多元的深度旅宿體驗。</li>
                    </ul>
                </div>
            </div>
        `
    },
    culture: {
        title: "企業文化 🤝",
        content: `
            <div class="placeholder-card">
                <h2>我們的核心價值觀</h2>
                <ul style="padding-left: 20px; line-height: 2; margin-top: 15px; color: #636e72;">
                    <li><strong>💡 創新思維：</strong> 不怕犯錯，勇敢嘗試新事物、跳脫框架。</li>
                    <li><strong>🤲 團隊合作：</strong> 互相支持，以 One Team 精神共同達成目標。</li>
                    <li><strong>📚 持續學習：</strong> 保持好奇心，鼓勵不斷精進自我並分享知識。</li>
                </ul>
            </div>
            <div class="placeholder-card">
                <h2>工作環境與福利</h2>
                <p style="color: #636e72; line-height: 1.6;">我們提供彈性工時、豐富的零食飲料吧、以及定期的團隊建立 (Team Building) 活動，致力於打造一個舒適、開放且充滿活力的工作氛圍。</p>
            </div>
        `
    },
    benefits: {
        title: "社群傳送門 🌐",
        content: `
            <p style="text-align: center; color: #636e72; font-size: 1.1rem; margin-bottom: 30px;">點擊下方卡片，深入了解嘉新企業團的多元面貌與最新動態。</p>
            <div class="social-grid">
                <a href="https://www.facebook.com/p/嘉新企業團-100063882524535/" target="_blank" class="social-card fb">
                    <img src="assets/icon_fb.png" alt="Facebook" class="social-icon">
                    <div class="social-title">Facebook</div>
                    <div class="social-summary">企業官方動態</div>
                </a>
                
                <a href="#" target="_blank" class="social-card threads" onclick="alert('Threads 連結尚未提供，敬請期待！'); return false;">
                    <img src="assets/icon_threads.png" alt="Threads" class="social-icon">
                    <div class="social-title">Threads</div>
                    <div class="social-summary">嘉新日常與快訊</div>
                </a>
                
                <a href="https://www.instagram.com/chcgroup_career.tw" target="_blank" class="social-card ig">
                    <img src="assets/icon_ig.png" alt="Instagram" class="social-icon">
                    <div class="social-title">Instagram</div>
                    <div class="social-summary">職場生活與活動</div>
                </a>
                
                <a href="https://www.chcgroup.com.tw/" target="_blank" class="social-card website">
                    <img src="assets/icon_chc.png" alt="嘉新官網" class="social-icon">
                    <div class="social-title">嘉新官網</div>
                    <div class="social-summary">投資人與企業資訊</div>
                </a>
                
                <a href="https://www.104.com.tw/company/5gonzzc?jobsource=google" target="_blank" class="social-card job104">
                    <img src="assets/icon_104.png" alt="104人力資源" class="social-icon">
                    <div class="social-title">104 人力銀行</div>
                    <div class="social-summary">最新職缺與投遞</div>
                </a>
            </div>
        `
    }
};

function navigateTo(viewId) {
    const mapView = document.getElementById('map-view');
    const contentView = document.getElementById('content-view');
    
    if (viewId === 'map') {
        mapView.classList.add('active');
        mapView.classList.remove('hidden');
        contentView.classList.remove('active');
        contentView.classList.add('hidden');
        
        if (typeof gtag === 'function') {
            gtag('event', 'return_to_map');
        }
    } else {
        const data = mapData[viewId];
        if (data) {
            document.getElementById('content-title').innerText = data.title;
            // Add a small fade effect when updating content
            const contentBody = document.getElementById('content-body');
            contentBody.style.opacity = 0;
            setTimeout(() => {
                contentBody.innerHTML = data.content;
                contentBody.style.opacity = 1;
                contentBody.style.transition = 'opacity 0.3s ease';
            }, 150);
            
            mapView.classList.remove('active');
            mapView.classList.add('hidden');
            contentView.classList.add('active');
            contentView.classList.remove('hidden');
            
            if (typeof gtag === 'function') {
                gtag('event', 'view_feature', {
                    'feature_name': viewId,
                    'feature_title': data.title
                });
            }
        }
    }
}

// Handle closing the intro overlay
function closeIntro() {
    const introOverlay = document.getElementById('intro-overlay');
    if (introOverlay) {
        introOverlay.classList.add('hidden');
        
        // Optional: Track that the user entered the map from the intro
        if (typeof gtag === 'function') {
            gtag('event', 'enter_map_from_intro');
        }
    }
}
