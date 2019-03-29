let palindrome = n => {
    let stringnumber = n.toString()
    let reverse = stringnumber.split('').reverse().join('')
    let reversenumber = parseInt(reverse)
    if(n === reversenumber) {
        return true
    } else {
        return false
    }
}

let palindthreedigit = () => {
    let palind = []
    for(let i = 100; i <= 999; i++) {
        for(let j = 100; j <= 999; j++) {
            palind.push(i*j)
        }
    }
    let palindreal = palind.filter(x => palindrome(x))
    console.log(palindreal[palindreal.length - 1])
}

palindthreedigit()