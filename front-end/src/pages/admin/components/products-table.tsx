import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { ProductWithTotalPrice } from '@/helpers/product'


export type ProductWithTotalPriceAndCategory = ProductWithTotalPrice & {
    category: {
      name: string;
    };
  };
  
  interface ProductsTableProps {
    products: ProductWithTotalPriceAndCategory[];
  }

export default function ProductsTable({products}:ProductsTableProps ) {
  return (
    <div>
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Nome</TableHead>
                    <TableHead>Categoria</TableHead>
                    <TableHead>Preço total</TableHead>
                    <TableHead>Preço base</TableHead>
                </TableRow>
            </TableHeader>

            <TableBody>
                {products.map((product)=>(
                    <TableRow >
                        <TableCell>{product.name}</TableCell>
                        <TableCell>{product.category.name}</TableCell> 
                        <TableCell>{product.totalPrice}</TableCell>
                        <TableCell>{product.basePrice}</TableCell>
                    </TableRow>
                ))

                }


            </TableBody>
            
        </Table>

    </div>
  )
}
