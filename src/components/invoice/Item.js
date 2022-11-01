import React from 'react'
import { MdDelete } from "react-icons/md";

function Item({ item, index, changeHandler, defaultData, deleteHandler }) {
  
  const { rate, qty } = item;
  

  return (
    <>
      {defaultData.items.map((ele, ind) => {
        return (
          <td key={ind}>
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
      })}
      <td className='text-right'>{rate && qty  ? rate * qty : ''}</td>
      <td className="btn-td">
        
        {
          index ? <button
          className={`btn btn-danger btn-xs d-btn ${index == 0 ? "disbaled":""}`}
          onClick={deleteHandler(index)}
        >
          <MdDelete key={index} />
          </button>
            :
            ""
        }
        
      </td>
    </>
  );
}

export default Item;