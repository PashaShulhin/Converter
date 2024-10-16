document.getElementById('convert').addEventListener('click', () => {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('from-currency').value;
    const toCurrency = document.getElementById('to-currency').value;

    fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
        .then(response => response.json())
        .then(data => {
            const rate = data.rates[toCurrency];
            const convertedAmount = (amount * rate).toFixed(2);
            document.getElementById('result').innerText = `Результат: ${convertedAmount} ${toCurrency}`;
        })
        .catch(error => {
            console.error('Помилка:', error);
        });
});
