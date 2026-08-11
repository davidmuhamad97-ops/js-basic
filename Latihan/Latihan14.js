import { API, sampleErrorData, sampleSuccessData } from "./Support"


async function processData(data){
    let temp = await data.map(item => {
        let getData = API.fetch(item.delay, item.simulateError)
        return getData
    })

       return Promise.allSettled(temp)
}

processData(sampleErrorData)
.then(item => console.log(item))
.catch(err => console.log(err))

processData(sampleSuccessData)
.then(item => console.log(item))
.catch(err => console.log(err))