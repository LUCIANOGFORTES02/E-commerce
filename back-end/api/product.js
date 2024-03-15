const { PrismaClient } = require('@prisma/client')


module.exports = app=>{
    const prisma =new  PrismaClient();
    const { existsOrError, notExistsOrError, equalsOrError } = app.api.validation

const save =async (req,res)=>{
    const product = {...req.body }

    if (req.params.slug){
        product.slug = req.params.slug
    }

    try {
        existsOrError(product.name,'Nome não informado')
        
    } catch (error) {
        return res.status(400).send(error)
        
    }

    try {
        const upsertProduct = await prisma.product.upsert({
            where:{
               name: product.name
            },
            update:{
                product
            },
            create:{
                product
            }
        })
        res.status(204).send()
    } catch (error) {
        res.status(500).send(error)
        
    }



}

const get = async (req,res)=>{
    try {
        const product = await prisma.product.findMany()
        res.json(product)
    } catch (error) {
        res.status(500).send(error)
        
    }

}

const getBySlug =async (req,res)=>{
    try {
        const product = await prisma.product.findUnique({
            where:{
                category:{
                    slug: req.params.slug

                } 
        }})
        res.json(product);
        
    } catch (error) {
        res.status(500).send(error);
        
    }
}

const getByDiscount =async (req,res)=>{
    try {
        const product = await prisma.product.findMany({
            where:{
                discountPercentage: {
                    gt:0,
                }
        }})
        res.json(product);     
        
    } catch (error) {
        res.status(500).send(error);
    }
}

const remove = async()=>{

}

const getByCategorySlug = async (req,res)=>{
    try {
        const categorySlug= await prisma.product.findMany({
            where:{
                category:{
                    slug:"keyboards"
                }
            }       
        })
        
        res.json(categorySlug);     
        
    } catch (error) {
        res.status(500).send(error);
    }
}

const getByCategoryMousesSlug = async (req,res)=>{
    try {
        const categoryMousesSlug= await prisma.product.findMany({
            where:{
                category:{
                    slug:"mouses"
                }
            }       
        })
        
        res.json(categoryMousesSlug);     
        
    } catch (error) {
        res.status(500).send(error);
    }


}



return{save,get,getBySlug,getByDiscount,getByCategorySlug,getByCategoryMousesSlug,remove}

}