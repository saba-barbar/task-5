// 1. Reverse a String
// Problem: Write a function that takes a string as an argument and returns the string reversed.

// Example:
// Input: "javascript"
// Output: "tpircsavaj"

let java1 = "javascript"
let saba = "sabaBarbar"
function revers(str) {
    let resault = ""
    for (let i = str.length - 1; i >= 0; i--) {
        resault += str[i]
    }
    console.log(resault)
}
revers(java1)
revers(saba)

// 2. Palindrome Check
// Problem: Write a function that checks if a given string is a palindrome (reads the same forwards and backward). It should return true if it is a palindrome and false if it is not.

// Example:
// Input: "madam"
// Output: true
// Input: "hello"
// Output: false
let madam = "madam"
let saba1 = "sabaBarbar"
let hello = "hello"
function palindrome(str) {
    let i = 0
    let j = str.length - 1
    while (i <= str.length / 2 && j >= 0) {
        if (str[i] == str[j]) {
            i++
            j--
        }
        else {
            console.log("false")
            return
        }
    } console.log("true")
}
palindrome(madam)
palindrome(saba1)
palindrome(hello)

// 3. Find the Maximum Number in an Array
// Problem: Write a function that takes an array of numbers and returns the largest number in it.

// Example:
// Input: [1, 5, 3, 9, 2]
// Output: 9

function Maximum(num) {
    let max = num[0]
    for (let i = 1; i < num.length; i++) {
        if (num[i] > max)
            max = num[i]
    }
    console.log(max)
}
let number = [1, 4, 7, 8, 3, 5, 10]
Maximum(number)

let number1 = [1, 94, 74, 8, 34, 5, 10]
Maximum(number1)

// 4. Factorial Calculation
// Problem: Write a function that calculates the factorial of a given number. (The factorial of 5 is 5 * 4 * 3 * 2 * 1).

// Example:
// Input: 5
// Output: 120

function factorial(number) {
    let resault = 1
    for (let i = 1; i <= number; i++)
        resault *= i
    console.log(resault)
}
factorial(5)
factorial(9)//362880

// 5. Prime Number Check
// Problem: Write a function that takes an integer num and checks if it is a prime number. A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself. The function should return true if the number is prime and false otherwise.

// Example:
// Input: 7
// Output: true
// Input: 10
// Output: false (because it's divisible by 2 and 5)

function prime(num) {
    let mod = 0
    for (let i = 1; i <= num; i++) {
        if (num % i == 0)
            mod++
    }
    if (mod == 2) {
        console.log("true")
    }
    else {
        console.log("false")
    }
}
prime(5)
prime(12)
prime(7)

// 6. Remove Duplicates from an Array
// Problem: Write a function that takes an array and returns a new array containing only the unique elements (no duplicates).

// Example:
// Input: [1, 2, 2, 3, 4, 4, 5]
// Output: [1, 2, 3, 4, 5]

function remove(arr) {
    let unique = []
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i]
        let isDuplicate = false
        for (let j = 0; j < count; j++) {
            if (element == unique[j]) {
                isDuplicate = true
                break
            }
        }
        if (!isDuplicate) {
            unique[count] = element
            count++
        }
    }
    let result = []
    for (let i = 0; i < count; i++) {
        result[i] = unique[i]
    }
    console.log(result)
}
let numbers = [1, 2, 2, 3, 4, 4, 5, 3, 5, 5, 7]
remove(numbers)

// 7. Find the Missing Number in a Sequence
// Problem: You are given an array containing 99 unique numbers whose values range from 1 to 100. Write a function to find the missing number.

// Example:
// Input: An array containing all numbers from 1 to 100 except for the number 55.
// Output: 55

function missing(arr) {
    let num = 1
    for (let i = 0; i <= 100; i++)
        if (arr[i] == num) {
            num++
            continue
        }
        else {
            console.log(num)
        }
}
let miss = []
for (let j = 1; j <= 100; j++) {
    if (j == 33) {
        continue
    }
    miss[j - 1] = j
}
missing(miss)

// 8. Capitalize the First Letter of Each Word
// Problem: Write a function that takes a sentence and returns a new sentence with the first letter of each word capitalized.

// Example:
// Input: "hello world from javascript"
// Output: "Hello World From Javascript"
function capital(sentence) {
    let result = ''
    let capitaliz = true
    for (let i = 0; i < sentence.length; i++) {
        let char = sentence[i]
        if (char == ' ') {
            result += char
            capitaliz = true
        } else {
            if (capitaliz) {
                result += char.toUpperCase();
                capitaliz = false
            } else {
                result += char
            }
        }
    }
    console.log(result);
}
capital("hello world from javascript")

// 9. Anagram Check
// Problem: Write a function to check if two strings are anagrams of each other (contain the same characters with the same frequency).

// Example:
// Input: "listen", "silent"
// Output: true
// Input: "hello", "world"
// Output: false
function check(str1, str2) {
    if (str1.length !== str2.length) {
        console.log("false")
        return
    }
    let bol = true
    for (let i = 0; i < str1.length; i++) {
        let found = false
        for (let j = 0; j < str2.length; j++)
            if (str1[i] == str2[j]) {
                found = true
                break
            }
        if (found == false) {
            bol = false
            break
        }
    }
    if (bol == false)
        console.log("false")
    else {
        console.log("true")
    }
}
let lis = "listen"
let lis2 = "silent"
check(lis, lis2)
let sab1 = "saba"
let sab2 = "barbar"
check(sab1, sab2)

// 10. Chunk an Array
// Problem: Write a function that takes an array and a size number, and splits the array into subarrays of the specified size.

// Example:
// Input: [1, 2, 3, 4, 5, 6, 7], 3
// Output: [[1, 2, 3], [4, 5, 6], [7]]
function chunk(arr, num) {
    let resault = []
    let small = []
    let sm = 0
    let res = 0
    for (let i = 0; i < arr.length; i++) {
        small[sm] = arr[i]
        sm++
        if (small.length == num) {
            resault[res] = small
            res++
            small = []
            sm = 0
        }
        if (sm > 0) {
            resault[res] = small
        }
    }
    console.log(resault)
}
let array = [1, 2, 3, 4, 5, 6, 7, 9, 6, 8, 9]
let num = 4
chunk(array, num)

// 11. Find a Pair of Numbers that Sum to a Target Value
// Problem: Write a function that takes an array of numbers and a target number, and returns the first pair of numbers from the array that sum up to the target.

// Example:
// Input: [10, 5, 2, 7, 8, 3], 10
// Output: [2, 8]
function pair(arr, num) {
    let array3 = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++)
            if (arr[i] + arr[j] == num) {
                array3[0] = arr[i]
                array3[1] = arr[j]
                console.log(array3)
                return
            }
    }
    console.log("not found")
}
let r = [1, 50, 20, 7, 80, 30, 60]
let n = 80
pair(r, n)
let r1 = [1, 5, 20, 7, 80]
let n1 = 10
pair(r1, n1)

// 12. Rotate an Array to the Left
// Problem: Write a function that takes an array and a number n, and rotates the array elements to the left by n positions.

// Example:
// Input: [1, 2, 3, 4, 5], 2
// Output: [3, 4, 5, 1, 2]
function rotate(arr, num) {
    let resalt = []
    let array = []
    let final = []
    let n = 0
    let res = 0
    let fin = 0
    for (let i = 0; i < arr.length; i++) {
        if (i < num) {
            array[n] = arr[i]
            n++
        }
    }
    for (let j = num; j < arr.length; j++) {
        resalt[res] = arr[j]
        res++
    }
    for (let i = 0; i < resalt.length; i++) {
        final[fin] = resalt[i];
        fin++;
    }
    for (let i = 0; i < array.length; i++) {
        final[fin] = array[i];
        fin++;
    }
    console.log(final);
}
let p = [1, 2, 3, 4, 4, 7]
rotate(p, 4)//[4,7,1,2,3,4]

// 13. Find the Intersection of Two Arrays
// Problem: Write a function that takes two arrays and returns a new array containing only the elements that are common to both arrays (the intersection).

// Example:
// Input: [1, 2, 3, 4], [3, 4, 5, 6]
// Output: [3, 4]
function intersection(arr1, arr2) {
    let array = []
    let ar = 0
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++)
            if (arr1[i] == arr2[j]) {
                array[ar] = arr1[i]
                ar++
                break
            }
    }
    console.log(array)
}
let arr1 = [1, 2, 3, 4, 7, 9]
let arr2 = [3, 4, 5, 6, 9]
intersection(arr1, arr2)

// 14. Count Character Frequency in a String
// Problem: Write a function that takes a string and returns an object representing a frequency map, where each key is a character and its value is the number of times it appears.

// Example:
// Input: "hello"
// Output: { h: 1, e: 1, l: 2, o: 1 }
function frequency(str) {
    let result = {};
    let counted = [];
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        let found = false;
        for (let k = 0; k < count; k++) {
            if (counted[k] == char) {
                found = true;
                break;
            }
        }
        if (found) {
            continue;
        }
        let sum = 1;
        for (let j = i + 1; j < str.length; j++) {
            if (str[j] == char) {
                sum++;
            }
        }
        counted[count] = char;
        count++;
        result[char] = sum;
    }
    console.log(result)
}
let s = "saba";
frequency(s);

// 15. Flatten a Nested Array
// Problem: Write a function that flattens a nested array (an array containing elements that may themselves be arrays) into a single, flat array.

// Example:
// Input: [1, [2, 3], [4, [5, 6]]]
// Output: [1, 2, 3, 4, 5, 6]
function flatten(arr) {
    let stack = []
    let result = []
    let index = 0
    for (let i = arr.length - 1; i >= 0; i--) {
        stack[index] = arr[i]
        index++
    }
    let res = 0
    while (index > 0) {
        index--
        let item = stack[index]
        if (item && item.length != undefined) {
            for (let i = item.length - 1; i >= 0; i--) {
                stack[index] = item[i]
                index++
            }
        } else {
            result[res] = item
            res++
        }
    }
    console.log(result)
}
let nest = [1, [2, [3, 4], 5], 6]
flatten(nest)
// 16. Find the Longest Word in a Sentence
// Problem: Write a function that takes a sentence and returns the longest word in it. If there are multiple words with the same maximum length, return the first one that appears.

// Example:
// Input: "The quick brown fox jumped over the lazy dog"
// Output: "jumped"
function long(sentence) {
    let longest = ""
    let word = " "
    let maxW = 0
    let cha
    for (let i = 0; i < sentence.length; i++) {
        cha = sentence[i]
        if (cha !== " ")
            word += cha
        else {
            if (word.length > maxW) {
                maxW = word.length
                longest = word
            }
            word = " "
        }
    }
    if (word.length > maxW) {
        longest = word;
    }
    console.log(longest);
}
let lon = "The quick brown fox jumped over the lazy dog"
long(lon)

// 17. Find the Most Frequent Element in an Array
// Problem: Write a function that takes an array of numbers or strings and returns the most frequently occurring element.

// Example:
// Input: [1, 2, 3, 2, 2, 4, 5, 2]
// Output: 2
// Input: ['a', 'b', 'c', 'a', 'b', 'a']
// Output: 'a'
function frequency(arr) {
    let result = {}
    let most = null
    let max = 0
    for (let i = 0; i < arr.length; i++) {
        let item = arr[i]
        if (result[item] == undefined) {
            result[item] = 1
        } else {
            result[item]++
        }
        if (result[item] > max) {
            max = result[item]
            most = item
        }
    }
    console.log(most)
}
let s1 = ['a', 'b', 'c', 'a', 'b', 'a']
frequency(s1)
let num1 = [1, 3, 4, 5, 1, 1, 2]
frequency(num1)

// 18. Sort an Array of Objects by a Property
// Problem: You have an array of objects, where each object represents a person with a name and age. Write a function to sort the array by age in ascending order (from youngest to oldest) without using Array.prototype.sort.

// Example:
// Input: [{ name: "Alice", age: 30 }, { name: "Bob", age: 25 }, { name: "Charlie", age: 35 }]
// Output: [{ name: "Bob", age: 25 }, { name: "Alice", age: 30 }, { name: "Charlie", age: 35 }]
// Solution: (Using Bubble Sort algorithm)
function sortAge(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j].age > arr[j + 1].age) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    console.log(arr)
}
let people = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 35 }
]
sortAge(people)
// 19. Find the First Non-Repeating Character
// Problem: Write a function that takes a string and finds the first character that does not repeat.

// Example:
// Input: "swiss"
// Output: "w"
// Input: "aabbcc"
// Output: null (or a suitable message)

function first(str) {
    let counts = {}
    let char
    for (let i = 0; i < str.length; i++) {
        char = str[i]
        if (counts[char]) {
            counts[char]++
        } else {
            counts[char] = 1
        }
    }
    for (let i = 0; i < str.length; i++) {
        let char = str[i]
        if (counts[char] == 1) {
            console.log(char)
            return
        }
    }
    console.log(null)
}
let sw = "swissw"
let rep = "aabbcc"
first(sw)
first(rep)

// 20. Symmetric Difference of Two Arrays
// Problem: Write a function that takes two arrays and returns a new array containing the elements that are present in one of the arrays, but not in both.

// Example:
// Input: [1, 2, 3], [3, 4, 5]
// Output: [1, 2, 4, 5]
function difference(arr1, arr2) {
    let array = []
    let ar = 0
    for (let i = 0; i < arr1.length; i++) {
        let found = false
        for (let j = 0; j < arr2.length; j++)
            if (arr1[i] == arr2[j]) {
                found = true
                break
            }
        if (found == false) {
            array[ar] = arr1[i]
            ar++
        }
    }
    for (let i = 0; i < arr2.length; i++) {
        let found = false;
        for (let j = 0; j < arr1.length; j++) {
            if (arr2[i] == arr1[j]) {
                found = true;
                break;
            }
        }
        if (found == false) {
            array[ar] = arr2[i];
            ar++;
        }
    }
    console.log(array)
}
let arr4 = [1, 2, 3, 4, 7, 9]
let arr5 = [3, 4, 5, 6, 9]
difference(arr4, arr5)
