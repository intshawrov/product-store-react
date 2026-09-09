
import { Suspense } from 'react';
import './App.css'
import type { ProductType } from './typs';
import Products from './components/products/Products';
import BestSelling from './components/bestselling/BestSelling';

const productPromise = async (): Promise<ProductType[]> => {

  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();

  return data;

}

const bestSellingProductPromise = async (): Promise<ProductType[]> => {

  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();

  return data;

}

function App() {

  return (
    <>
      <Suspense fallback={<div>loading...</div>}>
        <Products productPromise={productPromise()}></Products>
        <h1>Best Selling Products</h1>
        <BestSelling bestSellingProductPromise={bestSellingProductPromise()}></BestSelling>
      </Suspense>
    </>
  )
}

export default App
