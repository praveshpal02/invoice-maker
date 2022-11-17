import React from 'react'
import "./style.css"
import BillFrom from "../../components/invoice/billFrom";
import BillTo from "../../components/invoice/billTo";
import InvInfo from "../../components/invoice/invInfo";
import ItemsTable from "../../components/invoice/ItemsTable";
import defaultData from "../../config.json";

function Template2({
  handlers,
  customer,
  company,
  items,
  invInfo,
  total,
  isPrinting,
  curr
}) {
  return (
    <div className="invoice-temp invoice">
      <div className="row">
        <div className="col-7">
          <img
            src="https://s3.eu-central-1.amazonaws.com/zl-clients-sharings/90Tech.png"
            className="logo"
          />
        </div>
        <div className="col-5">
          <h1 className="document-type display-4">
            {" "}
            <input
              type="text"
              className="form-control"
              name="invoiceHeading"
              id=""
              value={defaultData.title}
            />
          </h1>
          <p className="text-right">
            <strong>N°90T-17-01-0123</strong>
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-7">
          <BillFrom
            defaultData={defaultData}
            handlers={handlers}
            customer={customer}
          />
        </div>
        <div className="col-5">
          <br />
          <br />
          <br />
          <p>
            <BillTo
              defaultData={defaultData}
              handlers={handlers}
              customer={customer}
            />
          </p>
        </div>
      </div>
      <br />
      <br />

      <br />
      <table className="table table-striped">
        <ItemsTable
          defaultData={defaultData}
          handlers={handlers}
          items={items}
          curr={curr}
          isPrinting={isPrinting}
        />
      </table>
      <div className="row">
        <div className="col-8"></div>
        <div className="col-4">
          <table className="table table-sm text-right">
            <tr>
              <td>
                <strong>Total </strong>
              </td>
              <td className="text-right">
                {total} {curr}
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Template2