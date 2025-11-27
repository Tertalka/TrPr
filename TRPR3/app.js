// Скомпільований JavaScript код з app.ts
// Інтерфейс для результатів обчислень
function calculate(radius) {
    // Довжина окружності: 2πr
    const circumference = 2 * Math.PI * radius;
    // Площа кругу: πr²
    const area = Math.PI * radius * radius;
    // Обсяг кулі: (4/3)πr³
    const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    return {
        circumference,
        area,
        volume
    };
}

// Валідація вводу
function validatePositive(value) {
    const num = parseFloat(value);
    return !isNaN(num) && isFinite(num) && num > 0;
}

// DOM елементи
const radiusInput = document.getElementById('radius');
const calculateBtn = document.getElementById('calculateBtn');
const resultsDiv = document.getElementById('results');
const errorDiv = document.getElementById('error');
const circumferenceSpan = document.getElementById('circumference');
const areaSpan = document.getElementById('area');
const volumeSpan = document.getElementById('volume');

// Функція обчислення
function handleCalculate() {
    errorDiv.classList.add('hidden');

    if (!validatePositive(radiusInput.value)) {
        errorDiv.textContent = 'Будь ласка, введіть позитивне число для радіуса!';
        errorDiv.classList.remove('hidden');
        resultsDiv.classList.add('hidden');
        return;
    }

    const radius = parseFloat(radiusInput.value);
    const result = calculate(radius);

    // Форматування числа до 2 десяткових знаків
    const format = (num) => num.toFixed(2);

    circumferenceSpan.textContent = format(result.circumference);
    areaSpan.textContent = format(result.area);
    volumeSpan.textContent = format(result.volume);

    resultsDiv.classList.remove('hidden');
}

// Обробники подій
calculateBtn.addEventListener('click', handleCalculate);
radiusInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        handleCalculate();
    }
});
