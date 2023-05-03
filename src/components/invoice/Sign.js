import React, { useRef, useState } from 'react'
import { MdDelete } from "react-icons/md";

const Sign = ({ isPrinting }) => {
  const [image, setImage] = useState("");
  const picRef = useRef();

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
    });

  const handleChange = async (e) => {
    let pic = picRef.current;
    pic.src = URL.createObjectURL(e.currentTarget.files[0]);
    setImage(true);
    console.log(e.currentTarget);
  };
  const handleDelete = () => {
    setImage(false);
    let pic = picRef.current;
    pic.src = "";
  };
  return (
    <>
      <div
        className={`uploader ${
          isPrinting ? "justify-content-end border-0 bg-transparent print" : ""
        }`}
      >
        {!image && <input type="file" onChange={handleChange} />}
        <img className="sign" src="" ref={picRef} />

        {image &&
           <button
              className={`btn btn-danger btn-xs d-btn`}
              onClick={handleDelete}
            >
              <MdDelete />
            </button>}
        <div className="up-content">
          {!image && <p>Upload your signature</p>}
        </div>
      </div>
    </>
  );
};

export default Sign