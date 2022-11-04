import React from 'react'
import defaultData from "../../config.json";

function BillFrom({handlers, customer }) {
  return (
    <address className="address-wrap">
      {defaultData.customer.map((element, ind) => {
        return (
          <div className="form-group" key={element.key}>
            <input
              type="text"
              className="form-control"
              name={element.key}
              value={customer[element.key]}
              id=""
              onChange={handlers.handleCustomerChange}
              placeholder={element.placeholder}
            />
          </div>
        );
      })}
    </address>
  );
}

export default BillFrom