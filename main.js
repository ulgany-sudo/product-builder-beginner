const regions = {
    "서울": ["강남구", "서초구", "송파구", "마포구", "성동구", "영등포구", "종로구", "중구", "강북구", "광진구", "강서구", "양천구", "노원구"],
    "경기": ["수원시", "성남시", "고양시", "용인시", "안양시", "파주시", "과천시", "부천시", "광명시", "남양주시"],
    "인천": ["연수구", "남동구", "중구", "부평구"],
    "강원": ["춘천시", "원주시", "강릉시", "속초시", "양양군"],
    "충청": ["천안시", "청주시", "대전광역시", "세종특별자치시", "공주시"],
    "전라": ["전주시", "광주광역시", "여수시", "목포시", "순천시"],
    "경상": ["부산광역시", "대구광역시", "울산광역시", "창원시", "포항시", "경주시", "김해시"],
    "제주": ["제주시", "서귀포시"]
};

const courses = [
    // --- SEOUL ---
    {
        name: "반포 한강공원 (달빛무지개 코스)",
        largeRegion: "서울",
        smallRegion: "서초구",
        location: "서초구 반포동",
        distance: "약 5km",
        difficulty: "쉬움 (평지)",
        description: "한강의 아름다운 야경과 세계 최장 교량 분수인 달빛무지개 분수를 감상하며 달릴 수 있는 코스입니다. 잠수교를 건너 강남과 강북을 잇는 러닝은 서울 러너들의 필수 코스입니다.",
        features: ["야경 명소", "평지 위주", "편의점 많음", "주차 가능", "분수 쇼"]
    },
    {
        name: "남산 둘레길 (남산타워 코스)",
        largeRegion: "서울",
        smallRegion: "중구",
        location: "중구 회현동/예장동",
        distance: "약 7.1km (둘레길 기준)",
        difficulty: "보통 (언덕 있음)",
        description: "서울의 중심에서 사계절의 변화를 가장 가까이서 느낄 수 있는 숲길 코스입니다. 적당한 경사가 있어 심폐 기능 향상에 효과적이며, 우레탄 트랙이 잘 정비되어 무릎 부담이 적습니다.",
        features: ["숲길", "업힐 포함", "남산타워 뷰", "우레탄 트랙", "사계절 명소"]
    },
    {
        name: "올림픽공원 평화의광장 코스",
        largeRegion: "서울",
        smallRegion: "송파구",
        location: "송파구 방이동",
        distance: "약 4km",
        difficulty: "쉬움 (평지)",
        description: "넓은 광장과 잘 정비된 산책로를 따라 달리는 코스입니다. '나홀로나무'로 유명한 들풀 평원을 보며 달릴 수 있으며, 밤에도 조명이 밝아 안전한 러닝이 가능합니다.",
        features: ["평지", "공원 코스", "조명 밝음", "주차 편리", "포토존"]
    },
    {
        name: "서울숲 & 응봉산 코스",
        largeRegion: "서울",
        smallRegion: "성동구",
        location: "성동구 성수동",
        distance: "약 4.5km",
        difficulty: "보통 (평지+계단)",
        description: "도심 속 거대한 숲인 서울숲을 지나 응봉산 정상까지 이어지는 코스입니다. 응봉산에서 내려다보는 한강과 서울 시내 야경은 고된 러닝의 보람을 느끼게 해줍니다.",
        features: ["숲길", "야경", "업힐", "데이트 코스", "포토존"]
    },
    {
        name: "여의도 한 바퀴 (한강공원 코스)",
        largeRegion: "서울",
        smallRegion: "영등포구",
        location: "영등포구 여의도동",
        distance: "약 8.4km",
        difficulty: "쉬움 (평지)",
        description: "탁 트인 한강과 화려한 여의도 마천루를 배경으로 달리는 코스입니다. 길이 넓고 평탄하여 인터벌 훈련이나 장거리 지속주를 하기에 최적의 장소입니다.",
        features: ["시티 뷰", "넓은 트로", "평지", "바람 주의", "벚꽃 명소"]
    },
    {
        name: "양천구 안양천 수변로",
        largeRegion: "서울",
        smallRegion: "양천구",
        location: "양천구 신정동",
        distance: "약 6km",
        difficulty: "쉬움 (평지)",
        description: "안양천을 따라 조성된 곧은 길입니다. 계절마다 다른 꽃들이 피어 눈이 즐겁고, 바닥이 평탄하여 페이스 유지 연습에 매우 좋습니다.",
        features: ["꽃길", "평지", "직선 코스", "자연 친화"]
    },
    {
        name: "노원구 당현천 코스",
        largeRegion: "서울",
        smallRegion: "노원구",
        location: "노원구 상계동",
        distance: "약 3.2km",
        difficulty: "쉬움 (평지)",
        description: "중랑천으로 이어지는 당현천을 따라 달리는 코스입니다. 지역 주민들의 사랑을 받는 산책로로, 야간 조명 설치가 잘 되어 있어 밤 러닝에 최적입니다.",
        features: ["야간 러닝", "평지", "지역 명소", "수변로"]
    },

    // --- GYEONGGI ---
    {
        name: "수원 광교호수공원",
        largeRegion: "경기",
        smallRegion: "수원시",
        location: "수원시 영통구",
        distance: "약 3km",
        difficulty: "쉬움 (평지)",
        description: "원천호수와 신대호수를 잇는 아름다운 수변 산책로를 따라 달리는 코스입니다. 밤에는 수변 데크의 조명이 어우러져 환상적인 분위기를 자아냅니다.",
        features: ["호수 뷰", "야경", "평지", "잘 정비된 길", "가족 동반 추천"]
    },
    {
        name: "일산 호수공원",
        largeRegion: "경기",
        smallRegion: "고양시",
        location: "고양시 일산동구",
        distance: "약 4.7km (순환)",
        difficulty: "쉬움 (평지)",
        description: "국내 최대의 인공 호수를 따라 조성된 전용 산책로입니다. 보행자와 자전거 도로가 완벽히 분리되어 있어 러닝에만 온전히 집중할 수 있는 최고의 환경입니다.",
        features: ["호수 뷰", "완벽한 분리", "평지", "접근성 우수"]
    },
    {
        name: "부천 상동호수공원",
        largeRegion: "경기",
        smallRegion: "부천시",
        location: "부천시 상동",
        distance: "약 2.5km",
        difficulty: "쉬움 (평지)",
        description: "아담하지만 알찬 호수공원 코스입니다. 사계절 꽃이 만발하며, 도심 한복판에 위치하여 퇴근 후 가볍게 뛰기에 아주 좋습니다.",
        features: ["도심 속 쉼터", "평지", "꽃길", "가벼운 러닝"]
    },
    {
        name: "남양주 다산생태공원 코스",
        largeRegion: "경기",
        smallRegion: "남양주시",
        location: "남양주시 조안면",
        distance: "약 4km",
        difficulty: "쉬움 (평지)",
        description: "팔당호의 풍경을 감상하며 자연 속에서 힐링할 수 있는 코스입니다. 공기가 매우 맑고 길이 조용하여 명상하듯 달리기 좋습니다.",
        features: ["자연 힐링", "팔당호 뷰", "평지", "조용한 코스"]
    },

    // --- INCHEON ---
    {
        name: "송도 센트럴파크 코스",
        largeRegion: "인천",
        smallRegion: "연수구",
        location: "인천 연수구 송도동",
        distance: "약 4km",
        difficulty: "쉬움 (평지)",
        description: "대한민국 최초의 해수 공원을 따라 달리는 이국적인 코스입니다. 고층 빌딩 숲과 운하가 어우러진 풍경은 마치 미래 도시에서 러닝을 하는 듯한 기분을 줍니다.",
        features: ["이국적 풍경", "야경", "평지", "주차 용이", "운하 뷰"]
    },
    {
        name: "인천대공원 순환로",
        largeRegion: "인천",
        smallRegion: "남동구",
        location: "인천 남동구 장수동",
        distance: "약 4.5km",
        difficulty: "보통 (약간의 경사)",
        description: "울창한 가로수길과 호수가 있는 인천 최대의 공원입니다. 사계절 경관이 뚜렷하며 길이 넓어 단체 러닝(크루 활동)을 하기에 매우 적합합니다.",
        features: ["가로수길", "벚꽃 명소", "넓은 길", "크루 추천"]
    },
    {
        name: "인천 부평 공원 코스",
        largeRegion: "인천",
        smallRegion: "부평구",
        location: "인천 부평구 부평동",
        distance: "약 2km",
        difficulty: "쉬움 (평지)",
        description: "군 부대가 이전한 부지에 조성된 넓은 평지 공원입니다. 바닥이 우레탄으로 잘 관리되어 있어 관절 부담 없이 부드럽게 달릴 수 있습니다.",
        features: ["우레탄 트랙", "평지", "접근성 좋음", "가족 공원"]
    },

    // --- GANGWON ---
    {
        name: "강릉 경포호 산책로",
        largeRegion: "강원",
        smallRegion: "강릉시",
        location: "강원 강릉시 저동",
        distance: "약 4.3km (순환)",
        difficulty: "쉬움 (평지)",
        description: "바다와 호수가 만나는 환상적인 풍경 속을 달릴 수 있습니다. 호수 주변으로 조각 공원과 가시연 습지가 있어 눈이 즐거운 러닝이 가능합니다.",
        features: ["호수+바다", "평지", "관광 명소", "일출 추천"]
    },
    {
        name: "양양 낙산 해안로",
        largeRegion: "강원",
        smallRegion: "양양군",
        location: "강원 양양군 강현면",
        distance: "약 5km",
        difficulty: "쉬움 (평지)",
        description: "동해안의 시원한 파도 소리를 배경음악 삼아 달리는 해안 코스입니다. 탁 트인 바다 전망이 러너의 피로를 잊게 해줍니다.",
        features: ["오션 뷰", "파도 소리", "평지", "해안 도로"]
    },

    // --- CHUNGCHEONG ---
    {
        name: "대전 갑천 수변로",
        largeRegion: "충청",
        smallRegion: "대전광역시",
        location: "대전 서구/유성구",
        distance: "약 5km (엑스포다리 기준)",
        difficulty: "쉬움 (평지)",
        description: "대전 엑스포 과학공원을 중심으로 흐르는 갑천을 따라 달리는 코스입니다. 엑스포다리의 화려한 조명과 한밭수목원의 숲 기운을 동시에 느낄 수 있습니다.",
        features: ["야경", "평지", "자전거 도로 분리", "한밭수목원 인근"]
    },
    {
        name: "공주 금강 신관공원 코스",
        largeRegion: "충청",
        smallRegion: "공주시",
        location: "충남 공주시 신관동",
        distance: "약 3.5km",
        difficulty: "쉬움 (평지)",
        description: "세계문화유산인 공산성을 바라보며 금강변을 달리는 역사와 자연이 어우러진 코스입니다. 강바람이 시원하여 여름철 저녁 러닝에 최고입니다.",
        features: ["역사 뷰", "금강 뷰", "평지", "여름 추천"]
    },

    // --- JEONLA ---
    {
        name: "전주 덕진공원 호반 코스",
        largeRegion: "전라",
        smallRegion: "전주시",
        location: "전북 전주시 덕진구",
        distance: "약 1.7km (순환)",
        difficulty: "쉬움 (평지)",
        description: "전통적인 정취를 간직한 덕진호 주변을 달리는 코스입니다. 여름철 만개한 연꽃 사이로 조성된 데크 길을 따라 달리는 것은 전주 러닝의 백미입니다.",
        features: ["연꽃 명소", "전통미", "평지", "야간 조명"]
    },
    {
        name: "순천만 국가정원 외곽 코스",
        largeRegion: "전라",
        smallRegion: "순천시",
        location: "전남 순천시 남제동",
        distance: "약 5.5km",
        difficulty: "쉬움 (평지)",
        description: "세계 5대 연안 습지인 순천만과 국가정원의 아름다움을 담은 코스입니다. 자연 생태계가 잘 보존되어 있어 신선한 공기를 마시며 달릴 수 있습니다.",
        features: ["생태 관광", "청정 공기", "평지", "국가정원"]
    },

    // --- GYEONGSANG ---
    {
        name: "부산 해운대 동백섬 순환로",
        largeRegion: "경상",
        smallRegion: "부산광역시",
        location: "부산 해운대구",
        distance: "약 1km (반복)",
        difficulty: "쉬움 (평지)",
        description: "파도 소리를 들으며 해안 절경을 따라 달리는 짧지만 강렬한 코스입니다. 누리마루 APEC 하우스와 광안대교를 배경으로 바닷바람을 맞으며 달리는 경험은 특별합니다.",
        features: ["오션 뷰", "관광지", "평지", "포토존", "파도 소리"]
    },
    {
        name: "경주 보문호반 산책길",
        largeRegion: "경상",
        smallRegion: "경주시",
        location: "경북 경주시 신평동",
        distance: "약 8km (순환)",
        difficulty: "보통 (거리 있음)",
        description: "천년고도 경주의 정취를 느끼며 보문호수를 한 바퀴 도는 코스입니다. 벚꽃 시즌에는 전국에서 가장 아름다운 꽃길 러닝을 즐길 수 있습니다.",
        features: ["호수 뷰", "벚꽃 명소", "긴 거리", "관광 명소"]
    },
    {
        name: "김해 해반천 수변길",
        largeRegion: "경상",
        smallRegion: "김해시",
        location: "경남 김해시 내동",
        distance: "약 6.5km",
        difficulty: "쉬움 (평지)",
        description: "김해 시내를 관통하는 해반천을 따라 달리는 코스입니다. 가야 시대의 유적지들을 스치듯 지나며 달리는 역사적인 경험을 제공합니다.",
        features: ["역사 탐방", "수변로", "평지", "시민 공원"]
    },

    // --- JEJU ---
    {
        name: "제주 사라봉/별도봉 장수산책로",
        largeRegion: "제주",
        smallRegion: "제주시",
        location: "제주시 건입동",
        distance: "약 3.5km",
        difficulty: "보통 (경사 있음)",
        description: "제주항과 푸른 바다를 내려다보며 달리는 해안 절벽 코스입니다. 특히 일몰 시간에 맞춰 달리면 '사봉낙조'라 불리는 아름다운 노을을 감상할 수 있습니다.",
        features: ["해안 절벽", "일몰 명소", "숲길", "도민 추천", "노을 맛집"]
    },
    {
        name: "서귀포 칠십리시공원",
        largeRegion: "제주",
        smallRegion: "서귀포시",
        location: "제주 서귀포시 서홍동",
        distance: "약 2km",
        difficulty: "쉬움 (평지)",
        description: "천지연 폭포를 위에서 내려다보며 달릴 수 있는 독특한 코스입니다. 서귀포의 온화한 기후와 한라산 뷰를 동시에 즐기며 아기자기한 공원 길을 달립니다.",
        features: ["폭포 뷰", "한라산 뷰", "평지", "조용한 분위기"]
    }
];

// Theme logic
const themeToggle = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
    if (themeToggle) themeToggle.textContent = '☀️';
}

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        let theme = 'light';
        if (document.body.classList.contains('dark-mode')) {
            theme = 'dark';
            themeToggle.textContent = '☀️';
        } else {
            themeToggle.textContent = '🌙';
        }
        localStorage.setItem('theme', theme);
    });
}

// Course Recommendation Logic (Only for recommend.html)
const largeRegionSelect = document.getElementById('large-region');
const smallRegionSelect = document.getElementById('small-region');
const recommendBtn = document.getElementById('recommend-btn');
const courseResult = document.getElementById('course-result');

if (largeRegionSelect) {
    largeRegionSelect.addEventListener('change', (e) => {
        const selectedLarge = e.target.value;
        smallRegionSelect.innerHTML = '<option value="">전체 소지역</option>';
        
        if (selectedLarge && regions[selectedLarge]) {
            regions[selectedLarge].forEach(small => {
                const option = document.createElement('option');
                option.value = small;
                option.textContent = small;
                smallRegionSelect.appendChild(option);
            });
            smallRegionSelect.disabled = false;
        } else {
            smallRegionSelect.disabled = true;
        }
    });
}

if (recommendBtn) {
    recommendBtn.addEventListener('click', () => {
        const large = largeRegionSelect.value;
        const small = smallRegionSelect.value;
        
        let filteredCourses = courses;
        let isFallback = false;

        if (large) {
            filteredCourses = filteredCourses.filter(c => c.largeRegion === large);
            if (small && small !== "") {
                const specificCourses = filteredCourses.filter(c => c.smallRegion === small);
                if (specificCourses.length === 0) {
                    isFallback = true;
                    // Keep the large region filtered courses for fallback
                } else {
                    filteredCourses = specificCourses;
                }
            }
        }

        if (filteredCourses.length === 0) {
            alert("해당 지역에 등록된 코스가 아직 없습니다. 다른 지역을 선택하거나 전체에서 골라보세요!");
            return;
        }

        // Randomly pick one from the filtered list
        const randomIndex = Math.floor(Math.random() * filteredCourses.length);
        const course = filteredCourses[randomIndex];
        
        // Simple "Loading" effect
        recommendBtn.textContent = "추천 코스 찾는 중...";
        recommendBtn.disabled = true;

        setTimeout(() => {
            displayCourse(course, isFallback);
            recommendBtn.textContent = "코스 추천받기";
            recommendBtn.disabled = false;
        }, 600);
    });
}

function displayCourse(course, isFallback) {
    const nameEl = document.getElementById('course-name');
    if (!nameEl) return;

    // Reset previous fallback message if any
    const existingMsg = document.getElementById('fallback-msg');
    if (existingMsg) existingMsg.remove();

    if (isFallback) {
        const msg = document.createElement('p');
        msg.id = 'fallback-msg';
        msg.style.color = 'var(--accent-color)';
        msg.style.fontWeight = 'bold';
        msg.style.marginBottom = '1rem';
        msg.textContent = "⚠️ 선택하신 상세 지역에 아직 코스가 없네요. 대신 주변의 멋진 코스를 추천해 드릴게요!";
        courseResult.prepend(msg);
    }

    nameEl.textContent = course.name;
    document.getElementById('course-location').textContent = course.location;
    document.getElementById('course-distance').textContent = course.distance;
    document.getElementById('course-difficulty').textContent = course.difficulty;
    document.getElementById('course-description').textContent = course.description;
    
    const featuresContainer = document.getElementById('course-features');
    featuresContainer.innerHTML = '';
    course.features.forEach(feature => {
        const tag = document.createElement('span');
        tag.className = 'tag';
        tag.textContent = feature;
        featuresContainer.appendChild(tag);
    });
    
    courseResult.style.display = 'block';
    courseResult.classList.remove('fade-in');
    void courseResult.offsetWidth; // Trigger reflow
    courseResult.classList.add('fade-in');
    
    courseResult.scrollIntoView({ behavior: 'smooth', block: 'center' });
}
