import { Divider, Layout, Row, Col, Menu } from "antd";
import React from "react";
import Search from "./Search";

const Pictionary = () => {
  const { Header, Content } = Layout;
  return (
    <div className="app-header">
      <Layout>
        <Header className="header">
          <div style={{color: "white", fontSize: "x-large"}}>
            Pictionary
          </div>
        </Header>
        <Content >
          <Search />
        </Content>
      </Layout>
      </div>
  );
};

export default Pictionary;
