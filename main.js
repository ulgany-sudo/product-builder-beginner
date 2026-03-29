document.getElementById('generate-btn').addEventListener('click', generateLottoNumbers);
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

function generateLottoNumbers() {
    const numbers = [];
    while (numbers.length < 6) {
        const randomNum = Math.floor(Math.random() * 45) + 1;
        if (!numbers.includes(randomNum)) {
            numbers.push(randomNum);
        }
    }

    numbers.sort((a, b) => a - b);

    const ballElements = document.querySelectorAll('.ball');
    ballElements.forEach((ball, index) => {
        const num = numbers[index];
        ball.textContent = num;
        
        ball.classList.remove('ball-yellow', 'ball-blue', 'ball-red', 'ball-gray', 'ball-green');
        
        if (num <= 10) {
            ball.classList.add('ball-yellow');
        } else if (num <= 20) {
            ball.classList.add('ball-blue');
        } else if (num <= 30) {
            ball.classList.add('ball-red');
        } else if (num <= 40) {
            ball.classList.add('ball-gray');
        } else {
            ball.classList.add('ball-green');
        }
    });
}

// Animal Face Test Logic
const URL = "https://teachablemachine.withgoogle.com/models/7IKY9IEyx/";
let model, labelContainer, maxPredictions;

async function initAnimalModel() {
    const modelURL = URL + "model.json";
    const metadataURL = URL + "metadata.json";

    model = await tmImage.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();

    labelContainer = document.getElementById("label-container");
    for (let i = 0; i < maxPredictions; i++) {
        const barWrapper = document.createElement("div");
        barWrapper.className = "result-item";
        barWrapper.innerHTML = `
            <div class="result-bar-wrapper">
                <div class="result-text"></div>
                <div class="result-bar"></div>
            </div>
        `;
        labelContainer.appendChild(barWrapper);
    }
}

const imageUpload = document.getElementById('image-upload');
const previewImg = document.getElementById('preview-img');
const uploadLabel = document.getElementById('upload-label');
const resultContainer = document.getElementById('result-container');
const predictionLabel = document.getElementById('prediction-label');

imageUpload.addEventListener('change', async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async (event) => {
        previewImg.src = event.target.result;
        previewImg.style.display = 'block';
        uploadLabel.style.display = 'none';
        resultContainer.style.display = 'block';
        
        if (!model) {
            predictionLabel.textContent = "모델 로딩 중...";
            await initAnimalModel();
        }
        
        predictionLabel.textContent = "분석 중...";
        predict();
    };
    reader.readAsDataURL(file);
});

async function predict() {
    const prediction = await model.predict(previewImg);
    
    // Find the highest probability
    let maxProb = 0;
    let bestMatch = "";
    
    for (let i = 0; i < maxPredictions; i++) {
        const className = prediction[i].className;
        const probability = (prediction[i].probability * 100).toFixed(0);
        
        const bar = labelContainer.childNodes[i].querySelector('.result-bar');
        const text = labelContainer.childNodes[i].querySelector('.result-text');
        
        bar.style.width = probability + "%";
        bar.className = `result-bar ${className === '강아지' ? 'bar-dog' : 'bar-cat'}`;
        text.textContent = `${className}: ${probability}%`;

        if (prediction[i].probability > maxProb) {
            maxProb = prediction[i].probability;
            bestMatch = className;
        }
    }
    
    predictionLabel.textContent = `분석 결과: ${bestMatch}상입니다!`;
}
