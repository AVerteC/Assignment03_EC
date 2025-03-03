// GLOBAL VARIABLES
let futureValue;
let investment;
let rate;
let years;
const MAX_RATE = 6;
const MAX_YEARS = 30;

// COLLECT VALUES FROM THE USER
do {
    investment = parseFloat(prompt('Enter investment amount as xxxx.xx\nEnter a number greater than 0.'));
} while (isNaN(investment) || investment < 0)
console.log(investment);
do {
    rate = parseFloat(prompt('Enter interest rate as xx.x\nEnter a realistic number between 0 and 6.'));
} while (isNaN(rate) || rate < 0 || rate > MAX_RATE)
console.log(rate);
do {
    years = parseInt(prompt('Enter the number of years you want to invest for.\nEnter a number between 1 and 30.'));
} while (isNaN(years) || years < 1 || years > MAX_YEARS)
console.log(years);

// CALCULATE FUTURE VALUE
futureValue = investment;
for (let i = 0; i < years; i++) {
    futureValue = futureValue + (futureValue * rate / 100);
}

// DISPLAY RESULT
document.write(`Investment amount: $${investment.toFixed(2)}<br>`);
document.write(`Interest rate: ${rate.toFixed(2)}%<br>`);
document.write(`Years: ${years}<br>`);
document.write(`Future value: $${futureValue.toFixed(2)}`);