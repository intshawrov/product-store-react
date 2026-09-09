import { use } from "react";
import type { ProductType } from "../../typs"

export interface ProductsProps {
    productPromise: Promise<ProductType[]>
}

export default function Products({ productPromise }: ProductsProps) {

    const products = use(productPromise);
    console.log(products);
    
    
    return (
        <></>
    )
}