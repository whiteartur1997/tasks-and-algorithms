function estSubsets(arr) {
    const uniqueArr = Array.from(new Set(arr))
    // Any n-element set has exactly 2n subsets
    // calc total amount of subsets minus empty subset
    return Math.pow(2, uniqueArr.length) - 1
}

console.log(estSubsets([1, 2, 3, 4]))