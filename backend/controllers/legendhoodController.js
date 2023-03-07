const apiKey = process.env.FINNHUB_API;
const fetch = require('node-fetch');

const getChartPrices = async (req, res) => {
    const { symbol } = req.params;
    let now = new Date();
    let startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    let timestamp = startOfDay / 1000;
    const timestampNow = Math.floor(Date.now() / 1000);
    let data = await fetch(`https://finnhub.io/api/v1/stock/candle?symbol=${symbol}&resolution=5&from=${timestamp}&to=${timestampNow}&token=${apiKey}`)
    let response = await data.json()
    res.json({ price: response.c })
}

const getGeneralNews = async (req, res) => {

    let data = await fetch(`https://finnhub.io/api/v1/news?category=general&token=${apiKey}`)
    let response = await data.json()

    let sliced = response.slice(0, 6);

    res.json(sliced)

}


module.exports = { getChartPrices, getGeneralNews };
