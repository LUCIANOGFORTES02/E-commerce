

module.exports = app =>{
    const signin = (req,res)=>{
        if(!req.body.email|| !req.body.password){
            return res.status(400).send('Informar usuário e senha')
        }
    }

    return {signin}

}