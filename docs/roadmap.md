# Roadmap

## Upcoming Release(s)

### 0.9.0 Beta

Our beta release will include public access to `https://api.maplechart.com` and `https://maplechart.com`. The api will consist of data across a core set of currencies and indicators. Once this release is delivered it will allow us to monitor and test various aspects of the service before we add a signficant number of currencies and indicators.

_`🎯 Target: May 2023`_

_Progress_

* ⌛ Document pairs/signals; (Update schema doc later when closer to release)
* ✔ rename to pairs/signals
* ✔ Add pagination guide
* ✔ Rename to signals/{signal_id}?/series?pair=btc-usd
* 🐌 Troubleshoot new data NOT being captured few minutes after close
* ✔ Try and refresh data for failed pairs; if these fail; raise error
* ✔ write a bunch of metadata about each raw data refresh to db after every run
* ✔ Add better alerts for failed pipeline executions
* ⬛ Document, Code, & Add following signals to system
  * ✔ SMA [20D, 50D, 100D, 200D]
  * ✔ TR [1D, 7D, 30D, 90D, YTD, 1Y, 3Y, 5Y]s
* ⬛ Write python script to stage signal data for indicator documentation
* ⬛ Add top 10 currencies
* ⬛ Update landing page
* ⬛ Build site and copy to production environment
* ⬛ Turn on daily write to timeseries db
* ⬛ Retire old db table; use newly named non timeseries production table
* ⬛ Enable email for support@maplechart.com feedback@maplechart.com

### Production 1.0.0

_`🎯 Target: June 2023`_

_Progress_

* ⬛ Add 10+ additional indicators and their associated signals
* ⬛ Add top 500 currencies to daily process
* ⬛ Add example for fetching data and creating a chart
* ⬛ Add /currencies endpoint
  * ⬛ Add /currencies?quote-only=true endpoint
* ⬛ Bulk load 500 currencies
* ⬛ Document, Code, & Following signals to system
  * ⬛ CORR-BTC [30D, 60D, 90D, 180D]
  * ⬛ BETA-BTC [30D, 60D, 90D, 180D]
  * ⬛ LR-BLND-SLOPE [[30, 60, 90], [25,100]]
  * ⬛ RSI [14]
  * ⬛ LR-SLOPE [30D, 60D, 90D, YTD, 1Y]
  * ⬛ LR-R2 [30D, 60D, 90D, YTD, 1Y]
  * ⬛ DD-PCT
  * ⬛ DD-DAYS
  * ⬛ STD-R [30D, 60D, 90D, YTD, 1Y]
  * ⬛ STD-R-ANN [30D, 60D, 90D]

## 📌 Backlog

_NO PRIORITTY_

* ⬛ Increase speed of daily core data refresh so that metrics can be refreshed more quickly after daily close
* ⬛ Source daily OHLC data for metrics such as ATR
* ⬛ Setup private staging / test environments for better testing
* ⬛ interactive query tool on maplechart.com