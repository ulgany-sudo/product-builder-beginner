const regions = {
    "서울": ["강남구", "서초구", "송파구", "마포구", "성동구", "영등포구", "종로구", "중구", "강북구", "광진구", "강서구"],
    "경기": ["수원시", "성남시", "고양시", "용인시", "안양시", "파주시", "과천시"],
    "인천": ["연수구", "남동구", "중구"],
    "강원": ["춘천시", "원주시", "강릉시", "속초시"],
    "충청": ["천안시", "청주시", "대전광역시", "세종특별자치시"],
    "전라": ["전주시", "광주광역시", "여수시", "목포시"],
    "경상": ["부산광역시", "대구광역시", "울산광역시", "창원시", "포항시"],
    "제주": ["제주시", "서귀포시"]
};

const courses = [
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
        name: "안양천 수변로 (안양-광명 코스)",
        largeRegion: "경기",
        smallRegion: "안양시",
        location: "안양시 만안구/동안구",
        distance: "약 10km 이상 (선택 가능)",
        difficulty: "쉬움 (평지)",
        description: "안양천을 따라 곧게 뻗은 자전거 도로 옆 보행자 전용도로입니다. 계절마다 피는 야생화와 시원한 물줄기를 보며 안정적인 페이스로 달리기 좋습니다.",
        features: ["평지", "직선 코스", "수변로", "자연 친화"]
    },
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
        name: "대구 수성못 둘레길",
        largeRegion: "경상",
        smallRegion: "대구광역시",
        location: "대구 수성구",
        distance: "약 2km",
        difficulty: "쉬움 (평지)",
        description: "대구 시민들이 가장 사랑하는 수변 산책로입니다. 야간 분수 쇼와 함께 활기찬 분위기 속에서 즐겁게 러닝을 즐길 수 있습니다.",
        features: ["호수 뷰", "분수 쇼", "평지", "활기찬 분위기"]
    },
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
        name: "춘천 공지천 수변 코스",
        largeRegion: "강원",
        smallRegion: "춘천시",
        location: "강원 춘천시",
        distance: "약 5km",
        difficulty: "쉬움 (평지)",
        description: "의암호의 물안개와 함께 달리는 춘천의 대표 코스입니다. 공지천 조각공원에서 시작해 호반 산책로를 따라 이어지는 길은 낭만적인 분위기를 선사합니다.",
        features: ["호수 뷰", "물안개", "평지", "자연 명소"]
    }
];

const largeRegionSelect = document.getElementById('large-region');
const smallRegionSelect = document.getElementById('small-region');
const recommendBtn = document.getElementById('recommend-btn');
const courseResult = document.getElementById('course-result');
const themeToggle = document.getElementById('theme-toggle');

// Theme logic
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggle.textContent = '☀️';
}

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

// Cascading Select Logic
largeRegionSelect.addEventListener('change', (e) => {
    const selectedLarge = e.target.value;
    smallRegionSelect.innerHTML = '<option value="">상세 지역 선택</option>';
    
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

// Recommendation logic
recommendBtn.addEventListener('click', () => {
    const large = largeRegionSelect.value;
    const small = smallRegionSelect.value;
    
    if (!large) {
        alert("지역을 먼저 선택해주세요!");
        return;
    }

    let filteredCourses = courses.filter(c => c.largeRegion === large);
    
    if (small) {
        filteredCourses = filteredCourses.filter(c => c.smallRegion === small);
    }

    if (filteredCourses.length === 0) {
        alert("해당 지역에 등록된 코스가 아직 없습니다. 제보를 통해 알려주세요!");
        return;
    }

    const randomIndex = Math.floor(Math.random() * filteredCourses.length);
    const course = filteredCourses[randomIndex];
    
    displayCourse(course);
});

function displayCourse(course) {
    document.getElementById('course-name').textContent = course.name;
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
    
    // Smooth scroll to result
    courseResult.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// Mobile Menu Smooth Scroll Fix (for navbar links)
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Navbar height offset
                behavior: 'smooth'
            });
        }
    });
});
