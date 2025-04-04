// How to print 2D array 

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
// const printMatrix=(matrix)=>{
//     for(let i=0;i<matrix.length;i++){
//         for(let j =0;j<matrix.length;j++){
//             console.log(matrix[i][j]);

//         }
//     }
// }
// printMatrix(matrix)

// Natural sum using recursion
// whenever we are apply a recursive function then remember three thing in mind
// 1 base condition  or termanation condition
// 2 recursive condition
// 3 function signature

// const sum=(num)=>{
//     if(num===0){
//         return 0;
//     }
//     return num +sum(num-1)
// }
// console.log(sum(10))

// Natural sum using iteration  if we pass 10 then result must be 55

// const nthfib =(n)=>{
//     let p1=0;
//     let p2 = 1;
//     let fib=0;
//     if(n<=1){
//         return n;
//     }
//     for(let i=2;i<=n;i++){
//         fib = p1+p2;
//         p1=p2;
//         p2 = fib
//     }
//     return fib
// }
// console.log(nthfib(10));

// calculate the factorial of that number.

// const factorial = (n) => {
//     if (n <= 1) {
//         return 1
//     }
//     return n * factorial(n - 1)
// }
// console.log(factorial(5));

// -------------------------------------------- Map ----------------------------------------------------

// How to iterate a map in js

// The main difference b/w map & obj is map can store any kind of key i.e boolean,string,number where as obj can hold the same data type key but obj internally convert into string that is the main diffecence

// const m = new Map([
//     ['Jan', 100],
//     ['Feb', 200],
//     ['Mar', 300],
//     ['Apr', 400],
//     ['May', 500]
// ])
// console.log(m)

// way 1

// for(item of m){
//     console.log("key:"+item[0],"Value:" +item[1])
// }

// way 2


// for([key,value] of m){
//     console.log("key:"+key,"Value:" +value)
// }

// way 3

// m.forEach((key,value)=>{
//     console.log("key:" +key,"value:" +value)
// })

// Approach 1


// const getMaxKey = (arr) => {
//     arr.sort();
//     const m = new Map();
//     for (let i = 0; i < arr.length; i++) {
//         if (!m.has(arr[i])) {
//             m.set(arr[i], 1);
//         } else {
//             let value = m.get(arr[i]);
//             m.set(arr[i], value + 1)
//         }
//     }
//     let maxCount = -1;
//     let maxKey;
//     for (let [key, values] of m) {
//         if (maxCount < values) {
//             maxCount = values;
//             maxKey = key;
//         }
//     }
//     return maxKey;
// }
// const input = ['Hello', 'Hello', "Crio", "Crio"];
// console.log(getMaxKey(input))


// Approach 2

// function maxRepeatingWord(N, arr) {
//     //implement this function
//     let wordCount = new Map();
//     let maxCount = 0;
//     let mostOccuringWord = "";
//     for (let word of arr) {
//         if (wordCount.has(word)) {
//             wordCount.set(word, wordCount.get(word) + 1)

//         } else {
//             wordCount.set(word, 1)
//         }
//         if (wordCount.get(word) > maxCount || (wordCount.get(word)) === maxCount && word < mostOccuringWord) {
//             maxCount = wordCount.get(word);
//             mostOccuringWord = word;;
//         }
//     }
//     return mostOccuringWord

// }


// let hashMap = new Map();
// for (let i = 0; i < text.length; i++) {
//     let ch = text[i];
//     let freq = hashMap.get(ch) || 0;
//     hashMap.set(ch, freq + 1);

// }
// let ans = "";
// let maxFreq = 0;
// for (const [ch, freq] of hashMap) {
//     let freq = hashMap.get(ch) || 0;
//     if (freq > maxFreq) {
//         ans = ch;
//         maxFreq = freq;
//     }
//     else if (freq == maxFreq) {
//         if (ch < ans) {

//             ans = ch
//         }
//     }
// }
// return [ans, maxFreq]


// Whenever we are try to solve the factorial, GCD problem then these kind of problems can be solved using Eculidean algorithm with the help of recursion now question is what is factor of any given number

// Formula is (n2,n1%n2) repeat this process till n2 becomes 0 then n1 is the factor
// ex (24,36) is  factor is 12
// step 1 we calculate the factor of 1st number i.s 24
// 24/2 = 12
// 12/2 = 6
// 6/2 = 3
//  factors are 2*2*2*3

// 36
// 36/2 =18
// 18/2 =9
// 9/3=3
// factors are 2*2*3*3
//  then  HCF of (24,36) are 2*2*2*3 2*2*3*3   we have to find out the common factors in both the numbers i.e 2*2*3 = 12 is the HCF of (24,36)

// step 1 24|36 take as it's number
// step 2 36 | 12
// step 3 12 | 0

// WAP to sort the array in decending order

// Points to remember

// comparator helps to sort the array based on custom logic

// for 1 against
// for -1 favor
// for 0 nutral

// const arr = [1,2,3,4,5,6,7];

// arr.sort((a,b)=>{
//     if(a>b){
//         return -1;
//     }else if(a<b){
//         return 1;
//     }else{
//         return 0
//     }
// })
// console.log(arr);

// --------------------------------SubArray,SubString,SubSequence,SubSet-----------------------

// const input=["a","b","c"];
// const input="Pratik";

// subArray= ["a","b"]; i.e continous part of an array
// subString="Pra","tik" i.e continous part of a string
// subSequence= "Prtk", "ri" i.e continous + uncontinous part of the string
// subSet= "Pra","tik", "Prtk", "ri" i.e continous + uncontinous & empty part of the string but it can be empty also

// ###############################################Find the largest sum contiguous subarray ##################

// function contigiousSequence(n, arr) {

// Approach 1

// let sum =0;
// let max= -Infinity;
// for(let i=0;i<n;i++){
//     sum = Math.max(sum+arr[i],arr[i])
//     max= Math.max(sum,max)
// }
// return max

// Approach 2

//     let currSum = 0;
//     let maxSum = arr[0];
//     for (let i = 0; i < n; i++) {
//         currSum = currSum + arr[i]
//         if (currSum > maxSum) {
//             maxSum = currSum;
//         } else if (currSum < 0) {
//             currSum = 0;
//         }
//     }
//     return maxSum;

// }

// How to find sufixSum of an array
// const arr [1, 6, 4, 2, 5]
// const toFindPrifixSum =(n,arr)=>{
//     let prefixSum = new Array(n);
//     prefixSum[0]= arr[0];
//     for(let i =1;i<n;i++){
//         prefixSum[i] = prefixSum[i-1] + arr[i];
//     }
//     return prefixSum

// }

// const toFindSufixSum =(n,arr)=>{
//     let sufixSum= new Array(n);
//     sufixSum[n-1] = arr[n-1];
//     for(let i=n-2;i>=0;i--){
//         sufixSum[i]= sufixSum[i+1] +arr[i];
//     }
//     return sufixSum;
// }

// ---------------------------------Kadane's  Algorithm --------------------------------------------

// When to use Kadane's  Algorithm?
// :- When we have a situation where we have to find the subarray having largest sum in the array & the array contains a +ve & -ve both the values then we can directly use a Kadane's  Algorithm.

// const input =[-2, -3, 4, -1,, -2, 1 ,5 ,-3];

// function contigiousSequence(n, arr) {

// Approach 1

//    let currSum =0;
//    let maxSum = arr[0];
//    for(let i=0;i<n;i++){
//        currSum = currSum +arr[i];
//        if(currSum>maxSum){
//            maxSum = currSum;
//        }
//        if(currSum <0){
//            currSum =0;
//        }
//    }
//    return maxSum

// Approach 2 easy pesy

//     let currSum = 0;
//     let maxSum = -Infinity;
//     for (let item of arr) {
//         currSum = Math.max(item, currSum + item);
//         maxSum = Math.max(maxSum, currSum);
//     }
//     return maxSum;
// }

//below program is combination of prefixSum & sufixSum

// function equalPartition(n, arr) {
//     let prefixSum = new Array(n);
//     let sufixSum = new Array(n);
//     prefixSum[0] = arr[0];
//     for (let i = 1; i < n; i++) {
//         prefixSum[i] = prefixSum[i - 1] + arr[i];
//     }
//     sufixSum[n - 1] = arr[n - 1];
//     for (let i = n - 2; i >= 0; i--) {
//         sufixSum[i] = sufixSum[i + 1] + arr[i];
//     }
//     for (let i = 1; i < n - 1; i++) {
//         if (prefixSum[i - 1] === sufixSum[i + 1]) return i;
//     }
//     return i;
// }
// const input = [1, 6, 4, 2, 5]
// console.log(equalPartition(input.length, input), "equalPartition");

// ############################################ Quick Sort Algorithm Implementation ###############

// Approach  
// Step 1 :- Take pivot as last element of input array and add base condition because it's a resursion problem
// Step 2 :- Take leftArr & rightArr as empty array
// Step 3 :- iterate an array & compare the pivot element with array element if it's less then pivot then add in the leftArray otherwise in the rightArray
// Step 4 :- Apply the recursion  by calling the function & merge leftArr,pivot  & rightArr

// const quickSort=(n,arr)=>{
//     if(n<=1) return arr;
//     let pivot= arr[n-1];
//     let leftArr =[];
//     let rightArr =[];
//     for(let i=0;i<n-1;i++){
//         if(arr[i]< pivot){
//             leftArr.push(arr[i]);
//         }else{
//             rightArr.push(arr[i]);
//         }
//     }
//     return [...quickSort(leftArr.length,leftArr),pivot , ...quickSort(rightArr.length,rightArr)]
// }
// const input = [12, 8, 3, 0, 7] 
// console.log(quickSort(input.length,input))

// Find length of longest valid parentheses substring

// function longestValidParentheses(s) {
// let stack = [];
// let ans = 0;
// stack.push(-1);
// for (let i = 0; i < s.length; i++) {
//     if (s[i] === "(") {
//         stack.push(i);
//     } else {
//         stack.pop();
//         if (stack.length === 0) {
//             stack.push(i)
//         }
//         else {
//             ans = Math.max(ans, i - stack[stack.length - 1])
//         }
//     }
// }
// return ans;
// }

// ################################# Euclidean Algorithm ######################################################################

// WAP to find coprime number

// const coprimeNumbers=(n)=>{
//     let count =0;
//     for(let i=0;i<n;i++){
//         if(gcd(n,i) ===1){
//             count++;
//         }
//     }
//     return count;
// }
// const gcd=(n1,n2)=>{
//     if(n2==0){
//         return n1;
//     } else{
//         return gcd(n2,n1%n2)
//     }

// }

//WAP to find localPeak
// const findPeakElement = (num) => {
//     let left = 0;
//     let right = num.length;
//     while (left < right) {
//         let mid = Math.floor((left + right) / 2);
//         if (num[mid] < num[mid + 1]) {
//             left = mid + 1;
//         } else {
//             right = mid;
//         }
//     }
//     return left
// }

// Capitalize the Title Leetcode Problem 

// const capitalizeTitle=(input)=>{
//    return input.split(' ').map((item)=>{
//         if(item.length<=2) return item.toLowerCase();
//     return item[0].toUpperCase() + item.slice(1).toLowerCase();
//     }).join(' ');
// }
// const title ="capiTalIze tHe titLe"
// console.log(capitalizeTitle(title));

// WAP of Promise

// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const result = true;
//         if (result) {
//             resolve("Promise resolved");
//         } else {
//             reject("Promise rejected");
//         }
//     }, 1000)
// })
// myPromise
//     .then(resolve => console.log(resolve))
//     .catch(reject => console.log(reject));


// Find the equal partition index

// var pivotIndex = function (nums) {
// Approach 1
// let n = nums.length;
// let prefixSum = new Array(n);
// let sufixSum = new Array(n);
// prefixSum[0] = nums[0];
// sufixSum[n-1]= nums[n-1];
// for(let i=1;i<n;i++){
//     prefixSum[i] = prefixSum[i-1] + nums[i];
// }
// for(let i=n-2;i>=0;i--){
//     sufixSum[i] = sufixSum[i+1] + nums[i];
// }
// for(let i=0;i<n;i++){
//     let leftSum = i>0?prefixSum[i-1]:0;
//     let rightSum = i<n-1?sufixSum[i+1]:0;
//     if(leftSum === rightSum) return i;
// }
// return -1;

// Approach 2

// const n = nums.length;
// let leftSum = 0;
// const totalSum = nums.reduce((total, index) => total + index, 0);
// for (let i = 0; i < n; i++) {
//     if (leftSum === totalSum - leftSum - nums[i]) return i;
//     leftSum += nums[i];
// }
// return -1;
// };

//WAPTF target sum equal to k

// const longestSubarrayHavingSumK=(n,k,nums)=>{
//     let currSum = 0;
//     let maxLen = 0;
//     const sumMap = new Map();
//     sumMap.set(0,-1);
//     for(let i=0;i<n;i++){
//         currSum+= nums[i];
//         if(sumMap.has(currSum - k)){
//             maxLen = Math.max(maxLen,i-sumMap.get(currSum-k));
//         }
//         if(!sumMap.has(currSum)){
//             sumMap.set(nums[i],i);
//         }
//     }
//     return maxLen
// }
// const input = [10 ,5 ,2, 7 ,1 ,9]
// console.log(longestSubarrayHavingSumK(input.length, 15 ,input));

// Write a function to move all 0s to the end of an array

// const moveZeroes =(nums)=>{
//     let nonZeroIndex =0;
//     for(let item in nums){
//         if(nums[item] !==0){
//             [nums[nonZeroIndex], nums[item]] = [nums[item],nums[nonZeroIndex]];
//             nonZeroIndex++;
//         }
//     }
//     return nums;
// }
// const input = [0,1];
// console.log(moveZeroes(input));

// Find the longest subarray having sum equal to given sum

// const longestSubarrayHavingSumK=(N,K,nums)=>{
//    let maxLen =0;
//    let currSum =0;
//    let map = new Map();
//    map.set(0,-1);
//    for(let i=0;i<N;i++){
//     currSum += nums[i];
//     if(map.has(currSum -K)){
//         maxLen = Math.max(maxLen , i- map.get(currSum - K));
//     }
//     if(!map.has(currSum)){
//         map.set(currSum ,i);
//     }
//    }
//    return maxLen;
// }
// const input =[10,5,2,7,1,9]
// console.log(longestSubarrayHavingSumK(input.length,15,input));//4

// WAPTF Diagonal Sum

// const diagonalSumII=(mat)=>{
//   let sum =0;
//   let n = mat.length;
//   for(let i=0;i<n;i++){
//     sum +=mat[i][i];
//     if(i !== n-1-i){
//         sum +=mat[i][n-1-i];
//     }
//   }
//   return sum;
// }
// const input =[[1,2,3],[4,5,6],[7,8,9]];
// console.log(diagonalSumII(input));

// Given an array, rotate the array to the right by k steps

// const rotateArray=(n ,k,nums)=>{
//     rotate (nums,0,k);
//     rotate(nums,k,n-1);
//     rotate(nums,n-1,k);
//     return nums
// }
// const rotate = (nums,start ,end)=>{
//     let tempt = nums[start];
//     nums[start] = nums[tempt];
//     nums[end] = tempt;
// }
// const input =[1,2,3,4,5,6,7];
// console.log(rotateArray(input.length,3,input));

// Reverse order of words in given string

// const reverseWords =(s)=>{
//     let word = s.split(" ");
//     let reverseWord = word.map((item)=>{
//         return item.split("").reverse().join("")
//     });
//     return reverseWord.join(" ");
// }

// const input = "Mr Ding"
// console.log(reverseWords(input));

// Valid Parentheses

// const isValid =(s)=>{
//    const stack =[];
//     const parenthesesData ={
//         ")":"(",
//         "}":"{",
//         "]":"["
//     }
//     for(let item of s){
//         if(item === "(" || item === "{" || item === "["){
//             stack.push(item);
//         }else{
//             if(stack.pop() !== parenthesesData[item]) return false
//         }

//     }
//     return stack.length ===0
// }

// const input = "()[]{}"
// console.log(isValid(input));

// const firstPalindromeDSA=(words)=>{
//     for(let item of words){
//         if(isPalindrome(item)){
//             return item;
//         }
//     }
// }
// const isPalindrome=(str)=>{
//     return str === str.split(" ").reverse().join(" ");
// }
// const input = ['abc', 'cca', 'aca', 'aba' ,'cba'];
// console.log(firstPalindromeDSA(input),"firstPalindromeDSA");





const firstPalindromeDSA = (word) => {
    // Approach 1
    for(let item of word){
         if(item.split("").reverse().join("") ===item) return item
    }
    return ""
    // Approach 2

    // for (let item of word) {

    //     if (isPalindrome(item)) {
    //         return item;
    //     }
    // }
    // return false;
}
// const isPalindrome = (word) => {
//     return word === word.split("").reverse().join("")
// }
const input = ['abc', 'cca', 'aca', 'aba', 'cba'];
console.log(firstPalindromeDSA(input), "firstPalindromeDSA")