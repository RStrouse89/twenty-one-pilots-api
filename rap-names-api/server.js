const { request, response } = require('express')
const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const rappers = {
    '21 savage':{
        'age': 29,
        'birthName': 'Sheyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England'
    },
    'chance the rapper':{
        'age': 2,
        'birthName': 'Chancelor Bennett',
        'birthLocation': 'Chicago, Illinois'
    },
    'dylan':{
        'age': 2,
        'birthName': 'Dylan',
        'birthLocation': 'Dylan'
    },
}


app.get('/', (request, response) =>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:rapperNAme', (request,response) =>{
    const nameOfRappers = request.params.rapperNAme.toLowerCase()
    if(rappers[nameOfRappers]){
        response.json(rappers[nameOfRappers])
    } else{
        response.json(rappers['dylan'])
    }
    // 
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is running on port ${PORT}`)
})