// https://www.codewars.com/kata/55b3425df71c1201a800009c

const SECONDS_IN_HOUR = 3600;
const SECONDS_IN_MINUTE = 60;


const pad = (number) => {
    if(+number < 10) {
        return "0" + +number
    }
    return String(number)
}

const calculateTotalSeconds = (h, m, s) => {
    return h * SECONDS_IN_HOUR + m * SECONDS_IN_MINUTE + s
}

const convertToFormat = (numberOfSeconds) => {
    let hours = ""
    let mins = ""
    let secs = ""

    if(numberOfSeconds > SECONDS_IN_HOUR) {
        hours = pad(Math.trunc(numberOfSeconds / SECONDS_IN_HOUR))
        numberOfSeconds = numberOfSeconds - Number(hours) * SECONDS_IN_HOUR
    } else {
        hours = "00"
    }

    if(numberOfSeconds > SECONDS_IN_MINUTE) {
        mins = pad(Math.trunc(numberOfSeconds / SECONDS_IN_MINUTE))
        numberOfSeconds = numberOfSeconds - Number(mins) * SECONDS_IN_MINUTE
    } else {
        mins = "00"
    }

    secs = pad(numberOfSeconds)

    return [hours, mins, secs].join("|")
}

const getRange = (results) => {
    const min = Math.min(...results)
    const max = Math.max(...results)
    return convertToFormat(Math.abs(max - min))
}

const getAverage = (results) => {
    const averageInSeconds = Math.trunc(results.reduce((a, b) => a + b, 0) / results.length)
    return convertToFormat(averageInSeconds)
}

const getMedian = (results) => {
    const sortedResults = results.sort((a, b) => a - b)
    if(results.length % 2 === 0) {
        return convertToFormat(Math.floor((sortedResults[Math.floor(sortedResults.length / 2)] + sortedResults[Math.floor(sortedResults.length / 2) - 1]) / 2))
    } else {
        return convertToFormat(sortedResults[Math.floor(sortedResults.length / 2)])
    }
}

function stat(strg) {
    if(strg === "") {
        return strg
    }
    const arrOfResults = strg.split(",").map(res => {
        return calculateTotalSeconds(...res.trim().split("|").map(dimension => Number(pad(dimension))))
    })
    const range = getRange(Object.values(arrOfResults))
    const average = getAverage(Object.values(arrOfResults))
    const median = getMedian(Object.values(arrOfResults))

    return `Range: ${range} Average: ${average} Median: ${median}`
}

// console.log(stat("01|15|59, 1|47|16, 01|17|20, 1|32|34, 2|17|17"))
console.log(stat("02|15|59, 2|47|16, 02|17|20, 2|32|34, 2|17|17, 2|22|00, 2|31|41"))