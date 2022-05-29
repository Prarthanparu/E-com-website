import React from "react";
import styled from "styled-components";
import Logo from "../Components/Flying_Base.png";
import { Input, Space, Avatar } from "antd";
import { Menu, message } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { InfoCircleOutlined, BellOutlined } from "@ant-design/icons";
import "../App.less";

function handleMenuClick(e) {
  message.info("Selected.");
}

function Header() {
  const { Search } = Input;
  const onSearch = (value) => console.log(value);
  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1" icon={<UserOutlined />}>
        1st menu item
      </Menu.Item>
      <Menu.Item key="2" icon={<UserOutlined />}>
        2nd menu item
      </Menu.Item>
      <Menu.Item key="3" icon={<UserOutlined />}>
        3rd menu item
      </Menu.Item>
    </Menu>
  );

  return (
    <HeaderBar>
      <FirstDiv>
        <LogoContainer>
          <a href="#">
            <img src={Logo} alt="" />
          </a>
        </LogoContainer>
        <HeaderSearch>
          <Space direction="vertical"></Space>
        </HeaderSearch>
        <HeaderContent>
          <InfoCircleOutlined style={{ fontSize: 24 }} />
          <BellOutlined style={{ fontSize: 24 }} />
        </HeaderContent>
        <AvatarContent>
          <Avatar size={54} icon={<UserOutlined />} />
          <AvatarName>
            <h1>John Robin</h1>
            <h6>johnrobin@gmail.com</h6>
          </AvatarName>
        </AvatarContent>
      </FirstDiv>
    </HeaderBar>
  );
}

export default Header;
const HeaderBar = styled.div`
  display: flex;

  flex-direction: column;
`;
const FirstDiv = styled.div`
  display: flex;
  background: #272728;
  box-shadow: 0 4px 8px -2px rgba(0, 0, 0, 0.55);
  border-radius: 3px;
  z-index: 1;
  color: #fff;
  padding: 0px;
`;

const LogoContainer = styled.div`
  background: #000000;
  padding: 10px;
  width: 100px;
  border-bottom: 1px solid rgba(84, 84, 84, 0.6);

  > a img {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
`;

const HeaderSearch = styled.div`
  display: flex;
  flex: 0.4;
  justify-content: flex-start;
  align-items: center;
`;
const HeaderContent = styled.div`
  display: flex;
  flex: 0.5;
  align-items: center;
  justify-content: flex-end;
  gap: 30px;
  margin-right: 20px;
`;

const AvatarContent = styled.div`
  display: flex;
  flex: 0.1;
  justify-content: flex-end;
  align-items: center;
`;

const AvatarName = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  align-items: left;
  margin-right: 15px;
  > h1 {
    font-size: 12px;
    font-weight: 600;
  }
`;
