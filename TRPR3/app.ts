// Інтерфейс для результатів обчислень
interface CalculationResult {
    circumference: number;
    area: number;
    volume: number;
}

// Функція обчислення параметрів
function calculate(radius: number): CalculationResult {
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
function validatePositive(value: string): boolean {
    const num = parseFloat(value);
    return !isNaN(num) && isFinite(num) && num > 0;
}

// Web Component
class GeometricCalculator extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
        this.setupEventListeners();
    }

    render() {
        const template = `
            <style>
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }

                :host {
                    display: block;
                    background: white;
                    border-radius: 12px;
                    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
                    padding: 40px;
                    max-width: 500px;
                    width: 100%;
                }

                h1 {
                    color: #333;
                    margin-bottom: 30px;
                    text-align: center;
                    font-size: 28px;
                }

                h2 {
                    color: #667eea;
                    margin-bottom: 20px;
                    font-size: 20px;
                }

                .input-section {
                    display: flex;
                    flex-direction: column;
                    gap: 15px;
                    margin-bottom: 30px;
                }

                label {
                    color: #555;
                    font-weight: 600;
                    display: block;
                }

                input {
                    padding: 12px;
                    border: 2px solid #ddd;
                    border-radius: 8px;
                    font-size: 16px;
                    transition: border-color 0.3s ease;
                }

                input:focus {
                    outline: none;
                    border-color: #667eea;
                }

                button {
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    color: white;
                    border: none;
                    padding: 12px;
                    border-radius: 8px;
                    font-size: 16px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: transform 0.2s ease, box-shadow 0.2s ease;
                }

                button:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 5px 20px rgba(102, 126, 234, 0.4);
                }

                button:active {
                    transform: translateY(0);
                }

                .results-section {
                    background: #f8f9fa;
                    border-radius: 8px;
                    padding: 25px;
                    border-left: 4px solid #667eea;
                }

                .results-section.hidden {
                    display: none;
                }

                .result-item {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 12px 0;
                    border-bottom: 1px solid #ddd;
                }

                .result-item:last-child {
                    border-bottom: none;
                }

                .label {
                    color: #555;
                    font-weight: 500;
                }

                .value {
                    color: #667eea;
                    font-weight: 700;
                    font-size: 18px;
                }

                .unit {
                    color: #999;
                    font-size: 14px;
                    margin-left: 8px;
                }

                .error {
                    background: #fee;
                    color: #c33;
                    padding: 15px;
                    border-radius: 8px;
                    border-left: 4px solid #c33;
                    margin-top: 20px;
                }

                .error.hidden {
                    display: none;
                }
            </style>

            <h1>Обчислювач геометричних параметрів</h1>
            
            <div class="input-section">
                <label for="radius">Введіть радіус:</label>
                <input type="number" id="radius" placeholder="Радіус (см)" min="0" step="0.1">
                <button id="calculateBtn">Обчислити</button>
            </div>

            <div id="results" class="results-section hidden">
                <h2>Результати:</h2>
                <div class="result-item">
                    <span class="label">Довжина окружності:</span>
                    <span id="circumference" class="value">-</span>
                    <span class="unit">см</span>
                </div>
                <div class="result-item">
                    <span class="label">Площа кругу:</span>
                    <span id="area" class="value">-</span>
                    <span class="unit">см²</span>
                </div>
                <div class="result-item">
                    <span class="label">Обсяг кулі:</span>
                    <span id="volume" class="value">-</span>
                    <span class="unit">см³</span>
                </div>
            </div>

            <div id="error" class="error hidden"></div>
        `;

        this.shadowRoot!.innerHTML = template;
    }

    setupEventListeners() {
        const calculateBtn = this.shadowRoot!.querySelector('#calculateBtn') as HTMLButtonElement;
        const radiusInput = this.shadowRoot!.querySelector('#radius') as HTMLInputElement;

        calculateBtn.addEventListener('click', () => this.handleCalculate());
        radiusInput.addEventListener('keypress', (event: KeyboardEvent) => {
            if (event.key === 'Enter') {
                this.handleCalculate();
            }
        });
    }

    handleCalculate() {
        const radiusInput = this.shadowRoot!.querySelector('#radius') as HTMLInputElement;
        const errorDiv = this.shadowRoot!.querySelector('#error') as HTMLElement;
        const resultsDiv = this.shadowRoot!.querySelector('#results') as HTMLElement;

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
        const format = (num: number) => num.toFixed(2);

        this.shadowRoot!.querySelector('#circumference')!.textContent = format(result.circumference);
        this.shadowRoot!.querySelector('#area')!.textContent = format(result.area);
        this.shadowRoot!.querySelector('#volume')!.textContent = format(result.volume);

        resultsDiv.classList.remove('hidden');
    }
}

customElements.define('geometric-calculator', GeometricCalculator);
