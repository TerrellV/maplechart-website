# Get the timeseries 200 day simple moving average
# signal for ETH/USD

import requests
import time

URL = "https://api.maplechart.com/pairs/eth-usd/series?signal=sma-200d"

data = []
r = requests.get(URL).json()
data.extend(r["data"])

while r.get("next_token"):

    params = {"next_token": r.get("next_token")}
    r = requests.get(URL, params=params).json()
    data.extend(r["data"])

    time.sleep(0.2)  # to avoid api throttling

print(data)
