import React, { useState } from 'react'
import Invoice from '../../components/template1/Invoice';
import "./style.css";
function InvoicePage() {

  return (
    <div className="col-sm-8 m-auto">
                <div className="row">
                    <div className="col-lg-10 m-auto">
                      <Invoice key="1" />
                    </div>
                </div>
            </div>
  )
}

export default InvoicePage