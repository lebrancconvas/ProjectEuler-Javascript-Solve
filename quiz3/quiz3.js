let primenumber = n => {
    let factor = []
    for(let i = 1; i <= n; i++) {
        if(n % i === 0) {
            factor.push(i)
        }
    }
    if(factor.length > 2) {
        return false
    } else {
        return true
    }
}

let primefactor = a => {
    let afactor = []
    for(let i = 2; i <= a; i++) {
        if(a % i === 0) {
            afactor.push(i)
        }
    }
    primefact = afactor.filter(x => primenumber(x))
    console.log(primefact[primefact.length - 1])
}

primefactor(600851475143)

// Answer -> 6857

