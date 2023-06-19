function myEach(coll, cb){
    const arr = arrCheck(coll)

    for (const x of arr){
        cb(x)
    }

    return coll
}

function myMap(coll, cb){
    const arr = arrCheck(coll)
    let newArr = []

    for (const x of arr){
        newArr.push(cb(x))
    }

    return newArr
}

function myReduce(coll, cb, acc){
    const arr = arrCheck(coll)

    if (!acc){
        let acc = arr.splice(0, 1)[0]

        for (const x of arr){
            acc = cb(acc, x, coll)
        }
        return acc
    }

    for (const x of arr){
        acc = cb(acc, x, coll)
    }

    return acc
}

function myFind(coll, pred){
    const arr = arrCheck(coll)

    for (const x of arr){
        if (pred(x)){
            return x
        }
    }
    
    return undefined
}

function myFilter(coll, pred){
    const arr = arrCheck(coll)
    let newArr = []

    for (const x of arr){
        if (pred(x)){
            newArr.push(x)
        }
    }
    return newArr
}

function mySize(coll){
    const arr = arrCheck(coll)
    let i = 0

    for (const x of arr){
        i += 1
    }

    return i
}

function myFirst(array, n = 0){
    let newArr = []

    if (n === 0){
        return array[n]
    }

    else {
        for (let i = 0; i < n; i++){
            newArr.push(array[i])
        }
        return newArr
    }

}

function myLast(array, n = 0){
    let newArr = []

    if (n === 0){
        return array[(mySize(array) - 1)]
    }

    else {
        for (let i = (mySize(array) - n); i < mySize(array); i++){
            newArr.push(array[i])
        }
        return newArr
    }
}

function myKeys(obj){
    return Object.keys(obj)
}

function myValues(obj){
    return Object.values(obj)
}

function arrCheck(coll){
    let arr = []
    
    if (!Array.isArray(coll)){
        arr = Object.values(coll)
        return arr
    }
    else {
        arr.push(...coll)
        return arr
    }
}
