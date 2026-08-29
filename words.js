<!-- ver00013: えーけんいっきゅーとらい (厳選500語・完全内蔵版) -->
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
  <title>えーけんいっきゅーとらい ver00013</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; user-select: none; -webkit-user-select: none; }
    body {
      font-family: "M PLUS Rounded 1c", "Hiragino Maru Gothic ProN", sans-serif;
      background: #fdf2f8;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      overflow: hidden;
    }
    #app-container {
      width: 100%;
      max-width: 480px;
      height: 100vh;
      max-height: 850px;
      background: white;
      display: flex;
      flex-direction: column;
      position: relative;
      border-radius: 24px;
      overflow: hidden;
      box-shadow: 0 12px 35px rgba(244,63,94,0.15);
      border: 8px solid #f472b6;
    }
    header {
      background: #db2777;
      color: white;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 8px 14px;
      font-size: 16px;
      font-weight: 900;
      letter-spacing: 1px;
      z-index: 10;
      height: 48px;
    }
    .btn-header-back {
      background: #ffffff;
      color: #db2777;
      border: 2px solid #fbcfe8;
      padding: 4px 10px;
      border-radius: 12px;
      font-size: 13px;
      font-weight: 900;
      cursor: pointer;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    .btn-header-back:active {
      transform: translateY(2px);
    }

    #start-screen {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(180deg, #fbcfe8 0%, #fdf2f8 40%, #fff1f2 100%);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      z-index: 100;
      padding: 10px 14px 10px 14px;
      color: #333;
      overflow: hidden;
    }

    .bg-deco-star {
      position: absolute;
      top: 8px;
      left: 14px;
      font-size: 34px;
      animation: floatSlow 3s ease-in-out infinite alternate;
    }
    .bg-deco-book {
      position: absolute;
      bottom: 68px;
      left: 12px;
      font-size: 34px;
      animation: bounceSlow 2.5s ease-in-out infinite alternate;
    }
    .bg-deco-crown {
      position: absolute;
      bottom: 68px;
      right: 14px;
      font-size: 32px;
      animation: floatSlow 2.8s ease-in-out infinite alternate;
    }
    @keyframes floatSlow {
      0% { transform: translateY(0px) rotate(0deg); }
      100% { transform: translateY(-6px) rotate(6deg); }
    }
    @keyframes bounceSlow {
      0% { transform: scale(1); }
      100% { transform: scale(1.06) rotate(-4deg); }
    }

    .rainbow-svg {
      position: absolute;
      top: 36px;
      width: 110%;
      height: 110px;
      z-index: 1;
      opacity: 0.85;
      pointer-events: none;
    }

    .title-area {
      position: relative;
      z-index: 2;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 2px;
    }
    .title-helper {
      font-size: 13px;
      font-weight: 900;
      color: #db2777;
      background: rgba(255,255,255,0.9);
      padding: 1px 12px;
      border-radius: 10px;
      border: 2px solid #f472b6;
      margin-bottom: 2px;
    }
    .cover-title-badge {
      background: white;
      border: 4px solid #f472b6;
      border-radius: 18px;
      padding: 4px 18px;
      box-shadow: 0 4px 0 #db2777, 0 8px 16px rgba(219,39,119,0.15);
      text-align: center;
    }
    .cover-title {
      font-size: 22px;
      font-weight: 900;
      line-height: 1.2;
      letter-spacing: 1px;
    }
    .cover-title .c1 { color: #e11d48; }
    .cover-title .c2 { color: #f59e0b; }
    .cover-title .c3 { color: #10b981; }
    .cover-title .c4 { color: #3b82f6; }
    .cover-title .c5 { color: #8b5cf6; }
    
    .version-tag {
      font-size: 11px;
      font-weight: bold;
      color: #9d174d;
      margin-top: 1px;
    }

    .hero-center {
      position: relative;
      z-index: 2;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 3px;
    }
    .girl-frame {
      width: 125px;
      height: 125px;
      border-radius: 50%;
      border: 4px solid #ffffff;
      box-shadow: 0 6px 14px rgba(219,39,119,0.2), 0 0 0 4px #f472b6;
      overflow: hidden;
      background: #fdf2f8;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .girl-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .icons-row {
      display: flex;
      justify-content: center;
      gap: 12px;
      font-size: 20px;
      filter: drop-shadow(0 2px 4px rgba(0,0,0,0.12));
    }

    .diff-box {
      position: relative;
      z-index: 2;
      width: 100%;
      max-width: 380px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 6px;
    }
    .diff-ribbon {
      font-size: 13px;
      font-weight: 900;
      color: #9d174d;
      background: white;
      border: 2px solid #f472b6;
      padding: 2px 14px;
      border-radius: 16px;
      box-shadow: 0 2px 0 #fbcfe8;
    }
    .diff-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 8px;
      width: 100%;
    }
    .diff-btn {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 54px;
      padding: 4px 6px;
      border-radius: 14px;
      cursor: pointer;
      border: 3px solid #fff;
      color: white;
      transition: all 0.15s;
    }
    .diff-btn .btn-main-txt {
      font-size: 15px;
      font-weight: 900;
      line-height: 1.1;
    }
    .diff-btn .btn-sub-txt {
      font-size: 11px;
      font-weight: 800;
      opacity: 0.95;
      margin-top: 2px;
    }

    .diff-l1 {
      background: linear-gradient(180deg, #4ade80, #16a34a);
      box-shadow: 0 4px 0 #15803d;
    }
    .diff-l2 {
      background: linear-gradient(180deg, #38bdf8, #0284c7);
      box-shadow: 0 4px 0 #0369a1;
    }
    .diff-l3 {
      background: linear-gradient(180deg, #f87171, #dc2626);
      box-shadow: 0 4px 0 #991b1b;
    }
    .diff-l4 {
      background: linear-gradient(180deg, #fbbf24, #d97706);
      box-shadow: 0 4px 0 #b45309;
    }
    .diff-btn.active {
      transform: translateY(3px) scale(1.02);
      filter: brightness(1.1);
      outline: 3px solid #fff;
    }
    .diff-btn:not(:disabled):active {
      transform: translateY(4px);
      box-shadow: 0 1px 0 rgba(0,0,0,0.3);
    }

    .btn-go {
      position: relative;
      z-index: 2;
      background: linear-gradient(180deg, #fb7185, #e11d48);
      color: white;
      font-size: 38px;
      font-weight: 900;
      width: 100%;
      max-width: 260px;
      height: 58px;
      border-radius: 29px;
      border: 4px solid #ffffff;
      box-shadow: 0 6px 0 #9f1239, 0 10px 16px rgba(225,29,72,0.3);
      cursor: pointer;
      opacity: 0.5;
      pointer-events: none;
      transition: all 0.15s;
      letter-spacing: 2px;
      text-shadow: 0 2px 4px rgba(0,0,0,0.3);
    }
    .btn-go.ready {
      opacity: 1;
      pointer-events: auto;
      animation: pulseBtn 1.8s infinite;
    }
    @keyframes pulseBtn {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.04); }
    }
    .btn-go:not(:disabled):active {
      transform: translateY(6px);
      box-shadow: 0 2px 0 #9f1239;
    }

    .instruction {
      position: relative;
      z-index: 2;
      font-size: 11px;
      font-weight: bold;
      color: #475569;
      background: rgba(255,255,255,0.9);
      border: 1.5px solid #cbd5e1;
      padding: 3px 12px;
      border-radius: 12px;
      text-align: center;
      line-height: 1.3;
    }
    .instruction .black-dots {
      color: #0f172a;
      font-size: 13px;
      letter-spacing: 2px;
    }

    #quiz-screen {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      padding: 16px;
      gap: 12px;
      background: #fff5f5;
    }
    .word-card {
      width: 100%;
      min-height: 160px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: white;
      border: 4px solid #fbcfe8;
      border-radius: 20px;
      padding: 16px;
      box-shadow: 0 4px 12px rgba(219,39,119,0.08);
      gap: 8px;
    }
    .word-main {
      font-size: 32px;
      font-weight: 900;
      color: #881337;
      letter-spacing: 0.5px;
      text-align: center;
    }
    .phonetic-text {
      font-size: 16px;
      color: #9f1239;
      font-weight: bold;
    }
    .meaning-box {
      font-size: 22px;
      font-weight: 900;
      color: #be123c;
      background: #ffe4e6;
      border: 3px solid #fecdd3;
      padding: 10px 20px;
      border-radius: 30px;
      text-align: center;
      min-height: 52px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
    }
    .button-group {
      width: 100%;
      display: flex;
      gap: 16px;
      margin-top: 8px;
      margin-bottom: 4px;
    }
    .btn-ans {
      flex: 1;
      height: 120px;
      border: none;
      border-radius: 20px;
      font-size: 72px;
      font-weight: 900;
      color: white;
      cursor: pointer;
    }
    .btn-ans:disabled {
      opacity: 0.3;
      cursor: not-allowed;
    }
    .btn-maru {
      background: linear-gradient(180deg, #4ade80, #16a34a);
      box-shadow: 0 9px 0 #15803d;
    }
    .btn-maru:not(:disabled):active {
      transform: translateY(5px);
      box-shadow: 0 4px 0 #15803d;
    }
    .btn-batsu {
      background: linear-gradient(180deg, #f87171, #dc2626);
      box-shadow: 0 9px 0 #991b1b;
    }
    .btn-batsu:not(:disabled):active {
      transform: translateY(5px);
      box-shadow: 0 4px 0 #991b1b;
    }
    .status-box {
      font-size: 18px;
      font-weight: 900;
      color: #be123c;
      height: 26px;
    }
    #line-notice {
      display: none;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,0.85);
      color: white;
      z-index: 200;
      padding: 30px;
      text-align: center;
      font-size: 18px;
      line-height: 1.6;
    }
  </style>
</head>
<body>

<div id="app-container">
  <div id="line-notice">
    ⚠️ 音声を鳴らすため、画面右上の「…」を押して「Safari（またはChrome）で開く」を選んでね！
  </div>

  <header>
    <span>えーけんいっきゅーとらい</span>
    <button class="btn-header-back" onclick="returnToStart()">🏠 もどる</button>
  </header>

  <div id="start-screen">
    <div class="bg-deco-star">🥃</div>
    <div class="bg-deco-book">🍾</div>
    <div class="bg-deco-crown">🍸</div>

    <svg class="rainbow-svg" viewBox="0 0 400 110" fill="none">
      <path d="M 20 110 A 180 90 0 0 1 380 110" stroke="#f43f5e" stroke-width="8" stroke-linecap="round"/>
      <path d="M 28 110 A 172 82 0 0 1 372 110" stroke="#fb923c" stroke-width="8" stroke-linecap="round"/>
      <path d="M 36 110 A 164 74 0 0 1 364 110" stroke="#facc15" stroke-width="8" stroke-linecap="round"/>
      <path d="M 44 110 A 156 66 0 0 1 356 110" stroke="#4ade80" stroke-width="8" stroke-linecap="round"/>
      <path d="M 52 110 A 148 58 0 0 1 348 110" stroke="#38bdf8" stroke-width="8" stroke-linecap="round"/>
    </svg>

    <div class="title-area">
      <div class="title-helper">英単語 & 熟語</div>
      <div class="cover-title-badge">
        <h1 class="cover-title">
          <span class="c1">え</span><span class="c2">ー</span><span class="c1">け</span><span class="c2">ん</span><br>
          <span class="c3">い</span><span class="c4">っ</span><span class="c3">き</span><span class="c4">ゅ</span><span class="c3">ー</span><br>
          <span class="c5">と</span><span class="c1">ら</span><span class="c2">い</span>
        </h1>
      </div>
      <div class="version-tag">ver00013</div>
    </div>

    <!-- 中央の himekoro さん写真フレーム (hime30.jpg) -->
    <div class="hero-center">
      <div class="icons-row">
        <span>🥃</span><span>🥂</span><span>🍷</span><span>🍸</span><span>🍾</span>
      </div>
      <div class="girl-frame">
        <img src="hime30.jpg" alt="himekoro" class="girl-img" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 100 100\'><text y=\'.9em\' font-size=\'90\'>👩</text></svg>'">
      </div>
      <div class="icons-row">
        <span>🥃</span><span>🍷</span><span>🏆</span><span>💡</span><span>🎯</span>
      </div>
    </div>

    <!-- 2行表記の4コース選択ボタン -->
    <div class="diff-box">
      <div class="diff-ribbon">コースを えらんでね</div>
      <div class="diff-grid">
        <button class="diff-btn diff-l1" onclick="selectDifficulty('level1', this)">
          <span class="btn-main-txt">ランクA ☀️</span>
          <span class="btn-sub-txt" id="cnt-l1">（最頻出）200語</span>
        </button>
        <button class="diff-btn diff-l2" onclick="selectDifficulty('level2', this)">
          <span class="btn-main-txt">ランクB ☁️</span>
          <span class="btn-sub-txt" id="cnt-l2">（重要難語）150語</span>
        </button>
        <button class="diff-btn diff-l3" onclick="selectDifficulty('level3', this)">
          <span class="btn-main-txt">ランクC 🌋</span>
          <span class="btn-sub-txt" id="cnt-l3">（超難関語）80語</span>
        </button>
        <button class="diff-btn diff-l4" onclick="selectDifficulty('level4', this)">
          <span class="btn-main-txt">熟語 ⚡️</span>
          <span class="btn-sub-txt" id="cnt-l4">（重要句動詞）70語</span>
        </button>
      </div>
    </div>

    <button id="go-btn" class="btn-go" onclick="startGame()">GO</button>
    
    <div class="instruction">
      <span class="black-dots">● ● ●</span> をタップし、デフォルトのブラウザで開いて下さい。
    </div>
  </div>

  <div id="quiz-screen">
    <div class="word-card">
      <div class="word-main" id="word-text">bolster</div>
      <div class="phonetic-text" id="phonetic-text">/bóʊlstɚ/</div>
    </div>
    <div class="meaning-box" id="meaning-text">〜を強化する・支援する</div>

    <div class="button-group">
      <button id="btn-maru" class="btn-ans btn-maru" onclick="checkAnswer(true)">〇</button>
      <button id="btn-batsu" class="btn-ans btn-batsu" onclick="checkAnswer(false)">✕</button>
    </div>

    <div class="status-box" id="status-text">👉 〇 か ✕ を おしてね！</div>
  </div>
</div>

<script>
if (navigator.userAgent.indexOf('LINE') !== -1) {
  document.getElementById('line-notice').style.display = 'block';
}

// 厳選500語 完全内蔵マスターデータベース (ver00013)
const allWords = [
  // ==================== ランクA（超頻出コア: 200語） ====================
  { word: "bolster", phonetic: "/ˈboʊl.stɚ/", meaning: "〜を強化する・支援する", level: 1 },
  { word: "mitigate", phonetic: "/ˈmɪt̬.ə.ɡeɪt/", meaning: "〜を和らげる・軽減する", level: 1 },
  { word: "lucrative", phonetic: "/ˈluː.krə.tɪv/", meaning: "利益の上がる・儲かる", level: 1 },
  { word: "covert", phonetic: "/ˈkoʊ.vɚt/", meaning: "秘密の・隠された", level: 1 },
  { word: "aberration", phonetic: "/ˌæb.əˈreɪ.ʃən/", meaning: "逸脱・変異・奇行", level: 1 },
  { word: "alleviate", phonetic: "/əˈliː.vi.eɪt/", meaning: "〜を軽減する・緩和する", level: 1 },
  { word: "augment", phonetic: "/ɑːɡˈment/", meaning: "〜を増加させる・増強する", level: 1 },
  { word: "coerce", phonetic: "/koʊˈɝːs/", meaning: "〜を強制する・強要する", level: 1 },
  { word: "condone", phonetic: "/kənˈdoʊn/", meaning: "〜を黙認する・容認する", level: 1 },
  { word: "curtail", phonetic: "/kɚˈteɪl/", meaning: "〜を削減する・短縮する", level: 1 },
  { word: "debunk", phonetic: "/diːˈbʌŋk/", meaning: "〜の誤りを暴く・正体を明かす", level: 1 },
  { word: "dismantle", phonetic: "/dɪsˈmæn.təl/", meaning: "〜を解体する・分解する", level: 1 },
  { word: "elicit", phonetic: "/iˈlɪs.ɪt/", meaning: "〜を引き出す・喚起する", level: 1 },
  { word: "embellish", phonetic: "/ɪmˈbel.ɪʃ/", meaning: "〜を飾る・脚色する", level: 1 },
  { word: "exacerbate", phonetic: "/ɪɡˈzæs.ɚ.beɪt/", meaning: "〜を悪化させる・激化させる", level: 1 },
  { word: "exemplify", phonetic: "/ɪɡˈzem.plə.faɪ/", meaning: "〜の好例となる・例証する", level: 1 },
  { word: "feign", phonetic: "/feɪn/", meaning: "〜のふりをする・装う", level: 1 },
  { word: "foster", phonetic: "/ˈfɑː.stɚ/", meaning: "〜を促進する・育成する", level: 1 },
  { word: "garner", phonetic: "/ˈɡɑːr.nɚ/", meaning: "〜を得る・集める", level: 1 },
  { word: "impair", phonetic: "/ɪmˈper/", meaning: "〜を損なう・減退させる", level: 1 },
  { word: "induce", phonetic: "/ɪnˈduːs/", meaning: "〜を誘発する・引き起こす", level: 1 },
  { word: "instigate", phonetic: "/ˈɪn.stə.ɡeɪt/", meaning: "〜をそそのかす・扇動する", level: 1 },
  { word: "jeopardize", phonetic: "/ˈdʒep.ɚ.daɪz/", meaning: "〜を危険にさらす", level: 1 },
  { word: "mollify", phonetic: "/ˈmɑː.lə.faɪ/", meaning: "〜をなだめる・和らげる", level: 1 },
  { word: "nullify", phonetic: "/ˈnʌl.ə.faɪ/", meaning: "〜を無効にする・破棄する", level: 1 },
  { word: "placate", phonetic: "/ˈpleɪ.keɪt/", meaning: "〜をなだめる・懐柔する", level: 1 },
  { word: "quell", phonetic: "/kwel/", meaning: "〜を鎮圧する・抑える", level: 1 },
  { word: "refute", phonetic: "/rɪˈfjuːt/", meaning: "〜を論破する・反論する", level: 1 },
  { word: "relinquish", phonetic: "/rɪˈlɪŋ.kwɪʃ/", meaning: "〜を手放す・放棄する", level: 1 },
  { word: "repudiate", phonetic: "/rɪˈpjuː.di.eɪt/", meaning: "〜を拒絶する・否定する", level: 1 },
  { word: "scrutinize", phonetic: "/ˈskruː.t̬ən.aɪz/", meaning: "〜を綿密に調べる・監視する", level: 1 },
  { word: "subsidize", phonetic: "/ˈsʌb.sə.daɪz/", meaning: "〜に補助金を出す", level: 1 },
  { word: "supplant", phonetic: "/səˈplænt/", meaning: "〜にとって代わる・排斥する", level: 1 },
  { word: "vindicate", phonetic: "/ˈvɪn.də.keɪt/", meaning: "〜の正当性を証明する", level: 1 },
  { word: "waive", phonetic: "/weɪv/", meaning: "〜を放棄する・免除する", level: 1 },
  { word: "acquiesce", phonetic: "/ˌæk.wiˈes/", meaning: "黙認する・しぶしぶ従う", level: 1 },
  { word: "admonish", phonetic: "/ədˈmɑː.nɪʃ/", meaning: "〜をたしなめる・警告する", level: 1 },
  { word: "advocate", phonetic: "/ˈæd.və.keɪt/", meaning: "〜を主張する・支持する", level: 1 },
  { word: "affiliate", phonetic: "/əˈfɪl.i.eɪt/", meaning: "〜を提携させる・加盟させる", level: 1 },
  { word: "amalgamate", phonetic: "/əˈmæl.ɡə.meɪt/", meaning: "〜を合併する・統合する", level: 1 },
  { word: "annihilate", phonetic: "/əˈnaɪ.ə.leɪt/", meaning: "〜を全滅させる・全廃する", level: 1 },
  { word: "apprehend", phonetic: "/ˌæp.rəˈhend/", meaning: "〜を逮捕する・理解する", level: 1 },
  { word: "articulate", phonetic: "/ɑːrˈtɪk.jə.leɪt/", meaning: "〜を明確に表現する", level: 1 },
  { word: "assimilate", phonetic: "/əˈsɪm.ə.leɪt/", meaning: "〜を吸収する・同化させる", level: 1 },
  { word: "benevolence", phonetic: "/bəˈnev.əl.əns/", meaning: "慈悲・善意・親切心", level: 1 },
  { word: "breach", phonetic: "/briːtʃ/", meaning: "違反・侵害・突破口", level: 1 },
  { word: "calamity", phonetic: "/kəˈlæm.ə.t̬i/", meaning: "大惨事・災難", level: 1 },
  { word: "candid", phonetic: "/ˈkæn.dɪd/", meaning: "率直な・公平な", level: 1 },
  { word: "coalesce", phonetic: "/ˌkoʊ.əˈles/", meaning: "合体する・連合する", level: 1 },
  { word: "collusion", phonetic: "/kəˈluː.ʒən/", meaning: "共謀・結託・談合", level: 1 },
  { word: "compliance", phonetic: "/kəmˈplaɪ.əns/", meaning: "法令遵守・応諾", level: 1 },
  { word: "concede", phonetic: "/kənˈsiːd/", meaning: "〜を認める・譲歩する", level: 1 },
  { word: "conciliate", phonetic: "/kənˈsɪl.i.eɪt/", meaning: "〜をなだめる・懐柔する", level: 1 },
  { word: "concur", phonetic: "/kənˈkɝː/", meaning: "同意する・一致する", level: 1 },
  { word: "condescend", phonetic: "/ˌkɑːn.dəˈsend/", meaning: "へりくだる・見下す", level: 1 },
  { word: "conglomerate", phonetic: "/kənˈɡlɑː.mɚ.ət/", meaning: "巨大複合企業・集積", level: 1 },
  { word: "conjecture", phonetic: "/kənˈdʒek.tʃɚ/", meaning: "推測・憶測", level: 1 },
  { word: "consolidation", phonetic: "/kənˌsɑː.ləˈdeɪ.ʃən/", meaning: "統合・強化・整理", level: 1 },
  { word: "conspicuous", phonetic: "/kənˈspɪk.ju.əs/", meaning: "目立つ・顕著な", level: 1 },
  { word: "construe", phonetic: "/kənˈstruː/", meaning: "〜を解釈する・分析する", level: 1 },
  { word: "contingency", phonetic: "/kənˈtɪn.dʒən.si/", meaning: "不慮の事態・偶発事象", level: 1 },
  { word: "covenant", phonetic: "/ˈkʌv.ə.nənt/", meaning: "誓約・法的契約", level: 1 },
  { word: "deception", phonetic: "/dɪˈsep.ʃən/", meaning: "欺瞞・ごまかし・詐欺", level: 1 },
  { word: "defection", phonetic: "/dɪˈfek.ʃən/", meaning: "離脱・脱党・亡命", level: 1 },
  { word: "deference", phonetic: "/ˈdef.ɚ.əns/", meaning: "敬意・服従", level: 1 },
  { word: "defy", phonetic: "/dɪˈfaɪ/", meaning: "〜に反抗する・拒む", level: 1 },
  { word: "delineate", phonetic: "/dɪˈlɪn.i.eɪt/", meaning: "〜を正確に描写する", level: 1 },
  { word: "depict", phonetic: "/dɪˈpɪkt/", meaning: "〜を描写する・表現する", level: 1 },
  { word: "deplete", phonetic: "/dɪˈpliːt/", meaning: "〜を激減させる・使い果たす", level: 1 },
  { word: "deploy", phonetic: "/dɪˈploɪ/", meaning: "〜を配置する・展開する", level: 1 },
  { word: "depreciate", phonetic: "/dɪˈpriː.ʃi.eɪt/", meaning: "価値が下がる・見くびる", level: 1 },
  { word: "deride", phonetic: "/dɪˈraɪd/", meaning: "〜をあざ笑う・嘲笑する", level: 1 },
  { word: "deteriorate", phonetic: "/dɪˈtɪr.i.ə.reɪt/", meaning: "悪化する・劣化する", level: 1 },
  { word: "detriment", phonetic: "/ˈdet.rə.mənt/", meaning: "損害・損失・不利益", level: 1 },
  { word: "devastate", phonetic: "/ˈdev.ə.steɪt/", meaning: "〜を壊滅させる・打ちのめす", level: 1 },
  { word: "diligent", phonetic: "/ˈdɪl.ə.dʒənt/", meaning: "勤勉な・入念な", level: 1 },
  { word: "discern", phonetic: "/dɪˈsɝːn/", meaning: "〜を見極める・識別する", level: 1 },
  { word: "discrepancy", phonetic: "/dɪˈskrep.ən.si/", meaning: "相違・不一致・食い違い", level: 1 },
  { word: "disdain", phonetic: "/dɪsˈdeɪn/", meaning: "軽蔑・見下し", level: 1 },
  { word: "disparate", phonetic: "/ˈdɪs.pɚ.ət/", meaning: "全く異なる・異種の", level: 1 },
  { word: "dispel", phonetic: "/dɪˈspel/", meaning: "〜（不安等）を追い払う", level: 1 },
  { word: "disseminate", phonetic: "/dɪˈsem.ə.neɪt/", meaning: "〜（情報等）を普及させる", level: 1 },
  { word: "dissent", phonetic: "/dɪˈsent/", meaning: "異議・反対意見", level: 1 },
  { word: "divergence", phonetic: "/daɪˈvɝː.dʒəns/", meaning: "分岐・相違・逸脱", level: 1 },
  { word: "dogmatic", phonetic: "/dɑːɡˈmæt̬.ɪk/", meaning: "独断的な・教条的な", level: 1 },
  { word: "dubious", phonetic: "/ˈduː.bi.əs/", meaning: "疑わしい・不審な", level: 1 },
  { word: "dwindle", phonetic: "/ˈdwɪn.dəl/", meaning: "徐々に減少する・衰える", level: 1 },
  { word: "eccentric", phonetic: "/ɪkˈsen.trɪk/", meaning: "風変わりな・奇抜な", level: 1 },
  { word: "efficacy", phonetic: "/ˈef.ə.kə.si/", meaning: "効能・有効性", level: 1 },
  { word: "elusive", phonetic: "/iˈluː.sɪv/", meaning: "つかみどころのない・捕まえにくい", level: 1 },
  { word: "emulate", phonetic: "/ˈem.jə.leɪt/", meaning: "〜を見習う・張り合う", level: 1 },
  { word: "endorse", phonetic: "/ɪnˈdɔːrs/", meaning: "〜を支持する・推薦する", level: 1 },
  { word: "engender", phonetic: "/ɪnˈdʒen.dɚ/", meaning: "〜を生み出す・引き起こす", level: 1 },
  { word: "enhance", phonetic: "/ɪnˈhæns/", meaning: "〜を高める・強化する", level: 1 },
  { word: "enigma", phonetic: "/əˈnɪɡ.mə/", meaning: "不可解なもの・謎", level: 1 },
  { word: "entail", phonetic: "/ɪnˈteɪl/", meaning: "〜を必然的に伴う", level: 1 },
  { word: "ephemeral", phonetic: "/ɪˈfem.ɚ.əl/", meaning: "つかの間の・はかない", level: 1 },
  { word: "equanimity", phonetic: "/ˌek.wəˈnɪm.ə.t̬i/", meaning: "平静・冷静沈着", level: 1 },
  { word: "eradicate", phonetic: "/ɪˈræd.ɪ.keɪt/", meaning: "〜を根絶する・撲滅する", level: 1 },
  { word: "erratic", phonetic: "/ɪˈræt̬.ɪk/", meaning: "不規則な・気まぐれな", level: 1 },
  { word: "exaggerate", phonetic: "/ɪɡˈzædʒ.ə.reɪt/", meaning: "〜を誇張する・大げさに言う", level: 1 },
  { word: "exasperate", phonetic: "/ɪɡˈzæs.pə.reɪt/", meaning: "〜を激怒させる・いらだたせる", level: 1 },
  { word: "exempt", phonetic: "/ɪɡˈzempt/", meaning: "免除された", level: 1 },
  { word: "exert", phonetic: "/ɪɡˈzɝːt/", meaning: "〜（力等）を行使する・発揮する", level: 1 },
  { word: "exhilarating", phonetic: "/ɪɡˈzɪl.ə.reɪ.t̬ɪŋ/", meaning: "爽快な・胸躍る", level: 1 },
  { word: "exonerate", phonetic: "/ɪɡˈzɑː.nə.reɪt/", meaning: "〜の無実を証明する・免除する", level: 1 },
  { word: "expedite", phonetic: "/ˈek.spə.daɪt/", meaning: "〜を促進する・早める", level: 1 },
  { word: "exploit", phonetic: "/ɪkˈsplɔɪt/", meaning: "〜を利用する・開発する", level: 1 },
  { word: "fallacy", phonetic: "/ˈfæl.ə.si/", meaning: "誤った考え・虚偽", level: 1 },
  { word: "feasible", phonetic: "/ˈfiː.zə.bəl/", meaning: "実行可能な", level: 1 },
  { word: "flagrant", phonetic: "/ˈfleɪ.ɡrənt/", meaning: "甚だしい・目に余る", level: 1 },
  { word: "flourish", phonetic: "/ˈflɝː.ɪʃ/", meaning: "繁栄する・栄える", level: 1 },
  { word: "fluctuate", phonetic: "/ˈflʌk.tʃu.eɪt/", meaning: "変動する・上下する", level: 1 },
  { word: "fortify", phonetic: "/ˈfɔːr.t̬ə.faɪ/", meaning: "〜を強化する・防備を固める", level: 1 },
  { word: "frivolous", phonetic: "/ˈfrɪv.əl.əs/", meaning: "浅はかな・くだらない", level: 1 },
  { word: "futile", phonetic: "/ˈfjuː.t̬əl/", meaning: "無駄な・無益な", level: 1 },
  { word: "gainsay", phonetic: "/ɡeɪnˈseɪ/", meaning: "〜を否定する・反論する", level: 1 },
  { word: "galvanize", phonetic: "/ˈɡæl.və.naɪz/", meaning: "〜を刺激する・活気づける", level: 1 },
  { word: "generate", phonetic: "/ˈdʒen.ə.reɪt/", meaning: "〜を生み出す・発生させる", level: 1 },
  { word: "genuine", phonetic: "/ˈdʒen.ju.ɪn/", meaning: "本物の・心からの", level: 1 },
  { word: "gratify", phonetic: "/ˈɡræt̬.ə.faɪ/", meaning: "〜を喜ばせる・満足させる", level: 1 },
  { word: "grievance", phonetic: "/ˈɡriː.vəns/", meaning: "苦情・不平", level: 1 },
  { word: "haphazard", phonetic: "/ˌhæpˈhæz.ɚd/", meaning: "でたらめな・無計画な", level: 1 },
  { word: "harmonious", phonetic: "/hɑːrˈmoʊ.ni.əs/", meaning: "調和のとれた", level: 1 },
  { word: "heed", phonetic: "/hiːd/", meaning: "〜に注意を払う・留意する", level: 1 },
  { word: "hegemony", phonetic: "/hɪˈdʒem.ə.ni/", meaning: "覇権・主導権", level: 1 },
  { word: "hindrance", phonetic: "/ˈhɪn.drəns/", meaning: "障害・邪魔立て", level: 1 },
  { word: "hostile", phonetic: "/ˈhɑː.stəl/", meaning: "敵意のある・反抗的な", level: 1 },
  { word: "hyperbole", phonetic: "/haɪˈpɝː.bəl.i/", meaning: "誇張表現", level: 1 },
  { word: "hypocrisy", phonetic: "/hɪˈpɑː.krə.si/", meaning: "偽善・見せかけ", level: 1 },
  { word: "illuminate", phonetic: "/ɪˈluː.mə.neɪt/", meaning: "〜を照らす・解明する", level: 1 },
  { word: "illustrious", phonetic: "/ɪˈlʌs.tri.əs/", meaning: "名高い・輝かしい", level: 1 },
  { word: "immunity", phonetic: "/ɪˈmjuː.nə.t̬i/", meaning: "免疫・免除", level: 1 },
  { word: "imperative", phonetic: "/ɪmˈper.ə.t̬ɪv/", meaning: "緊急の・必須の", level: 1 },
  { word: "impetus", phonetic: "/ˈɪm.pə.t̬əs/", meaning: "推進力・刺激・契機", level: 1 },
  { word: "implement", phonetic: "/ˈɪm.plə.ment/", meaning: "〜を実行する・施行する", level: 1 },
  { word: "implicit", phonetic: "/ɪmˈplɪs.ɪt/", meaning: "暗黙の・絶対的な", level: 1 },
  { word: "impose", phonetic: "/ɪmˈpoʊz/", meaning: "〜を課す・押し付ける", level: 1 },
  { word: "impromptu", phonetic: "/ɪmˈprɑːmp.tuː/", meaning: "即興の・準備なしの", level: 1 },
  { word: "impunity", phonetic: "/ɪmˈpjuː.nə.t̬i/", meaning: "刑罰を免れること", level: 1 },
  { word: "inaugurate", phonetic: "/ɪˈnɑː.ɡjə.reɪt/", meaning: "〜を就任させる・開始する", level: 1 },
  { word: "incentive", phonetic: "/ɪnˈsen.t̬ɪv/", meaning: "動機・報奨金", level: 1 },
  { word: "incline", phonetic: "/ɪnˈklaɪn/", meaning: "〜したい気にさせる・傾く", level: 1 },
  { word: "incumbent", phonetic: "/ɪnˈkʌm.bənt/", meaning: "現職の・義務である", level: 1 },
  { word: "indifferent", phonetic: "/ɪnˈdɪf.ɚ.ənt/", meaning: "無関心な・並みの", level: 1 },
  { word: "indispensable", phonetic: "/ˌɪn.dɪˈspen.sə.bəl/", meaning: "不可欠な・絶対必要な", level: 1 },
  { word: "indulge", phonetic: "/ɪnˈdʌldʒ/", meaning: "〜にふける・甘やかす", level: 1 },
  { word: "inevitable", phonetic: "/ˌɪnˈev.ə.t̬ə.bəl/", meaning: "避けられない・必然の", level: 1 },
  { word: "infringe", phonetic: "/ɪnˈfrɪndʒ/", meaning: "〜（権利等）を侵害する", level: 1 },
  { word: "ingenious", phonetic: "/ɪnˈdʒiː.ni.əs/", meaning: "独創的な・巧妙な", level: 1 },
  { word: "inhibit", phonetic: "/ɪnˈhɪb.ɪt/", meaning: "〜を抑制する・妨げる", level: 1 },
  { word: "initiate", phonetic: "/ɪˈnɪʃ.i.eɪt/", meaning: "〜を開始する・創始する", level: 1 },
  { word: "innovative", phonetic: "/ˈɪn.ə.veɪ.t̬ɪv/", meaning: "革新的な・画期的な", level: 1 },
  { word: "inquire", phonetic: "/ɪnˈkwaɪr/", meaning: "〜を尋ねる・問い合わせる", level: 1 },
  { word: "insolvent", phonetic: "/ɪnˈsɑːl.vənt/", meaning: "破産した・支払不能の", level: 1 },
  { word: "integrate", phonetic: "/ˈɪn.t̬ə.ɡreɪt/", meaning: "〜を統合する・一本化する", level: 1 },
  { word: "integrity", phonetic: "/ɪnˈteɡ.rə.t̬i/", meaning: "誠実さ・完全性", level: 1 },
  { word: "intricate", phonetic: "/ˈɪn.trə.kət/", meaning: "複雑な・入り組んだ", level: 1 },
  { word: "intrigue", phonetic: "/ɪnˈtriːɡ/", meaning: "〜の興味をそそる・陰謀", level: 1 },
  { word: "invoke", phonetic: "/ɪnˈvoʊk/", meaning: "〜（法・条項等）を発動する", level: 1 },
  { word: "irrigate", phonetic: "/ˈɪr.ə.ɡeɪt/", meaning: "〜（土地）に水を引く・灌漑する", level: 1 },
  { word: "jubilant", phonetic: "/ˈdʒuː.bəl.ənt/", meaning: "歓喜に沸く・大喜びの", level: 1 },
  { word: "judicious", phonetic: "/dʒuːˈdɪʃ.əs/", meaning: "思慮分別のある・賢明な", level: 1 },
  { word: "lament", phonetic: "/ləˈment/", meaning: "〜を嘆き悲しむ・後悔する", level: 1 },
  { word: "lavish", phonetic: "/ˈlæv.ɪʃ/", meaning: "贅沢な・気前の良い", level: 1 },
  { word: "legitimate", phonetic: "/ləˈdʒɪt̬.ə.mət/", meaning: "合法的な・正当な", level: 1 },
  { word: "lenient", phonetic: "/ˈliː.ni.ənt/", meaning: "寛大な・情け深い", level: 1 },
  { word: "liability", phonetic: "/ˌlaɪ.əˈbɪl.ə.t̬i/", meaning: "法的責任・負債・不利な点", level: 1 },
  { word: "libel", phonetic: "/ˈlaɪ.bəl/", meaning: "文書による名誉毀損", level: 1 },
  { word: "linger", phonetic: "/ˈlɪŋ.ɡɚ/", meaning: "居残る・長引く", level: 1 },
  { word: "lucid", phonetic: "/ˈluː.sɪd/", meaning: "明快な・頭が冴えた", level: 1 },
  { word: "magnitude", phonetic: "/ˈmæɡ.nə.tuːd/", meaning: "大きさ・重大さ", level: 1 },
  { word: "mandatory", phonetic: "/ˈmæn.də.tɔːr.i/", meaning: "義務的な・強制の", level: 1 },
  { word: "manifest", phonetic: "/ˈmæn.ə.fest/", meaning: "〜を明らかに示す・明白な", level: 1 },
  { word: "manipulate", phonetic: "/məˈnɪp.jə.leɪt/", meaning: "〜を巧みに操る・改ざんする", level: 1 },
  { word: "mediate", phonetic: "/ˈmiː.di.eɪt/", meaning: "調停する・仲介する", level: 1 },
  { word: "medieval", phonetic: "/ˌmed.iˈiː.vəl/", meaning: "中世の", level: 1 },
  { word: "menace", phonetic: "/ˈmen.ɪs/", meaning: "脅威・危険な存在", level: 1 },
  { word: "monopoly", phonetic: "/məˈnɑː.pəl.i/", meaning: "独占・専売", level: 1 },
  { word: "monotonous", phonetic: "/məˈnɑː.tən.əs/", meaning: "単調な・退屈な", level: 1 },
  { word: "mortality", phonetic: "/mɔːrˈtæl.ə.t̬i/", meaning: "死亡率・死すべき運命", level: 1 },
  { word: "mundane", phonetic: "/mʌnˈdeɪn/", meaning: "ありふれた・日常の", level: 1 },
  { word: "negligent", phonetic: "/ˈneɡ.lə.dʒənt/", meaning: "怠慢な・不注意な", level: 1 },
  { word: "negotiate", phonetic: "/nəˈɡoʊ.ʃi.eɪt/", meaning: "交渉する・取り決める", level: 1 },
  { word: "nominal", phonetic: "/ˈnɑː.mə.nəl/", meaning: "名ばかりの・ごくわずかな", level: 1 },
  { word: "notorious", phonetic: "/noʊˈtɔːr.i.əs/", meaning: "悪名高い", level: 1 },
  { word: "novelty", phonetic: "/ˈnɑː.vəl.ti/", meaning: "目新しさ・斬新さ", level: 1 },
  { word: "nurture", phonetic: "/ˈnɝː.tʃɚ/", meaning: "〜を育てる・育成する", level: 1 },
  { word: "oblige", phonetic: "/əˈblaɪdʒ/", meaning: "〜に義務づける・恩恵を施す", level: 1 },
  { word: "obsolete", phonetic: "/ˌɑːb.səˈliːt/", meaning: "時代遅れの・廃れた", level: 1 },
  { word: "obstacle", phonetic: "/ˈɑːb.stə.kəl/", meaning: "障害・邪魔物", level: 1 },
  { word: "ominous", phonetic: "/ˈɑː.mə.nəs/", meaning: "不吉な・不気味な", level: 1 },
  { word: "opponent", phonetic: "/əˈpoʊ.nənt/", meaning: "対戦相手・反対者", level: 1 },
  { word: "oppress", phonetic: "/əˈpres/", meaning: "〜を抑圧する・虐げる", level: 1 },
  { word: "optimistic", phonetic: "/ˌɑːp.təˈmɪs.tɪk/", meaning: "楽観的な", level: 1 },
  { word: "orthodox", phonetic: "/ˈɔːr.θə.dɑːks/", meaning: "正統派の・伝統的な", level: 1 },

  // ==================== ランクB（重要難語: 150語） ====================
  { word: "garrulous", phonetic: "/ˈɡær.əl.əs/", meaning: "おしゃべりな・多弁な", level: 2 },
  { word: "discombobulate", phonetic: "/ˌdɪs.kəmˈbɑː.bjə.leɪt/", meaning: "〜を激しく混乱させる", level: 2 },
  { word: "meticulous", phonetic: "/məˈtɪk.jə.ləs/", meaning: "極めて綿密な・細心の", level: 2 },
  { word: "ubiquitous", phonetic: "/juːˈbɪk.wə.t̬əs/", meaning: "至る所にある・遍在する", level: 2 },
  { word: "audacious", phonetic: "/ɑːˈdeɪ.ʃəs/", meaning: "大胆不敵な・向こう見ずな", level: 2 },
  { word: "capricious", phonetic: "/kəˈprɪʃ.əs/", meaning: "気まぐれな・移り気な", level: 2 },
  { word: "cumbersome", phonetic: "/ˈkʌm.bɚ.səm/", meaning: "扱いにくい・厄介な", level: 2 },
  { word: "deleterious", phonetic: "/ˌdel.əˈtɪr.i.əs/", meaning: "有害な・悪影響を及ぼす", level: 2 },
  { word: "fastidious", phonetic: "/fæˈstɪd.i.əs/", meaning: "細部にこだわりすぎる・潔癖な", level: 2 },
  { word: "gregarious", phonetic: "/ɡrɪˈɡer.i.əs/", meaning: "社交的な・群生する", level: 2 },
  { word: "impeccable", phonetic: "/ɪmˈpek.ə.bəl/", meaning: "完璧な・非の打ち所がない", level: 2 },
  { word: "indefatigable", phonetic: "/ˌɪn.dɪˈfæt̬.ɪ.ɡə.bəl/", meaning: "疲れを知らない・不屈の", level: 2 },
  { word: "innocuous", phonetic: "/ɪˈnɑː.kju.əs/", meaning: "無害な・毒気のない", level: 2 },
  { word: "loquacious", phonetic: "/loʊˈkweɪ.ʃəs/", meaning: "多弁な・話し好きな", level: 2 },
  { word: "ostentatious", phonetic: "/ˌɑː.stənˈteɪ.ʃəs/", meaning: "見栄を張る・派手な", level: 2 },
  { word: "precarious", phonetic: "/prɪˈker.i.əs/", meaning: "不安定な・危険な", level: 2 },
  { word: "redundant", phonetic: "/rɪˈdʌn.dənt/", meaning: "余分な・重複した", level: 2 },
  { word: "scrupulous", phonetic: "/ˈskruː.pjə.ləs/", meaning: "良心的な・几帳面な", level: 2 },
  { word: "taciturn", phonetic: "/ˈtæs.ə.tɝːn/", meaning: "無口な・寡黙な", level: 2 },
  { word: "tenacious", phonetic: "/təˈneɪ.ʃəs/", meaning: "粘り強い・不屈の", level: 2 },
  { word: "voracious", phonetic: "/vəˈreɪ.ʃəs/", meaning: "貪欲な・旺盛な", level: 2 },
  { word: "altruistic", phonetic: "/ˌæl.truˈɪs.tɪk/", meaning: "利他的な・愛他心の", level: 2 },
  { word: "ambiguous", phonetic: "/æmˈbɪɡ.ju.əs/", meaning: "曖昧な・多義にとれる", level: 2 },
  { word: "benevolent", phonetic: "/bəˈnev.əl.ənt/", meaning: "慈悲深い・親切な", level: 2 },
  { word: "cogent", phonetic: "/ˈkoʊ.dʒənt/", meaning: "説得力のある・的確な", level: 2 },
  { word: "eloquent", phonetic: "/ˈel.ə.kwənt/", meaning: "雄弁な・説得力のある", level: 2 },
  { word: "equivocal", phonetic: "/ɪˈkwɪv.ə.kəl/", meaning: "意味が紛らわしい・曖昧な", level: 2 },
  { word: "inadvertent", phonetic: "/ˌɪn.ədˈvɝː.t̬ənt/", meaning: "不注意な・何気ない", level: 2 },
  { word: "anomaly", phonetic: "/əˈnɑː.mə.li/", meaning: "変則・異例・例外", level: 2 },
  { word: "antipathy", phonetic: "/ænˈtɪp.ə.θi/", meaning: "反感・強い嫌悪", level: 2 },
  { word: "apathy", phonetic: "/ˈæp.ə.θi/", meaning: "無関心・冷淡", level: 2 },
  { word: "arbitrary", phonetic: "/ˈɑːr.bə.trer.i/", meaning: "独断的な・恣意的な", level: 2 },
  { word: "arcane", phonetic: "/ɑːrˈkeɪn/", meaning: "難解な・神秘的な", level: 2 },
  { word: "arduous", phonetic: "/ˈɑːr.dʒu.əs/", meaning: "多大な労力を要する・過酷な", level: 2 },
  { word: "artifice", phonetic: "/ˈɑːr.t̬ə.fɪs/", meaning: "策略・巧妙な細工", level: 2 },
  { word: "ascetic", phonetic: "/əˈset̬.ɪk/", meaning: "禁欲的な・苦行の", level: 2 },
  { word: "assiduous", phonetic: "/əˈsɪd.ju.əs/", meaning: "根気強い・勤勉な", level: 2 },
  { word: "astute", phonetic: "/əˈstuːt/", meaning: "抜け目のない・機敏な", level: 2 },
  { word: "audacity", phonetic: "/ɑːˈdæs.ə.t̬i/", meaning: "図々しさ・大胆さ", level: 2 },
  { word: "austere", phonetic: "/ɑːˈstɪr/", meaning: "簡素な・厳格な", level: 2 },
  { word: "autonomy", phonetic: "/ɑːˈtɑː.nə.mi/", meaning: "自治・自主権", level: 2 },
  { word: "avarice", phonetic: "/ˈæv.ɚ.ɪs/", meaning: "強欲・貪欲", level: 2 },
  { word: "aversion", phonetic: "/əˈvɝː.ʒən/", meaning: "嫌悪・避けたい気持ち", level: 2 },
  { word: "beguile", phonetic: "/bɪˈɡaɪl/", meaning: "〜をだます・魅了する", level: 2 },
  { word: "belligerent", phonetic: "/bəˈlɪdʒ.ɚ.ənt/", meaning: "好戦的な・喧嘩腰の", level: 2 },
  { word: "benign", phonetic: "/bɪˈnaɪn/", meaning: "良性の・穏やかな", level: 2 },
  { word: "blatant", phonetic: "/ˈbleɪ.tənt/", meaning: "あからさまな・露骨な", level: 2 },
  { word: "boisterous", phonetic: "/ˈbɔɪ.stɚ.əs/", meaning: "騒々しい・活気あふれる", level: 2 },
  { word: "brevity", phonetic: "/ˈbrev.ə.t̬i/", meaning: "簡潔さ・短さ", level: 2 },
  { word: "cajole", phonetic: "/kəˈdʒoʊl/", meaning: "〜をおだてて〜させる", level: 2 },
  { word: "callous", phonetic: "/ˈkæl.əs/", meaning: "無感覚な・冷酷な", level: 2 },
  { word: "candor", phonetic: "/ˈkæn.dɚ/", meaning: "率直さ・公平さ", level: 2 },
  { word: "castigate", phonetic: "/ˈkæs.tə.ɡeɪt/", meaning: "〜を厳しく懲戒する・非難する", level: 2 },
  { word: "catalyst", phonetic: "/ˈkæt̬.əl.ɪst/", meaning: "触媒・引き金となるもの", level: 2 },
  { word: "censure", phonetic: "/ˈsen.ʃɚ/", meaning: "非難・厳しい問責", level: 2 },
  { word: "chagrin", phonetic: "/ʃəˈɡrɪn/", meaning: "無念・悔しさ", level: 2 },
  { word: "clamor", phonetic: "/ˈklæm.ɚ/", meaning: "激しい叫び・叫び声", level: 2 },
  { word: "clandestine", phonetic: "/klænˈdes.tɪn/", meaning: "秘密の・内々の", level: 2 },
  { word: "clement", phonetic: "/ˈklem.ənt/", meaning: "（気候が）温和な・寛大な", level: 2 },
  { word: "coercion", phonetic: "/koʊˈɝː.ʃən/", meaning: "強要・弾圧", level: 2 },
  { word: "commensurate", phonetic: "/kəˈmen.sjɚ.ət/", meaning: "釣り合った・相応の", level: 2 },
  { word: "compelling", phonetic: "/kəmˈpel.ɪŋ/", meaning: "説得力のある・魅力的な", level: 2 },
  { word: "complacent", phonetic: "/kəmˈpleɪ.sənt/", meaning: "自己満足した・油断した", level: 2 },
  { word: "concurrence", phonetic: "/kənˈkɝː.əns/", meaning: "同意・同時発生", level: 2 },
  { word: "condone", phonetic: "/kənˈdoʊn/", meaning: "〜を容認する・見逃す", level: 2 },
  { word: "connoisseur", phonetic: "/ˌkɑː.nəˈsɝː/", meaning: "鑑定家・目利き", level: 2 },
  { word: "consecrate", phonetic: "/ˈkɑːn.sə.kreɪt/", meaning: "〜を神聖にする・捧げる", level: 2 },
  { word: "contentious", phonetic: "/kənˈten.ʃəs/", meaning: "論争好きな・異論の多い", level: 2 },
  { word: "convoluted", phonetic: "/ˈkɑːn.və.luː.t̬ɪd/", meaning: "入り組んだ・複雑怪奇な", level: 2 },
  { word: "copious", phonetic: "/ˈkoʊ.pi.əs/", meaning: "豊富な・おびただしい", level: 2 },
  { word: "corroborate", phonetic: "/kəˈrɑː.bə.reɪt/", meaning: "〜を裏付ける・確証する", level: 2 },
  { word: "culpable", phonetic: "/ˈkʌl.pə.bəl/", meaning: "有罪の・非難に値する", level: 2 },
  { word: "cursory", phonetic: "/ˈkɝː.sɚ.i/", meaning: "大雑把な・ぞんざいな", level: 2 },
  { word: "dauntless", phonetic: "/ˈdɑːnt.ləs/", meaning: "不屈の・恐れを知らない", level: 2 },
  { word: "dearth", phonetic: "/dɝːθ/", meaning: "不足・欠乏", level: 2 },
  { word: "debilitate", phonetic: "/dɪˈbɪl.ə.teɪt/", meaning: "〜を衰弱させる・弱体化させる", level: 2 },
  { word: "decorum", phonetic: "/dɪˈkɔːr.əm/", meaning: "礼儀作法・端正さ", level: 2 },
  { word: "deferential", phonetic: "/ˌdef.əˈren.ʃəl/", meaning: "敬意を込めた・謙虚な", level: 2 },
  { word: "defunct", phonetic: "/dɪˈfʌŋkt/", meaning: "消滅した・現存しない", level: 2 },
  { word: "demur", phonetic: "/dɪˈmɝː/", meaning: "異議を唱える・難色を示す", level: 2 },
  { word: "denounce", phonetic: "/dɪˈnaʊns/", meaning: "〜を公然と非難する", level: 2 },
  { word: "depravity", phonetic: "/dɪˈpræv.ə.t̬i/", meaning: "堕落・腐敗・邪悪", level: 2 },
  { word: "derisive", phonetic: "/dɪˈraɪ.sɪv/", meaning: "嘲笑的な・小馬鹿にした", level: 2 },
  { word: "despondent", phonetic: "/dɪˈspɑːn.dənt/", meaning: "落胆した・失望した", level: 2 },
  { word: "destitute", phonetic: "/ˈdes.tə.tuːt/", meaning: "極貧の・困窮した", level: 2 },
  { word: "deterrent", phonetic: "/dɪˈter.ənt/", meaning: "抑止力・制止するもの", level: 2 },
  { word: "devious", phonetic: "/ˈdiː.vi.əs/", meaning: "策略的な・曲がりくねった", level: 2 },
  { word: "diffident", phonetic: "/ˈdɪf.ə.dənt/", meaning: "内気な・自信のない", level: 2 },
  { word: "dilatory", phonetic: "/ˈdɪl.ə.tɔːr.i/", meaning: "遅い・ぐずぐずする", level: 2 },
  { word: "disabuse", phonetic: "/ˌdɪs.əˈbjuːz/", meaning: "〜の迷いを解く・目を覚ます", level: 2 },
  { word: "disconsolate", phonetic: "/dɪsˈkɑːn.sə.lət/", meaning: "憂鬱な・慰めようのない", level: 2 },
  { word: "disingenuous", phonetic: "/ˌdɪs.ɪnˈdʒen.ju.əs/", meaning: "不誠実な・下心のある", level: 2 },
  { word: "disparage", phonetic: "/dɪˈspær.ɪdʒ/", meaning: "〜をけなす・見くびる", level: 2 },
  { word: "dispassionate", phonetic: "/dɪsˈpæʃ.ən.ət/", meaning: "冷静な・公平無私な", level: 2 },
  { word: "divisive", phonetic: "/dɪˈvaɪ.sɪv/", meaning: "分裂を招く・不和を生む", level: 2 },
  { word: "docile", phonetic: "/ˈdoʊ.səl/", meaning: "素直な・従順な", level: 2 },
  { word: "draconian", phonetic: "/drəˈkoʊ.ni.ən/", meaning: "極めて厳格な・過酷な", level: 2 },
  { word: "eclectic", phonetic: "/ekˈlek.tɪk/", meaning: "多岐にわたる・折衷的な", level: 2 },
  { word: "effervescent", phonetic: "/ˌef.ɚˈves.ənt/", meaning: "活気に満ちた・泡立つ", level: 2 },
  { word: "egotistical", phonetic: "/ˌiː.ɡoʊˈtɪs.tɪ.kəl/", meaning: "自己中心的な・傲慢な", level: 2 },
  { word: "encroach", phonetic: "/ɪnˈkroʊtʃ/", meaning: "侵入する・侵害する", level: 2 },
  { word: "enervate", phonetic: "/ˈen.ɚ.veɪt/", meaning: "〜の気力を奪う・弱める", level: 2 },
  { word: "enigmatic", phonetic: "/ˌen.ɪɡˈmæt̬.ɪk/", meaning: "謎めいた・不可解な", level: 2 },
  { word: "enmity", phonetic: "/ˈen.mə.t̬i/", meaning: "敵意・強い憎しみ", level: 2 },
  { word: "epiphany", phonetic: "/ɪˈpɪf.ən.i/", meaning: "突然のひらめき・悟り", level: 2 },
  { word: "equivocate", phonetic: "/ɪˈkwɪv.ə.keɪt/", meaning: "言葉を濁す・あいまいな事を言う", level: 2 },
  { word: "eschew", phonetic: "/ɪsˈtʃuː/", meaning: "〜を避ける・控える", level: 2 },
  { word: "eulogy", phonetic: "/ˈjuː.lə.dʒi/", meaning: "追悼の辞・称賛", level: 2 },
  { word: "evanescent", phonetic: "/ˌev.əˈnes.ənt/", meaning: "束の間の・消えやすい", level: 2 },
  { word: "exorbitant", phonetic: "/ɪɡˈzɔːr.bə.t̬ənt/", meaning: "（値段等が）法外な・途方もない", level: 2 },
  { word: "expedient", phonetic: "/ɪkˈspiː.di.ənt/", meaning: "得策な・都合のよい", level: 2 },
  { word: "explicit", phonetic: "/ɪkˈsplɪs.ɪt/", meaning: "明白な・率直な", level: 2 },
  { word: "extol", phonetic: "/ɪkˈstoʊl/", meaning: "〜を大いに褒めそやす", level: 2 },
  { word: "extraneous", phonetic: "/ɪkˈstreɪ.ni.əs/", meaning: "無関係な・外部からの", level: 2 },
  { word: "fabricate", phonetic: "/ˈfæb.rɪ.keɪt/", meaning: "〜をでっち上げる・偽造する", level: 2 },
  { word: "facetious", phonetic: "/fəˈsiː.ʃəs/", meaning: "おどけた・不真面目な", level: 2 },
  { word: "fallacious", phonetic: "/fəˈleɪ.ʃəs/", meaning: "誤った・当てにならない", level: 2 },
  { word: "fawning", phonetic: "/ˈfɑː.nɪŋ/", meaning: "へつらう・媚びを売る", level: 2 },
  { word: "fervent", phonetic: "/ˈfɝː.vənt/", meaning: "熱烈な・情熱的な", level: 2 },
  { word: "fickle", phonetic: "/ˈfɪk.əl/", meaning: "気まぐれな・変わりやすい", level: 2 },
  { word: "flabbergasted", phonetic: "/ˈflæb.ɚ.ɡæs.tɪd/", meaning: "仰天した・呆然とした", level: 2 },
  { word: "fortuitous", phonetic: "/fɔːrˈtuː.ə.t̬əs/", meaning: "偶然の・幸運な", level: 2 },
  { word: "fraudulent", phonetic: "/ˈfrɑː.dʒə.lənt/", meaning: "詐欺的な・不正な", level: 2 },
  { word: "frugal", phonetic: "/ˈfruː.ɡəl/", meaning: "質素な・倹約な", level: 2 },
  { word: "furtive", phonetic: "/ˈfɝː.t̬ɪv/", meaning: "こそこそした・内密の", level: 2 },
  { word: "gullible", phonetic: "/ˈɡʌl.ə.bəl/", meaning: "騙されやすい・お人好しの", level: 2 },
  { word: "hackneyed", phonetic: "/ˈhæk.nid/", meaning: "陳腐な・使い古された", level: 2 },
  { word: "haughty", phonetic: "/ˈhɑː.t̬i/", meaning: "傲慢な・高飛車な", level: 2 },
  { word: "hedonism", phonetic: "/ˈhiː.dən.ɪz.əm/", meaning: "快楽主義", level: 2 },
  { word: "homogeneous", phonetic: "/ˌhoʊ.moʊˈdʒiː.ni.əs/", meaning: "均質の・同種の", level: 2 },
  { word: "immutable", phonetic: "/ɪˈmjuː.t̬ə.bəl/", meaning: "不変の・変わらない", level: 2 },
  { word: "impetuous", phonetic: "/ɪmˈpetʃ.u.əs/", meaning: "衝動的な・性急な", level: 2 },
  { word: "implacable", phonetic: "/ɪmˈplæk.ə.bəl/", meaning: "情け容赦ない・和解できない", level: 2 },
  { word: "inchoate", phonetic: "/ɪnˈkoʊ.eɪt/", meaning: "始まったばかりの・未完成の", level: 2 },
  { word: "indolent", phonetic: "/ˈɪn.dəl.ənt/", meaning: "怠惰な・無精な", level: 2 },
  { word: "infamous", phonetic: "/ˈɪn.fə.məs/", meaning: "悪名高い・不名誉な", level: 2 },
  { word: "inherent", phonetic: "/ɪnˈhɪr.ənt/", meaning: "生まれつきの・固有の", level: 2 },
  { word: "inundate", phonetic: "/ˈɪn.ʌn.deɪt/", meaning: "〜を氾濫させる・殺到する", level: 2 },
  { word: "irascible", phonetic: "/ɪˈræs.ə.bəl/", meaning: "怒りっぽい・短気な", level: 2 },
  { word: "laconic", phonetic: "/ləˈkɑː.nɪk/", meaning: "簡潔な・言葉少なの", level: 2 },
  { word: "magnanimous", phonetic: "/mæɡˈnæn.ə.məs/", meaning: "寛大な・度量の大きい", level: 2 },
  { word: "malevolent", phonetic: "/məˈlev.əl.ənt/", meaning: "悪意のある・害をなす", level: 2 },
  { word: "malleable", phonetic: "/ˈmæl.i.ə.bəl/", meaning: "適応性のある・鍛造できる", level: 2 },
  { word: "maverick", phonetic: "/ˈmæv.ɚ.ɪk/", meaning: "異端児・独自路線の人", level: 2 },
  { word: "mendacious", phonetic: "/menˈdeɪ.ʃəs/", meaning: "虚偽の・嘘つきの", level: 2 },
  { word: "morose", phonetic: "/məˈroʊs/", meaning: "不機嫌な・気難しい", level: 2 },
  { word: "myriad", phonetic: "/ˈmɪr.i.əd/", meaning: "無数の・無数", level: 2 },
  { word: "nefarious", phonetic: "/nəˈfer.i.əs/", meaning: "極悪な・邪悪な", level: 2 },
  { word: "nonchalant", phonetic: "/ˌnɑːn.ʃəˈlɑːnt/", meaning: "平然とした・無関心な", level: 2 },
  { word: "obdurate", phonetic: "/ˈɑːb.dɚ.ət/", meaning: "頑固な・情に流されない", level: 2 },
  { word: "oblivious", phonetic: "/əˈblɪv.i.əs/", meaning: "気づいていない・忘れている", level: 2 },

  // ==================== ランクC（頻出超難関: 80語） ====================
  { word: "intransigent", phonetic: "/ɪnˈtræn.sə.dʒənt/", meaning: "頑固な・妥協しない", level: 3 },
  { word: "pusillanimous", phonetic: "/ˌpjuː.səˈlæn.ə.məs/", meaning: "小心な・臆病な", level: 3 },
  { word: "quagmire", phonetic: "/ˈkwæɡ.maɪ.ɚ/", meaning: "泥沼・苦境", level: 3 },
  { word: "obsequious", phonetic: "/əbˈsiː.kwi.əs/", meaning: "媚びへつらう・追従的な", level: 3 },
  { word: "sycophant", phonetic: "/ˈsɪk.ə.fænt/", meaning: "おべっか使い・へつらい屋", level: 3 },
  { word: "anachronism", phonetic: "/əˈnæk.rə.nɪz.əm/", meaning: "時代錯誤・時代遅れ", level: 3 },
  { word: "cacophony", phonetic: "/kəˈkɑː.fə.ni/", meaning: "不協和音・雑音", level: 3 },
  { word: "hubris", phonetic: "/ˈhjuː.brɪs/", meaning: "傲慢・過信", level: 3 },
  { word: "iconoclast", phonetic: "/aɪˈkɑː.nə.klæst/", meaning: "偶像破壊者・異端児", level: 3 },
  { word: "insidious", phonetic: "/ɪnˈsɪd.i.əs/", meaning: "陰険な・潜行性の", level: 3 },
  { word: "juxtapose", phonetic: "/ˌdʒʌk.stəˈpoʊz/", meaning: "〜を並置して対比させる", level: 3 },
  { word: "lethargic", phonetic: "/ləˈθɑːr.dʒɪk/", meaning: "無気力な・昏睡の", level: 3 },
  { word: "panacea", phonetic: "/ˌpæn.əˈsiː.ə/", meaning: "万能薬・解決策", level: 3 },
  { word: "recondite", phonetic: "/ˈrek.ən.daɪt/", meaning: "難解な・深遠な", level: 3 },
  { word: "sanguine", phonetic: "/ˈsæŋ.ɡwɪn/", meaning: "自信に満ちた・陽気な", level: 3 },
  { word: "abstruse", phonetic: "/æbˈstruːs/", meaning: "難解で分かりにくい", level: 3 },
  { word: "acrimonious", phonetic: "/ˌæk.rəˈmoʊ.ni.əs/", meaning: "刺々しい・辛辣な", level: 3 },
  { word: "apocryphal", phonetic: "/əˈpɑː.krə.fəl/", meaning: "信憑性に欠ける・偽りの", level: 3 },
  { word: "burgeon", phonetic: "/ˈbɝː.dʒən/", meaning: "急成長する・芽吹く", level: 3 },
  { word: "chicanery", phonetic: "/ʃɪˈkeɪ.nɚ.i/", meaning: "ごまかし・ペテン", level: 3 },
  { word: "desiccate", phonetic: "/ˈdes.ə.keɪt/", meaning: "〜を完全に乾燥させる", level: 3 },
  { word: "egregious", phonetic: "/ɪˈɡriː.dʒəs/", meaning: "実に酷い・言語道断の", level: 3 },
  { word: "esoteric", phonetic: "/ˌes.əˈter.ɪk/", meaning: "秘儀的な・難解な", level: 3 },
  { word: "abscond", phonetic: "/æbˈskɑːnd/", meaning: "高飛びする・持ち逃げする", level: 3 },
  { word: "accretion", phonetic: "/əˈkriː.ʃən/", meaning: "増大・蓄積", level: 3 },
  { word: "adumbrate", phonetic: "/ˈæd.əm.breɪt/", meaning: "〜を予示する・概説する", level: 3 },
  { word: "aggrandize", phonetic: "/əˈɡræn.daɪz/", meaning: "〜を拡大・強化する", level: 3 },
  { word: "alacrity", phonetic: "/əˈlæk.rə.t̬i/", meaning: "機敏・快活な敏速さ", level: 3 },
  { word: "anathema", phonetic: "/əˈnæθ.ə.mə/", meaning: "大嫌いなもの・呪い", level: 3 },
  { word: "antediluvian", phonetic: "/ˌæn.ti.dɪˈluː.vi.ən/", meaning: "大昔の・時代遅れの", level: 3 },
  { word: "apotheosis", phonetic: "/əˌpɑː.θiˈoʊ.sɪs/", meaning: "神格化・絶頂期", level: 3 },
  { word: "assuage", phonetic: "/əˈsweɪdʒ/", meaning: "〜を和らげる・なだめる", level: 3 },
  { word: "atrophy", phonetic: "/ˈæt.rə.fi/", meaning: "萎縮・衰退", level: 3 },
  { word: "baleful", phonetic: "/ˈbeɪl.fəl/", meaning: "有害な・不吉な", level: 3 },
  { word: "banal", phonetic: "/bəˈnɑːl/", meaning: "陳腐な・平凡な", level: 3 },
  { word: "beleaguer", phonetic: "/bɪˈliː.ɡɚ/", meaning: "〜を取り囲んで苦しめる", level: 3 },
  { word: "bilious", phonetic: "/ˈbɪl.i.əs/", meaning: "怒りっぽい・不機嫌な", level: 3 },
  { word: "blandishment", phonetic: "/ˈblæn.dɪʃ.mənt/", meaning: "お世辞・へつらい", level: 3 },
  { word: "bombastic", phonetic: "/bɑːmˈbæs.tɪk/", meaning: "大言壮語の・誇大な", level: 3 },
  { word: "calumny", phonetic: "/ˈkæl.əm.ni/", meaning: "中傷・名誉毀損", level: 3 },
  { word: "canard", phonetic: "/kəˈnɑːrd/", meaning: "デマ・虚報", level: 3 },
  { word: "churlish", phonetic: "/ˈtʃɝː.lɪʃ/", meaning: "無礼な・不作法な", level: 3 },
  { word: "circumlocution", phonetic: "/ˌsɝː.kəm.loʊˈkjuː.ʃən/", meaning: "遠回しな言い方", level: 3 },
  { word: "commensurate", phonetic: "/kəˈmen.sjɚ.ət/", meaning: "相応の・見合った", level: 3 },
  { word: "compunction", phonetic: "/kəmˈpʌŋk.ʃən/", meaning: "良心の呵責・悔恨", level: 3 },
  { word: "concomitant", phonetic: "/kənˈkɑː.mə.t̬ənt/", meaning: "付随する・付随物", level: 3 },
  { word: "contumacious", phonetic: "/ˌkɑːn.tuːˈmeɪ.ʃəs/", meaning: "反抗的な・頑迷な", level: 3 },
  { word: "coruscate", phonetic: "/ˈkɔːr.ə.skeɪt/", meaning: "きらめく・才気煥発である", level: 3 },
  { word: "coterie", phonetic: "/ˈkoʊ.t̬ɚ.i/", meaning: "仲間・同人", level: 3 },
  { word: "crepuscular", phonetic: "/krɪˈpʌs.kjə.lɚ/", meaning: "薄暗い・夕暮れの", level: 3 },
  { word: "cupidity", phonetic: "/kjuːˈpɪd.ə.t̬i/", meaning: "強欲・貪欲", level: 3 },
  { word: "deleterious", phonetic: "/ˌdel.əˈtɪr.i.əs/", meaning: "有害な・害を及ぼす", level: 3 },
  { word: "demagogue", phonetic: "/ˈdem.ə.ɡɑːɡ/", meaning: "扇動政治家", level: 3 },
  { word: "desuetude", phonetic: "/ˈdes.wə.tuːd/", meaning: "廃止・不使用状態", level: 3 },
  { word: "diatribe", phonetic: "/ˈdaɪ.ə.traɪb/", meaning: "痛烈な非難・酷評", level: 3 },
  { word: "diffident", phonetic: "/ˈdɪf.ə.dənt/", meaning: "自信のない・内気な", level: 3 },
  { word: "disabuse", phonetic: "/ˌdɪs.əˈbjuːz/", meaning: "〜の迷いを解く", level: 3 },
  { word: "ebullient", phonetic: "/ɪbˈʊl.i.ənt/", meaning: "熱狂的な・溢れる", level: 3 },
  { word: "effrontery", phonetic: "/ɪˈfrʌn.t̬ɚ.i/", meaning: "厚かましさ・不敵さ", level: 3 },
  { word: "elegy", phonetic: "/ˈel.ə.dʒi/", meaning: "哀歌・挽歌", level: 3 },
  { word: "encomium", phonetic: "/enˈkoʊ.mi.əm/", meaning: "賛辞・称賛", level: 3 },
  { word: "epistolary", phonetic: "/ɪˈpɪs.tə.ler.i/", meaning: "書簡の・書簡体の", level: 3 },
  { word: "equanimity", phonetic: "/ˌek.wəˈnɪm.ə.t̬i/", meaning: "平静・沈着", level: 3 },
  { word: "ersatz", phonetic: "/ˈer.zɑːts/", meaning: "代用の・偽の", level: 3 },
  { word: "eschew", phonetic: "/ɪsˈtʃuː/", meaning: "〜を避ける・慎む", level: 3 },
  { word: "evanescent", phonetic: "/ˌev.əˈnes.ənt/", meaning: "消えやすい・束の間の", level: 3 },
  { word: "execrable", phonetic: "/ˈek.sə.krə.bəl/", meaning: "実に不快な・悪質な", level: 3 },
  { word: "exigent", phonetic: "/ˈek.sə.dʒənt/", meaning: "緊急の・急を要する", level: 3 },
  { word: "expatiate", phonetic: "/ɪkˈspeɪ.ʃi.eɪt/", meaning: "長々と論じる", level: 3 },
  { word: "expurgate", phonetic: "/ˈek.spɚ.ɡeɪt/", meaning: "〜の不穏当箇所を削除する", level: 3 },
  { word: "extirpate", phonetic: "/ˈek.stɚ.peɪt/", meaning: "〜を根絶する・全滅させる", level: 3 },
  { word: "fatuous", phonetic: "/ˈfætʃ.u.əs/", meaning: "愚かな・ぼんやりした", level: 3 },
  { word: "feckless", phonetic: "/ˈfek.ləs/", meaning: "無責任な・役に立たない", level: 3 },
  { word: "fractious", phonetic: "/ˈfræk.ʃəs/", meaning: "怒りっぽい・手に負えない", level: 3 },
  { word: "gainsay", phonetic: "/ɡeɪnˈseɪ/", meaning: "〜を否定する", level: 3 },
  { word: "grandiloquent", phonetic: "/ɡrænˈdɪl.ə.kwənt/", meaning: "大言壮語の・誇大な", level: 3 },
  { word: "harangue", phonetic: "/həˈræŋ/", meaning: "長演説・熱弁", level: 3 },
  { word: "hegemony", phonetic: "/hɪˈdʒem.ə.ni/", meaning: "覇権・主導権", level: 3 },
  { word: "hermetic", phonetic: "/hɝːˈmet̬.ɪk/", meaning: "密閉された・難解な", level: 3 },
  { word: "ignominious", phonetic: "/ˌɪɡ.nəˈmɪn.i.əs/", meaning: "不名誉な・恥ずべき", level: 3 },

  // ==================== 熟語（重要句動詞: 70語） ====================
  { word: "peter out", phonetic: "/ˈpiː.t̬ɚ aʊt/", meaning: "次第に衰退する・消滅する", level: 4 },
  { word: "chalk up to", phonetic: "/tʃɑːk ʌp tuː/", meaning: "〜のせいにする・〜の結果とみなす", level: 4 },
  { word: "gloss over", phonetic: "/ɡlɑːs ˈoʊ.vɚ/", meaning: "〜をごまかす・体裁をつくろう", level: 4 },
  { word: "shore up", phonetic: "/ʃɔːr ʌp/", meaning: "〜を強化する・支える", level: 4 },
  { word: "single out", phonetic: "/ˈsɪŋ.ɡəl aʊt/", meaning: "〜を選び出す・名指しする", level: 4 },
  { word: "bail out", phonetic: "/beɪl aʊt/", meaning: "〜（企業等）を財政救済する", level: 4 },
  { word: "crack down on", phonetic: "/kræk daʊn ɑːn/", meaning: "〜を厳重に取り締まる", level: 4 },
  { word: "fumble for", phonetic: "/ˈfʌm.bəl fɚ/", meaning: "〜を探り求める・言葉を探す", level: 4 },
  { word: "iron out", phonetic: "/ˈaɪ.ɚn aʊt/", meaning: "〜（問題や差異）を円満解決する", level: 4 },
  { word: "muddle through", phonetic: "/ˈmʌd.əl θruː/", meaning: "なんとか切り抜ける・やり遂げる", level: 4 },
  { word: "phase out", phonetic: "/feɪz aʊt/", meaning: "〜を段階的に廃止する", level: 4 },
  { word: "rule out", phonetic: "/ruːl aʊt/", meaning: "〜を除外する・排除する", level: 4 },
  { word: "stem from", phonetic: "/stem frɑːm/", meaning: "〜に起因する・由来する", level: 4 },
  { word: "tamper with", phonetic: "/ˈtæm.pɚ wɪð/", meaning: "〜を不正に改ざんする・いじる", level: 4 },
  { word: "wipe out", phonetic: "/waɪp aʊt/", meaning: "〜を全滅させる・帳消しにする", level: 4 },
  { word: "brush off", phonetic: "/brʌʃ ɑːf/", meaning: "〜を軽くあしらう・無視する", level: 4 },
  { word: "clamp down on", phonetic: "/klæmp daʊn ɑːn/", meaning: "〜を取り締まる・弾圧する", level: 4 },
  { word: "fritter away", phonetic: "/ˈfrɪt.ɚ əˈweɪ/", meaning: "〜を無駄遣いする・浪費する", level: 4 },
  { word: "mull over", phonetic: "/mʌl ˈoʊ.vɚ/", meaning: "〜をじっくり熟考する", level: 4 },
  { word: "opt out of", phonetic: "/ɑːpt aʊt ʌv/", meaning: "〜から身を引く・脱退する", level: 4 },
  { word: "rope into", phonetic: "/roʊp ˈɪn.tuː/", meaning: "〜に無理やり巻き込む・誘い込む", level: 4 },
  { word: "skirt around", phonetic: "/skɝːt əˈraʊnd/", meaning: "〜（難題）を巧妙に回避する", level: 4 },
  { word: "taper off", phonetic: "/ˈteɪ.pɚ ɑːf/", meaning: "次第に先細る・減少する", level: 4 },
  { word: "bank on", phonetic: "/bæŋk ɑːn/", meaning: "〜を当てにする・頼りにする", level: 4 },
  { word: "bear out", phonetic: "/ber aʊt/", meaning: "〜（理論・証言）を裏付ける", level: 4 },
  { word: "blurt out", phonetic: "/blɝːt aʊt/", meaning: "〜をうっかり口走る", level: 4 },
  { word: "botch up", phonetic: "/bɑːtʃ ʌp/", meaning: "〜をしそこなう・ヘボる", level: 4 },
  { word: "cash in on", phonetic: "/kæʃ ɪn ɑːn/", meaning: "〜に乗じて大儲けする", level: 4 },
  { word: "cater to", phonetic: "/ˈkeɪ.t̬ɚ tuː/", meaning: "〜の好みに合わせる・迎合する", level: 4 },
  { word: "chime in", phonetic: "/tʃaɪm ɪn/", meaning: "会話に口を挟む・同調する", level: 4 },
  { word: "chip in", phonetic: "/tʃɪp ɪn/", meaning: "お金を出し合う・寄付する", level: 4 },
  { word: "clog up", phonetic: "/klɑːɡ ʌp/", meaning: "〜を完全に詰まらせる", level: 4 },
  { word: "conjure up", phonetic: "/ˈkɑːn.dʒɚ ʌp/", meaning: "〜を心に思い浮かべさせる", level: 4 },
  { word: "crop up", phonetic: "/krɑːp ʌp/", meaning: "（不意に問題が）持ち上がる", level: 4 },
  { word: "dash off", phonetic: "/dæʃ ɑːf/", meaning: "〜を手早く一気に書き上げる", level: 4 },
  { word: "die down", phonetic: "/daɪ daʊn/", meaning: "（騒ぎ・風などが）静まる", level: 4 },
  { word: "dish out", phonetic: "/dɪʃ aʊt/", meaning: "〜を惜しげもなく配る・与える", level: 4 },
  { word: "drag on", phonetic: "/dræɡ ɑːn/", meaning: "（会議などが）ダラダラ長引く", level: 4 },
  { word: "egg on", phonetic: "/eɡ ɑːn/", meaning: "〜をそそのかす・けしかける", level: 4 },
  { word: "eke out", phonetic: "/iːk aʊt/", meaning: "〜を何とかやりくりして生計を立てる", level: 4 },
  { word: "fall back on", phonetic: "/fɑːl bæk ɑːn/", meaning: "〜を最後の頼みとする", level: 4 },
  { word: "figure on", phonetic: "/ˈfɪɡ.jɚ ɑːn/", meaning: "〜を見込む・計算に入れる", level: 4 },
  { word: "flare up", phonetic: "/fler ʌp/", meaning: "（病気や争いが）急に再発・激化する", level: 4 },
  { word: "gear up for", phonetic: "/ɡɪr ʌp fɚ/", meaning: "〜に向けて準備を整える", level: 4 },
  { word: "hammer out", phonetic: "/ˈhæm.ɚ aʊt/", meaning: "〜（合意・協定）を苦心してまとめる", level: 4 },
  { word: "hinge on", phonetic: "/hɪndʒ ɑːn/", meaning: "〜次第である・〜にかかっている", level: 4 },
  { word: "hush up", phonetic: "/hʌʃ ʌp/", meaning: "〜をもみ消す・隠蔽する", level: 4 },
  { word: "jack up", phonetic: "/dʒæk ʌp/", meaning: "〜（価格など）を大幅に引き上げる", level: 4 },
  { word: "jot down", phonetic: "/dʒɑːt daʊn/", meaning: "〜を手早く書き留める・メモする", level: 4 },
  { word: "kick in", phonetic: "/kɪk ɪn/", meaning: "（薬効や制度などが）効き始める", level: 4 },
  { word: "knuckle down", phonetic: "/ˈnʌk.əl daʊn/", meaning: "真剣に本腰を入れて取り組む", level: 4 },
  { word: "lay off", phonetic: "/leɪ ɑːf/", meaning: "〜を一時解雇する・〜をやめる", level: 4 },
  { word: "level with", phonetic: "/ˈlev.əl wɪð/", meaning: "〜に正直に本当のことを話す", level: 4 },
  { word: "look down on", phonetic: "/lʊk daʊn ɑːn/", meaning: "〜を見下す・軽蔑する", level: 4 },
  { word: "make do with", phonetic: "/meɪk duː wɪð/", meaning: "〜でなんとか間に合わせる", level: 4 },
  { word: "mark down", phonetic: "/mɑːrk daʊn/", meaning: "〜を値下げする", level: 4 },
  { word: "nod off", phonetic: "/nɑːd ɑːf/", meaning: "うとうと眠り込む・居眠りする", level: 4 },
  { word: "palm off", phonetic: "/pɑːm ɑːf/", meaning: "〜（不要品）を騙してつかませる", level: 4 },
  { word: "pan out", phonetic: "/pæn aʊt/", meaning: "（事態が）期待通りにうまくいく", level: 4 },
  { word: "pass off as", phonetic: "/pæs ɑːf æz/", meaning: "〜を…と偽って通用させる", level: 4 },
  { word: "patch up", phonetic: "/pætʃ ʌp/", meaning: "〜（不仲・怪我など）を修復・手当てする", level: 4 },
  { word: "play down", phonetic: "/pleɪ daʊn/", meaning: "〜を控えめに見せる・軽視する", level: 4 },
  { word: "pull off", phonetic: "/pʊl ɑːf/", meaning: "〜（困難なこと）を見事にやってのける", level: 4 },
  { word: "rake in", phonetic: "/reɪk ɪn/", meaning: "〜（大金）をがっぽり稼ぎ集める", level: 4 },
  { word: "run down", phonetic: "/rʌn daʊn/", meaning: "〜をけなす・〜（原因）を突き止める", level: 4 },
  { word: "shrug off", phonetic: "/ʃrʌɡ ɑːf/", meaning: "〜を平然と受け流す・気にしない", level: 4 },
  { word: "siphon off", phonetic: "/ˈsaɪ.fən ɑːf/", meaning: "〜（資金など）を不正に流用する", level: 4 },
  { word: "size up", phonetic: "/saɪz ʌp/", meaning: "〜（状況・相手）を評価・見極める", level: 4 },
  { word: "smooth over", phonetic: "/smuːð ˈoʊ.vɚ/", meaning: "〜（争い・角）を丸く収める", level: 4 },
  { word: "zero in on", phonetic: "/ˈzɪr.oʊ ɪn ɑːn/", meaning: "〜に照準を合わせる・集中する", level: 4 }
];

let selectedLevel = null;
let currentWords = [];
let questionDeck = [];
let lastTargetWord = null;
let lastSpokenMeaning = null;
let consecutiveCount = 0;
let lastTypeIsCorrect = null;
let currentQuestion = null;
let isAnswerable = false;
let audioCtx = null;

const mapBtns = document.querySelectorAll('.diff-btn');
const goBtn = document.getElementById('go-btn');
const wordText = document.getElementById('word-text');
const phoneticText = document.getElementById('phonetic-text');
const meaningText = document.getElementById('meaning-text');
const statusText = document.getElementById('status-text');
const maruBtn = document.getElementById('btn-maru');
const batsuBtn = document.getElementById('btn-batsu');

function setButtonsEnabled(enabled) {
  isAnswerable = enabled;
  maruBtn.disabled = !enabled;
  batsuBtn.disabled = !enabled;
}

function shuffle(array) {
  let arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function selectDifficulty(diff, btn) {
  selectedLevel = diff;
  mapBtns.forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  goBtn.classList.add('ready');

  let lvl = 1;
  if (diff === 'level1') lvl = 1;
  else if (diff === 'level2') lvl = 2;
  else if (diff === 'level3') lvl = 3;
  else if (diff === 'level4') lvl = 4;

  currentWords = allWords.filter(w => w.level === lvl);
  questionDeck = shuffle(currentWords);
  lastTargetWord = null;
  lastSpokenMeaning = null;
  consecutiveCount = 0;
  lastTypeIsCorrect = null;
}

function playSound(type) {
  try {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    const now = audioCtx.currentTime;

    if (type === 'correct') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(880.00, now);
      osc.frequency.setValueAtTime(1174.66, now + 0.12);
      gain.gain.setValueAtTime(1.0, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.6);
      osc.start(now);
      osc.stop(now + 0.6);
    } else {
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(180, now);
      osc.frequency.setValueAtTime(140, now + 0.15);
      gain.gain.setValueAtTime(1.0, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.6);
      osc.start(now);
      osc.stop(now + 0.6);
    }
  } catch(e) {}
}

function startGame() {
  if (!selectedLevel || currentWords.length === 0) return;
  document.getElementById('start-screen').style.display = 'none';
  if ('speechSynthesis' in window) window.speechSynthesis.cancel();
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  nextQuestion();
}

function returnToStart() {
  if ('speechSynthesis' in window) window.speechSynthesis.cancel();
  setButtonsEnabled(false);
  document.getElementById('start-screen').style.display = 'flex';
}

function nextQuestion() {
  setButtonsEnabled(true); 
  statusText.innerText = "👉 〇 か ✕ を おしてね！";

  if (questionDeck.length === 0) {
    questionDeck = shuffle(currentWords);
  }

  const mustBeTrue = (consecutiveCount >= 3 && !lastTypeIsCorrect);
  const mustBeFalse = (consecutiveCount >= 3 && lastTypeIsCorrect);

  let excluded = new Set();
  if (lastTargetWord) excluded.add(lastTargetWord);
  if (mustBeTrue && lastSpokenMeaning) excluded.add(lastSpokenMeaning);

  let candidates = [];
  for (let i = 0; i < questionDeck.length; i++) {
    if (!excluded.has(questionDeck[i].word)) {
      candidates.push(i);
    }
  }
  if (candidates.length === 0) {
    for (let i = 0; i < questionDeck.length; i++) {
      if (questionDeck[i].word !== lastTargetWord) {
        candidates.push(i);
      }
    }
  }
  if (candidates.length === 0) candidates = [0];
  
  const chosenIdx = candidates[Math.floor(Math.random() * candidates.length)];
  const targetWordObj = questionDeck.splice(chosenIdx, 1)[0];

  let isCorrectPair;
  if (mustBeTrue) {
    isCorrectPair = (targetWordObj.meaning !== lastSpokenMeaning);
  } else if (mustBeFalse) {
    isCorrectPair = false;
  } else if (targetWordObj.meaning === lastSpokenMeaning) {
    isCorrectPair = false;
  } else {
    isCorrectPair = Math.random() < 0.5;
  }

  if (lastTypeIsCorrect === isCorrectPair) {
    consecutiveCount++;
  } else {
    lastTypeIsCorrect = isCorrectPair;
    consecutiveCount = 1;
  }

  let meaningContent;
  if (isCorrectPair) {
    meaningContent = targetWordObj;
  } else {
    let available = currentWords.filter(w => w.word !== targetWordObj.word && w.meaning !== lastSpokenMeaning);
    if (available.length === 0) {
      available = currentWords.filter(w => w.word !== targetWordObj.word);
    }
    meaningContent = available[Math.floor(Math.random() * available.length)];
  }

  lastTargetWord = targetWordObj.word;
  lastSpokenMeaning = meaningContent.meaning;

  currentQuestion = {
    target: targetWordObj,
    isCorrect: isCorrectPair,
    meaning: meaningContent.meaning
  };

  wordText.innerText = targetWordObj.word;
  phoneticText.innerText = targetWordObj.phonetic;
  meaningText.innerText = meaningContent.meaning;

  speakEnglish(targetWordObj.word);
}

function speakEnglish(text) {
  if (!('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel(); 
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = 'en-US';
  utter.rate = 0.9;
  window.speechSynthesis.speak(utter);
}

function checkAnswer(userChoice) {
  if (!isAnswerable) return;
  setButtonsEnabled(false); 

  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel(); 
  }

  const isUserRight = (userChoice === currentQuestion.isCorrect);
  if (isUserRight) {
    statusText.innerText = "⭕ せいかい！ (Correct!)";
    playSound('correct');
  } else {
    statusText.innerText = "❌ ざんねん！ (Wrong!)";
    playSound('wrong');
  }
  setTimeout(nextQuestion, 800); 
}
</script>
</body>
</html>
