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


function ProductTable({ products, filterText, inStockOnly}){
  const rows=[];
  let lastCategory= null;

  products.forEach((products) => {
    if(product.name.toLowerCase().indexOf(filterText.toLowerCase())===-1){
      return ;
    }
    if(inStockOnly && !product.stocked){
      return;
    }
    if(product.category != lastCategory){
      rows.push(
        <ProductCategoryRow
        category={product.category}
        key={product.category}/>
      );
    }
    rows.push(
      <ProductRow
      product={product}
      key ={product.name}/>
    );
    lastCategory = product.category;
  });

  return(
    <table className='product-table'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function SearchBar({
  filterText,inStockOnly,onFilterTextChange,onInStockOnlyChange

}){
  return(
    <form className='search-bar'>
      <input className='searInput'type='text' value={filterText} placeholder='Search here' 
      onChange={(e)=> onFilterTextChange(e.target.value)} />
      <label className='stock-label'>
        <input type="checkbox" checked ={inStockOnly} 
        onChange={(e)=> onInStockOnlyChange(e.target.checked)} />
        
      </label>
    </form>
  )
}
export default function App(){
  return <FilterableProductTable product={Products}/>
} 
