import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductById, getProducts, getProductByCategory } from '../../asyncMock';
import ItemDetail from '../ItemDetail/ItemDetail';
import NavBar from "../NavBar/NavBar";
const ItemDetailContainer = () => {
  const { categoryId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const asyncFunc = categoryId ? getProductByCategory : getProducts
    asyncFunc(categoryId)
      .then(response => {
        setProduct(response);
      })
      .catch(error => {
        console.error(error);
      });
  }, [categoryId]);

  return (
    <div className="ItemDetailContainer">
        <NavBar/>
      {product ? (
        <ItemDetail
          id={product.id}
          name={product.name}
          img={product.img}
          category={product.category}
          description={product.description}
          price={product.price}
          stock={product.stock}
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;