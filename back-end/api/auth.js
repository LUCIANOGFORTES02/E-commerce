const { PrismaClient } = require('@prisma/client')
const bcrypt = require('bcrypt')
const jwt = require('jwt-simple');
const user = require('./user');


module.exports = app =>{

    const prisma = new PrismaClient();

    const signin = async (req,res)=>{
        if(!req.body.email|| !req.body.password){
            return res.status(400).send('Informar usuário e senha')
        }

        const user = await prisma.user.findUnique({
            where:{
                email:req.body.email
            }

        })
        
        if(!user) return res.status(400).send('Usuário não encontrado')

        const isMatch = bcrypt.compareSync(req.body.password,user.password)
        if(!isMatch) return res.status(401).send("Email ou senha inválidos")
        
        const now = Math.floor(Date.now() / 1000)

        
        
          const payload={//Gera um token com as informações do usuário e uma data de expiração
            id:user.id,
            name:user.name,
            email:user.email,
            admin: user.admin,
            iat:now,
            exp: now + (60 * 60 * 24 * 3)//Data de expiração
        }
        //Retorna um objeto json que inclui payload (informações do usuário) e o token JWT gerado
        res.json({//Qualquer requisição que for feita é necessario um cabeçalho chamado authorization 
            user,payload, 
            token: jwt.encode(payload, "123")//Gerar o token com o authSecret para gerar apartir de um segredo
        })//Isso permite que o cliente(frontend) armazene o token e o use para a autenticação em futuras solicitações.
        
        
        
    
    }
    const validateToken = async (req, res) => {//Validar se um token é válido ou expirou
        const userData = req.body || null
        try {
            if(userData) {
                const token = jwt.decode(userData.token, '123')//Fazer a decodificação do token com o authSecret 
                if(new Date(token.exp * 1000) > new Date()) {//Teste de expiração

                const user = await prisma.user.findUnique({
                    where:{
                        email:token.email,
                    }
        
                })
         
                

                    return res.json({user})//Pode renovar o token retorna true se o token for válido 
                }
            }
        } catch(e) {
            // problema com o token
        }
        res.send(false)//Retorna false se o token tiver expirado


    }

    



    return {signin,validateToken}

}