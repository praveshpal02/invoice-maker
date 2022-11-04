import React from 'react'
import defaultData from "../../config.json";

function InvInfo({handlers }) {
  return (
    <div>
      {defaultData.invoiceDetails.map((element, ind) => {
        return (
          <div className="row">
            <div className="col-lg-6">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name={element.key}
                  id=""
                  value={element.label}
                  placeholder=""
                />
              </div>
            </div>
            {element.key == "invoice_no" ? (
              <div className="col-lg-6">
                <div className="form-group">
                  <input
                    type="number"
                    className="form-control"
                    name={element.key}
                    id=""
                    onChange={handlers.handleInvInfoChange}
                    placeholder={element.placeholder}
                  />
                </div>
              </div>
            ) : (
              <div className="col-lg-6">
                <div className="form-group">
                  <input
                    type="date"
                    className="form-control"
                    name={element.key}
                    id=""
                    onChange={handlers.handleInvInfoChange}
                    placeholder={element.placeholder}
                  />
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default InvInfo;