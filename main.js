    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&x_cg_demo_api_key=CG-9mBdaotywTEvGDdZGcWgiRY9')
        .then(response => response.json())
        .then(data => {
            const tbody = document.getElementById('currency-table');
            data.forEach((currency, index) => {
                const row = document.createElement('tr');

                if (index < 5) {
                    row.classList.add('blue-background');
                }

                if (currency.symbol.toLowerCase() === 'usdt') {
                    row.classList.add('green-background');
                }

                row.innerHTML = `
                        <td>${currency.id}</td>
                        <td>${currency.symbol}</td>
                        <td>${currency.name}</td>
                    `;

                tbody.appendChild(row);
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });

