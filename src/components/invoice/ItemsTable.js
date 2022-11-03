import React from 'react'
import AddItem from './AddItem';
import ItemList from './itemList'; 
    
function ItemsTable({ DefaultData, handlers, items, isPrinting }) {
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            {DefaultData.items.map((element, ind) => {
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
            defaultData={DefaultData}
          />
        </tbody>
      </table>
      <AddItem items={items} handlers={handlers} isPrinting={isPrinting} />
      
    </>
  );
}

export default ItemsTable