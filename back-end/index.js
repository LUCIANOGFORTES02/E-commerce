const app = require('express')()

const port = 3000

app.listen(port,()=>{
    console.log(`Backend executando ${port}`)
})