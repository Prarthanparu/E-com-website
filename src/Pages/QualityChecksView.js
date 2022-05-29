import React from "react";
import styled from "styled-components";
import { EyeInvisibleFilled, EditFilled } from "@ant-design/icons";
import { Checkbox, Table } from "antd";
import SelectedTableCard from "../Components/SelectedTableCard";
import { Button } from "antd";
import { Link } from "react-router-dom";

function QualityChecksView() {
  const columns = [
    {
      width: 100,
      dataIndex: "name",
      key: "name",
      fixed: "center",
    },
    {
      width: 40,
      dataIndex: "date",
      key: "date",
      fixed: "center",
    },
    {
      key: "operation",
      width: 40,
      render: () => (
        <div style={{ display: "flex", flexDirection: "row", gap: 30 }}>
          <p>
            <EditFilled />
          </p>
          <p>
            <EyeInvisibleFilled />
          </p>
          <p>
            <Checkbox />
          </p>
        </div>
      ),
    },
  ];
  const data = [];
  for (let i = 0; i < 100; i++) {
    data.push({
      key: i,
      name: ` Edrward ${i}`,
      date: "06/12/2021",
    });
  }

  return (
    <Tableview>
      <CardComponent>
        <SelectedTableCard />
        <ButtonPosition>
          <Link
            to={
              "/configuration/datasource/martdetails/qualitychecks/tablechecks"
            }
          >
            <Button type="primary">Add Checks</Button>
          </Link>
        </ButtonPosition>
      </CardComponent>
      <TableContent>
        <Header>
          <h1>Select Table/Dataset to Add Quality Checks</h1>
          <p>
            Reporting Mart Name :{" "}
            <span style={{ color: "white", fontSize: 18 }}>Loan Reporting</span>
          </p>
        </Header>

        <Table
          columns={columns}
          dataSource={data}
          pagination={false}
          scroll={{ x: 800, y: 400 }}
          style={{ width: 900, marginTop: 30 }}
        />
      </TableContent>
    </Tableview>
  );
}

export default QualityChecksView;
const Tableview = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 40px;
  margin-left: 200px;
`;
const CardComponent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`;

const TableContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.div`
  > h1 {
    font-weight: bold;
    font-size: 30px;
    letter-spacing: 0.05em;
    color: #ef7434;
  }
  > p {
    font-size: 18px;
    font-weight: bold;
    color: #ef7434;
  }
`;
const ButtonPosition = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
