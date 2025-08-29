import { useState } from 'react'

import './App.css'

function FilterableProductTable({products}) {
  const[filterText,setFilterText]= useState('');
  const[inStockOnly,setInStockOnly]= useState(false);


  return (
    <>
      <div className='container'>
        <h1> List Of Groceries </h1>
        <SearchBar />
        <ProductTable/>
      </div>
    </>
  )
}

function ProductCategoryRow({category}){
  return(
    <tr>
      <th className='category-row' colSpan="2">{category}</th>
    </tr>
  )
}


function ProductRow({ product}){
  const name= product.stocked ? product.name:
  <span className='out-of-stock'>{product.name}</span>

  return(
    <tr className='product-row'>
      <td> {name}</td>
      <td> {product.price}</td>
    </tr>
  )
}
export default App
