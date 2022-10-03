function pad(number) {
    if(number < 10) {
        return "0" + number
    }
    return number
}

function humanReadable (seconds) {
    const SECONDS_IN_HOUR = 3600
    const SECONDS_IN_MINUTE = 60
    const hours = pad(Math.floor(seconds / SECONDS_IN_HOUR))
    seconds -= Number(hours) * SECONDS_IN_HOUR
    const minutes = pad(Math.floor(seconds / SECONDS_IN_MINUTE))
    seconds -= Number(minutes) * SECONDS_IN_MINUTE
    return `${hours}:${minutes}:${pad(seconds)}`;
}

console.log(humanReadable(0))
console.log(humanReadable(3600))
console.log(humanReadable(359999))