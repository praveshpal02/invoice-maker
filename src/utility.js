import defaultData from "./config.json"

export const getData = function (key) {
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
};

export const getItems = function (key) {
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
  } else {
    data.push(item);
    return data;
  }
};

export const getCurrency = function (key) {
  let data = [];
  let invoiceData = {};

   if (localStorage.getItem("invoiceData")) {
     invoiceData = JSON.parse(localStorage.getItem("invoiceData"));
   }
  
}