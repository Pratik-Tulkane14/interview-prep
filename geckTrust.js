// WAPTF Permutation Palindrome
const isPermutationOfPalindrome = (s) => {
    const charCount = new Map();
    for (let char of s) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }
    let oddCount = 0;
    for (let count of charCount.values()) {
        if (count % 2 !== 0) {
            oddCount++;
            console.log(count % 2, "pratik")
        }
    }
    console.log(charCount, oddCount, "oddCount")
    return oddCount <= 1;
}
console.log(isPermutationOfPalindrome("asa"), "Try programiz.pro");

// WAPTF bestTimeToBuyAndSellStocks

// const bestTimeToBuyAndSellStocks = (prices) => {
//     let buyingPrice = prices[0];
//     let profit = 0;
//     for (let item in prices) {
//     for (let item =1;item<prices.length;item++) {
//         if (prices[item] > buyingPrice) {
//             profit += prices[item] - buyingPrice;
//             buyingPrice = prices[item];
//         } else {
//             buyingPrice = prices[item];
//         }
//     }
//     return profit
// }
// const input = [7, 1, 5, 3, 6, 4];
// console.log(bestTimeToBuyAndSellStocks(input), "output");

// Write a function to move all 0s to the end of an array

// const moveZeroes = (nums) => {
//     let zeroCountArray = [];
//     let result = [];
//     for (let item of nums) {
//         if (item === 0) {
//             zeroCountArray.push(item);
//         } else {
//             result.push(item);
//         }
//     }
//     result = [...result, ...zeroCountArray];
//     return result
// }
// const input = [0, 1];
// console.log(moveZeroes(input), "output");








