// Given a string s, return true if s is a good string, or false otherwise.

// A string s is good if all the characters that appear in s have the same number of occurrences(i.e., the same frequency).

//     Example 1:

// Input: s = "abacbc"
// Output: true
// Explanation: The characters that appear in s are 'a', 'b', and 'c'.All characters occur 2 times in s.
// https://leetcode.com/problems/intersection-of-multiple-arrays/

function areOccurrencesEqual(s) {
    const counter = new Map()
    for (const letter of s) {
        counter.set(letter, (counter.get(letter) || 0) + 1)
    }
    const uniqueValues = Array.from(counter.values())
    return new Set(uniqueValues).size === 1
};

// You are given an integer array matches where matches[i] = [winneri, loseri] indicates that the player winneri defeated player loseri in a match.

// Return a list answer of size 2 where:

// answer[0] is a list of all players that have not lost any matches.
// answer[1] is a list of all players that have lost exactly one match.
// The values in the two lists should be returned in increasing order.

// Note:

// You should only consider the players that have played at least one match.
// The testcases will be generated such that no two matches will have the same outcome.

// Example 1:

// Input: matches = [[1,3],[2,3],[3,6],[5,6],[5,7],[4,5],[4,8],[4,9],[10,4],[10,9]]
// Output: [[1,2,10],[4,5,7,8]]
// Explanation:
// Players 1, 2, and 10 have not lost any matches.
// Players 4, 5, 7, and 8 each have lost one match.
// Players 3, 6, and 9 each have lost two matches.
// Thus, answer[0] = [1,2,10] and answer[1] = [4,5,7,8].

const findWinners = (matches) => {
    const matchCounter = new Map()

    for (match of matches) {
        if (!matchCounter.get(match[0])) matchCounter.set(match[0], 0)
        matchCounter.set(match[1], (matchCounter.get(match[1]) || 0) + 1)
    }

    const undefeatedPlayers = []
    const singleTimeDefeatedPlayers = []

    for (const [key, value] of matchCounter) {
        if (value === 0) undefeatedPlayers.push(key)
        else if (value === 1) singleTimeDefeatedPlayers.push(key)
    }

    const sortFunction = (a, b) => a - b

    undefeatedPlayers.sort(sortFunction)
    singleTimeDefeatedPlayers.sort(sortFunction)

    return [undefeatedPlayers, singleTimeDefeatedPlayers]
};

// Given an integer array nums, return the largest integer that only occurs once. If no integer occurs once, return -1.

// Example 1:

// Input: nums = [5,7,3,9,4,9,8,3,1]
// Output: 8
// Explanation: The maximum integer in the array is 9 but it is repeated. The number 8 occurs only once, so it is the answer.

const largestUniqueNumber = (nums) => {
    const numbersMap = new Map()

    for (num of nums) {
        numbersMap.set(num, (numbersMap.get(num) || 0) + 1)
    }

    let maxNumber = -1

    for (const [key, value] of numbersMap) {
        if (value === 1 && key > maxNumber) maxNumber = key
    }

    return maxNumber
};

// Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.

// You can use each character in text at most once. Return the maximum number of instances that can be formed.

// Example 1:

// Input: text = "nlaebolko"
// Output: 1

function maxNumberOfBalloons(text) {
    const counter = new Map()
    const balloonSet = new Set("balloon")

    for (letter of text) {
        if (balloonSet.has(letter)) {
            counter.set(letter, (counter.get(letter) || 0) + 1)
        }
    }

    for (letter of "balon") {
        if (!counter.has(letter)) return 0
    }

    let minCounter = Infinity
    let maxCounter = Infinity

    function isMin(letter) {
        return (letter === "b" || letter === "a" || letter === "n")
    }

    function isMax(letter) {
        return (letter === "l" || letter === "o")
    }

    for (const [key, val] of counter) {
        if (isMin(key) && val < minCounter) minCounter = val
        if (isMax(key) && val < maxCounter) maxCounter = val
    }

    if (maxCounter < 2) return 0

    maxCounter = Math.floor(maxCounter / 2)

    return minCounter > maxCounter ? maxCounter : minCounter
};

