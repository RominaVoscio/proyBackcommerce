const express= require('express')
const app= express()
const PORT= process.env.PORT || 8080
let visitas=0
app.get('/', (req, res)=>{
    res.send("<h1> style= `color: blue;`> Bienvenidos al servidor express </h1>")
})
app.get('/visitas', (req, res)=>{
    visitas++
    res.send(`Se ha visitado este sitio ${visitas} veces`)
})
app.get('/hora', (req, res)=> res.send(new Date().toLocaleDateString()))

const server= app.listen(PORT, ()=>{
    console.log(`server listening[ ${PORT}]...`);
})
server.on('error', e=> console.log('Error de server', e))