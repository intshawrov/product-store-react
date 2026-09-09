import type { ProductType } from "../../typs"
import './prodect.css'

export interface ProductProps {
    product: ProductType
}

export default function Product({ product }: ProductProps) {

    console.log(product);


    return (
        <>
            <div key={product.id}>
                <div className="product-card">
                    <span className="product-category">{product.category}</span>

                    <div className="product-image-container">
                        <img src={product.image} alt={product.title} className="product-image" />
                    </div>

                    <div className="product-info">
                        <h3 className="product-title" title={product.title}>{product.title}</h3>
                        <p className="product-description">{product.description}</p>

                        <div className="product-rating">
                            <span className="stars">★ {product.rating.rate}</span>
                            <span className="rating-count">({product.rating.count} reviews)</span>
                        </div>

                        <div className="product-footer">
                            <span className="product-price">${product.price.toFixed(2)}</span>
                            <button className="add-to-cart-btn">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}