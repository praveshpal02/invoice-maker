import React, { useEffect, useState } from "react";
import { DefaultData, getData, getItems } from "../data/index";
import Template1 from "./template1";


const Invoice = React.forwardRef((props, ref) => {


  const [title, setTitle] = useState(DefaultData.title);
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
    console.log()
    return items.reduce((acc, cur) => console.log(acc,cur), 0);
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
      <Template1
        DefaultData={DefaultData}
        ref={ref}
        handlers={handlers}
        customer={customer}
        company={company}
        items={items}
        invInfo={invInfo}
        total={total}
        isPrinting={props.isPrinting}
      />
      <form action="" className="invoice-temp" ref={ref}>
        <article className="invoice-body">
          <div className="row bill-sec"></div>

          <div className="items-table">
           
            <div className="">
              <table className="right">
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
    </>
  );
});

export default Invoice;

