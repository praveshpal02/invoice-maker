import React, { useEffect, useState } from "react";
import ItemList from "../invoice/itemList";

const defaultData = {
  title: "INVOICE",
  inv_num_p: "Invoice#",
  inv_num: "12",
  inv_date_p: "Invoice Date",
  inv_date: Date.now(),
  inv_due_date: "12, oct 2020",
  inv_due_p: "Due Date",
  total: "",
  total_label: "TOTAL",
  customer: [
    { key: "name", placeholder: "Your Name" },
    { key: "address_one", placeholder: "Address line 1" },
    { key: "address_two", placeholder: "Address line 2" },
    { key: "mobile_num", placeholder: "Enter Mobile Number" },
  ],
  invoiceDetails: [
    { key: "invoice_no", placeholder: "12", label: "Invoice#" },
    { key: "invoice_date", placeholder: "Oct 03, 2022", label: "Invoice Date" },
    { key: "invoice_due_date", placeholder: "Oct 03, 2022", label: "Due Date" },
  ],
  company: [
    { key: "company", placeholder: "Client’s Company name" },
    { key: "company_address_one", placeholder: "Client’s Address line one" },
    { key: "company_address_two", placeholder: "Client’s Address line two" },
  ],
  items: [
    { key: "item_des", placeholder: "Item name", label: "Item Description" },
    { key: "qty", placeholder: "Item Quantity", label: "Qty" },
    { key: "rate", placeholder: "Item Rate", label: "Rate" },
    ,
  ],
};

const getData = function(key) {
    let data = {};
    let invoiceData = {};

    if (localStorage.getItem("invoiceData")) {
      invoiceData = JSON.parse(localStorage.getItem("invoiceData"));
    }
    defaultData[key].forEach((element) => {
      data[element.key] = "";
    });
    
    if (invoiceData[key]) {
        return invoiceData[key];
    }
  
  return data;
   
}

const getItems = function (key) {
  let data = [];
  let item = {};
  let invoiceData = {};

  if (localStorage.getItem("invoiceData")) {
    invoiceData = JSON.parse(localStorage.getItem("invoiceData"));
  }
  defaultData[key].forEach((element) => {
    item[element.key] = "";
  });

  if (invoiceData[key]) {
    return invoiceData[key];
  }
  else {
    data.push(item);
    return data;
  }
 
};

const Invoice = React.forwardRef((props, ref) => {
  // const items = {};
  // defaultData.items.forEach((element) => {
  //   //company[element.key] = "";
  // });

  const [title, setTitle] = useState(defaultData.title);
  const [customer, setCustomer] = useState(getData("customer"));
  const [company, setCompany] = useState(getData("company"));
  const [items, setItems] = useState(getItems("items"));
  const [total, setTotal] = useState("");
  const [invInfo, setInvInfo] = useState(getItems("invoiceDetails"));

  const [inputLabel, setInputLabel] = useState({
    total: "TOTAL",
    inv_date: "Invoice Date",
    inv_due: "Invoice Date",
    inv_num: "Invoice#",
    sub_total: "Sub Total",
  });

  const handleInvInfoChange = (e) => {
    let name = e.target.name;
    setInvInfo({ ...invInfo, [name]: e.target.value });
  };

  const handleCustomerChange = (e) => {
    let name = e.target.name;
    setCustomer({ ...customer, [name]: e.target.value });
  };
  const handleCompanyChange = (e) => {
    let name = e.target.name;
    setCompany({ ...company, [name]: e.target.value });
  };

  const handleItemsChange = (e) => {
    let name = e.target.name;

    // items[e.target.getAttribute("data-index")] = {
    //   ...items[e.target.getAttribute("data-index")],
    //   [name]: e.target.value,
    // };

    let dataIndex = e.target.getAttribute("data-index");

    setItems(
      items.map((item, ind) => {
        return ind == dataIndex ? { ...item, [name]: e.target.value } : item;
      })
    );
  };

  const handleAddItems = (e) => {
    e.preventDefault();
    const newItem = { item_des: "", qty: "", rate: "" };
    if (items.length == 10) {
      console.log("cannot add more than 10");
    } else {
      setItems([...items, newItem]);
    }
  };

  const handleInvoiceDChange = (e) => {
    let name = e.target.name;
    // setCustomerData({ ...invoiceDetails, [name]: e.target.value });
  };

  const handleRemoveLineItem = (index) => (e) => {
    e.preventDefault();
    if (index) {
      const filterItems = items.filter((item, ind) => ind !== index);
      setItems(filterItems);
    } else {
      alert("should have one field");
    }
  };

  const getTotal = (e) => {
    return items.reduce((acc, cur) => acc + cur.qty * cur.rate, 0);
  };

  getTotal();

  useEffect(() => {
    setTotal(items.reduce((acc, curr) => acc + curr.qty * curr.rate, 0));
    localStorage.setItem(
      "invoiceData",
      JSON.stringify({
        customer,
        company,
        items,
        invInfo,
      })
    );
  }, [customer, company, items, invInfo]);

  return (
    <form action="" className="invoice-temp" ref={ref}>
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
                      onChange={handleCustomerChange}
                      placeholder={element.placeholder}
                    />
                  </div>
                );
              })}
            </address>
          </div>
        </div>
      </div>
      <article className="invoice-body">
        <div className="row bill-sec">
          <div className="col-lg-6">
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
                      onChange={handleCompanyChange}
                      placeholder={element.placeholder}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          <div className="col-lg-4 ms-auto">
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
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        name={element.key}
                        id=""
                        onChange={handleInvInfoChange}
                        placeholder={element.placeholder}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="items-table">
          <table className="table">
            <thead>
              <tr>
                {defaultData.items.map((element, ind) => {
                  return <th scope="col">{element.label}</th>;
                })}
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <ItemList
                key="item"
                items={items}
                changeHandler={handleItemsChange}
                deleteHandler={handleRemoveLineItem}
                defaultData={defaultData}
              />
            </tbody>
          </table>

          <div>
            {items.length !== 10 && !props.isPrinting && (
              <a
                href=""
                className="btn btn-primary btn-sm"
                onClick={handleAddItems}
              >
                Add Item
              </a>
            )}
          </div>
          <div class="">
            <table class="right">
              <tbody>
                <tr>
                  <td>
                    <p>
                      <strong>Total</strong>
                    </p>
                  </td>
                  <td>
                    <span id="InvoceTotalVat">{total}</span>{" "}
                    <span id="InvoiceCurrency1">INR</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </article>
      <aside>
        <div></div>
      </aside>
    </form>
  );
});

export default Invoice;

