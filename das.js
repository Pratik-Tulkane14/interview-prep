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


const getMaxKey = (arr) => {
    arr.sort();
    const m = new Map();
    for (let i = 0; i < arr.length; i++) {
        if (!m.has(arr[i])) {
            m.set(arr[i], 1);
        } else {
            let value = m.get(arr[i]);
            m.set(arr[i], value + 1)
        }
    }
    let maxCount = -1;
    let maxKey;
    for (let [key, values] of m) {
        if (maxCount < values) {
            maxCount = values;
            maxKey = key;
        }
    }
    return maxKey;
}
const input = ['Hello', 'Hello', "Crio", "Crio"];
console.log(getMaxKey(input))


// Approach 2

function maxRepeatingWord(N, arr) {
    //implement this function
    let wordCount = new Map();
    let maxCount = 0;
    let mostOccuringWord = "";
    for (let word of arr) {
        if (wordCount.has(word)) {
            wordCount.set(word, wordCount.get(word) + 1)

        } else {
            wordCount.set(word, 1)
        }
        if (wordCount.get(word) > maxCount || (wordCount.get(word)) === maxCount && word < mostOccuringWord) {
            maxCount = wordCount.get(word);
            mostOccuringWord = word;;
        }
    }
    return mostOccuringWord

}   


let hashMap = new Map();
for (let i = 0; i < text.length; i++) {
    let ch = text[i];
    let freq = hashMap.get(ch) || 0;
    hashMap.set(ch, freq + 1);

}
let ans = "";
let maxFreq = 0;
for (const [ch, freq] of hashMap) {
    let freq = hashMap.get(ch) || 0;
    if (freq > maxFreq) {
        ans = ch;
        maxFreq = freq;
    }
    else if (freq == maxFreq) {
        if (ch < ans) {

            ans = ch
        }
    }
}
return [ans, maxFreq]


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
