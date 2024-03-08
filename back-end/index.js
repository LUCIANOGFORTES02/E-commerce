const app = require('express')()
const consign = require('consign')

const port = 3000

consign()
.then('./config/middlewares.js')
.then('./api/validation.js')
.then('./api')
.then('./config/routes.js')
.into(app)

//Vai injetar em cada uma das dependencias o app que foi criado.
//app representa a instancia do express
//Não irá ser necessário o uso de require 

app.listen(port,()=>{
    console.log(`Backend executando ${port}`)
})