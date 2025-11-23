var groupAnagrams = function(strs) {

    // sort the array in alphabatacal order

    const sortedStrings = strs.map(str => str.split("").sort().join(""))

    const map = new Map();

    for (let i = 0; i < sortedStrings.length; i++) {
        const element = sortedStrings[i];
        if (!map.has(element)) {
            map.set(element, [strs[i]])
        } else {
            const currentMapValue = map.get(element);
            currentMapValue.push(strs[i])
            console.log(currentMapValue, strs[i], element);
            
            map.set(element, currentMapValue)
        }
        
    }
    return [...map.values()]
    
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));

// First sort the array with alphabatical order
// then group by sorted index, not that for loop is looping sortedStrings, but while
// setting map, we set index as sorted element and value as original array
// O(n · k log k) - time complexity
// O(n · k) - space complexity