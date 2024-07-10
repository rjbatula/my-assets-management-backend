const express = require('express')
const axios = require('axios')
const app = express()

// Middleware to allow cross-origin requests
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*')
	next()
})

// Endpoint to proxy requests to Yahoo Finance API
app.get('/api/stock-price/:ticker', async (req, res) => {
	const { ticker } = req.params
	try {
		const response = await axios.get(
			`https://query1.finance.yahoo.com/v8/finance/chart/${ticker}`
		)
		res.json(response.data)
	} catch (error) {
		res.status(500).json({ error: error.message })
	}
})

// Endpoint to get cryptocurrency price
app.get('/api/crypto-price/:ticker', async (req, res) => {
	const { ticker } = req.params
	try {
		const response = await axios.get(
			`https://api.coingecko.com/api/v3/simple/price?ids=${ticker}&vs_currencies=sgd`
		)
		const price = response.data[ticker.toLowerCase()].sgd
		res.json({ ticker, price })
	} catch (error) {
		res.status(500).json({ error: error.message })
	}
})

const PORT = process.env.PORT || 5100
app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`)
})
