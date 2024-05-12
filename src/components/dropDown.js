import React from "react";
import { Dropdown } from "antd";

const DropdownPage = ({ icon, style, items, bgColor }) => {
  const iconElement = typeof icon === "string" ? <span>{icon} </span> : icon;

  return (
    <>
      <div className={style} style={{ backgroundColor: `${bgColor}` }}>
        <Dropdown menu={{ items }} placement="bottom" arrow className={style}>
          {iconElement}
        </Dropdown>
      </div>
    </>
  );
};

export default DropdownPage;

