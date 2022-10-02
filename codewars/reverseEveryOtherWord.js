function reverse(str){
    return str.split(" ").map((word, index) => index % 2 !== 0 ? word.trim().split("").reverse().join("") : word.trim()).join(" ").trim()
}

// console.log("Artur ".reverse())

console.log(reverse("Reverse this string, please!"))
console.log(reverse("I really don't like reversing strings!"))