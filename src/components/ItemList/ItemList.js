import React, { useState } from "react";
import Item from "../Item/Item";
import ItemDetail from "../ItemDetail/ItemDetail";
import './ItemList.css';

const ItemList = ({ products }) => {
  const [selectedItemId, setSelectedItemId] = useState(null);

  const handleItemClick = (itemId) => {
    setSelectedItemId(itemId);
  };
  const selectedProduct = products.find((prod) => prod.id === selectedItemId);

  return (
    <div className="ListGroup">
      {products.map(prod => (
        <Item
          key={prod.id}
          id={prod.id}
          name={prod.name}
          img={prod.img}
          category={prod.category}
          description={prod.description}
          price={prod.price}
          stock={prod.stock}
          onItemClick={() => handleItemClick(prod.id)}
        />
      ))}
      {selectedItemId && (
        <ItemDetail
        id={selectedProduct.id}
        name={selectedProduct.name}
        img={selectedProduct.img}
        category={selectedProduct.category}
        description={selectedProduct.description}
        price={selectedProduct.price}
        stock={selectedProduct.stock}
  
          
        />
      )}
    </div>
  );
};

export default ItemList;
