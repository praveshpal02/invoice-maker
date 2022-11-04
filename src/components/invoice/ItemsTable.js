import React from 'react'
import AddItem from './AddItem';
import ItemList from './itemList'; 
import defaultData from "../../config.json";
    
function ItemsTable({handlers, items, isPrinting }) {
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            {defaultData.items.map((element, ind) => {
              return <th scope="col">{element.label}</th>;
            })}
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <ItemList
            key="item"
            items={items}
            changeHandler={handlers.handleItemsChange}
            deleteHandler={handlers.handleRemoveLineItem}
            defaultData={defaultData}
          />
        </tbody>
      </table>
      <AddItem items={items} handlers={handlers} isPrinting={isPrinting} />
    </>
  );
}

export default ItemsTable