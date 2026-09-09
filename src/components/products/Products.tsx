import { use } from "react";
import type { ProductType } from "../../typs"
import './Product.css'
import Product from "../product/Product";


export interface ProductsProps {
    productPromise: Promise<ProductType[]>
}

export default function Products({ productPromise }: ProductsProps) {

    const products = use(productPromise);
    console.log(products);


    return (
        <>
            <div className="grid-container">
                {
                products.map(product =><Product key={product.id} product={product}></Product>)
            }
            </div>
        </>
    )
}