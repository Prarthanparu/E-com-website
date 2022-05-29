import React from "react";
import DatasourceCard from "../Components/DatasourceCard";
import styled from "styled-components";
import { Row } from "antd";

function Datasources(props) {
  return (
    <DataSourcePage>
      <h1>Create Your Data Flow</h1>
      <p>Select The Desired Source Type</p>
      <SourceContainer>
        <Row gutter={[16, 32]}>
          <DatasourceCard />
        </Row>
      </SourceContainer>
    </DataSourcePage>
  );
}

export default Datasources;

const DataSourcePage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  justify-content: center;
  > h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 37px;
    letter-spacing: 0.05em;
    color: #ef7434;
  }
`;

const SourceContainer = styled.div`
  display: flex;
  width: 100vh;
  justify-content: center;

  margin-top: 20px;
`;
