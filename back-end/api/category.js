const { PrismaClient } = require('@prisma/client')


module.exports = app=>{
    const prisma =new  PrismaClient();
    const { existsOrError, notExistsOrError, equalsOrError } = app.api.validation

const save =async (req,res)=>{
    const category = {...req.body }

    if (req.params.slug){
        category.slug = req.params.slug
    }

    try {
        existsOrError(category.name,'Nome não informado')
        
    } catch (error) {
        return res.status(400).send(error)
        
    }

    const upsertCategory = await prisma.category.upsert({
        where:{
           name: category.name
        },
        update:{
            category
        },
        create:{
            category
        }
    })



}

const get = async (req,res)=>{
    try {
        const category = await prisma.category.findMany()
        res.json(category)
    } catch (error) {
        res.status(500).send(error)
        
    }

}

const getBySlug =async (req,res)=>{
    try {
        const categories = await prisma.category.findUnique({
            where:{
                slug: req.params.slug
    
        }})
        res.json(categories);
        
    } catch (error) {
        res.status(500).send(error);
        
    }


}
const remove = async()=>{

}




return{save,get,getBySlug,remove}

}