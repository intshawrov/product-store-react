import { use } from "react"
import type { ProductType } from "../../typs"
import Product from "../product/Product"
import './BestSelling.css'

export interface BestSellingProps {
    bestSellingProductPromise: Promise<ProductType[]>
}

export default function BestSelling({ bestSellingProductPromise }: BestSellingProps) {

    const bestSelling = use(bestSellingProductPromise)


    return (
        <>
            <div className="grid-container">
                {
                    bestSelling.map(product => <Product key={product.id} product={product}></Product>)
                }
            </div>
        </>
    )
}