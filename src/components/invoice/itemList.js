import React from 'react'
import Item from "./Item";

function ItemList({ items, changeHandler, deleteHandler }) {
  return items.map((element, index) => {
    return (
      <tr>
        <Item
          key={index}
          item={element}
          index={index}
          changeHandler={changeHandler}
          deleteHandler={deleteHandler}
        />
      </tr>
    );
  });
}

export default ItemList;