document.getElementById('generate').addEventListener('click', () => {
    const numbersContainer = document.getElementById('numbers');
    numbersContainer.innerHTML = '';
    const lottoNumbers = generateLottoNumbers();
    lottoNumbers.forEach(number => {
        const ball = document.createElement('div');
        ball.className = 'ball';
        ball.textContent = number;
        ball.style.backgroundColor = getRandomColor();
        numbersContainer.appendChild(ball);
    });
});

function generateLottoNumbers() {
    const numbers = new Set();
    while (numbers.size < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        numbers.add(randomNumber);
    }
    return Array.from(numbers).sort((a, b) => a - b);
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
