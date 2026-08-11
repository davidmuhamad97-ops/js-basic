// rekursif fungsi yang memanggil dirinya sendiri


function generateArr(arr, n){
    if (n < 0){
        return null;
    }

    generateArr(arr, n - 1)

    if (n !== 0)
        arr.push(n)

    return arr;
}

let result = generateArr([], 5);
console.log(result);


function oddNums(arr, n, temp){
    if (n <= 0){
        return null;    
    }
    
    if (arr[n] % 2 === 0){
        temp.push(arr[n])
    }

    oddNums(arr, n - 1, temp)

    return temp;
}

let arrs = [1, 5, 4, 2, 3]
let result2 = oddNums(arrs, arrs.length - 1, []);
console.log(result2);