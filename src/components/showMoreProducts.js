import Navbar from "./navbar";
import React, { useContext } from "react";
import { LaptopOutlined, NotificationOutlined, UserOutlined } from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import ShopppingCard from "./shoppingCard";
import { userDataContext } from "../context/userDataContext";
import CardDesign from "./cardDesign";
const { Content, Footer, Sider } = Layout;

const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
  const key = String(index + 1);

  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `subnav ${key}`,

    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: subKey,
        label: `option${subKey}`,
      };
    }),
  };
});

const ShowMoreProducts = () => {
  const { products } = useContext(userDataContext);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Navbar />

      <Content style={{ padding: "0 48px", overflow: "scroll" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div>
          <Layout style={{ padding: "24px 0", background: colorBgContainer, borderRadius: borderRadiusLG }}>
            <Sider style={{ background: colorBgContainer }} width={200}>
              <Menu mode="inline" defaultSelectedKeys={["1"]} defaultOpenKeys={["sub1"]} style={{ height: "100%" }} items={items2} />
            </Sider>
            <Content>
              <CardDesign popularProducts={products} />
            </Content>
          </Layout>
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>Ant Design ©{new Date().getFullYear()} Created by Ant UED</Footer>
    </Layout>
  );
};

export default ShowMoreProducts;
