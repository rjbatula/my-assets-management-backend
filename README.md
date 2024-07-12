# Running Backend Node Server

- Go to the project directory

```bash
cd my-assets-backend
```

- Install all required node modules

```bash
npm install
```

- Run the backend server

```bash
npm start
```

# Backend API

## Yahoo Finance and CoinGecko Free Tier API

`Having tried the free tier of both API, I resulted in using Yahoo Finance and CoinGecko API to get the latest pricing of the ticker.`

## GET /api/stock-price/:ticker

`This API endpoint is used to fetch the stock price of a given ticker from Yahoo Finance through web scraping method`

## GET /api/crypto-price/:ticker

`This API endpoint is used to fetch the crypto price of a given ticker from Coin Gecko through web scraping method`
