function fetchStockData(symbol) {
    const myKey = '2ec39591eddc4057bb7b4fd731e01d54ff';
    const apiUrl = `https://api.finazon.io/latest/tickers/stocks?page_size=1000&apikey=${myKey}${symbol}`;

    fetch(apiUrl)
        .then(res => {
            if (!res.ok) {
                throw new Error('Failed to fetch data');
            }
            return res.json();
        })
        .then(data => {
            // Update HTML input elements with stock information
            document.getElementById('ticker').value = data.ticker;
            document.getElementById('country').value = data.country;
            document.getElementById('currency').value = data.currency;
            document.getElementById('publisher').value = data.publisher;
        })
        .catch(err => {
            console.error('Error fetching stock data:', err);
            
        });
}
fetchStockData(symbol)
