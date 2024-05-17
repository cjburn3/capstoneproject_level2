function searchStock() {
    const searchInput = document.getElementById('searchInput').value;
    const url = `https://api.finazon.io/latest/tickers/stocks?page_size=1000&ticker=${searchInput}`;
    const apiKey = '2ec39591eddc4057bb7b4fd731e01d54ff'
      const headers = {
        'Authorization': 'apikey ' + apiKey
    };
    fetch(url, {
        method: 'GET',
        headers: headers
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        const searchResults = document.getElementById('searchResults');
        searchResults.innerHTML = "";
        data.data.forEach(stock => {
            const stockDiv = document.createElement('div');
            stockDiv.innerHTML = `<br><u>Ticker:</u> ${stock.ticker}<br><u>Country:</u> ${stock.country}<br><u>Currency:</u> ${stock.currency}<br><u>Publisher:</u> ${stock.publisher}<br><br>`;
            searchResults.appendChild(stockDiv);
        });
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
}