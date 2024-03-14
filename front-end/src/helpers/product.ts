//Recebe como parâmetro um produto do prisma
// Se o desconto for zero -> retorna o produto e o total price
// Criar um interface que vai extender o produto
//total price vai ser um number

import { Product } from "@/types/Product";

//If o desconto for maior que zero -> retorna o produto e o total price x (percentage /100)
interface ProductWithTotalPrice extends Product{
    totalPrice: number;

}

export const computeProductTotalPrice = ( product:Product) :ProductWithTotalPrice =>{
    if(product.discountPercentege === 0){
        return{
            ...product,
            totalPrice:Number(product.basePrice),
        }
    }
    const totalPrice = Number(product.basePrice) * (product.discountPercentege / 100)
   
    return{
        ...product,
        totalPrice,
    }


}