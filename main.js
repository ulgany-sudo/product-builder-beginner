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
        name: "월드컵공원 평화의공원 코스",
        largeRegion: "서울",
        smallRegion: "마포구",
        location: "마포구 상암동",
        distance: "약 3km",
        difficulty: "쉬움 (평지)",
        description: "평화의 광장을 중심으로 난지 연못을 한 바퀴 도는 코스입니다. 광활한 하늘공원과 노을공원을 옆에 두고 상쾌한 바람을 맞으며 달릴 수 있습니다.",
        features: ["평지", "자연 친화", "주차 용이", "초보 추천"]
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
        name: "분당 중앙공원 코스",
        largeRegion: "경기",
        smallRegion: "성남시",
        location: "성남시 분당구",
        distance: "약 2.5km",
        difficulty: "쉬움 (평지)",
        description: "분당천을 끼고 도는 숲길과 광장이 어우러진 코스입니다. 고즈넉한 한옥과 정자가 있어 전통적인 분위기 속에서 이색적인 러닝을 즐길 수 있습니다.",
        features: ["전통미", "숲길", "평지", "산책로 정비"]
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
        name: "춘천 공지천 수변 코스",
        largeRegion: "강원",
        smallRegion: "춘천시",
        location: "강원 춘천시",
        distance: "약 5km",
        difficulty: "쉬움 (평지)",
        description: "의암호의 물안개와 함께 달리는 춘천의 대표 코스입니다. 공지천 조각공원에서 시작해 호반 산책로를 따라 이어지는 길은 낭만적인 분위기를 선사합니다.",
        features: ["호수 뷰", "물안개", "평지", "자연 명소"]
    },
    {
        name: "속초 영랑호 둘레길",
        largeRegion: "강원",
        smallRegion: "속초시",
        location: "강원 속초시 영랑동",
        distance: "약 7.8km",
        difficulty: "쉬움 (평지)",
        description: "설악산과 호수가 어우러진 비경을 감상하며 달릴 수 있는 코스입니다. 특히 범바위 부근의 절경은 러너들 사이에서 사진 명소로 유명합니다.",
        features: ["설악산 뷰", "호수 뷰", "평지", "포토존"]
    },
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
        name: "세종 호수공원 순환 코스",
        largeRegion: "충청",
        smallRegion: "세종특별자치시",
        location: "세종시 연기면",
        distance: "약 4.8km",
        difficulty: "쉬움 (평지)",
        description: "국내 최대 인공호수공원으로, 수상무대섬과 다양한 테마 정원을 지나며 달립니다. 장애물 없는 평탄한 우레탄 길이 길게 이어져 페이스 측정에 최적입니다.",
        features: ["평지", "우레탄 트랙", "시티 뷰", "최신 시설"]
    },
    {
        name: "천안 독립기념관 겨레의 탑 코스",
        largeRegion: "충청",
        smallRegion: "천안시",
        location: "충남 천안시 목천읍",
        distance: "약 3km (경내 순환)",
        difficulty: "보통 (경사 있음)",
        description: "웅장한 겨레의 집과 독립기념관 주변의 수려한 자연경관을 따라 달리는 코스입니다. 가을철 단풍길은 전국에서도 손꼽히는 아름다운 러닝 코스입니다.",
        features: ["역사적 장소", "단풍 명소", "숲길", "힐링"]
    },
    {
        name: "광주 중외공원 & 비엔날레 코스",
        largeRegion: "전라",
        smallRegion: "광주광역시",
        location: "광주 북구 용봉동",
        distance: "약 2.5km",
        difficulty: "보통 (언덕 포함)",
        description: "예술과 자연이 공존하는 공간에서 즐기는 러닝입니다. 중외공원 놀이동산과 미술관 주변 산책로는 경사가 있어 짧지만 강한 훈련이 가능합니다.",
        features: ["문화 예술", "언덕 훈련", "숲길", "산책로"]
    },
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
        name: "여수 오동도 해안 코스",
        largeRegion: "전라",
        smallRegion: "여수시",
        location: "전남 여수시 수정동",
        distance: "약 3km (방파제 포함)",
        difficulty: "보통 (데크 계단 포함)",
        description: "여수 밤바다의 정취를 온몸으로 느끼며 달리는 코스입니다. 방파제 길을 지나 오동도 숲속 데크 길을 달리면 바다 한가운데에 있는 듯한 기분을 줍니다.",
        features: ["오션 뷰", "동백나무 숲", "야경", "관광 명소"]
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
        name: "대구 신천 수변 코스",
        largeRegion: "경상",
        smallRegion: "대구광역시",
        location: "대구 중구/남구/북구",
        distance: "약 10km 이상 (선택 가능)",
        difficulty: "쉬움 (평지)",
        description: "대구의 젖줄인 신천을 따라 조성된 수변로입니다. 대구 도심을 관통하며 길게 뻗어 있어 자신의 실력에 맞춰 거리를 조절하기 매우 좋습니다.",
        features: ["직선 코스", "평지", "접근성 최고", "시민 공원"]
    },
    {
        name: "울산 태화강 국가정원 코스",
        largeRegion: "경상",
        smallRegion: "울산광역시",
        location: "울산 중구 태화동",
        distance: "약 4km (순환)",
        difficulty: "쉬움 (평지)",
        description: "십리대숲의 울창한 대나무 사이로 부는 바람을 맞으며 달리는 환상적인 코스입니다. 국가정원으로 지정될 만큼 관리가 뛰어나며 지면 상태가 매우 훌륭합니다.",
        features: ["대나무 숲", "국가정원", "평지", "힐링 코스"]
    },
    {
        name: "포항 영일대 해안로",
        largeRegion: "경상",
        smallRegion: "포항시",
        location: "경북 포항시 북구",
        distance: "약 2.5km",
        difficulty: "쉬움 (평지)",
        description: "동해안의 탁 트인 바다와 포스코의 화려한 조명을 배경으로 달리는 코스입니다. 모래사장 옆으로 난 평탄한 보도를 따라 달리면 가슴이 뻥 뚫리는 기분을 느낄 수 있습니다.",
        features: ["오션 뷰", "포스코 야경", "평지", "바닷바람"]
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
}

if (recommendBtn) {
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
}

function displayCourse(course) {
    const nameEl = document.getElementById('course-name');
    if (!nameEl) return;

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
    courseResult.scrollIntoView({ behavior: 'smooth', block: 'center' });
}
