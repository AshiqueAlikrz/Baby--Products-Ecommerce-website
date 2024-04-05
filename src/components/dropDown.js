import React from "react";
import { Dropdown } from "antd";

const items = [
  {
    key: "1",
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        Login
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        Register Account
      </a>
    ),
  },
];

const DropdownPage = ({ icon, style }) => {
  return (
    <>
      <Dropdown menu={{ items }} placement="bottom" arrow className={style}>
        {icon}
      </Dropdown>
    </>
  );
};

export default DropdownPage;
