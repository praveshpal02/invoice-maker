import React from 'react'
import Item from "./Item";

function ItemList({ items, changeHandler, defaultData, deleteHandler }) {
  return items.map((element, index) => {
    return (
      <tr>
        <Item
          key={index}
          item={element}
          index={index}
          changeHandler={changeHandler}
          defaultData={defaultData}
          deleteHandler={deleteHandler}
        />
      </tr>
    );
  });
}

export default ItemList;