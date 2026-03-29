document.getElementById('generate-btn').addEventListener('click', generateLottoNumbers);

function generateLottoNumbers() {
    const numbers = [];
    while (numbers.length < 6) {
        const randomNum = Math.floor(Math.random() * 45) + 1;
        if (!numbers.includes(randomNum)) {
            numbers.push(randomNum);
        }
    }

    // Sort numbers in ascending order
    numbers.sort((a, b) => a - b);

    const ballElements = document.querySelectorAll('.ball');
    ballElements.forEach((ball, index) => {
        const num = numbers[index];
        ball.textContent = num;
        
        // Remove existing color classes
        ball.classList.remove('ball-yellow', 'ball-blue', 'ball-red', 'ball-gray', 'ball-green');
        
        // Add color class based on number
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
