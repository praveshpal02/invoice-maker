export const DefaultData = {
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

export const getData = function (key) {
  let data = {};
  let invoiceData = {};

  if (localStorage.getItem("invoiceData")) {
    invoiceData = JSON.parse(localStorage.getItem("invoiceData"));
  }
  DefaultData[key].forEach((element) => {
    data[element.key] = "";
  });

  if (invoiceData[key]) {
    return invoiceData[key];
  }

  return data;
};

export const getItems = function (key) {
  let data = [];
  let item = {};
  let invoiceData = {};

  if (localStorage.getItem("invoiceData")) {
    invoiceData = JSON.parse(localStorage.getItem("invoiceData"));
  }
  DefaultData[key].forEach((element) => {
    item[element.key] = "";
  });

  if (invoiceData[key]) {
    return invoiceData[key];
  } else {
    data.push(item);
    return data;
  }
};


