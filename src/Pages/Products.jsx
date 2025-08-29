import React from 'react';
import Menu from './../component/Menu';
import { useParams } from 'react-router-dom';

const Products = () => {
  let {id, name} = useParams();
  return (
    <div>
      <Menu />
      <p>ID: {id} </p>
      <p>Name: {name}</p>
      <h1>This is Products page.</h1>
    </div>
  );
};

export default Products;