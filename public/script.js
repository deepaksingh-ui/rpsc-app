// ===== COMPLETE RPSC SCHOOL LECTURER SYLLABUS =====
const syllabus = [
  {
    paper: "Paper - I: General Awareness & General Studies",
    categories: [
      {
        name: "History of Rajasthan & Indian History",
        topics: [
          "Freedom Struggle of 1857 - स्वतंत्रता संग्राम 1857",
          "Growth of Nationalism (1858-1919) - राष्ट्रवाद का विकास",
          "Growth of Mass Nationalism (1919-1942) - जन राष्ट्रवाद का विकास",
          "Revolutionary Activities - क्रांतिकारी गतिविधियाँ",
          "Towards Freedom and Partition - स्वतंत्रता और विभाजन",
          "Social and Religious Renaissance in 19th & 20th Century",
          "Prominent Leaders: Savarkar, Bankim Chandra, Lal, Bal, Pal, Chandra Shekhar Azad, Bhagat Singh, Sukhdev, Ras Behari Bose, Subhash Chandra Bose",
          "National Movement: Mahatma Gandhi, Jawahar Lal Nehru, Vallabhbhai Patel, Maulana Azad, B.R. Ambedkar"
        ]
      },
      {
        name: "History of Rajasthan - राजस्थान का इतिहास",
        topics: [
          "Ancient Culture & Civilization - Kalibangan, Ahar, Ganeshwar, Bairath",
          "History of Rajasthan 8th to 18th Century - Gurjar Pratihars, Chauhans of Ajmer",
          "Relations with Delhi Sultanate - Mewar, Ranthambore, Jalore",
          "Rajasthan and Mughals - Rana Sanga, Maharana Pratap, Mansingh of Amer",
          "Chandrasen, Rai Singh of Bikaner, Raj Singh of Mewar",
          "History of Freedom Struggle in Rajasthan",
          "Revolution of 1857, Political Awakening, Prajamandal Movements",
          "Peasants and Tribal Movements - किसान और जनजातीय आंदोलन",
          "Integration of Rajasthan - राजस्थान का एकीकरण"
        ]
      },
      {
        name: "Society & Religion - समाज और धर्म",
        topics: [
          "Lok Devta and Devian - लोक देवता और देवियाँ",
          "Saints of Rajasthan - राजस्थान के संत",
          "Architecture: Temples, Forts and Palaces",
          "Paintings - Various Schools - चित्रकला की विभिन्न शैलियाँ",
          "Fairs and Festivals - मेले और त्यौहार",
          "Customs, Dresses and Ornaments",
          "Folk Music and Dance - लोक संगीत और नृत्य",
          "Language and Literature - भाषा और साहित्य"
        ]
      },
      {
        name: "Mental Ability Test - मानसिक योग्यता",
        topics: [
          "Analogy - सादृश्यता",
          "Series Completion - श्रेणी पूर्ति",
          "Coding-Decoding - कोडिंग-डिकोडिंग",
          "Blood Relations - रक्त संबंध",
          "Logical Venn Diagrams - तार्किक वेन आरेख"
        ]
      },
      {
        name: "Statistics (Secondary Level) - सांख्यिकी",
        topics: [
          "Collection of Data - आंकड़ों का संग्रहण",
          "Presentation of Data - आंकड़ों का प्रस्तुतीकरण",
          "Graphical Representation of Data",
          "Measures of Central Tendency - केंद्रीय प्रवृत्ति",
          "Mean, Mode, Median of Ungrouped & Grouped Data"
        ]
      },
      {
        name: "Mathematics (Secondary Level) - गणित",
        topics: [
          "Natural, Rational & Irrational Numbers",
          "Real Numbers and Decimal Expansions",
          "Operations on Real Numbers, Laws of Exponents",
          "Zeroes of a Polynomial - बहुपद के शून्यक",
          "Relationship between Zeroes & Coefficients",
          "Division Algorithm for Polynomials",
          "Pair of Linear Equations in Two Variables"
        ]
      },
      {
        name: "Mensuration - क्षेत्रमिति",
        topics: [
          "Surface Area: Cuboid, Cube, Cylinder, Cone, Sphere",
          "Volume: Cuboid, Cube, Cylinder, Cone, Sphere",
          "Surface Area & Volume of Combination of Solids",
          "Conversion of Solid from One Shape to Another"
        ]
      },
      {
        name: "Current Affairs - सामयिक घटनाएं",
        topics: [
          "Rajasthan & India: Recent Development Programmes & Flagship Schemes",
          "New Initiatives, Skill Development & Startup Initiatives",
          "Social and Economic Indicators",
          "Events of Importance: Persons and Places",
          "Contemporary Events in Science, Technology & Environment",
          "Awards and Prizes - पुरस्कार और सम्मान",
          "Latest Books and Authors",
          "Sports and Games - खेलकूद",
          "International: Contemporary International Issues and Events"
        ]
      },
      {
        name: "General Science - सामान्य विज्ञान",
        topics: [
          "Atoms and Molecules - परमाणु और अणु",
          "Chemical Reactions and Equations",
          "Carbon and its Compounds - कार्बन और उसके यौगिक",
          "Force and Laws of Motion - बल और गति के नियम",
          "Work and Energy - कार्य और ऊर्जा",
          "Electricity and Sound - विद्युत और ध्वनि",
          "Tissues, Control and Coordination",
          "Heredity and Evolution - आनुवंशिकता और जैव विकास",
          "Management of Natural Resources",
          "Protection of Environment, Biodiversity & Sustainable Development",
          "Science in Daily Life - दैनिक जीवन में विज्ञान",
          "Recent Developments in Science & Technology",
          "Traditional Knowledge System of India in Science"
        ]
      },
      {
        name: "Indian Polity - भारतीय राजव्यवस्था",
        topics: [
          "Government of India Act 1935",
          "Constituent Assembly & Salient Features of Constitution",
          "President, Vice-President, Prime Minister & Council of Ministers",
          "Parliament - संसद",
          "Supreme Court - सर्वोच्च न्यायालय",
          "Election Commission - निर्वाचन आयोग",
          "Union Public Service Commission - UPSC",
          "Panchayats and Municipalities - पंचायत और नगरपालिकाएँ",
          "National Human Rights Commission - NHRC",
          "National Commission for Women",
          "Central Vigilance Commission - CVC",
          "National Green Tribunal - NGT",
          "National Commission for Protection of Child Rights - NCPCR"
        ]
      },
      {
        name: "Geography of Rajasthan - राजस्थान का भूगोल",
        topics: [
          "Location, Extent, Shape, Size",
          "Physical Features - भौतिक स्वरूप",
          "Drainage - अपवाह तंत्र",
          "Soil - मिट्टी",
          "Natural Vegetation and Wildlife",
          "Climate - जलवायु",
          "Demographic Characteristics",
          "Agriculture and Livestock - कृषि और पशुधन",
          "Mineral Resources - खनिज संसाधन",
          "Energy Resources - ऊर्जा संसाधन",
          "Tourism - पर्यटन",
          "Transport, Industries and Trade"
        ]
      },
      {
        name: "Educational Psychology - शिक्षा मनोविज्ञान",
        topics: [
          "Nature, Scope & Implications for Effective Teaching",
          "Developmental Characteristics of Adolescent Learner",
          "Behavioural, Cognitive, Social Cognitive & Constructivist Approach to Learning",
          "Concept of Mental Health & its Application",
          "Strategies for Developing Mental Well-being of Students",
          "Emotional Intelligence and Socio-Emotional Learning"
        ]
      },
      {
        name: "Educational Management - शैक्षिक प्रबंधन",
        topics: [
          "Concept, Functions and Principles",
          "Total Quality Management in Education",
          "Educational Supervision & Inspection",
          "Social Organization and Leadership in Education"
        ]
      },
      {
        name: "Educational Scenario in Rajasthan",
        topics: [
          "SCERT - राज्य शैक्षिक अनुसंधान और प्रशिक्षण परिषद",
          "BSER - माध्यमिक शिक्षा बोर्ड राजस्थान",
          "IASE - उच्च शिक्षा संस्थान",
          "DIET - जिला शिक्षा एवं प्रशिक्षण संस्थान",
          "Rajasthan State Open School",
          "Rajasthan State Text Book Board",
          "State Initiative for Quality Education",
          "Implication of NEP 2020"
        ]
      },
      {
        name: "NEP 2020 & RTE Act 2009",
        topics: [
          "National Education Policy 2020 (School Education)",
          "Right of Children to Free & Compulsory Education Act 2009"
        ]
      }
    ]
  },
  {
    paper: "Paper - II: Hindi (विषय संबंधित)",
    categories: [
      {
        name: "खंड-प्रथम: उच्च माध्यमिक स्तर",
        topics: [
          "वर्ण व्यवस्था - वर्ण व वर्णमाला का वर्गीकरण",
          "ध्वनि-ज्ञान",
          "शब्द-वर्गीकरण (भेद के आधार पर) - तत्सम, तद्भव, देशज, विदेशी",
          "शब्द-वर्गीकरण (व्याकरण के आधार पर) - संज्ञा, सर्वनाम, विशेषण, क्रिया",
          "विलोमार्थी से भेद",
          "व्यावहारिक कोटियाँ - लिंग, वचन, कारक, काल",
          "शब्द-रचना - उपसर्ग, प्रत्यय तथा भेद",
          "शब्द-ज्ञान - पर्यायवाची, विलोम, अनेकार्थी शब्द",
          "शब्द शुद्धि और वाक्य शुद्धि",
          "मुहावरे एवं लोकोक्तियाँ",
          "अर्थ एवं प्रयोग"
        ]
      },
      {
        name: "खंड-द्वितीय: स्नातक स्तर",
        topics: [
          "शब्द शक्तियाँ - अभिधा, लक्षणा, व्यंजना",
          "काव्य-गुण और काव्य-दोष",
          "अलंकार - शब्दालंकार और अर्थालंकार",
          "छंद - मात्रिक और वर्णिक छंद",
          "रस - रस का स्वरूप और रस के प्रकार",
          "हिन्दी साहित्य का इतिहास - आदिकाल से आधुनिक काल",
          "आदिकाल - सिद्ध, नाथ और जैन साहित्य",
          "भक्तिकाल - निर्गुण और सगुण भक्ति",
          "रीतिकाल - रीतिबद्ध, रीतिसिद्ध, रीतिमुक्त काव्य",
          "आधुनिक काल - भारतेंदु युग, द्विवेदी युग, छायावाद, प्रगतिवाद"
        ]
      },
      {
        name: "खंड-द्वितीय: स्नातकोत्तर स्तर",
        topics: [
          "भारतीय काव्यशास्त्र - रस सिद्धांत",
          "अलंकार सिद्धांत",
          "ध्वनि सिद्धांत",
          "वक्रोक्ति सिद्धांत",
          "औचित्य सिद्धांत",
          "पाश्चात्य काव्यशास्त्र - अरस्तू की अनुकृति और विरेचन सिद्धांत",
          "कॉलरिज की कल्पना सिद्धांत",
          "वर्ड्सवर्थ का काव्य भाषा सिद्धांत",
          "क्रोचे की अभिव्यक्तिवाद",
          "आई.ए. रिचर्ड्स का मूल्य सिद्धांत",
          "टी.एस. इलियट की परंपरा की अवधारणा"
        ]
      },
      {
        name: "हिन्दी भाषा - भाषा विज्ञान",
        topics: [
          "हिन्दी भाषा का उद्भव और विकास",
          "बोलियों की वर्गीकरण - राजस्थानी की प्रमुख बोलियाँ",
          "देवनागरी लिपि - उद्भव और विकास",
          "राजस्थानी हिन्दी का सामान्य परिचय",
          "मानक हिन्दी का स्वरूप"
        ]
      },
      {
        name: "शिक्षण विधियाँ एवं अधिगम सामग्री",
        topics: [
          "शिक्षण शास्त्र एवं शिक्षण अधिगम सामग्री",
          "सामान्य शिक्षण एवं विशिष्ट शिक्षण",
          "अभिक्रमित अनुदेशन - रेखीय और शाखीय",
          "सूक्ष्म अनुदेशन कौशल",
          "शिक्षण अभिगम में संचार एवं सूचना प्रौद्योगिकी (ICT)",
          "ई-अभिगम एवं वर्चुअल कक्षा-कक्ष",
          "शिक्षण में अभिनवीकरण का उपयोग"
        ]
      }
    ]
  }
];

// ===== State =====
let currentTopic = '';
let selectedLang = '';
let mockTestData = [];
let userAnswers = {};
let timerInterval = null;
let timerSeconds = 0;
let questionCount = 15;
let testStarted = false;

// ===== DOM =====
const syllabusNav = document.getElementById('syllabusNav');
const landingPage = document.getElementById('landingPage');
const contentPage = document.getElementById('contentPage');
const topicTitle = document.getElementById('topicTitle');
const langSelector = document.getElementById('langSelector');
const tabs = document.getElementById('tabs');
const notesTab = document.getElementById('notesTab');
const mocktestTab = document.getElementById('mocktestTab');
const notesLoading = document.getElementById('notesLoading');
const notesContent = document.getElementById('notesContent');
const testLoading = document.getElementById('testLoading');
const testArea = document.getElementById('testArea');
const resultArea = document.getElementById('resultArea');
const questionsContainer = document.getElementById('questionsContainer');
const submitTestBtn = document.getElementById('submitTestBtn');
const backBtn = document.getElementById('backBtn');
const customTopicBtn = document.getElementById('customTopicBtn');
const customTopicInput = document.getElementById('customTopicInput');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const sidebar = document.getElementById('sidebar');
const progressFill = document.getElementById('progressFill');
const questionCounter = document.getElementById('questionCounter');
const timerDisplay = document.getElementById('timerDisplay');

// ===== Build Sidebar =====
function buildSidebar() {
    let html = '';
    syllabus.forEach((paper, paperIdx) => {
        html += `<div class="nav-paper">${paper.paper}</div>`;
        paper.categories.forEach((cat, catIdx) => {
            const catId = `cat-p${paperIdx}-${catIdx}`;
            html += `<div class="nav-category" data-target="${catId}">
                <span>${cat.name}</span><span class="arrow">&#9654;</span>
            </div>`;
            html += `<div class="nav-subtopics" id="${catId}">`;
            cat.topics.forEach((topic) => {
                html += `<div class="nav-topic" data-topic="${topic}">${topic.length > 55 ? topic.substring(0, 52) + '...' : topic}</div>`;
            });
            html += `</div>`;
        });
    });
    syllabusNav.innerHTML = html;

    document.querySelectorAll('.nav-category').forEach(cat => {
        cat.addEventListener('click', () => {
            const targetId = cat.getAttribute('data-target');
            const sub = document.getElementById(targetId);
            const isOpen = sub.classList.contains('open');
            document.querySelectorAll('.nav-subtopics').forEach(s => s.classList.remove('open'));
            document.querySelectorAll('.nav-category').forEach(c => c.classList.remove('open', 'active'));
            if (!isOpen) { sub.classList.add('open'); cat.classList.add('open', 'active'); }
        });
    });

    document.querySelectorAll('.nav-topic').forEach(el => {
        el.addEventListener('click', () => {
            document.querySelectorAll('.nav-topic').forEach(t => t.classList.remove('active'));
            el.classList.add('active');
            openTopic(el.getAttribute('data-topic'));
            closeMobileSidebar();
        });
    });
}

// ===== Open Topic (show language selector) =====
function openTopic(topic) {
    currentTopic = topic;
    selectedLang = '';
    landingPage.style.display = 'none';
    contentPage.style.display = 'block';
    topicTitle.textContent = topic;

    // Reset everything
    langSelector.style.display = 'block';
    tabs.style.display = 'none';
    notesTab.style.display = 'none';
    mocktestTab.style.display = 'none';
    notesContent.innerHTML = '';
    questionsContainer.innerHTML = '';
    resultArea.style.display = 'none';
    testArea.style.display = 'none';
    submitTestBtn.style.display = 'none';
    document.getElementById('doubtSection').style.display = 'none';
    document.getElementById('doubtHistory').innerHTML = '';
    document.getElementById('videoSection').style.display = 'none';
    document.getElementById('videoPlayer').innerHTML = '';
    document.getElementById('videoList').innerHTML = '';
    document.getElementById('testConfig').style.display = 'block';
    testStarted = false;
    userAnswers = {};
    mockTestData = [];
    stopTimer();

    document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
    contentPage.scrollIntoView({ behavior: 'smooth' });
}

// ===== Language Selection =====
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        selectedLang = btn.getAttribute('data-lang');

        // Show tabs, load notes
        langSelector.style.display = 'none';
        tabs.style.display = 'flex';
        switchTab('notes');
        loadNotes();
    });
});

// ===== Tabs =====
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => switchTab(btn.getAttribute('data-tab')));
});

function switchTab(tab) {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelector(`.tab-btn[data-tab="${tab}"]`).classList.add('active');

    if (tab === 'notes') {
        notesTab.style.display = 'block';
        mocktestTab.style.display = 'none';
    } else {
        notesTab.style.display = 'none';
        mocktestTab.style.display = 'block';
    }
}

// ===== Load Notes =====
async function loadNotes() {
    notesTab.style.display = 'block';
    notesLoading.style.display = 'block';
    notesContent.innerHTML = '';

    try {
        const res = await fetch('/api/notes', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ topic: currentTopic, language: selectedLang })
        });
        const data = await res.json();
        notesLoading.style.display = 'none';

        if (res.ok) {
            notesContent.innerHTML = marked.parse(data.result);
            document.getElementById('doubtSection').style.display = 'block';
            loadYouTubeVideos();
        } else {
            notesContent.innerHTML = `<p class="error-msg">Error: ${data.error}</p>`;
        }
    } catch (e) {
        notesLoading.style.display = 'none';
        notesContent.innerHTML = `<p class="error-msg">Server se connect nahi ho paya!</p>`;
    }
}

// ===== Load YouTube Videos =====
async function loadYouTubeVideos() {
    const videoSection = document.getElementById('videoSection');
    const videoPlayer = document.getElementById('videoPlayer');
    const videoList = document.getElementById('videoList');

    videoSection.style.display = 'none';
    videoPlayer.innerHTML = '';
    videoList.innerHTML = '';

    try {
        const res = await fetch('/api/youtube', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ topic: currentTopic })
        });
        const data = await res.json();

        if (res.ok && data.videos && data.videos.length > 0) {
            videoSection.style.display = 'block';

            // Play first video
            playVideo(data.videos[0].id, videoPlayer);

            // Build thumbnail list
            data.videos.forEach((video, i) => {
                const thumb = document.createElement('div');
                thumb.className = `video-thumb${i === 0 ? ' active' : ''}`;
                thumb.innerHTML = `
                    <img src="${video.thumbnail}" alt="Video ${i + 1}">
                    <div class="play-icon"></div>
                    <div class="video-thumb-label">Video ${i + 1}</div>
                `;
                thumb.addEventListener('click', () => {
                    document.querySelectorAll('.video-thumb').forEach(t => t.classList.remove('active'));
                    thumb.classList.add('active');
                    playVideo(video.id, videoPlayer);
                });
                videoList.appendChild(thumb);
            });
        }
    } catch (e) {
        console.error('YouTube load error:', e);
    }
}

function playVideo(videoId, container) {
    container.innerHTML = `<iframe src="https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>`;
}

// ===== Load Mock Test =====
async function loadMockTest() {
    document.getElementById('testConfig').style.display = 'none';
    testLoading.style.display = 'block';
    testArea.style.display = 'none';
    resultArea.style.display = 'none';
    questionsContainer.innerHTML = '';
    userAnswers = {};
    mockTestData = [];
    testStarted = true;

    try {
        const res = await fetch('/api/mocktest', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ topic: currentTopic, language: selectedLang, count: questionCount })
        });
        const data = await res.json();
        testLoading.style.display = 'none';

        if (res.ok && data.questions) {
            mockTestData = data.questions;
            renderMockTest();
        } else {
            testArea.style.display = 'none';
            questionsContainer.innerHTML = `<p class="error-msg">Mock test load nahi hua. Dobara try karo.</p>`;
            questionsContainer.parentElement.style.display = 'block';
        }
    } catch (e) {
        testLoading.style.display = 'none';
        questionsContainer.innerHTML = `<p class="error-msg">Server se connect nahi ho paya!</p>`;
    }
}

// ===== Render Mock Test =====
function renderMockTest() {
    testArea.style.display = 'block';
    submitTestBtn.style.display = 'block';
    resultArea.style.display = 'none';

    const total = mockTestData.length;
    questionCounter.textContent = `0/${total} answered`;
    progressFill.style.width = '0%';

    let html = '';
    mockTestData.forEach((q, i) => {
        html += `<div class="question-card" id="q${i}">
            <span class="question-num">${i + 1}</span>
            <span class="question-text">${q.question}</span>
            <ul class="options-list">`;
        const labels = ['A', 'B', 'C', 'D'];
        q.options.forEach((opt, j) => {
            html += `<li class="option-item" data-q="${i}" data-opt="${labels[j]}" onclick="selectOption(this)">
                <span class="option-label">${labels[j]}</span>
                <span>${opt}</span>
            </li>`;
        });
        html += `</ul>
            <div class="explanation" id="exp${i}">${q.explanation || ''}</div>
        </div>`;
    });
    questionsContainer.innerHTML = html;

    // Start timer
    startTimer();
}

// ===== Select Option =====
function selectOption(el) {
    if (el.classList.contains('disabled')) return;

    const qIdx = el.getAttribute('data-q');
    const opt = el.getAttribute('data-opt');

    // Deselect siblings
    document.querySelectorAll(`.option-item[data-q="${qIdx}"]`).forEach(o => o.classList.remove('selected'));
    el.classList.add('selected');
    userAnswers[qIdx] = opt;

    // Update counter
    const answered = Object.keys(userAnswers).length;
    const total = mockTestData.length;
    questionCounter.textContent = `${answered}/${total} answered`;
    progressFill.style.width = `${(answered / total) * 100}%`;
}

// ===== Submit Test =====
submitTestBtn.addEventListener('click', () => {
    const total = mockTestData.length;
    const answered = Object.keys(userAnswers).length;

    if (answered < total) {
        if (!confirm(`Aapne ${total - answered} question chhode hain. Submit karna chahte ho?`)) return;
    }

    stopTimer();
    submitTestBtn.style.display = 'none';

    let correct = 0, wrong = 0, unanswered = 0;

    mockTestData.forEach((q, i) => {
        const correctAns = q.answer.trim().toUpperCase().charAt(0);
        const userAns = userAnswers[i] || null;
        const options = document.querySelectorAll(`.option-item[data-q="${i}"]`);

        // Disable all options
        options.forEach(o => {
            o.classList.add('disabled');
            const optLabel = o.getAttribute('data-opt');
            if (optLabel === correctAns) o.classList.add('correct');
            if (userAns && optLabel === userAns && userAns !== correctAns) o.classList.add('wrong');
        });

        // Show explanation
        const expEl = document.getElementById(`exp${i}`);
        if (expEl && expEl.textContent.trim()) expEl.classList.add('show');

        if (!userAns) unanswered++;
        else if (userAns === correctAns) correct++;
        else wrong++;
    });

    // Negative marking: -1/3 for wrong
    const rawScore = correct - (wrong / 3);
    const percentage = Math.round((correct / total) * 100);

    let grade, gradeClass;
    if (percentage >= 80) { grade = 'Excellent! 🎉'; gradeClass = 'excellent'; }
    else if (percentage >= 50) { grade = 'Good! Keep practicing 👍'; gradeClass = 'good'; }
    else { grade = 'Need more practice 📚'; gradeClass = 'poor'; }

    resultArea.style.display = 'block';
    resultArea.innerHTML = `
        <div class="result-card">
            <div class="score-circle ${gradeClass}">
                <span class="score-num">${correct}/${total}</span>
                <span class="score-total">${percentage}%</span>
            </div>
            <div class="score-label">${grade}</div>
            <div class="score-details">
                <div class="score-stat"><div class="num" style="color:var(--correct)">${correct}</div><div class="label">Correct</div></div>
                <div class="score-stat"><div class="num" style="color:var(--wrong)">${wrong}</div><div class="label">Wrong</div></div>
                <div class="score-stat"><div class="num" style="color:var(--text-light)">${unanswered}</div><div class="label">Unanswered</div></div>
                <div class="score-stat"><div class="num">${rawScore.toFixed(1)}</div><div class="label">Score (with -1/3)</div></div>
                <div class="score-stat"><div class="num">${formatTime(timerSeconds)}</div><div class="label">Time Taken</div></div>
            </div>
            <button class="retry-btn" onclick="retryTest()">New Mock Test</button>
        </div>
        <div class="review-section">
            <h3>Review Answers</h3>
            <p style="color:var(--text-light);margin-bottom:1rem;">Green = Correct | Red = Your Wrong Answer | See explanations below each question</p>
        </div>
    `;

    resultArea.scrollIntoView({ behavior: 'smooth' });
});

// ===== Retry Test =====
function retryTest() {
    resultArea.style.display = 'none';
    document.getElementById('testConfig').style.display = 'block';
    testStarted = false;
}

// ===== Timer =====
function startTimer() {
    timerSeconds = 0;
    timerDisplay.textContent = '00:00';
    timerInterval = setInterval(() => {
        timerSeconds++;
        timerDisplay.textContent = formatTime(timerSeconds);
    }, 1000);
}

function stopTimer() {
    if (timerInterval) { clearInterval(timerInterval); timerInterval = null; }
}

function formatTime(s) {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${String(m).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
}

// ===== Back Button =====
backBtn.addEventListener('click', () => {
    contentPage.style.display = 'none';
    landingPage.style.display = 'block';
    stopTimer();
    document.querySelectorAll('.nav-topic').forEach(t => t.classList.remove('active'));
});

// ===== Custom Topic =====
customTopicBtn.addEventListener('click', () => {
    const topic = customTopicInput.value.trim();
    if (topic) openTopic(topic);
    else alert('Pehle koi topic likho!');
});
customTopicInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') customTopicBtn.click(); });

// ===== Quick Topics =====
document.querySelectorAll('.quick-btn').forEach(btn => {
    btn.addEventListener('click', () => openTopic(btn.getAttribute('data-topic')));
});

// ===== Mobile Sidebar =====
let overlay = document.createElement('div');
overlay.className = 'sidebar-overlay';
document.body.appendChild(overlay);
mobileMenuBtn.addEventListener('click', () => { sidebar.classList.toggle('open'); overlay.classList.toggle('active'); });
overlay.addEventListener('click', closeMobileSidebar);
function closeMobileSidebar() { sidebar.classList.remove('open'); overlay.classList.remove('active'); }

// ===== Question Count Selector =====
const customCountInput = document.getElementById('customCountInput');

document.querySelectorAll('.count-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.count-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        questionCount = parseInt(btn.getAttribute('data-count'));
        customCountInput.value = '';
    });
});

customCountInput.addEventListener('input', () => {
    const val = parseInt(customCountInput.value);
    if (val) {
        document.querySelectorAll('.count-btn').forEach(b => b.classList.remove('active'));
        questionCount = Math.min(Math.max(val, 5), 50);
    }
});

document.getElementById('startTestBtn').addEventListener('click', () => {
    // Check custom input first
    const customVal = parseInt(customCountInput.value);
    if (customVal) {
        questionCount = Math.min(Math.max(customVal, 5), 50);
    }
    loadMockTest();
});

// ===== Doubt Feature =====
document.getElementById('doubtBtn').addEventListener('click', askDoubt);
document.getElementById('doubtInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') askDoubt();
});

async function askDoubt() {
    const input = document.getElementById('doubtInput');
    const question = input.value.trim();
    if (!question) return;

    const doubtLoading = document.getElementById('doubtLoading');
    const doubtHistory = document.getElementById('doubtHistory');

    input.value = '';
    doubtLoading.style.display = 'block';

    try {
        const res = await fetch('/api/doubt', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ topic: currentTopic, question, language: selectedLang })
        });
        const data = await res.json();
        doubtLoading.style.display = 'none';

        if (res.ok) {
            const doubtItem = document.createElement('div');
            doubtItem.className = 'doubt-item';
            doubtItem.innerHTML = `
                <div class="doubt-question">Q: ${question}</div>
                <div class="doubt-answer">${marked.parse(data.result)}</div>
            `;
            doubtHistory.prepend(doubtItem);
        } else {
            alert('Error: ' + (data.error || 'Something went wrong'));
        }
    } catch (e) {
        doubtLoading.style.display = 'none';
        alert('Server se connect nahi ho paya!');
    }
}

// ===== Init =====
document.addEventListener('DOMContentLoaded', buildSidebar);
