
import { Product } from "@/types/Product";


//If o desconto for maior que zero -> retorna o produto e o total price x (percentage /100)
export interface ProductWithTotalPrice extends Product{
    totalPrice: number;
}

// export const computeProductTotalPrice = ( product:Product) :ProductWithTotalPrice =>{
    
//     if(product.discountPercentage === 0){
//         return{
//             ...product,
//             totalPrice: Number(product.basePrice),
//         }
//     }
//     const totalDiscount= Number(product.basePrice) * (product.discountPercentage / 100)

//     return{
//         ...product,
//         totalPrice:  Number(product.basePrice) - totalDiscount ,
//     }


// }
export const computeProductTotalPrice = (
    product: Pick<Product, "discountPercentage" | "basePrice">,
  ): number => {
    if (product.discountPercentage === 0) {
      return Number(product.basePrice);
    }
  
    const totalDiscount =
      Number(product.basePrice) * (product.discountPercentage / 100);
  
    return Number(product.basePrice) - totalDiscount;
  };