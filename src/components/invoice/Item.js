import React from 'react'

function Item({ item, index, changeHandler, defaultData }) {
  console.log(item);

  return defaultData.items.map((ele, ind) => {
    return (
      <td>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name={ele.key}
            onChange={changeHandler}
            id={ele.key}
            value={item[ele.key]}
            placeholder={ele.placeholder}
            data-index={index}
          />
        </div>
      </td>
    );
  });
}

export default Item;