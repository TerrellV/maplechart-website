---
sidebar_position: 0
sidebar_label: Introduction
sidebar_class_name: green
---

# Introduction

* Open and free to use 🙌
* No authentication required 🔓
* Rate limits applied at ~10 requests per second
* Endpoints documented here
* Core  data (price, volume, marketcap) is sourced from [CoinGecko.com](https://www.coingecko.com/en/api)
* All non-core data points (metrics & indicators) are calculated by maplechart.com
* If you find bugs 🐛, please email support@maplechart.com
* Data updated once daily 🕛 ~ 00:30:00 UTC (30 min after candle close)

## URLs

> root api address → https://api.maplechart.com

## Quick Start ~30 Sec
Submit a /GET request to the url below to fetch the full **100D & 200D Simple Moving Averages** and for the **BTC/USD** currency pair. Note, you can only request metrics for a single currency pair at a time. For example you can fetch the 25D, 50D, & 200D, simple moving average for BTC/USD in one call but if you want the same indicators for ETH/USD, you will need to make a new api call.
```
GET: -> https://api.maplechart.com/metric-series?pair=BTC-USD&metrics=sma-100d,sma-200d
```
```json
RESPONSE -> {
    "data": [
        ("---", "---"),
        ("---", "---"),
        ("---", "---")
    ]
}
```

See the full /metric-series endpoint documentation here.