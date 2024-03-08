const { PrismaClient } = require('@prisma/client')

//const prismaClient = require('../lib/prisma')
const bcrypt = require('bcrypt')//Criptografar senhas


module.exports = app =>{

   // const prisma = prismaClient()
    const prisma = new PrismaClient()
   
    const { existsOrError, notExistsOrError, equalsOrError } = app.api.validation

    const encryptPassword = password =>{
        const salt = bcrypt.genSaltSync(10);
        return bcrypt.hashSync(password,salt)

    }

     const save =async( req,res)=>{
     
        const user = {...req.body}

        if(req.params.id) user.id = req.params.id
        try {
            existsOrError(user.name, 'Nome não informado')
            existsOrError(user.email, 'E-mail não informado')
            existsOrError(user.password, 'Senha não informada')
            existsOrError(user.confirmPassword, 'Confirmação de Senha inválida')
            equalsOrError(user.password, user.confirmPassword,
                'Senhas não conferem')

            //Verifica se o usuário já existe com base no email
        const userFromDB = await prisma.user.findUnique({
            where:{
                email: user.email,
            },
        })
        if(!user.id){//Se o id for null verifica se já foi cadastrado
            notExistsOrError(userFromDB,'Usuário já cadastrado')
        }  

        } catch(msg) {
            return res.status(400).send(msg)//Erro com o cliente
        }

        user.password= encryptPassword(user.password)
        delete user.confirmPassword

        if(user.id){//Atualizar
            try {
                const upadateUser = await prisma.user.update({
                    where:{
                        email:user.email
                    },
                    data:user         
                    ,
                })
                res.status(204).send()

            } catch (error) {
                res.status(500).send(error)
            }

        }else{//Inserir
            try {
                const createUser = await prisma.user.create({
                    data:user
                }).then(()=>{
                    console.log('cadastrou')
                })
                res.status(204).send()
            } catch (error) {           
                res.status(500).send(error)
            }
            
        }


    }

    const get =async( req,res)=>{


    }

    const getById =async( req,res)=>{
        try {
            const user = await prisma.user.findUnique({
                where:{
                    id: req.params.id
                }
            })
            res.json(user)
        } catch (error) {
            res.status(500).send(error)
          
        }
       
    }
    
    const remove =async( req,res)=>{

    }
    
    return{save,get,getById,remove}
}