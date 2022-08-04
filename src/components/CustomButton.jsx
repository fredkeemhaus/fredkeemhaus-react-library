import React from "react";

const CustomButton = ({ children, bgColor, fontColor, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: `${bgColor}`, color: `${fontColor}` }}
    >
      {children}
    </button>
  );
};

export default CustomButton;
