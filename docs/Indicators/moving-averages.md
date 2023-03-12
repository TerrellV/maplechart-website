# Moving Averages


## Simple Moving Average

The Simple Moving Average (SMA) is calculated by summing the closing prices of an asset for "n" periods and then dividing that sum by "n". In other words, the SMA is the average price over time. The window size "n" is inclusive of the current period. For example, to calculate a 3 day simple moving average:

* gather the price from the current, and previous two days
* sum them
* then divide the sue by 3

```
# SMA result where window size n = 3
input  = [1, 2, 3, 4, 5, 6]
output = [-, -, 2, 3, 4, 5]
# note the two blank values at the start of the output. This is because a 3 day moving average requires at least 3 data points to be calculated.
```

## Exponential Moving Average