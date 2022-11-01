
import './App.css';
import React, { useRef } from "react";
import InvoicePage from "./pages/invoice-page/InvoicePage";
import { useReactToPrint } from "react-to-print";


function App() {
  return (
    <div className="App">
     
      <InvoicePage  />
    </div>
  );
}

export default App;
