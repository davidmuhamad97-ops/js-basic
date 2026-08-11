let employee = [
    // {id:1, name:"muhammad david", position:"backend developer"},
    // {id:2, name:"ahmad syarifudin", position:"backend developer"},
    // {id:3, name:"rangga andika", position:"project manager"},
    // {id:4, name:"ilham baggio", position:"sales marketting"}
]


// mendefinisikan async await 
async function getEmployees(data){
    return new Promise((resolve) => {
        setTimeout(() => {
            return resolve(data)
        }, 2000)
    })
}

let results = await getEmployees(employee)
let mappings = await results
let filteringData = mappings.filter(item => item.id === 3)[0]
console.log(filteringData)


const deleteEmps = async (data) => {
    return new Promise((resolve) => {
        let result = data.filter(item => item.id === 2)
        return resolve(result)
    })
}

results = await deleteEmps(employee)
console.log(results)

// menangani error ketika promise gagal 
async function getAllEmployees(data){
    return new Promise((resolve, reject) => {
        try{
            if(data.length === 0){
                reject("Data Notfound")
            }
            else{
                resolve(data)
            }
        }
        catch(err){
            console.log(err)
        }
    })
}

let display = await getAllEmployees(employee);
console.log(display)