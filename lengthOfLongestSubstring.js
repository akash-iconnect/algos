var lengthOfLongestSubstring = function(s) {
    let store = new Set();
    let counter = 0;
    let leftPtr = 0;
    let rightPtr = 0;

    while (rightPtr < s.length) {
        const letter = s[rightPtr];

        if (!store.has(letter)) {
            store.add(letter);
            counter = Math.max(counter, store.size)
            rightPtr++;
        } else {
            store.delete(s[leftPtr]);
            leftPtr++;
        }
    }
    return counter;

};

console.log(lengthOfLongestSubstring('abcabcbb'));

// Sliding window
// both ptr starts at same letter
// if we see letter first time then we add it to set and increase right ptr.
// also update counter to max of set size and current counter
// if duplicate element then we delete from left ptr and increment leftPtr

// if we want to return the string and not count then add new variable called currentSub = ""
// and when we update counter also update that string and return it
// if (store.size > counter) {
//     counter = store.size;
//     bestSub = currentSub; // update best
// }