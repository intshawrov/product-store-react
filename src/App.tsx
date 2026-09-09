
import { Suspense } from 'react';
import './App.css'
import type { ProductType } from './typs';
import Products from './components/products/Products';

const productPromise = async():Promise<ProductType[]> =>{

  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();

  return data;

}

function App() {

  return (
    <>
      <Suspense fallback={<div>loading...</div>}>
        <Products productPromise={productPromise()}></Products>
      </Suspense>
    </>
  )
}

export default App
