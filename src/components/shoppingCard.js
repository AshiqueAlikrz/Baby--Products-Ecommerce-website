import React from "react";
import { EditOutlined, EllipsisOutlined, SettingOutlined } from "@ant-design/icons";
import { Avatar, Card } from "antd";
import '../styles/popularItems.css'


const { Meta } = Card;

const ShopppingCard = ({popularProducts}) => {
  return (
    <>
      {popularProducts.map((product) => (
        <Card className="popular-card"
          style={{ width: 230 }}
          cover={<img alt="example" className="popular-image" src={product.src} />}
          // actions={[
          //   <SettingOutlined key="setting" />,
          //   <EditOutlined key="edit" />,
          //   <EllipsisOutlined key="ellipsis" />,
          // ]}
        >
          <Meta
            title={product.title}
            description={product.description.slice(13,36)}
          />
        </Card>
      ))}
    </>
  );
};

export default ShopppingCard;
