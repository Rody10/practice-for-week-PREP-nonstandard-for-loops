function oddIndices(arr) {
    // Return an array containing all the odd indices in the array
    let resultArray = [];
    for (i = 1; i < arr.length; i = i + 2)
    {
        resultArray.push(arr[i]);
    }
    return resultArray;
}

function oddReverse(arr) {
    // Return an array containing all the odd indices starting from the end
    let resultArray = [];
    let lastIndex = 0;
    if ((arr.length - 1) % 2 == 0)
    {
        lastIndex =  arr.length - 2;
    }
    else
    {
        lastIndex = arr.length - 1;
    }
    for (i = lastIndex; i>-1; i -=2)
    {
        resultArray.push(arr[i]);
    }
    return resultArray;
}

function secondPower(arr) {
    // Return an array containing all indices that are powers of 2
    let resultArray = [];
    for (i = 1; i < arr.length; i=i*2)
    {
        resultArray.push(arr[i]);
    }
    return resultArray;
}


function nthPower(arr, n) {
    // Return an array containing all indices that are powers of n
    let resultArray = [];
    for (i = 1; i < arr.length; i = i*n)
    {
        resultArray.push(arr[i]);
    }
    return resultArray;

}

function firstHalf(arr) {
    // Return an array containing the first half of an array
    // Include middle index on odd length arr
    let resultArray = [];
    for (i = 0; i<=Math.ceil((arr.length)/2) - 1; i++)
    {
        resultArray.push(arr[i]);
    }
    return resultArray;
}

function secondHalf(arr) {
    // Return an array containing the second half of an array
    // Exclude middle index on odd length arr
    let resultArray = [];
    for (i = arr.length-1; i>Math.ceil(arr.length/2)-1; i--)
    {
        resultArray.push(arr[i]);
    }
    return resultArray;

}

module.exports = {
    oddIndices,
    oddReverse,
    secondPower,
    nthPower,
    firstHalf,
    secondHalf
}
