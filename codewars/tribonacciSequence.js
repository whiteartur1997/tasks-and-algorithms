function tribonacci(signature, n){
    const result = [...signature].slice(0, n)
    for(let i = 0; i < n; i++) {
        if(result.length === n) break
        const nextNum = result.slice(i, i + 3).reduce((acc, curr) => acc + curr, 0)
        result.push(nextNum)
    }

    return result
}

console.log(tribonacci([1,1,1],10))
console.log(tribonacci([300,200,100], 0))