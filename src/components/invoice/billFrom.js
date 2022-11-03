import React from 'react'

function BillFrom({ DefaultData, handlers, customer }) {
  return (
    <address className="address-wrap">
      {DefaultData.customer.map((element, ind) => {
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