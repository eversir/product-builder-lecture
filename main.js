const generateBtn = document.getElementById('generate');
const numbersDiv = document.getElementById('numbers');
const themeToggle = document.getElementById('theme-toggle');

generateBtn.addEventListener('click', generateNumbers);
themeToggle.addEventListener('click', toggleTheme);

function generateNumbers() {
    numbersDiv.innerHTML = '';
    const lottoNumbers = [];
    while (lottoNumbers.length < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        if (!lottoNumbers.includes(randomNumber)) {
            lottoNumbers.push(randomNumber);
        }
    }

    lottoNumbers.sort((a, b) => a - b);

    lottoNumbers.forEach((number, index) => {
        const numberDiv = document.createElement('div');
        numberDiv.classList.add('number');
        numberDiv.textContent = number;
        numbersDiv.appendChild(numberDiv);

        setTimeout(() => {
            numberDiv.classList.add('visible', 'spin');
        }, index * 200); // Stagger the animation
    });
}

function toggleTheme() {
    const body = document.body;
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
    } else {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
    }
}

// Set initial theme
document.body.classList.add('light-mode');
//generateNumbers(); // Don't generate numbers on page load