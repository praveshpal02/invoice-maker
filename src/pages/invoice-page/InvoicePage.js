import React, { useRef, useState } from "react";
import Invoice from "../../templates";
import { useReactToPrint } from "react-to-print";
import "./style.css";
import { Link } from "react-router-dom";
import Currency from "../../components/invoice/Currency";



function InvoicePage() {
  const [isPrinting, setIsPrinting] = useState(false);
  const [curr, setCurr] = useState("INR");

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
  const handleCurr = (e) => {
    setCurr(e.target.value);
    localStorage.setItem("inv_curr", e.target.value);
  }
  
  
  return (
    <div className={`inv-wrapper ${isPrinting ? "printEnable" : ""}`}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-4">
            <div className="row">
              <div className="col-sm-10 m-auto">
                <div className="content">
                  <button
                    type="button"
                    className="btn btn-lg btn-success mb-3 mb-5 mt-3 w-100"
                    onClick={handleClick}
                  >
                    Download Invoice
                  </button>

                  <h5 className="form-title">
                    <strong>Choose Template</strong>
                  </h5>
                  <ul className="nav">
                    <li className="nav-item">
                      <Link
                        to="/invoice-maker"
                        class="btn btn-outline-danger me-2"
                        aria-current="page"
                        href="#"
                      >
                        Template 1
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        to="/invoice-maker/temp2"
                        className="btn btn-outline-danger"
                        aria-current="page"
                        href="#"
                      >
                        Template 2
                      </Link>
                    </li>
                  </ul>

                  <Currency handlers={handleCurr} />
                </div>
              </div>
            </div>
          </div>

          <div className={`col-sm-8`}>
            <div className="row">
              <div className="col-lg-10 m-auto">
                <Invoice
                  curr={curr}
                  isPrinting={isPrinting}
                  key="1"
                  ref={componentRef}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InvoicePage