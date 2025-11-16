function maxSubArray(nums) {

  
    // bestSoFar is the best subarray sum found so far.
    // currentMax is the best subarray sum that ends at current index.
    let globalMax = nums[0];
    let currentMax = nums[0];
  
    for (let i = 1; i < nums.length; i++) {
        const currentElement = nums[i];
        currentMax = Math.max(currentElement, currentMax + currentElement);
        globalMax = Math.max(globalMax, currentMax);
    }
  
    return globalMax;
  }

  console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // 6  (subarray [4,-1,2,1])
console.log(maxSubArray([1]));                     // 1
console.log(maxSubArray([-1, -2, -3]));   


// Kadane's algo
// Copy
