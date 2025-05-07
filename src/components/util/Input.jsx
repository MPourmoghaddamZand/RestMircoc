import React, { useState } from "react";

const Input = ({ text, placeholder }) => {
  const [value, setValue] = useState("");
  const toPersianDigits = (str) => {
    return str.replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);
  };
  const handleChange = (e) => {
    const input = e.target.value;
    const persianInput = toPersianDigits(input);
    setValue(persianInput);
  };

  return (
    <div className="w-full">
      <h2 className="text-right w-full pr-2 mb-1">{text}</h2>
      <input
        value={value}
        onChange={handleChange}
        className="rounded-full w-full text-center text-xs p-2"
        placeholder={placeholder}
        type="text"
      />
    </div>
  );
};

export default Input;
