import React from 'react'
import BillFrom from '../components/invoice/billFrom';
import BillTo from '../components/invoice/billTo';
import InvInfo from '../components/invoice/invInfo';
import ItemsTable from '../components/invoice/ItemsTable';

function Template1({
  DefaultData,
  ref,
  handlers,
  customer,
  company,
  items,
  invInfo,
  total,
  isPrinting,
}) {
  return (
    <form action="" className="invoice-temp" ref={ref}>
      <div className="invoice-head">
        <h1 className="invoice-title">
          <input
            type="text"
            className="form-control"
            name="invoiceHeading"
            id=""
            value={DefaultData.title}
          />
        </h1>
        <div className="row">
          <div className="col-sm-6">
            <BillFrom
              DefaultData={DefaultData}
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
              DefaultData={DefaultData}
              handlers={handlers}
              customer={customer}
            />
          </div>

          <div className="col-lg-4 ms-auto">
            <InvInfo handlers={handlers} DefaultData={DefaultData} />
          </div>
        </div>

        <div className="items-table">
          <ItemsTable
            DefaultData={DefaultData}
            handlers={handlers}
            items={items}
            isPrinting={isPrinting}
          />
        </div>
      </article>
    </form>
  );
}

export default Template1;