import React, { useState,useEffect } from 'react'
import defaultData from "../../config.json";


function Currency({ handlers }) {
  const currList = defaultData.currency;

  return (
    <div className="form-group mt-4">
      <h5 className="form-title">
        <strong>Choose Currency</strong>
      </h5>
      <select className="form-control" onChange={handlers}>
        {currList.map((curr) => {
          return <option>{curr}</option>;
        })}
      </select>
    </div>
  );
}

export default Currency