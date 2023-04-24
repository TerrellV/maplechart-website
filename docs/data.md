# Data

## Core Data (Price, Volume, Market Cap, etc.)

Core data is used as the basis for derived data. It's sourced externally from [CoinGecko.com's API](https://www.coingecko.com/en/api). Fields such as "price", "volume", "marketcap", and "rank" are core data fields. Basic cleaning steps are applied to ensure data is ready to be fed into maplechart.com metric calculations. Cleaning steps include:

* removing duplicate values
* basic formatting
* filling empty gaps in price data using a linear interpolation method
* rounding of decimals based on significant digits

Its important to read 👀 [coingecko's API terms](https://www.coingecko.com/en/api_terms) before using the maplechart api.

## Derived Data (Signals)

Signals are derived data fields. They rely on either core data fields, or other metrics to be calculated. **All signals are calculated by maplechart.com** using generally accepted formulas where it makes sense.

All **signals are scheduled 🕛 to update daily**. Calculations should be complete by appoximately 00:40:00 UTC time (40  min after global candle close). This timing may vary based on the uptime and availability of coingecko's api, and the uptime and availability of maplechart.com's cloud services. We're open to improving this calculation delay but we expect the current timing to meet most people's needs.
