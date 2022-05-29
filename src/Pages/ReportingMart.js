import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Select, Button, Form, Input, message } from "antd";
import ModalComponent from "../Components/Modal";
import ReportMartBody from "./ReportingMartBody";
import Axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

const ReportingMart = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [name, setName] = useState("");
  const [period, setPeriod] = useState(12);
  const [standardDeviation, setStandardDeviation] = useState(2);
  const [dropDown, setDropDown] = useState(false);
  const [dropdownPeriod, setDropdownPeriod] = useState("");
  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const proxy = process.env.REACT_APP_PROXY;
  const expectationsuiteUrl = proxy + "/api/expectationsuite";
  const reportMartUrl = proxy + "/api/report_mart";
  const reportMart = proxy + "/api/report_mart";
  const [expectationsuites, setExpectationsuites] = useState([]);
  const { Option } = Select;
  useEffect(() => {
    Axios.get(expectationsuiteUrl)
      .then((res) => {
        setExpectationsuites(res.data.output);
      })
      .catch(() => {});
    // Always keep empty array in the end of useEffect for initializing
  }, []);

  const handleOk = () => {
    Axios.post(reportMartUrl, null, {
      headers: {
        reportmart_name: name,
      },
    })
      .then((res) => {
        setIsModalVisible(false);
        navigate("/configuration/reportmart");
      })
      .catch((err) => {
        message.info("Something went wrong");
      });
  };
  const reportMartSaveHandler = () => {
    if (isModalVisible) {
      Axios.post(reportMart, null, {
        headers: {
          datasource_id: location.state.response_id
            ? location.state.response_id
            : location.state.id,
          reportmart_name: name,
          period: period,
          standard_deviation: standardDeviation,
          periodicity: dropdownPeriod,
        },
      })
        .then((res) => {
          setDropDown(!dropDown);
          setIsModalVisible(false);
          message.info("Report mart saved successfully");
        })
        .catch((err) => {
          message.info("Something went wrong");
        });
    }
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };
  const handlePeriod = (e) => {
    setPeriod(e.target.value);
  };
  const handleStandardDeviation = (e) => {
    setStandardDeviation(e.target.value);
  };
  const handleDropdownPeriod = (value) => {
    setDropdownPeriod(value);
  };

  return (
    <CardContent>
      <AddView></AddView>
      {expectationsuites && expectationsuites.length > 0 && (
        <ReportMartBody suiteData={expectationsuites} />
      )}
      <ButtonContent>
        <Button
          type="primary"
          onClick={() => setIsModalVisible(true)}
          title={"Add Report Mart"}
        >
          Add Report Mart
        </Button>
      </ButtonContent>
      {isModalVisible && (
        <ModalComponent
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
          handleOk={reportMartSaveHandler}
          handleCancel={handleCancel}
          OkText="Create"
          width="461.15px"
          title={"Reporting Mart Details"}
        >
          <Form form={form} layout="vertical">
            <Form.Item
              label="Reporting Mart Name"
              style={{ fontWeight: "medium" }}
            >
              <Input
                onChange={(e) => handleChange(e)}
                id="name"
                value={name}
                type="text"
                placeholder="Please enter Name here"
              />
            </Form.Item>
            <Form.Item
              label="Reporting Mart Period"
              style={{ fontWeight: "medium" }}
            >
              <Input
                onChange={(e) => handlePeriod(e)}
                id="period"
                value={period}
                type="number"
                placeholder="Please enter Period here"
              />
            </Form.Item>
            <Form.Item
              label="Standard Deviation"
              style={{ fontWeight: "medium" }}
            >
              <Input
                onChange={(e) => handleStandardDeviation(e)}
                id="standardDeviation"
                value={standardDeviation}
                type="number"
                placeholder="Please enter Standard deviation here"
              />
            </Form.Item>

            <Form.Item
              label="Segregation - Periodicity"
              style={{ fontWeight: "medium" }}
            >
              <Select
                id="dropdownperiod"
                value={dropdownPeriod}
                onChange={handleDropdownPeriod}
                placeholder="Please Choose the Period"
              >
                <Option key={"month"} value="month">
                  month
                </Option>
                <Option key={"week"} value="week">
                  week
                </Option>
                <Option key={"day"} value="day">
                  day
                </Option>
              </Select>
            </Form.Item>
          </Form>
        </ModalComponent>
      )}
    </CardContent>
  );
};
export default ReportingMart;

const CardContent = styled.section`
  width: 100%;
  .customCard {
    width: 100%;
    border: 1px dashed #545454;
    background: #1f2021;
    height: 534px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const AddView = styled.div`
  text-align: right;
  .customButton {
    background: linear-gradient(123.32deg, #db5e1d 45.17%, #ef3499 100%);
    box-shadow: 3px 2px 6px #000000;
    margin-bottom: 24px;
  }
`;
const ButtonContent = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`;
