// palindrome: words that are the same forwards and backwards

function isPalindromeChain(word: string): boolean {
    if (word.split("").reverse().join("") === word) {
        return true;
    }
    return false;
}

console.log(isPalindromeChain("racecar"));
console.log(isPalindromeChain("wow"));
console.log(isPalindromeChain("place"));
