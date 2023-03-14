import json
import requests

url = "https://api.maplechart.com/pairs/eth-usd/signal-series?signal_id=TR-200D"
payload = requests.get(url).json()
payload["data"] = payload["data"][:3]  # only keep first 3 items for simplicity

print(json.dumps(payload, indent=4))
