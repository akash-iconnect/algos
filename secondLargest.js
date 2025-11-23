function secondLargest(arr) {
    let max = -Infinity;
    let secondLargest = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        if (num > max) {
            secondLargest = max;
            max = num;
        } else if(num > secondLargest && num !== max) {
            // above check is for [10, 10, 9], here it will use second 10 as second largest if we
            // dont check for num !== max
            secondLargest = num;
        } 
    }
    return secondLargest;
  }
  
  console.log(secondLargest([10, 5, 20, 8])); // 10
  console.log(secondLargest([5, 5, 5])); // null
  console.log(secondLargest([10, 10, 9])); // -3