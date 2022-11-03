import React from 'react'

function AddItem({ items, handlers, isPrinting }) {
  return (
    <div>
      {items.length !== 10 && !isPrinting && (
        <a
          href=""
          className="btn btn-primary btn-sm"
          onClick={handlers.handleAddItems}
        >
          Add Item
        </a>
      )}
    </div>
  );
}

export default AddItem;