
const { request, response } = require('express')
const express = require('express')
const app = express()
const PORT = 9000

const albumNames = {
    'Blurryface': {
        'album' : 'Blurryface',
        'releaseDate' : 'May 19, 2015',
        'tracks' : 14
},

    'Trench' : {
        'album' : 'Trench',
        'releaseDate' : 'October 5, 2018',
        'tracks' : 14
},

    'ScaledAndIcy' : {
        'album' : 'Scaled and Icy',
        'releaseDate' : 'May 21 2021',
        'tracks' : 11
},
    'unknown' : {
        'album' : 'unknown',
        'releaseDare' : 'unknown',
        'tracks' : 0
    }
}


app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (req,res)=>{
    const album = request.params.name.toLowerCase()
    if( albumNames[album]){
        res.json(albumNames[album])
    }else{
        response.json(albumNames['unknown'])
    }
})

app.listen(PORT, () => {
    console.log(`The server is now running on port ${PORT}!`)
})

