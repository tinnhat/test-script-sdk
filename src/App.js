import "./App.css";
import { Button, Modal } from "antd";
import React, { useState } from "react";
import { Tabs } from "antd";
import "antd/dist/antd.css";
import styled from "styled-components";

const StyleButton = styled.button`
  background-color: #1890ff;
  color: white;
  outline: none;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  padding: 6px 10px;
  position: fixed;
  bottom: 2%;
  right: 2%;
`;

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <StyleButton onClick={showModal}>Open</StyleButton>
      <Modal
        title="Widget"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width="60vw"
      >
        <Tabs defaultActiveKey="1">
          <Tabs.TabPane tab="Examples" key="1">
            Content Examples
          </Tabs.TabPane>
          <Tabs.TabPane tab="Recent" key="2">
            Content Recent
          </Tabs.TabPane>
          <Tabs.TabPane tab="Google Drive" key="3">
            Content Google Drive
          </Tabs.TabPane>
          <Tabs.TabPane tab="GitHub" key="4">
            Content GitHub
          </Tabs.TabPane>
          <Tabs.TabPane tab="Upload" key="5">
            Content Upload
          </Tabs.TabPane>
        </Tabs>
      </Modal>
    </>
  );
}

export default App;
