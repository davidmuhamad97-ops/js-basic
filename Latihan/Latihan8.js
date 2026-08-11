
let students = [
    {name: "andi", score: 90},
    {name: "budi", score: 70},
    {name: "caca", score: 85},
]

// function mutable 

function getStudents(data){
    let temps = [] 

    for(let item of data){
        if(item.score >= 80){
            temps.push(item)
        }
    }

    return temps
}

console.log(getStudents(students)) // Output: [ { name: 'andi', score: 90 }, { name: 'caca', score: 85 } ]

// function immutable dengan metode filter
const getStudentsFilter = students.filter(item => item.score >= 80).sort((a, b) => a.score - b.score)
console.log(getStudentsFilter) // Output: [ { name: 'andi', score: 90 }, { name: 'caca', score: 85 } ]