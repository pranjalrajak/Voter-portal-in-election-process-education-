const timelineData = [
  {
    title: "Voter Registration 📝",
    description: "Sabse pehle, apna naam Voter List me darj karayein. Form 6 bharein online ya offline.",
    icon: "fa-id-card"
  },
  {
    title: "Candidate Nomination 👤",
    description: "Candidates apna nomination file karte hain Election Commission (EC) ke paas.",
    icon: "fa-file-signature"
  },
  {
    title: "Campaigning 📢",
    description: "Netaji log apna prachaar karte hain. Rally, speeches, aur manifestos share kiye jaate hain.",
    icon: "fa-bullhorn"
  },
  {
    title: "Voting Day 🗳️",
    description: "Polling booth par jaakar EVM button dabayein aur apna vote daalein! VVPAT se confirm karein.",
    icon: "fa-person-booth"
  },
  {
    title: "Counting & Results 📊",
    description: "EVMs khulti hain aur counting hoti hai. Jo sabse zyada vote payega, wohi jeetega!",
    icon: "fa-chart-bar"
  }
];

const fakeNewsData = [
  {
    headline: "Breaking: Election Commission ne voting ki date kal subah tak aage badha di hai! Forward this to everyone!",
    isFake: true,
    explanation: "Yeh ek Fake News hai! EC official announcements sirf apne verified channels par karta hai. WhatsApp forwards par bharosa na karein."
  },
  {
    headline: "Lok Sabha Election results will be announced on June 4th.",
    isFake: false,
    explanation: "True! Official sources aur EC ne ye date confirm ki hai. Hamesha verified news portals check karein."
  },
  {
    headline: "Viral Video: Agar aap X party ko vote denge toh EVM me automatic Y party ko vote chala jayega!",
    isFake: true,
    explanation: "Fake! EVM fully secure aur standalone machine hoti hai. VVPAT slip aapko turant confirm karti hai ki aapka vote kisko gaya."
  }
];

const quizData = [
  { question: "India me vote dene ki minimum age kya hai?", options: ["16 Years", "18 Years", "21 Years", "25 Years"], correct: 1 },
  { question: "VVPAT ka main use kya hai?", options: ["Vote count karna", "Voter ko slip verify karana", "Candidate list dikhana", "Result announce karna"], correct: 1 },
  { question: "Lok Sabha elections kitne saal me ek baar hote hain?", options: ["3 Years", "4 Years", "5 Years", "6 Years"], correct: 2 },
  { question: "Agar koi candidate pasand na aaye, toh kaunsa option chunte hain?", options: ["NOTA", "VETO", "REJECT", "BLANK"], correct: 0 },
  { question: "Election Commission of India (ECI) ka formation kab hua tha?", options: ["15 Aug 1947", "26 Jan 1950", "25 Jan 1950", "1 Jan 1948"], correct: 2 },
  { question: "National Voters' Day kab manaya jata hai?", options: ["15 August", "26 January", "25 January", "2 October"], correct: 2 },
  { question: "ECI constitution ke kis article ke under aata hai?", options: ["Article 370", "Article 324", "Article 356", "Article 21"], correct: 1 },
  { question: "Chief Election Commissioner of India ko kaun appoint karta hai?", options: ["Prime Minister", "Chief Justice of India", "President of India", "Parliament"], correct: 2 },
  { question: "EVM ka full form kya hai?", options: ["Electronic Voting Machine", "Election Voting Machine", "Electronic Voter Module", "Election Verified Machine"], correct: 0 },
  { question: "VVPAT ka full form kya hai?", options: ["Voter Verified Paper Audit Trail", "Voting Verification Paper And Trail", "Voter Visual Paper Audit Trail", "Verified Voting Paper Audit Trail"], correct: 0 },
  { question: "India ke pehle Chief Election Commissioner kaun the?", options: ["T.N. Seshan", "Sukumar Sen", "Sunil Arora", "Rajiv Kumar"], correct: 1 },
  { question: "Lok Sabha me maximum kitni seats ho sakti hain?", options: ["543", "552", "500", "545"], correct: 1 },
  { question: "Rajya Sabha ke members ka term kitne saal ka hota hai?", options: ["4 Years", "5 Years", "6 Years", "Permanent"], correct: 2 },
  { question: "State Assembly (Vidhan Sabha) elections kaun conduct karwata hai?", options: ["State Election Commission", "Election Commission of India", "Governor", "Chief Minister"], correct: 1 },
  { question: "Panchayat elections kaun conduct karwata hai?", options: ["Election Commission of India", "State Election Commission", "District Magistrate", "President"], correct: 1 },
  { question: "Model Code of Conduct (MCC) kab se laagu hota hai?", options: ["Election result ke din se", "Voting ke ek din pehle se", "Election schedule announce hone ke din se", "Nomination ke din se"], correct: 2 },
  { question: "Kiske paas right hai to decide election dates in India?", options: ["Supreme Court", "Parliament", "Election Commission of India", "President"], correct: 2 },
  { question: "EPIC ka full form kya hai (Voter ID)?", options: ["Election Photo Identity Card", "Electoral Photo Identity Card", "Electronic Photo ID Card", "Election Personal ID Card"], correct: 1 },
  { question: "Voter list me naam add karne ke liye kaunsa form bharna hota hai?", options: ["Form 6", "Form 7", "Form 8", "Form 9"], correct: 0 },
  { question: "Agar aapka address change hua hai, toh voter ID me update ke liye kaunsa form chahiye?", options: ["Form 6", "Form 7", "Form 8", "Form 6A"], correct: 2 },
  { question: "NRIs (Non-Resident Indians) ke voter registration ke liye kaunsa form hai?", options: ["Form 6", "Form 6A", "Form 7", "Form 8"], correct: 1 },
  { question: "Voter list se naam hatwane (delete) ke liye kaunsa form bharna hota hai?", options: ["Form 6", "Form 7", "Form 8", "Form 9"], correct: 1 },
  { question: "EVM me maximum kitne candidates (including NOTA) ek ballot unit me ho sakte hain?", options: ["10", "16", "24", "64"], correct: 1 },
  { question: "Kitni EVMs (Ballot Units) ek control unit se connect ki jaa sakti hain?", options: ["4", "16", "24", "2"], correct: 2 },
  { question: "NOTA option Supreme Court ke order se kis saal introduce hua tha?", options: ["2010", "2013", "2014", "2019"], correct: 1 },
  { question: "VVPAT machine ki slip voter ko kitne seconds ke liye dikhti hai?", options: ["5 seconds", "7 seconds", "10 seconds", "15 seconds"], correct: 1 },
  { question: "India me sabse pehle EVM ka use kis state me hua tha?", options: ["Gujarat", "Kerala", "Maharashtra", "Goa"], correct: 1 },
  { question: "Election Commission of India me total kitne Election Commissioners (including Chief) hote hain?", options: ["1", "2", "3", "5"], correct: 2 },
  { question: "Chief Election Commissioner ka tenure kitna hota hai?", options: ["5 years or 65 age", "6 years or 65 age", "4 years or 60 age", "5 years or 60 age"], correct: 1 },
  { question: "A proxy vote is allowed for whom?", options: ["Senior Citizens", "Armed Forces Personnel", "NRIs", "Everyone"], correct: 1 },
  { question: "Election campaign voting ke kitne ghante pehle band ho jata hai?", options: ["24 hours", "48 hours", "72 hours", "12 hours"], correct: 1 },
  { question: "EVMs and VVPATs kiski nigrani me store kiye jate hain?", options: ["Local Police", "CRPF and Strong Rooms", "Election Commission Office", "Bank Lockers"], correct: 1 },
  { question: "Zamana (Security Deposit) Lok Sabha candidate ke liye kitni hoti hai?", options: ["₹10,000", "₹25,000", "₹50,000", "₹1,00,000"], correct: 1 },
  { question: "Candidate ko apna security deposit wapas lene ke liye kitne valid votes chahiye?", options: ["1/10th", "1/6th", "1/4th", "1/2"], correct: 1 },
  { question: "Election petition kis court me file ki ja sakti hai?", options: ["District Court", "High Court", "Supreme Court", "Election Tribunal"], correct: 1 },
  { question: "Which app by ECI allows citizens to report Model Code of Conduct violations?", options: ["Voter Helpline", "cVIGIL", "Garuda", "Suvidha"], correct: 1 },
  { question: "Which app is used to find your polling booth?", options: ["cVIGIL", "Voter Helpline App", "DigiLocker", "UMANG"], correct: 1 },
  { question: "Polling station usually voter ke ghar se kitni door hona chahiye? (Max limit by ECI)", options: ["1 km", "2 km", "5 km", "10 km"], correct: 1 },
  { question: "What is the maximum limit of election expenses for a Lok Sabha constituency (approx)?", options: ["₹50 Lakhs", "₹70 - 95 Lakhs", "₹2 Crores", "No limit"], correct: 1 },
  { question: "Can a person confined in jail vote in Indian elections?", options: ["Yes", "No", "Only under-trials", "Only political prisoners"], correct: 1 },
  { question: "Who prepares the electoral rolls (voter list) for Parliamentary elections?", options: ["State Govt", "Central Govt", "Election Commission of India", "Supreme Court"], correct: 2 },
  { question: "Total kitne states aur UTs hain India me jahan Vidhan Sabha (Assembly) elections hote hain?", options: ["28", "29", "30", "31"], correct: 3 },
  { question: "Delimitation Commission of India ka main kaam kya hai?", options: ["Voter list banana", "Constituencies ki boundaries fix karna", "EVM check karna", "Result declare karna"], correct: 1 },
  { question: "First general elections of independent India kis saal huye the?", options: ["1947", "1950", "1951-52", "1955"], correct: 2 },
  { question: "Kisko right hai EVM symbol allot karne ka?", options: ["Supreme Court", "Election Commission of India", "President", "State Govt"], correct: 1 },
  { question: "Braille features on EVMs are available for whom?", options: ["Elderly voters", "Visually impaired voters", "Illiterate voters", "NRIs"], correct: 1 },
  { question: "Election Commission ek 'Multi-Member Body' kab bani?", options: ["1950", "1989", "2000", "2014"], correct: 1 },
  { question: "Kya EVM internet se connect ho sakti hai?", options: ["Haan", "Nahi, it is a standalone machine", "Sirf counting ke time", "Sirf officers kar sakte hain"], correct: 1 },
  { question: "Electoral Bonds scheme kis saal introduce hui thi?", options: ["2014", "2016", "2018", "2020"], correct: 2 },
  { question: "Right to Vote India me kaisa right hai?", options: ["Fundamental Right", "Constitutional Right", "Legal/Statutory Right", "Moral Right"], correct: 2 }
];

const simulationSteps = [
  {
    step: 1,
    title: "Step 1: Get Registered",
    text: "Aap 18 saal ke ho gaye hain! Kya aapne Voter ID ke liye apply kiya?",
    choices: [
      { text: "Haan, apply kar diya! (Form 6)", isResponsible: true },
      { text: "Nahi, aalsi hoon baad me karunga.", isResponsible: false }
    ]
  },
  {
    step: 2,
    title: "Step 2: Know Your Candidate",
    text: "Election time hai! Aap apna vote kisko denge?",
    choices: [
      { text: "Jo candidate acha kaam karta hai aur uska manifesto padh ke.", isResponsible: true },
      { text: "Jisko mere dost/family bolenge, aankh band karke.", isResponsible: false }
    ]
  },
  {
    step: 3,
    title: "Step 3: Fake News Alert",
    text: "WhatsApp par ek msg aaya: 'Paisa lo aur X ko vote do.' Kya karenge?",
    choices: [
      { text: "Report karunga and isko ignore karunga.", isResponsible: true },
      { text: "Paisa mil raha hai, accept kar leta hoon.", isResponsible: false }
    ]
  },
  {
    step: 4,
    title: "Step 4: Casting Vote",
    text: "Polling booth par jaakar kya dhyan rakhna hai?",
    choices: [
      { text: "EVM me button daba kar VVPAT slip zaroor check karunga.", isResponsible: true },
      { text: "Jaldi se koi bhi button daba kar wapas aa jaunga.", isResponsible: false }
    ]
  }
];

let userName = "A Responsible Indian Voter";
let globalReadiness = 0; // out of 100

// Audio elements
const audioClick = document.getElementById('audio-click');
const audioSuccess = document.getElementById('audio-success');
const audioError = document.getElementById('audio-error');

function playSound(type) {
  if(type === 'click') { audioClick.currentTime = 0; audioClick.play().catch(e=>console.log("Audio play prevented")); }
  if(type === 'success') { audioSuccess.currentTime = 0; audioSuccess.play().catch(e=>console.log("Audio play prevented")); }
  if(type === 'error') { audioError.currentTime = 0; audioError.play().catch(e=>console.log("Audio play prevented")); }
}

function updateReadiness(amount) {
  globalReadiness = Math.min(100, globalReadiness + amount);
  document.getElementById('readiness-fill').style.width = globalReadiness + '%';
}

document.addEventListener('DOMContentLoaded', () => {

  // --- Login Logic ---
  const loginOverlay = document.getElementById('login-overlay');
  const loginBtn = document.getElementById('login-btn');
  const nameInput = document.getElementById('user-name-input');
  const loginError = document.getElementById('login-error');
  const mainDashboard = document.getElementById('main-dashboard');
  
  loginBtn.addEventListener('click', () => {
    const nameValue = nameInput.value.trim();
    if (nameValue) {
      userName = nameValue;
      loginOverlay.classList.add('hidden');
      mainDashboard.classList.remove('hidden');
      
      document.getElementById('sidebar-name').innerText = userName;
      document.getElementById('cert-name').innerText = userName;
      playSound('success');
      updateReadiness(10); // Login bonus
    } else {
      loginError.classList.remove('hidden');
      playSound('error');
    }
  });

  nameInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') loginBtn.click();
  });

  // --- Dashboard Navigation Logic ---
  const navItems = document.querySelectorAll('.nav-item, .nav-trigger');
  const tabPanes = document.querySelectorAll('.tab-pane');

  navItems.forEach(item => {
    item.addEventListener('click', () => {
      playSound('click');
      const targetId = item.dataset.target;
      
      // Update Active State on Sidebar
      document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
      if(item.classList.contains('nav-item')) {
        item.classList.add('active');
      } else {
        // if it was a trigger from inside a tab, find the corresponding sidebar item
        const sidebarNav = document.querySelector(`.nav-item[data-target="${targetId}"]`);
        if(sidebarNav) sidebarNav.classList.add('active');
      }

      // Show target tab
      tabPanes.forEach(pane => {
        pane.classList.remove('active');
        if(pane.id === targetId) pane.classList.add('active');
      });

      // Bonus readiness for exploring
      updateReadiness(5);
    });
  });

  // --- Populate Timeline ---
  const timelineContainer = document.getElementById('timeline-container');
  timelineData.forEach((item, index) => {
    const el = document.createElement('div');
    el.className = 'timeline-item';
    el.innerHTML = `
      <div class="timeline-icon"><i class="fas ${item.icon}"></i></div>
      <div class="glass-card">
        <h4 class="color-saffron">${item.title}</h4>
        <p style="font-size: 0.9rem;">${item.description}</p>
      </div>
    `;
    timelineContainer.appendChild(el);
  });

  // --- Voter Simulation ---
  const simContainer = document.getElementById('sim-container');
  let currentSimStep = 0;
  let simScore = 0;

  function renderSimStep() {
    if(currentSimStep >= simulationSteps.length) {
      simContainer.innerHTML = `
        <h3 class="mb-4"><i class="fas fa-flag color-green"></i> Simulation Complete!</h3>
        <p>Aapka Score: ${simScore}/${simulationSteps.length}</p>
        <p>${simScore >= 3 ? 'Aap ek Responsible Voter hain! 🏅' : 'Aapko elections ke baare me aur jaanne ki zaroorat hai. 🤔'}</p>
        <button class="cta-btn mt-4 w-100 sound-click" id="restart-sim">Restart Simulation</button>
      `;
      document.getElementById('restart-sim').addEventListener('click', () => {
        playSound('click');
        currentSimStep = 0; simScore = 0; renderSimStep();
      });
      updateReadiness(15);
      playSound('success');
      return;
    }

    const step = simulationSteps[currentSimStep];
    let html = `<h3 class="mb-4"><i class="fas fa-user-shield color-saffron"></i> Voter Scenario</h3>`;
    html += `<h4>${step.title}</h4><p class="mb-4">${step.text}</p><div style="margin-top: 20px;">`;
    step.choices.forEach((choice, idx) => {
      html += `<button class="game-btn sim-choice" data-resp="${choice.isResponsible}">${choice.text}</button>`;
    });
    html += `</div>`;
    simContainer.innerHTML = html;

    document.querySelectorAll('.sim-choice').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const isCorrect = e.target.dataset.resp === 'true';
        if(isCorrect) {
          simScore++;
          playSound('success');
        } else {
          playSound('error');
        }
        currentSimStep++;
        renderSimStep();
      });
    });
  }
  renderSimStep();

  // --- Fake News Game ---
  const fakeContainer = document.getElementById('fake-container');
  let currentFake = 0;
  
  function renderFakeGame() {
    if(currentFake >= fakeNewsData.length) {
      fakeContainer.innerHTML = `
        <h3 class="mb-4"><i class="fas fa-search color-white"></i> Game Over</h3>
        <p>Hamesha news verify karein before voting!</p>
        <button class="game-btn mt-4 sound-click" id="restart-fake">Play Again</button>
      `;
      document.getElementById('restart-fake').addEventListener('click', () => { 
        playSound('click'); currentFake = 0; renderFakeGame(); 
      });
      updateReadiness(10);
      return;
    }

    const news = fakeNewsData[currentFake];
    fakeContainer.innerHTML = `
      <h3 class="mb-4"><i class="fas fa-newspaper color-white"></i> Fact Checker</h3>
      <div style="background: rgba(0,0,0,0.5); padding: 15px; border-left: 4px solid var(--saffron); margin-bottom: 20px;">
        <p style="font-style: italic;">"${news.headline}"</p>
      </div>
      <div style="display:flex; gap:10px;">
        <button class="game-btn fake-btn" data-ans="false">REAL 🟢</button>
        <button class="game-btn fake-btn" data-ans="true">FAKE 🔴</button>
      </div>
      <div id="fake-feedback" style="margin-top: 15px; font-weight: bold; min-height: 40px;"></div>
      <button class="cta-btn mt-4 w-100 hidden sound-click" id="next-fake">Next Scenario</button>
    `;

    document.querySelectorAll('.fake-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const isFakeGuess = e.target.dataset.ans === 'true';
        const feedbackEl = document.getElementById('fake-feedback');
        if(isFakeGuess === news.isFake) {
          feedbackEl.innerHTML = `<span class="color-green">Correct!</span> ${news.explanation}`;
          e.target.classList.add('selected-correct');
          playSound('success');
        } else {
          feedbackEl.innerHTML = `<span class="color-saffron">Incorrect!</span> ${news.explanation}`;
          e.target.classList.add('selected-wrong');
          playSound('error');
        }
        document.querySelectorAll('.fake-btn').forEach(b => b.disabled = true);
        document.getElementById('next-fake').classList.remove('hidden');
      });
    });

    document.getElementById('next-fake')?.addEventListener('click', () => {
      playSound('click'); currentFake++; renderFakeGame();
    });
  }
  renderFakeGame();

  // --- Quiz Section ---
  const quizContainer = document.getElementById('quiz-container');
  let currentQuiz = 0;
  let quizScore = 0;

  function renderQuiz() {
    if(currentQuiz >= quizData.length) {
      const percentage = (quizScore / quizData.length) * 100;
      let html = `
        <h3 class="mb-4"><i class="fas fa-poll"></i> Quiz Complete!</h3>
        <p style="font-size: 1.2rem;">Your Score: <strong class="color-white">${quizScore} / ${quizData.length}</strong> (${percentage.toFixed(1)}%)</p>
      `;
      
      if (percentage >= 75) {
        playSound('success');
        updateReadiness(50); // Massive boost for passing
        html += `
          <p class="color-green mt-4"><i class="fas fa-check-circle"></i> Excellent! You have passed the certification protocol.</p>
          <button class="cta-btn mt-4 sound-click" id="claim-cert">Claim Your Certificate 🏆</button>
        `;
      } else {
        playSound('error');
        html += `
          <p class="color-saffron mt-4"><i class="fas fa-exclamation-triangle"></i> Authorization Denied. 75% score required to claim certificate.</p>
          <button class="game-btn mt-4 sound-click" id="retry-quiz">Retry Quiz 🔄</button>
        `;
      }
      quizContainer.innerHTML = html;

      if (percentage >= 75) {
        document.getElementById('claim-cert').addEventListener('click', () => {
          playSound('click');
          document.getElementById('certificate-section').classList.remove('hidden');
        });
      } else {
        document.getElementById('retry-quiz').addEventListener('click', () => {
          playSound('click');
          currentQuiz = 0;
          quizScore = 0;
          renderQuiz();
        });
      }
      return;
    }

    const q = quizData[currentQuiz];
    let html = `<h4>Question ${currentQuiz+1} of ${quizData.length}</h4>`;
    html += `<p class="mb-4 mt-4" style="font-size:1.1rem;">${q.question}</p><div>`;
    q.options.forEach((opt, idx) => {
      html += `<button class="game-btn quiz-btn" data-idx="${idx}">${opt}</button>`;
    });
    html += `</div>`;
    quizContainer.innerHTML = html;

    document.querySelectorAll('.quiz-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        if(parseInt(e.target.dataset.idx) === q.correct) {
          quizScore++;
          playSound('click');
        } else {
          playSound('click');
        }
        currentQuiz++;
        renderQuiz();
      });
    });
  }
  renderQuiz();

  // --- EVM Logic ---
  const voteBtns = document.querySelectorAll('.vote-btn');
  const vvpatWindow = document.getElementById('vvpat-window');
  
  voteBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      playSound('click');
      const party = e.target.parentElement.querySelector('span').innerText;
      vvpatWindow.innerHTML = `<div class="vvpat-slip"><strong style="font-size:0.8rem">${party}</strong><br>✔️</div>`;
      updateReadiness(5); // bonus for trying EVM
      setTimeout(() => {
        vvpatWindow.innerHTML = '<p class="blink">Standby...</p>';
      }, 5000);
    });
  });

});
