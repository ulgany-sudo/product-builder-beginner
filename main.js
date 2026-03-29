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
