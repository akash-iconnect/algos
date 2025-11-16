var bestTimeToBuyAndSellStock2 = function(prices) {
    let maxProfit = 0;

    for (let i = 1; i < prices.length; i++) {
        const currentPrice = prices[i];
        const previousPrice = prices[i-1];

        if (previousPrice < currentPrice) {
            maxProfit = maxProfit + (currentPrice - previousPrice);
        }

    }
    return maxProfit
};


console.log(bestTimeToBuyAndSellStock2([7,1,5,3,6,4]));
// just add difference if previous price is less than current price
// start loop with 1 as we need to check previous price