const mapData = {
    story: {
        title: "嘉人視角專區 👀",
        content: `
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px;">
                <div class="placeholder-card" style="border-top: 5px solid #ff7675;">
                    <h2 style="color: #ff7675; margin-bottom: 10px;">女力領導</h2>
                    <p style="color: #636e72; line-height: 1.6;">在嘉新，我們相信多元共融的力量。這裡有著無數傑出的女性領導者，她們以堅韌、細膩與創新的思維，帶領團隊在各個事業體中不斷突破。閱讀她們的故事，看見溫柔而堅定的女力如何推動企業前進。</p>
                </div>
                <div class="placeholder-card" style="border-top: 5px solid #74b9ff; cursor: pointer; transition: all 0.2s;" onmouseover="this.style.transform='translateY(-5px)'; this.style.boxShadow='0 8px 25px rgba(116, 185, 255, 0.2)';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(0,0,0,0.05)';" onclick="navigateTo('story_care')">
                    <h2 style="color: #74b9ff; margin-bottom: 10px;">全面員工支持與關懷</h2>
                    <p style="color: #636e72; line-height: 1.6; font-weight: bold; margin-bottom: 10px;">360 度全方位福利</p>
                    <p style="color: #636e72; line-height: 1.6;">從「日常彈性」、「身心健康」、「財富保障」到「生老病死」的全方位照顧。我們提供優於法規的假勤與各項補助，做為嘉人們最安心的後盾，打造工作與生活雙贏的幸福職場。</p>
                    <div style="margin-top: 15px; font-weight: bold; color: #74b9ff; text-align: right;">探索完整福利 ▶</div>
                </div>
                <div class="placeholder-card" style="border-top: 5px solid #a29bfe;">
                    <h2 style="color: #a29bfe; margin-bottom: 10px;">嘉人計畫</h2>
                    <p style="color: #636e72; line-height: 1.6; font-weight: bold; margin-bottom: 10px;">實習生怎麼說</p>
                    <p style="color: #636e72; line-height: 1.6;">「嘉人計畫」是我們培育未來人才的搖籃。在這裡，實習生不只是旁觀者，而是實際參與專案的實作夥伴。聽聽歷屆實習生分享他們在嘉新的成長歷程、獲得的啟發，以及這段寶貴經歷如何影響他們的職涯發展。</p>
                </div>
                <div class="placeholder-card" style="border-top: 5px solid #fdcb6e; cursor: pointer; transition: all 0.2s;" onmouseover="this.style.transform='translateY(-5px)'; this.style.boxShadow='0 8px 25px rgba(253, 203, 110, 0.2)';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(0,0,0,0.05)';" onclick="navigateTo('story_benefits')">
                    <h2 style="color: #fdcb6e; margin-bottom: 10px;">生活由我定義</h2>
                    <p style="color: #636e72; line-height: 1.6; font-weight: bold; margin-bottom: 10px;">彈性工作日常</p>
                    <p style="color: #636e72; line-height: 1.6;">早鳥還是夜貓？別人補班我們在幹嘛？透過真實的嘉人視角，帶你偷看我們的貼心福利，了解嘉新如何實踐「工作與生活完美平衡」！</p>
                    <div style="margin-top: 15px; font-weight: bold; color: #fdcb6e; text-align: right;">偷偷看嘉人動態 👀 ▶</div>
                </div>
            </div>
        `
    },
    story_benefits: {
        title: "生活由我定義 🛋️",
        content: `
            <div style="max-width: 600px; margin: 0 auto; padding-bottom: 40px; display: flex; flex-direction: column; gap: 25px;">
                
                <!-- Card 1 -->
                <div style="background: white; border-radius: 15px; padding: 25px; box-shadow: 0 4px 15px rgba(0,0,0,0.05); border: 1px solid #f1f2f6;">
                    <div style="display: flex; align-items: center; margin-bottom: 15px;">
                        <div style="width: 50px; height: 50px; border-radius: 50%; background: #ffeaa7; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; margin-right: 15px;">👩🏻‍💻</div>
                        <div>
                            <div style="font-weight: bold; color: #2d3436; font-size: 1.1rem;">嘉人 H 小姐</div>
                            <div style="color: #b2bec3; font-size: 0.9rem;">2 小時前</div>
                        </div>
                    </div>
                    <div style="margin-bottom: 15px;">
                        <h3 style="color: #fdcb6e; margin-bottom: 10px; font-size: 1.3rem;">✨ 彈性上下班 ╳ 每月 3 日遠距辦公日</h3>
                        <p style="color: #636e72; line-height: 1.8; font-size: 1.1rem;">早鳥型還是夜貓型？<br>在嘉新你都可以做自己～<br><br>每天早起精神百倍，或偶爾睡晚一點點 😴<br>還有每月 3 次不用出門的遠距日，<br>上班模式自由選，工作生活完美平衡！</p>
                    </div>
                    <div style="color: #0984e3; font-weight: bold; font-size: 0.95rem;">
                        #嘉新以人為本 #WorkLifeBalance
                    </div>
                </div>

                <!-- Card 2 -->
                <div style="background: white; border-radius: 15px; padding: 25px; box-shadow: 0 4px 15px rgba(0,0,0,0.05); border: 1px solid #f1f2f6;">
                    <div style="display: flex; align-items: center; margin-bottom: 15px;">
                        <div style="width: 50px; height: 50px; border-radius: 50%; background: #81ecec; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; margin-right: 15px;">👨🏽‍💻</div>
                        <div>
                            <div style="font-weight: bold; color: #2d3436; font-size: 1.1rem;">嘉人 C 先生</div>
                            <div style="color: #b2bec3; font-size: 0.9rem;">5 小時前</div>
                        </div>
                    </div>
                    <div style="margin-bottom: 15px;">
                        <h3 style="color: #00cec9; margin-bottom: 10px; font-size: 1.3rem;">✨ 補班日免進辦公室 ╳ 重要節日前一天彈性下班</h3>
                        <p style="color: #636e72; line-height: 1.8; font-size: 1.1rem;">別人補班心酸酸，嘉人躺平好舒坦～ 🏖️<br>補班日免進公司，好好生活快樂滿分！<br><br>節日前一天，下午自由下班去，<br>提前開啟放假模式，返鄉出遊不塞車 🚗</p>
                    </div>
                    <div style="color: #0984e3; font-weight: bold; font-size: 0.95rem;">
                        #嘉新以人為本 #放假總是快一步
                    </div>
                </div>

                <!-- Card 3 -->
                <div style="background: white; border-radius: 15px; padding: 25px; box-shadow: 0 4px 15px rgba(0,0,0,0.05); border: 1px solid #f1f2f6;">
                    <div style="display: flex; align-items: center; margin-bottom: 15px;">
                        <div style="width: 50px; height: 50px; border-radius: 50%; background: #a29bfe; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; margin-right: 15px;">🙋🏻‍♂️</div>
                        <div>
                            <div style="font-weight: bold; color: #2d3436; font-size: 1.1rem;">嘉人 W 先生</div>
                            <div style="color: #b2bec3; font-size: 0.9rem;">昨天</div>
                        </div>
                    </div>
                    <div style="margin-bottom: 15px;">
                        <h3 style="color: #6c5ce7; margin-bottom: 10px; font-size: 1.3rem;">✨ 新人假 2 日 ╳ 生日假半日</h3>
                        <p style="color: #636e72; line-height: 1.8; font-size: 1.1rem;">加入嘉新滿三個月，立馬解鎖 2 天假 🔓<br>恭喜你正式升級、擺脫新手慌張期！<br><br>生日還加碼半天幸福特權 🎂<br>努力工作的你，值得更多小確幸！</p>
                    </div>
                    <div style="color: #0984e3; font-weight: bold; font-size: 0.95rem;">
                        #新人禮包解鎖 #生日好好放個假
                    </div>
                </div>

                <div style="text-align: center; margin-top: 20px;">
                    <button onclick="navigateTo('story')" style="background: white; color: #fdcb6e; border: 2px solid #fdcb6e; padding: 10px 30px; border-radius: 30px; font-size: 1.1rem; cursor: pointer; font-weight: bold; transition: all 0.2s;">
                        ← 返回嘉人視角
                    </button>
                </div>
            </div>
        `
    },
    story_care: {
        title: "全面員工支持與關懷 🎁",
        content: `
            <div style="max-width: 800px; margin: 0 auto; padding-bottom: 40px;">
                <p style="text-align: center; color: #636e72; font-size: 1.1rem; margin-bottom: 30px;">嘉新從四大維度出發，為員工編織全方位的支持網，做您最安心的後盾。</p>
                
                <div style="display: flex; flex-direction: column; gap: 20px;">
                    <!-- Category 1 -->
                    <div style="background: white; border-radius: 15px; border-left: 8px solid #fdcb6e; padding: 25px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
                        <h3 style="color: #fdcb6e; font-size: 1.4rem; margin-bottom: 15px; display: flex; align-items: center;"><span style="font-size: 1.8rem; margin-right: 10px;">⚖️</span> 彈性自主｜工作與生活平衡</h3>
                        <ul style="color: #636e72; line-height: 1.8; font-size: 1.05rem; padding-left: 20px; margin: 0;">
                            <li><b>彈性出勤：</b> 上班 07:30-09:30／下班 16:30-18:30。</li>
                            <li><b>遠距辦公：</b> 每月可申請 3 日。</li>
                            <li><b>節慶小確幸：</b> 重要節日前半天提早下班。</li>
                            <li><b>專屬假勤：</b> 新人假（通過試用期即享 2 日）、生日假（當月半日）、志工假（每年 6 天）。</li>
                        </ul>
                    </div>

                    <!-- Category 2 -->
                    <div style="background: white; border-radius: 15px; border-left: 8px solid #ff7675; padding: 25px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
                        <h3 style="color: #ff7675; font-size: 1.4rem; margin-bottom: 15px; display: flex; align-items: center;"><span style="font-size: 1.8rem; margin-right: 10px;">🍼</span> 友善家庭｜迎接新生命與全齡照護</h3>
                        <ul style="color: #636e72; line-height: 1.8; font-size: 1.05rem; padding-left: 20px; margin: 0;">
                            <li><b>好孕與育兒：</b> 生育禮金 $10,000＋幸福禮包（價值 $5,000）；育兒補助每年每名最高 $6,000。</li>
                            <li><b>優照護專案：</b> 幼兒與長輩「臨時照顧補助」，每年每名最高 $6,000。</li>
                            <li><b>生養假期（優於法規）：</b> 產檢假 10 天、陪產檢及陪產假 10 天。</li>
                            <li><b>子女教育：</b> 依福委會獎助學金辦法核給。</li>
                        </ul>
                    </div>

                    <!-- Category 3 -->
                    <div style="background: white; border-radius: 15px; border-left: 8px solid #00b894; padding: 25px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
                        <h3 style="color: #00b894; font-size: 1.4rem; margin-bottom: 15px; display: flex; align-items: center;"><span style="font-size: 1.8rem; margin-right: 10px;">🏃🏻‍♀️</span> 身心健康｜活力與醫療照護</h3>
                        <ul style="color: #636e72; line-height: 1.8; font-size: 1.05rem; padding-left: 20px; margin: 0;">
                            <li><b>醫療防護：</b> 免費流感疫苗、健康檢查、心理健康講座、職場護理師駐點、24 小時 EAP 服務、CPR & AED 訓練。</li>
                            <li><b>專屬健檢假：</b> 每年 1 天。</li>
                            <li><b>運動與活力：</b> 員工專屬五星級健身房、各項運動社團（籃球、街舞、瑜珈等）。</li>
                        </ul>
                    </div>

                    <!-- Category 4 -->
                    <div style="background: white; border-radius: 15px; border-left: 8px solid #0984e3; padding: 25px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
                        <h3 style="color: #0984e3; font-size: 1.4rem; margin-bottom: 15px; display: flex; align-items: center;"><span style="font-size: 1.8rem; margin-right: 10px;">🛡️</span> 安心後盾｜生活轉折與財富保障</h3>
                        <ul style="color: #636e72; line-height: 1.8; font-size: 1.05rem; padding-left: 20px; margin: 0;">
                            <li><b>全薪照顧假（優於法規）：</b> 無剩餘特休者，全薪病假／全薪家庭照顧假皆為一年上限 3 日。</li>
                            <li><b>優於法規喪假：</b> 父母、配偶喪亡者可申請 10 天。</li>
                            <li><b>員工持股信託計畫：</b> 參加者每月提撥固定薪資，<b>公司相對提撥 100% 獎勵金</b>，保障未來財富！</li>
                        </ul>
                    </div>
                </div>

                <div style="text-align: center; margin-top: 30px;">
                    <button onclick="navigateTo('story')" style="background: white; color: #74b9ff; border: 2px solid #74b9ff; padding: 10px 30px; border-radius: 30px; font-size: 1.1rem; cursor: pointer; font-weight: bold; transition: all 0.2s;">
                        ← 返回嘉人視角
                    </button>
                </div>
            </div>
        `
    },
    quiz: {
        title: "職缺測驗 🎯",
        content: `
            <div id="quiz-container" class="quiz-container">
                <!-- Content will be injected by JS -->
            </div>
        `
    },
    units: {
        title: "嘉新永續方舟 🌱",
        content: `
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px;">
                <div class="placeholder-card" style="border-top: 5px solid #2ecc71; cursor: pointer; transition: all 0.2s;" onmouseover="this.style.transform='translateY(-5px)'; this.style.boxShadow='0 8px 25px rgba(46, 204, 113, 0.2)';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(0,0,0,0.05)';" onclick="navigateTo('esg_e')">
                    <h2 style="color: #2ecc71; margin-bottom: 10px;">E 環境共好</h2>
                    <p style="color: #636e72; line-height: 1.6;">嘉新致力於與自然和諧共存，透過導入綠能與先進的環保科技，實踐節能減碳的承諾。點擊探索我們如何結合科技與環保，創造永續的綠色典範。</p>
                    <div style="margin-top: 15px; font-weight: bold; color: #2ecc71; text-align: right;">探索環境故事 ▶</div>
                </div>
                <div class="placeholder-card" style="border-top: 5px solid #f39c12; cursor: pointer; transition: all 0.2s;" onmouseover="this.style.transform='translateY(-5px)'; this.style.boxShadow='0 8px 25px rgba(243, 156, 18, 0.2)';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(0,0,0,0.05)';" onclick="navigateTo('esg_s')">
                    <h2 style="color: #f39c12; margin-bottom: 10px;">S 社會共榮</h2>
                    <p style="color: #636e72; line-height: 1.6;">我們深信企業必須回饋社會。透過長期投入教育資源與危機時刻的在地送暖，嘉新將關懷化為實際行動。點擊了解那些改變社會的動人故事。</p>
                    <div style="margin-top: 15px; font-weight: bold; color: #f39c12; text-align: right;">探索社會故事 ▶</div>
                </div>
                <div class="placeholder-card" style="border-top: 5px solid #3498db; cursor: pointer; transition: all 0.2s;" onmouseover="this.style.transform='translateY(-5px)'; this.style.boxShadow='0 8px 25px rgba(52, 152, 219, 0.2)';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(0,0,0,0.05)';" onclick="navigateTo('esg_g')">
                    <h2 style="color: #3498db; margin-bottom: 10px;">G 透明治理</h2>
                    <p style="color: #636e72; line-height: 1.6;">透明的溝通與責任是我們治理的核心。從高層主管的「公開認錯」到 ESG 目標的直接掛鉤，我們堅持「玩真的」。點擊查看我們的治理之道。</p>
                    <div style="margin-top: 15px; font-weight: bold; color: #3498db; text-align: right;">探索治理故事 ▶</div>
                </div>
            </div>
        `
    },
    esg_e: {
        title: "環境共好 🌱",
        content: `
            <div style="max-width: 800px; margin: 0 auto; padding-bottom: 40px;">
                <div style="margin-bottom: 40px; background: white; border-radius: 15px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
                    <img src="assets/hotel_collective_green_1777903516524.png" alt="Hotel Collective" style="width: 100%; height: 350px; object-fit: cover; display: block;">
                    <div style="padding: 30px;">
                        <h2 style="color: #2ecc71; font-size: 1.8rem; margin-bottom: 15px;">科技與環保結合的沖繩綠洲（Hotel Collective）</h2>
                        <p style="color: #636e72; line-height: 1.8; font-size: 1.1rem; margin-bottom: 20px;">在打造沖繩旅宿 Hotel Collective 的過程中，我們不單單追求舒適與奢華，更將「與自然和諧共存」作為核心理念。這座飯店導入了先進的環保科技，包含雨水回收系統、節能空調以及太陽能供電模組。這不僅大幅降低了能源消耗，更讓每一位旅客在享受極致體驗的同時，感受到我們對地球的愛護與承諾。這裡是一座真正的城市綠洲。</p>
                    </div>
                </div>
                
                <div style="margin-bottom: 20px; background: white; border-radius: 15px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
                    <div style="padding: 30px;">
                        <h2 style="color: #2ecc71; font-size: 1.8rem; margin-bottom: 15px;">五十歲老建物的綠色重生（嘉新大樓）</h2>
                        <p style="color: #636e72; line-height: 1.8; font-size: 1.1rem;">誰說老舊建築不能成為綠能標竿？具有半世紀歷史的嘉新大樓，透過我們持續的綠能改造與能源管理系統升級，不僅成功降低了用電量與碳排放，更重獲新生。這證明了只要有決心，傳統建築也能在節能減碳的道路上，走出自己的一片綠意。</p>
                    </div>
                </div>
                
                <div style="text-align: center; margin-top: 30px;">
                    <button onclick="navigateTo('units')" style="background: white; color: #2ecc71; border: 2px solid #2ecc71; padding: 10px 30px; border-radius: 30px; font-size: 1.1rem; cursor: pointer; font-weight: bold; transition: all 0.2s;">
                        ← 返回永續方舟
                    </button>
                </div>
            </div>
        `
    },
    esg_s: {
        title: "社會共榮 🤝",
        content: `
            <div style="max-width: 800px; margin: 0 auto; padding-bottom: 40px;">
                <div style="margin-bottom: 40px; background: white; border-radius: 15px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
                    <img src="assets/foundation_education_care_1777903532560.png" alt="嘉新兆福文化基金會" style="width: 100%; height: 350px; object-fit: cover; display: block;">
                    <div style="padding: 30px;">
                        <h2 style="color: #f39c12; font-size: 1.8rem; margin-bottom: 15px;">嘉新兆福文化基金會的育才故事</h2>
                        <p style="color: #636e72; line-height: 1.8; font-size: 1.1rem; margin-bottom: 20px;">我們深信「教育是改變社會最溫柔也最有力的武器」。嘉新兆福文化基金會長年來投入龐大資源，不只提供獎學金，更親自走訪偏鄉，陪伴無數莘莘學子度過求學路上的難關。每一個受助學生的笑容背後，都是一篇篇動人的育才故事，也是我們對社會共榮最深刻的實踐。</p>
                    </div>
                </div>
                
                <div style="margin-bottom: 20px; background: white; border-radius: 15px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
                    <div style="padding: 30px;">
                        <h2 style="color: #f39c12; font-size: 1.8rem; margin-bottom: 15px;">疫情間送暖-化危機為轉機的在地連結</h2>
                        <p style="color: #636e72; line-height: 1.8; font-size: 1.1rem;">在疫情最嚴峻、社會最焦慮的時刻，嘉新沒有選擇退縮。我們主動走入社區，為醫護人員及弱勢團體送上物資與溫暖。我們相信，真正的企業價值在危機時刻更能彰顯。這些實際行動不僅化解了當下的困難，更將危機轉化為深化在地連結的溫暖契機。</p>
                    </div>
                </div>
                
                <div style="text-align: center; margin-top: 30px;">
                    <button onclick="navigateTo('units')" style="background: white; color: #f39c12; border: 2px solid #f39c12; padding: 10px 30px; border-radius: 30px; font-size: 1.1rem; cursor: pointer; font-weight: bold; transition: all 0.2s;">
                        ← 返回永續方舟
                    </button>
                </div>
            </div>
        `
    },
    esg_g: {
        title: "透明治理 ⚖️",
        content: `
            <div style="max-width: 800px; margin: 0 auto; padding-bottom: 40px;">
                <div style="margin-bottom: 40px; background: white; border-radius: 15px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
                    <img src="assets/transparent_governance_1777903547714.png" alt="透明溝通文化" style="width: 100%; height: 350px; object-fit: cover; display: block;">
                    <div style="padding: 30px;">
                        <h2 style="color: #3498db; font-size: 1.8rem; margin-bottom: 15px;">高階主管「公開認錯」的透明溝通文化</h2>
                        <p style="color: #636e72; line-height: 1.8; font-size: 1.1rem; margin-bottom: 20px;">在嘉新，我們鼓勵由上而下的透明溝通，營造充滿心理安全感的工作環境。在這裡，哪怕是高階主管也能夠坦誠面對錯誤，並在會議上「公開認錯」。這樣的文化不僅沒有削弱領導力，反而建立起團隊間堅實的信任感，讓每個人都能放膽創新、不再害怕失敗。</p>
                    </div>
                </div>
                
                <div style="margin-bottom: 20px; background: white; border-radius: 15px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
                    <div style="padding: 30px;">
                        <h2 style="color: #3498db; font-size: 1.8rem; margin-bottom: 15px;">將 ESG 目標與高階薪酬直接掛鉤（玩真的永續）</h2>
                        <p style="color: #636e72; line-height: 1.8; font-size: 1.1rem;">永續發展絕不只是口號。我們將 ESG 的核心指標（如減碳目標、社會參與度等）直接納入高階主管的薪酬與績效評核之中。我們用實際的制度來證明：嘉新對永續的決心是「玩真的」。只有當治理層面的目標與行動一致時，永續方舟才能穩步前行。</p>
                    </div>
                </div>
                
                <div style="text-align: center; margin-top: 30px;">
                    <button onclick="navigateTo('units')" style="background: white; color: #3498db; border: 2px solid #3498db; padding: 10px 30px; border-radius: 30px; font-size: 1.1rem; cursor: pointer; font-weight: bold; transition: all 0.2s;">
                        ← 返回永續方舟
                    </button>
                </div>
            </div>
        `
    },
    culture: {
        title: "企業故事長廊 🏢",
        content: `
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px;">
                <div class="placeholder-card" style="border-top: 5px solid #8e44ad; cursor: pointer; transition: all 0.2s;" onmouseover="this.style.transform='translateY(-5px)'; this.style.boxShadow='0 8px 25px rgba(142, 68, 173, 0.2)';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(0,0,0,0.05)';" onclick="navigateTo('story_scene_1')">
                    <h2 style="color: #8e44ad; margin-bottom: 10px;">城市韌性｜築起跨越半世紀的底氣</h2>
                    <p style="color: #636e72; line-height: 1.6;">從 1954 年的第一袋五洲牌水泥開始，我們就與台灣的土地同生共息。我們深知，高品質的生活必須建立在最穩固的基礎之上。嘉新從水泥起家，現在更透過資產開發賦予舊空間新生命。這不只是建築的翻新，而是對城市韌性的承諾——讓老舊的靈魂長出新生的質感，為永續生活築起第一道防線。</p>
                    <div style="background: rgba(142, 68, 173, 0.05); padding: 15px; border-left: 4px solid #8e44ad; border-radius: 4px; margin-top: 15px;">
                        <p style="color: #8e44ad; font-size: 1.05rem; font-weight: bold; margin: 0; font-style: italic;">「穩定，是 Quality of Life 最堅毅的基石。」</p>
                    </div>
                    <div style="margin-top: 15px; font-weight: bold; color: #8e44ad; text-align: right;">閱讀部落格 ▶</div>
                </div>
                <div class="placeholder-card" style="border-top: 5px solid #d35400; cursor: pointer; transition: all 0.2s;" onmouseover="this.style.transform='translateY(-5px)'; this.style.boxShadow='0 8px 25px rgba(211, 84, 0, 0.2)';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(0,0,0,0.05)';" onclick="navigateTo('story_scene_2')">
                    <h2 style="color: #d35400; margin-bottom: 10px;">優雅旅宿｜在異地找回生活的留白</h2>
                    <p style="color: #636e72; line-height: 1.6;">如果生活是一場長跑，旅宿就是一段優雅的留白。嘉新跨越產業邊界，將對建築的嚴謹轉化為精緻服務的藝術。無論是沖繩 Hotel Collective 的南國熱情，還是中山大樓的摩登轉身，我們在每一個細節處雕琢「家」的溫度。讓旅行不再只是移動，而是一次感官的洗禮，找回失落已久的生活節奏。</p>
                    <div style="background: rgba(211, 84, 0, 0.05); padding: 15px; border-left: 4px solid #d35400; border-radius: 4px; margin-top: 15px;">
                        <p style="color: #d35400; font-size: 1.05rem; font-weight: bold; margin: 0; font-style: italic;">「優雅，是 Quality of Life 最細膩的感官體驗。」</p>
                    </div>
                    <div style="margin-top: 15px; font-weight: bold; color: #d35400; text-align: right;">閱讀部落格 ▶</div>
                </div>
                <div class="placeholder-card" style="border-top: 5px solid #16a085; cursor: pointer; transition: all 0.2s;" onmouseover="this.style.transform='translateY(-5px)'; this.style.boxShadow='0 8px 25px rgba(22, 160, 133, 0.2)';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(0,0,0,0.05)';" onclick="navigateTo('story_scene_3')">
                    <h2 style="color: #16a085; margin-bottom: 10px;">細膩醫養｜守護生命中最溫柔的時刻</h2>
                    <p style="color: #636e72; line-height: 1.6;">高品質的生活，應該在生命的每一個轉折點都得到尊嚴的對待。從「人之初」產後護理之家的細膩呵護，到全齡照護的策略佈局，我們將醫療專業化作隱形的守護力量。嘉新讓專業退到幕後，將溫暖推向第一線，陪伴你在最脆弱也最神聖的時刻，感受被悉心照料的幸福。</p>
                    <div style="background: rgba(22, 160, 133, 0.05); padding: 15px; border-left: 4px solid #16a085; border-radius: 4px; margin-top: 15px;">
                        <p style="color: #16a085; font-size: 1.05rem; font-weight: bold; margin: 0; font-style: italic;">「健康，是 Quality of Life 最深刻的溫柔關懷。」</p>
                    </div>
                    <div style="margin-top: 15px; font-weight: bold; color: #16a085; text-align: right;">閱讀部落格 ▶</div>
                </div>
            </div>
        `
    },
    story_scene_1: {
        title: "城市韌性 🏙️",
        content: `
            <div style="max-width: 800px; margin: 0 auto; padding-bottom: 40px;">
                <div style="margin-bottom: 40px; background: white; border-radius: 15px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
                    <img src="assets/city_resilience_cement.png" alt="水泥與舊廠活化" style="width: 100%; height: 350px; object-fit: cover; display: block;">
                    <div style="padding: 50px 30px; text-align: center;">
                        <h2 style="color: #8e44ad; font-size: 1.8rem; margin-bottom: 15px;">城市韌性｜部落格內容建置中</h2>
                        <p style="color: #636e72; line-height: 1.8; font-size: 1.1rem;">這裡未來將以完整的部落格形式，展示更多關於嘉新水泥起家與舊廠活化的詳細圖文故事，敬請期待！</p>
                    </div>
                </div>
                
                <div style="text-align: center; margin-top: 30px;">
                    <button onclick="navigateTo('culture')" style="background: white; color: #8e44ad; border: 2px solid #8e44ad; padding: 10px 30px; border-radius: 30px; font-size: 1.1rem; cursor: pointer; font-weight: bold; transition: all 0.2s;">
                        ← 返回故事長廊
                    </button>
                </div>
            </div>
        `
    },
    story_scene_2: {
        title: "優雅旅宿 🏨",
        content: `
            <div style="max-width: 800px; margin: 0 auto; padding-bottom: 40px;">
                <div style="margin-bottom: 40px; background: white; border-radius: 15px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
                    <img src="assets/elegant_hospitality.png" alt="Hotel Collective" style="width: 100%; height: 350px; object-fit: cover; display: block;">
                    <div style="padding: 50px 30px; text-align: center;">
                        <h2 style="color: #d35400; font-size: 1.8rem; margin-bottom: 15px;">優雅旅宿｜部落格內容建置中</h2>
                        <p style="color: #636e72; line-height: 1.8; font-size: 1.1rem;">這裡未來將以完整的部落格形式，展示更多關於 Hotel Collective 與國際旅宿佈局的詳細圖文故事，敬請期待！</p>
                    </div>
                </div>
                
                <div style="text-align: center; margin-top: 30px;">
                    <button onclick="navigateTo('culture')" style="background: white; color: #d35400; border: 2px solid #d35400; padding: 10px 30px; border-radius: 30px; font-size: 1.1rem; cursor: pointer; font-weight: bold; transition: all 0.2s;">
                        ← 返回故事長廊
                    </button>
                </div>
            </div>
        `
    },
    story_scene_3: {
        title: "細膩醫養 🏥",
        content: `
            <div style="max-width: 800px; margin: 0 auto; padding-bottom: 40px;">
                <div style="margin-bottom: 40px; background: white; border-radius: 15px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
                    <img src="assets/delicate_healthcare.png" alt="人之初產後護理之家" style="width: 100%; height: 350px; object-fit: cover; display: block;">
                    <div style="padding: 50px 30px; text-align: center;">
                        <h2 style="color: #16a085; font-size: 1.8rem; margin-bottom: 15px;">細膩醫養｜部落格內容建置中</h2>
                        <p style="color: #636e72; line-height: 1.8; font-size: 1.1rem;">這裡未來將以完整的部落格形式，展示更多關於產後護理與全齡健康照護的詳細圖文故事，敬請期待！</p>
                    </div>
                </div>
                
                <div style="text-align: center; margin-top: 30px;">
                    <button onclick="navigateTo('culture')" style="background: white; color: #16a085; border: 2px solid #16a085; padding: 10px 30px; border-radius: 30px; font-size: 1.1rem; cursor: pointer; font-weight: bold; transition: all 0.2s;">
                        ← 返回故事長廊
                    </button>
                </div>
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

                if (viewId === 'quiz') {
                    renderQuizWelcome();
                }
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

// ==========================================
// Quiz Logic (Native JS)
// ==========================================
let currentQuestionIndex = 0;
let userScores = { A: 0, B: 0, C: 0, D: 0 };

function renderQuizWelcome() {
    currentQuestionIndex = 0;
    userScores = { A: 0, B: 0, C: 0, D: 0 };
    
    const container = document.getElementById('quiz-container');
    if (!container) return;
    
    container.innerHTML = `
        <div class="quiz-welcome animate-fade-in">
            <div class="quiz-welcome-icon">🎯</div>
            <h2 style="font-size: 2rem; margin-bottom: 20px; color: #0D2D5A;">找到你在嘉新的位置</h2>
            <p style="color: #636e72; line-height: 1.8; margin-bottom: 30px;">
                探索你的職涯基因，看你的性格傾向與嘉新四大事業體中哪一個最契合。<br>
                <span style="font-size: 0.9rem; color: #a4b0be; display: inline-block; margin-top: 10px;">約 15 秒完成，共 6 個問題</span>
            </p>
            <button onclick="startQuiz()" class="quiz-start-btn">開始測驗 ▶</button>
            <div style="margin-top: 40px; font-size: 0.85rem; color: #b2bec3;">
                「以70年水泥為基，守護從森林到人文的生命棲位」
            </div>
        </div>
    `;
}

function startQuiz() {
    currentQuestionIndex = 0;
    userScores = { A: 0, B: 0, C: 0, D: 0 };
    renderQuestion(currentQuestionIndex);
}

function renderQuestion(index) {
    const container = document.getElementById('quiz-container');
    if (!container) return;
    
    const q = quizQuestions[index];
    const progressPercent = ((index + 1) / quizQuestions.length) * 100;
    
    let optionsHtml = '';
    const letters = ['A', 'B', 'C', 'D'];
    q.options.forEach((opt, i) => {
        optionsHtml += `
            <button onclick="handleAnswer('${opt.type}')" class="quiz-option">
                <span class="quiz-option-letter">${letters[i]}</span>
                <span class="quiz-option-text">${opt.text}</span>
            </button>
        `;
    });

    container.innerHTML = `
        <div class="quiz-question-view animate-fade-in">
            <div class="quiz-progress-wrapper">
                <div class="quiz-progress-text">
                    <span>測驗進度</span>
                    <span>${index + 1} / ${quizQuestions.length}</span>
                </div>
                <div class="quiz-progress-bg">
                    <div class="quiz-progress-fill" style="width: ${progressPercent}%;"></div>
                </div>
            </div>
            
            <div class="fact-box">
                <span class="fact-badge">嘉新真實成績</span>
                <p class="fact-text">「${q.fact}」</p>
            </div>
            
            <h3 class="quiz-question-title">${q.question}</h3>
            
            <div class="quiz-options-list">
                ${optionsHtml}
            </div>
        </div>
    `;
}

function handleAnswer(type) {
    userScores[type]++;
    
    if (currentQuestionIndex < quizQuestions.length - 1) {
        currentQuestionIndex++;
        renderQuestion(currentQuestionIndex);
    } else {
        showResult();
    }
}

function showResult() {
    const container = document.getElementById('quiz-container');
    if (!container) return;
    
    let maxScore = -1;
    let winner = 'A';
    for (let key in userScores) {
        if (userScores[key] > maxScore) {
            maxScore = userScores[key];
            winner = key;
        }
    }
    
    const result = quizResults[winner];
    
    let traitsHtml = '';
    result.traits.forEach(trait => {
        traitsHtml += `<span class="trait-tag">#${trait}</span>`;
    });

    container.innerHTML = `
        <div class="quiz-result-view animate-fade-in">
            <div class="result-icon-wrapper">
                <span class="result-icon">${result.icon}</span>
            </div>
            <div class="result-subtitle" style="color: ${result.color};">測驗分析結果</div>
            <h2 class="result-title">${result.title}</h2>
            <div class="result-bu-tag">匹配：${result.bu}</div>
            
            <div class="result-desc-box">
                <p>${result.desc}</p>
                <div class="traits-container">
                    ${traitsHtml}
                </div>
            </div>
            
            <div class="result-actions">
                <button onclick="window.open('https://www.104.com.tw/company/5gonzzc?jobsource=google', '_blank')" class="quiz-start-btn" style="background-color: ${result.color}; border-color: ${result.color}; box-shadow: 0 4px 15px ${result.color}40;">
                    查看最新職缺
                </button>
                <button onclick="renderQuizWelcome()" class="quiz-retry-btn">
                    ↻ 重新測驗
                </button>
            </div>
            
            <div class="result-footer">
                <div class="footer-icons">🌱 🏢 ❤️</div>
                <div class="footer-text">© 嘉新企業團 CHC Group. 永續、女力、以人為本</div>
            </div>
        </div>
    `;
}
