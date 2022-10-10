import React from 'react'


function InputField({ element, fieldchange, val }) {
  console.log(element, "1");
  return (
    <div className="form-group">
      <input
        type="text"
        className="form-control"
        name={element.key}
        id=""
        onChange={fieldchange}
        value={val}
        placeholder={element.placeholder}
      />
    </div>
  );
}


export default InputField;