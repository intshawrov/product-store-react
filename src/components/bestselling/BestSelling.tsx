import type { ProductType } from "../../typs"
import Product from "../product/Product"

export interface BestSellingProps {
    prop: ProductType
}

export default function BestSelling({ prop }: BestSellingProps) {

    return (
        <>
            {
                products.map(product => <Product key={product.id} product={product}></Product>)
            }
        </>
    )
}