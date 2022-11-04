import React from 'react'
import defaultData from "../../config.json";

function BillTo({handlers, company }) {
  return (
    <div className="bill-to">
      <p>Bill To:</p>
      {defaultData.company.map((element, ind) => {
        return (
          <div className="form-group" key={element.key}>
            <input
              type="text"
              className="form-control"
              name={element.key}
              id=""
              onChange={handlers.handleCompanyChange}
              placeholder={element.placeholder}
            />
          </div>
        );
      })}
    </div>
  );
}

export default BillTo;