import React, { useState } from 'react'
const defaultData =
{
    title:"INVOICE",
    customer: [
        { key: "name", placeholder: "Your Name" },
        { key: "address_one", placeholder: "Address line 1" },
        { key: "address_two", placeholder: "Address line 2" },
        { key: "mobile_num", placeholder: "Enter Mobile Number" }
    ],
    company: [
        { key: "company", placeholder: "Client’s Company name" },
        { key: "company_address_one", placeholder:"Client’s Address line one" },
        { key: "company_address_two", placeholder: "Client’s Address line two" }
    ],
    items: [
        { key: "item_des", placeholder: "Client’s Company name" },
        { key: "Qty", placeholder: "Client’s Company name" },
        { key: "rate", placeholder: "Client’s Company name" },
        { key: "amount", placeholder: "Client’s Company name" }
    ]
}

function Invoice() {
    const customer = {}
    defaultData.customer.forEach(element => {
        customer[element.key] = "";
    });

    const company = {}
    defaultData.company.forEach(element => {
        company[element.key] = "";
    });

    const [customerData, setCustomerData] = useState(customer);
    const [companyData, setCompanyData] = useState(company);
    
    const handleCustomerChange = (e) => {
        let name = e.target.name;
        setCustomerData({ ...customerData, [name]: e.target.value });
    }
    const handleCompanyChange = (e) => {
        let name = e.target.name;
        setCustomerData({ ...companyData, [name]: e.target.value });
    }


    return (
        
    <form action="" className="invoice-temp">
    <div className="invoice-head">
        <h1 className="invoice-title"><input type="text" className="form-control" name="invoiceHeading" id="" value={defaultData.title}/></h1>
                <div className="row">
                  
                <div className="col-sm-6">
                    <address className="address-wrap">
                            {
                                defaultData.customer.map((element, ind) => {
                                    return <div className="form-group" key={element.key}><input type="text" className="form-control"  name={element.key} id="" onChange={handleCustomerChange} placeholder={element.placeholder}/></div>
                                })
                           }
                    </address>
                </div>
        </div>
        
    </div>
    <article className="invoice-body">
        <div className="row">
        <div className="col-lg-6">
            <div className="bill-to">
                            <p>Bill To:</p>
                {
                    defaultData.company.map((element, ind) => {
                        return <div className="form-group" key={element.key}><input type="text" className="form-control"  name={element.key} id="" onChange={handleCustomerChange} placeholder={element.placeholder}/></div>
                    })
                }
               
            </div>
        </div>

        <div className="col-lg-4 ms-auto">
            <div className="row">
                <div className="col-lg-6">
                        <div className="form-group"><input type="text" className="form-control" name="" id=""  placeholder=""/></div>
                </div>
                <div className="col-lg-6">
                        <div className="form-group"><input type="text" className="form-control" name="" id=""  placeholder=""/></div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-6">
                        <div className="form-group"><input type="text" className="form-control" name="" id=""  placeholder=""/></div>
                </div>
                <div className="col-lg-6">
                        <div className="form-group"><input type="text" className="form-control" name="" id=""  placeholder=""/></div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-6">
                        <div className="form-group"><input type="text" className="form-control" name="" id=""  placeholder=""/></div>
                </div>
                <div className="col-lg-6">
                        <div className="form-group"><input type="text" className="form-control" name="" id=""  placeholder="05-Oct-2022"/></div>
                </div>
            </div>
        </div>
        </div>
        
        <div className="items-table">
        <table className="table">
            <thead>
                <tr>
                <th scope="col">Item Description</th>
                        <th scope="col">Qty</th>
                        <th scope="col" >Rate</th>
                    <th scope="col" >Amount</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">
                        <div className="form-group">
                            <textarea className="form-control" name="" id="" cols="30" rows="10" ></textarea>
                        </div>
                    </th>
                    <td> <div className="form-group"><input type="text" className="form-control" name="" id=""  placeholder="2"/></div></td>
                    <td> <div className="form-group"><input type="text" className="form-control" name="" id=""  placeholder="100.00"/></div></td>
                    <td> <div className="form-group"><input type="text" className="form-control" name="" id=""  placeholder="200.00"/></div></td>
                </tr>
                
                
            </tbody>
            </table>
            <div className="row">
                <div className="col-sm-6">
                    <a href="" className="btn btn-primary btn-sm">Add Item</a>
                </div>
                <div className="col-sm-6">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="form-group"><input type="text" className="form-control" name="" id="sub-total"  placeholder=""/></div>
                        </div>
                        <div className="col-lg-6">
                            <div className="form-group"><input type="text" className="form-control" name="" id="sub-total-value"  placeholder="INV-12"/></div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-6">
                            <div className="form-group"><input type="text" className="form-control fw-bold" name="" id="total"  placeholder=""/></div>
                        </div>
                        <div className="col-lg-6">
                            <div className="total-value"></div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </article>
    <aside>
        
        <div>
            
        </div>
    </aside>
    </form>
                   
  )
}

export default Invoice