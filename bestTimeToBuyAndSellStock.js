var bestTimeToBuyAndSellStock = function(prices) {
    let maxProfit = 0;
    let leftPtr = 0;
    let rightPtr = 1;

    while (rightPtr < prices.length) {
        const leftPrice = prices[leftPtr];
        const rightPrice = prices[rightPtr];

        if (leftPrice > rightPrice) {
            leftPtr = rightPtr;
            rightPtr++
        } else {
            maxProfit = Math.max(maxProfit, rightPrice - leftPrice)
            rightPtr++
        }
    }
    return maxProfit
};


console.log(bestTimeToBuyAndSellStock([7,1,5,3,6,4]));


// Two pointers
// if right pointer price is less than left pointer, move left pointer to right pointer
// as we found new low
// if not then add to max the difference