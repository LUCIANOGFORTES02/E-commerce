const bodyParser = require ('body-parser')//Interpretar o body da requisição
const cors = require ('cors')

module.exports = app =>{
    app.use(bodyParser.json());
    app.use(cors());
}