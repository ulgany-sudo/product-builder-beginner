const courses = [
    {
        name: "반포 한강공원",
        location: "서초구 반포동",
        distance: "약 5km",
        difficulty: "쉬움 (평지)",
        description: "한강의 아름다운 야경과 잠수교를 건너는 상쾌함을 동시에 느낄 수 있는 서울의 대표적인 러닝 코스입니다.",
        features: ["야경 명소", "평지 위주", "편의점 많음", "주차 가능"]
    },
    {
        name: "남산 둘레길",
        location: "중구 회현동/예장동",
        distance: "약 7.1km (둘레길 기준)",
        difficulty: "보통 (언덕 있음)",
        description: "서울의 중심에서 숲을 만끽하며 달릴 수 있는 코스입니다. 적당한 경사가 있어 훈련용으로도 좋습니다.",
        features: ["숲길", "업힐 포함", "남산타워 뷰", "우레탄 트랙"]
    },
    {
        name: "서울숲 한 바퀴",
        location: "성동구 성수동",
        distance: "약 3.5km",
        difficulty: "쉬움 (평지)",
        description: "도심 속 숲길을 따라 달리는 코스로, 사슴 방사장과 거울 연못 등 볼거리가 다양합니다.",
        features: ["숲길", "평지", "접근성 좋음", "데이트 코스"]
    },
    {
        name: "여의도 한강공원",
        location: "영등포구 여의도동",
        distance: "약 8.4km (한 바퀴)",
        difficulty: "쉬움 (평지)",
        description: "탁 트인 한강 뷰와 시티 뷰를 동시에 즐길 수 있습니다. 길이 넓어 사람이 많아도 쾌적하게 달릴 수 있습니다.",
        features: ["시티 뷰", "넓은 트로", "평지", "바람 주의"]
    },
    {
        name: "석촌호수 둘레길",
        location: "송파구 잠실동",
        distance: "약 2.5km",
        difficulty: "쉬움 (평지)",
        description: "완벽하게 정비된 우레탄 트랙을 따라 호수와 롯데월드를 보며 달리는 코스입니다. 야간에도 매우 밝습니다.",
        features: ["호수 뷰", "우레탄 트랙", "매우 밝음", "잠실역 인근"]
    },
    {
        name: "북서울 꿈의숲",
        location: "강북구 번동",
        distance: "약 2km (공원 내)",
        difficulty: "보통 (경사 있음)",
        description: "강북 지역의 넓은 공원 코스로, 적당한 경사와 넓은 광장이 섞여 있어 지루하지 않은 러닝이 가능합니다.",
        features: ["공원 코스", "경사 포함", "전망대", "가족 단위 많음"]
    }
];

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

// Recommendation logic
recommendBtn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * courses.length);
    const course = courses[randomIndex];
    
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
