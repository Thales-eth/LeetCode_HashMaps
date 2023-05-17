// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

// Example 1:

// Input: ransomNote = "a", magazine = "b"
// Output: false

const canConstruct = (ransomNote, magazine) => {
    const magazineLetters = new Map()

    for (letter of magazine) {
        magazineLetters.set(letter, (magazineLetters.get(letter) || 0) + 1)
    }


    for (letter of ransomNote) {
        if (!magazineLetters.has(letter) || !magazineLetters.get(letter)) return false
        else if (magazineLetters.has(letter)) {
            magazineLetters.set(letter, magazineLetters.get(letter) - 1)
            console.log(magazineLetters)
        }
    }

    return true

};

// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A".

// Example 1:

// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3

const numJewelsInStones = (jewels, stones) => {
    const jewelSet = new Set(jewels)
    let counter = 0

    for (stone of stones) {
        if (jewelSet.has(stone)) counter++
    }

    return counter
};

// Given a string s, find the length of the longest
// substring
//  without repeating characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

const lengthOfLongestSubstring = (s) => {
    const counter = new Map()
    let left = 0
    let ans = 0

    for (let right = 0; right < s.length; right++) {
        const letter = s[right]
        counter.set(letter, (counter.get(letter) || 0) + 1)

        while (counter.get(letter) > 1) {
            counter.set(s[left], counter.get(s[left]) - 1)
            left++
        }

        ans = Math.max(ans, right - left + 1)
    }

    return ans
};

// You are given the array paths, where paths[i] = [cityAi, cityBi] means there exists a direct path going from cityAi to cityBi.Return the destination city, that is, the city without any path outgoing to another city.

// It is guaranteed that the graph of paths forms a line without any loop, therefore, there will be exactly one destination city.

//     Example 1:

// Input: paths = [["London", "New York"], ["New York", "Lima"], ["Lima", "Sao Paulo"]]
// Output: "Sao Paulo"
// Explanation: Starting at "London" city you will reach "Sao Paulo" city which is the destination city.Your trip consist of: "London" -> "New York" -> "Lima" -> "Sao Paulo".

function destCity(paths) {
    const citiesMap = new Map()

    for (path of paths) {
        citiesMap.set(path[0], path[1])
    }

    for (const [key, val] of citiesMap) {
        if (!citiesMap.has(val)) return val
    }
};

// Given a string path, where path[i] = 'N', 'S', 'E' or 'W', each representing moving one unit north, south, east, or west, respectively. You start at the origin (0, 0) on a 2D plane and walk on the path specified by path.

// Return true if the path crosses itself at any point, that is, if at any time you are on a location you have previously visited. Return false otherwise.

// Example 1:

// Input: path = "NES"
// Output: false
// Explanation: Notice that the path doesn't cross any point more than once.

function isPathCrossing(path) {
    const spotsSet = new Set()

    const current = [0, 0]

    spotsSet.add(current.toString())

    for (direction of path) {
        switch (direction) {
            case "N":
                current[1] += 1
                break;
            case "S":
                current[1] -= 1
                break;
            case "E":
                current[0] += 1
                break;
            case "W":
                current[0] -= 1
                break;
        }

        if (spotsSet.has([...current].toString())) return true
        spotsSet.add([...current].toString())
    }
    return false
};

// Given an array of integers arr, a lucky integer is an integer that has a frequency in the array equal to its value.

// Return the largest lucky integer in the array.If there is no lucky integer return -1.

// Example 1:

// Input: arr = [2, 2, 3, 4]
// Output: 2
// Explanation: The only lucky number in the array is 2 because frequency[2] == 2.

function findLucky(arr) {
    const numbers = new Map()

    for (num of arr) {
        numbers.set(num, (numbers.get(num) || 0) + 1)
    }

    let maxNumber = 0

    for (const [key, val] of numbers) {
        if (key === val && val > maxNumber) maxNumber = val
    }

    return maxNumber ? maxNumber : -1
}