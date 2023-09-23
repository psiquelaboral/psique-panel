import React, { useEffect, useState } from "react";
import { Space, Table, Button, Dropdown } from "antd";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { getEmplopyeeByCompany } from "@apis/psique/employeeApi";
import { listQuiz } from "@apis/psique/quizApi";

import { MoreOutlined, SolutionOutlined } from "@ant-design/icons";

//CSS
import "./employees.css";

const Employes = () => {
  const [employees, setEmployees] = useState([]);
  const [quicess, setQuicess] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const userFromRedux = useSelector((state) => state.user.user);

  useEffect(() => {
    setIsLoading(true);
    async function callGetEmplopyeeByCompany() {
      const { companyId } = userFromRedux;
      const response = await getEmplopyeeByCompany(companyId);
      if (response.status === 200) {
        const { data: employeesFromApi } = response;
        const dataWithKey = employeesFromApi.map((employee) => {
          employee.key = employee.id;
          return employee;
        });
        setEmployees(dataWithKey);
      }
      setIsLoading(false);
    }
    if (userFromRedux !== null) {
      callGetEmplopyeeByCompany();
    }

    async function callListQuiz() {
      const response = await listQuiz();
      if (response.status === 200) {
        const { data: quicessFromApi } = response;
        const dataWithKey = quicessFromApi.map((quiz) => {
          const { name, id } = quiz;
          const newQuiz = {
            name,
            id,
            key: id,
          };
          return newQuiz;
        });
        setQuicess(dataWithKey);
      }
      setIsLoading(false);
    }
    callListQuiz();
  }, [userFromRedux]);

  const columns = [
    {
      title: "Nombre",
      dataIndex: "name",
      key: "name",
      render: (_, record) => <p className="employeeName">{record.name}</p>,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Puesto",
      key: "job",
      dataIndex: "job",
    },
    {
      title: "Edad",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Acciones",
      key: "action",
      render: (_, record) => {
        const items = quicess.map((quiz) => {
          const employeeURL = `/quiz/psychometric/${quiz.id}/${record.id}/${record.token}`;

          const label = (
            <Link
              className="label-container_menu-item"
              to={employeeURL}
              target="_blank"
            >
              <SolutionOutlined />
              <span className="menu-label_menu-item">{quiz.name}</span>
            </Link>
          );
          return { ...quiz, label };
        });

        return (
          <Space size="middle">
            <Dropdown
              menu={{
                items,
                style: {
                  padding: 10,
                },
              }}
              arrow
              trigger={["click"]}
              placement="bottom"
            >
              <Button
                type="primary"
                shape="circle"
                size="middle"
                icon={<MoreOutlined style={{ fontSize: "22px" }} />}
              />
            </Dropdown>
          </Space>
        );
      },
    },
  ];

  return <Table loading={isLoading} columns={columns} dataSource={employees} />;
};

export default Employes;
