const { PrismaClient } = require('@prisma/client')


module.exports = app=>{
    const prisma =new  PrismaClient();
    const { existsOrError, notExistsOrError, equalsOrError } = app.api.validation

const save =async (req,res)=>{
    const product = {...req.body }
    console.log(product)
    console.log("Olá ")

    if (req.params.id){
        product.id = req.params.id
    }

    try {
        existsOrError(product.name,'Nome não informado')
        existsOrError(product.slug,'Slug não informado')
        existsOrError(product.description,'Descrição não informada')
        existsOrError(product.basePrice,'Preço base não informado')
        existsOrError(product.imageUrls,'Imagens não informadas')
        existsOrError(product.categoryId,'Categoria não informada')
        
        
    } catch (error) {
        return res.status(400).send(error)
             
    }  
    if(product.id){//Atualizar
        try {          
            const upadateProduct = await prisma.product.update({
                where:{
                    id:product.id
                },
                data:product         
                ,
            })
            res.status(204).send()
        } catch (error) {
            res.status(500).send(error)
        }
    }else{//Inserir
        try {
            console.log(product)
            const createProduct = await prisma.product.create({
                data:product
            })
            res.status(204).send()
        } catch (error) {   
            console.log(error)      
            res.status(500).send(error)
        }     
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
        const product = await prisma.product.findFirst({
            where:{
                slug:req.params.slug
            } ,
            include:{
                category:{
                    include:{
                        products:{
                            where:{
                                slug:{
                                    not: req.params.slug
                                }
                            }
                        }
                    }   
                }
            }   
          
    })
        res.json(product);
        
    } catch (error) {
        res.status(500).send(error);
        
    }
}
const getProductsAndCategory = async (req,res)=>{//Buscar os produtos e relacionar a suas categorias
    try {
        const products= await prisma.product.findMany({
            include: {
              category: {
                select: {
                  name: true,
                },
              },
            },
          });

         res.json(products);
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



return{save,get,getBySlug,getProductsAndCategory,getByDiscount,getByCategorySlug,getByCategoryMousesSlug,remove}

}