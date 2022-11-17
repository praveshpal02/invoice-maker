import React, { useEffect, useState } from "react";
import { Route, Routes,Link } from "react-router-dom";
import { getData, getItems } from "../utility";
import Template1 from "./template1";
import Template2 from "./Template2/template2";
import defaultData from "../config.json";

const Invoice = React.forwardRef((props, ref) => {
  console.log(defaultData, "11");
  // const [title, setTitle] = useState(defaultData.title);
  const [customer, setCustomer] = useState(getData("customer"));
  const [company, setCompany] = useState(getData("company"));
  const [items, setItems] = useState(getItems("items"));
  const [invInfo, setInvInfo] = useState(getItems("invoiceDetails"));
  const [total, setTotal] = useState("");

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
    let t = items.reduce((acc, cur) => console.log(acc, cur), 0);
    return <span>t</span>;
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

  const handlers = {
    handleInvInfoChange,
    handleCustomerChange,
    handleCompanyChange,
    handleItemsChange,
    handleAddItems,
    handleInvoiceDChange,
    handleRemoveLineItem,
  };

  return (
    <>
      <div ref={ref}>
        <Routes>
          <Route
            element={
              <Template1
                defaultData={defaultData}
                handlers={handlers}
                customer={customer}
                company={company}
                items={items}
                invInfo={invInfo}
                total={total}
                curr={props.curr}
                isPrinting={props.isPrinting}
              />
            }
            path="/invoice-maker"
          />

          <Route
            element={
              <Template2
                defaultData={defaultData}
                handlers={handlers}
                customer={customer}
                company={company}
                items={items}
                invInfo={invInfo}
                total={total}
                curr={props.curr}
                isPrinting={props.isPrinting}
              />
            }
            path="/invoice-maker/temp2"
          />
        </Routes>
      </div>
    </>
  );
});

export default Invoice;
