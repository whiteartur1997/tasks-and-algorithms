function scramble(str1, str2) {
    const str1Obj = {}
    const str1Arr = str1.split("")
    const str2Arr = str2.split("")
    for(let char of str1Arr) {
        if(!str1Obj?.[char]) {
            str1Obj[char] = 1
        } else {
            str1Obj[char] += 1
        }
    }

    for(let char of str2Arr) {
        if(!str1Obj[char]) {
            return false
        }
        if(str1Obj[char]) {
            str1Obj[char] -= 1
            if(str1Obj[char] === 0) {
                delete str1Obj[char]
            }
        }
    }

    return true
}

console.log(scramble('rkqodlw','world'))
console.log(scramble('cedewaraaossoqqyt','codewars'))
console.log(scramble('javscripts','javascript'))