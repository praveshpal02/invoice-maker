import React from "react";
import BillFrom from "../components/invoice/billFrom";
import BillTo from "../components/invoice/billTo";
import InvInfo from "../components/invoice/invInfo";
import ItemsTable from "../components/invoice/ItemsTable";
import defaultData from "../config.json";

function Template1({
  handlers,
  customer,
  company,
  items,
  invInfo,
  total,
  curr,
  isPrinting,
}) {
  return (
    <form action="" className="invoice-temp">
      <div className="invoice-head">
        <h1 className="invoice-title">
          <input
            type="text"
            className="form-control"
            name="invoiceHeading"
            id=""
            value={defaultData.title}
          />
        </h1>
        <div className="row">
          <div className="col-sm-6">
            <BillFrom
              defaultData={defaultData}
              handlers={handlers}
              customer={customer}
            />
          </div>
        </div>
      </div>

      <article className="invoice-body">
        <div className="row bill-sec">
          <div className="col-lg-6">
            <BillTo
              defaultData={defaultData}
              handlers={handlers}
              customer={customer}
            />
          </div>

          <div className="col-lg-4 ms-auto">
            <InvInfo handlers={handlers} defaultData={defaultData} />
          </div>
        </div>

        <div className="items-table">
          <ItemsTable
            defaultData={defaultData}
            handlers={handlers}
            items={items}
            curr={curr}
            isPrinting={isPrinting}
          />
        </div>
        <div className="text-right">
          <span>
            <strong>Total</strong>
          </span>{" "}
          {total} {curr}
        </div>
      </article>
    </form>
  );
}

export default Template1;
