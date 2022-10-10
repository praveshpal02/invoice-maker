import React from 'react'
import Item from "./Item";

function ItemList({ items, changeHandler, defaultData }) {
  return items.map((element, index) => {
    return (
      <tr>
       
          <Item
            item={element}
            index={index}
            changeHandler={changeHandler}
            defaultData={defaultData}
          />
       
      </tr>
    );
  });
}

export default ItemList;