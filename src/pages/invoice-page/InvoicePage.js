import React, { useRef, useState, useEffect } from "react";

import Invoice from '../../components/template1/Invoice';
import { useReactToPrint } from "react-to-print";
import "./style.css";
function InvoicePage() {
  const [isPrinting, setIsPrinting] = useState(false);
  const handleBeforePrint = React.useCallback(() => {
    setIsPrinting(true);
  }, []);
  const handleAfterPrint = React.useCallback(() => {
     setIsPrinting(false);
  }, []);

  const componentRef = useRef();
  
    const handlePrint = useReactToPrint({
      onBeforePrint: handleBeforePrint,
      content: () => componentRef.current,
      onAfterPrint: handleAfterPrint,
    });
  
  const handleClick = () => {
    handleBeforePrint();
    setTimeout(() => {
      handlePrint();
    },100);
  };

  
  
  return (
    <div className={`inv-wrapper ${isPrinting ? "printEnable" : ""}`}>
      <div className={`col-sm-8 m-auto`}>
        <div className="row">
          <div className="col-lg-10 m-auto">
            <button
              type="button"
              className="btn btn-success mb-3 mt-3"
              onClick={handleClick}
            >
              Print
            </button>

            <Invoice isPrinting={isPrinting} key="1" ref={componentRef} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default InvoicePage