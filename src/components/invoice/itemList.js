import React from 'react'
import Item from "./Item";

function ItemList({ items, changeHandler, deleteHandler, curr }) {
  return items.map((element, index) => {
    return (
      <tr>
        <Item
          curr={curr}
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