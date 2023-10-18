import React from "react";

const IconTextLabelItem = ({ text, icon, color, width }) => {
  return (
    <div
      className=" d-flex justify-content-center align-items-center  gap-2 p-2 "
      style={{ color: color, width: width }}
    >
      <span>
        {icon}
      </span>
      <span>{text}</span>
    </div>
  );
};

export default IconTextLabelItem;
