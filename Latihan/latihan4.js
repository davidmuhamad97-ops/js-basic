let sortNums = (arr) => {

    let temps = []
    let idx = arr.length - 1
    let bil = arr[arr.length - 1]

    arr.pop()

    while (idx > 0){

        if (idx == 1){
            temps.push(bil)
            temps.push(arr[idx - 1])
        }
        else{

            if (bil > arr[idx - 1]){
                temps.push(arr[idx - 1])
                arr.pop()
            }
        }

        idx--
    }

    return temps
}

let nums = [4, 1, 0, 3]

console.log(sortNums(nums))