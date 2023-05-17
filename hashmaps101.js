// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2, 7, 11, 15], target = 9
// Output: [0, 1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// https://leetcode.com/problems/two-sum/

function twoSum(nums, target) {
    const elements = new Map()

    elements.set(nums[0], 0)

    for (let i = 1; i < nums.length; i++) {
        const difference = target - nums[i]
        if (elements.has(difference)) {
            return [elements.get(difference), i]
        }

        elements.set(nums[i], i)
    }

    return -1
}

// A pangram is a sentence where every letter of the English alphabet appears at least once.

// Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.

// Example 1:

// Input: sentence = "thequickbrownfoxjumpsoverthelazydog"
// Output: true
// Explanation: sentence contains at least one of every letter of the English alphabet.

function checkIfPangram(sentence) {
    const englishAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

};

// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

// Example 1:

// Input: nums = [3,0,1]
// Output: 2
// Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.

function missingNumber(nums) {
    const numbersRange = new Set(nums)
    let index = 0
    while (true) {
        if (!numbersRange.has(index)) return index
        index++
    }
}

function missingElement(nums) {
    const uniqueNums = new Set(nums)

    for (let i = 0; i < nums.length + 1; i++) {
        if (!uniqueNums.has(i)) return i
    }
};

// Given an integer array arr, count how many elements x there are, such that x + 1 is also in arr. If there are duplicates in arr, count them separately.

// Example 1:

// Input: arr = [1,2,3]
// Output: 2
// Explanation: 1 and 2 are counted cause 2 and 3 are in arr.

function countElements(nums) {
    let counter = 0
    const numbers = new Set(nums)
    for (const number of nums) {
        if (numbers.has(number + 1)) counter++
    }
    return counter
};

