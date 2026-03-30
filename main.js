const regions = {
    "서울": ["강남구", "서초구", "송파구", "마포구", "성동구", "영등포구", "종로구", "중구", "강북구"],
    "경기": ["수원시", "성남시", "고양시", "용인시", "안양시"],
    "인천": ["연수구", "남동구"],
    "강원": ["춘천시", "원주시", "강릉시"],
    "충청": ["천안시", "청주시", "대전광역시"],
    "전라": ["전주시", "광주광역시", "여수시"],
    "경상": ["부산광역시", "대구광역시", "울산광역시", "창원시"],
    "제주": ["제주시", "서귀포시"]
};

const courses = [
    {
        name: "반포 한강공원",
        largeRegion: "서울",
        smallRegion: "서초구",
        location: "서초구 반포동",
        distance: "약 5km",
        difficulty: "쉬움 (평지)",
        description: "한강의 아름다운 야경과 잠수교를 건너는 상쾌함을 동시에 느낄 수 있는 서울의 대표적인 러닝 코스입니다.",
        features: ["야경 명소", "평지 위주", "편의점 많음", "주차 가능"]
    },
    {
        name: "남산 둘레길",
        largeRegion: "서울",
        smallRegion: "중구",
        location: "중구 회현동/예장동",
        distance: "약 7.1km (둘레길 기준)",
        difficulty: "보통 (언덕 있음)",
        description: "서울의 중심에서 숲을 만끽하며 달릴 수 있는 코스입니다. 적당한 경사가 있어 훈련용으로도 좋습니다.",
        features: ["숲길", "업힐 포함", "남산타워 뷰", "우레탄 트랙"]
    },
    {
        name: "서울숲 한 바퀴",
        largeRegion: "서울",
        smallRegion: "성동구",
        location: "성동구 성수동",
        distance: "약 3.5km",
        difficulty: "쉬움 (평지)",
        description: "도심 속 숲길을 따라 달리는 코스로, 사슴 방사장과 거울 연못 등 볼거리가 다양합니다.",
        features: ["숲길", "평지", "접근성 좋음", "데이트 코스"]
    },
    {
        name: "여의도 한강공원",
        largeRegion: "서울",
        smallRegion: "영등포구",
        location: "영등포구 여의도동",
        distance: "약 8.4km (한 바퀴)",
        difficulty: "쉬움 (평지)",
        description: "탁 트인 한강 뷰와 시티 뷰를 동시에 즐길 수 있습니다. 길이 넓어 사람이 많아도 쾌적하게 달릴 수 있습니다.",
        features: ["시티 뷰", "넓은 트로", "평지", "바람 주의"]
    },
    {
        name: "수원 광교호수공원",
        largeRegion: "경기",
        smallRegion: "수원시",
        location: "수원시 영통구",
        distance: "약 3km",
        difficulty: "쉬움 (평지)",
        description: "아름다운 호수 전망을 보며 달릴 수 있는 코스로, 밤에는 화려한 야경이 일품입니다.",
        features: ["호수 뷰", "야경", "평지", "잘 정비된 길"]
    },
    {
        name: "부산 해운대 동백섬",
        largeRegion: "경상",
        smallRegion: "부산광역시",
        location: "부산 해운대구",
        distance: "약 1km (순환)",
        difficulty: "쉬움 (평지)",
        description: "바다 냄새를 맡으며 달릴 수 있는 코스로, 광안대교와 해운대 바다를 한눈에 볼 수 있습니다.",
        features: ["오션 뷰", "관광지", "평지", "포토존"]
    },
    {
        name: "제주 사라봉/별도봉",
        largeRegion: "제주",
        smallRegion: "제주시",
        location: "제주시 건입동",
        distance: "약 3km",
        difficulty: "보통 (경사 있음)",
        description: "제주항이 내려다보이는 해안 절벽 길을 따라 달리는 환상적인 코스입니다.",
        features: ["해안 절벽", "일몰 명소", "숲길", "도민 추천"]
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
