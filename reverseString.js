// Reverse string in place

var reverseString = function(s) {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        const leftElement = s[left];
        const rightElement = s[right];
        s[left] = rightElement;
        s[right] = leftElement;
        left++;
        right--;        
    }
    return s;
};

console.log(reverseString(["h","e","l","l","o"]));


// Two pointers
// swap places of 2 pointers
