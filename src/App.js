import logo from "./logo.svg";
import "./App.scss";
// import Todolist from "./Todolist/Todolist";
// import Covid from "./view/Covid";
// import Clock from "./clock/index";
// import { useState } from 'react';
// import Uref from "./view/Useref";
// import Nav from "./view/Nav";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";
import Signup from "./Demo/Signup";
import Paginate from "./Demo/Paginate";
import { useEffect, useState } from "react";
import { Button, Modal, Form, Table } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import EditForm from "./Demo/EditForm";
function App() {
  const [dataVacxin, setDataVacxin] = useState([]);
  const [dataEdit, setDataEdit] = useState();
  const [dataSubmit, setDataSubmit] = useState();
  const storeData = (finaldata) => {
    let newdata = finaldata;
    setDataVacxin([...dataVacxin, newdata]);
  };
  const handleDelete = (item) => {
    const index = dataVacxin.findIndex((x) => x.name === item.name);
    let newDataVacxin = [...dataVacxin];
    newDataVacxin.splice(index, 1);
    setDataVacxin(newDataVacxin);
  };

  const [show, setShow] = useState();

  const schema = yup.object().shape({
    name: yup.string().required(),
    address: yup.string().required(),
    email: yup.string().email().required(),
    phoneNumber: yup.number().required().integer(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const editOpen = (item) => {
    setDataEdit(item);
    const newDataEdit = dataVacxin.find((x) => x.name === item.name);

    // const newDataEdit = dataVacxin[index]
    setValue("name", newDataEdit.name);
    setValue("address", newDataEdit.address);
    setValue("phoneNumber", newDataEdit.phoneNumber);
    setValue("email", newDataEdit.email);
    setShow(true);
  };
  const editClose = () => {
    setShow(false);
  };
  const setSubmit = (dataEdit) => {
    setDataSubmit(dataEdit);
  };
  const submitEdit = (data) => {
    const index = dataVacxin.findIndex((x) => x.name === dataSubmit.name);
    console.log(index);
    console.log("day la data sau khi submit", data);
    const newDataEdit = data;
    dataVacxin.splice(index, 1, newDataEdit);
    editClose();
  };
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>Đăng Ký Tiêm Vắc Xin Covid 19</div>
          <Signup storeData={storeData} />
          <EditForm dataEdit={dataEdit} setSubmit={setSubmit} />
          
        
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Họ và Tên</th>
                    <th>Địa chỉ</th>
                    <th>Số điện thoại</th>
                    <th>Email</th>
                    <th> </th>
                  </tr>
                </thead>
                <tbody>
                {dataVacxin.map((item) => (
                  <tr key={item.Id}>
                    <td>{item.name}</td>
                    <td>{item.address}</td>
                    <td>{item.phoneNumber}</td>
                    <td>{item.email}</td>
                    <td><Button onClick={() => editOpen(item)} data-toggle="modal">Edit</Button> &nbsp;&nbsp;
                        <Button onClick={() => handleDelete(item)}>Delete</Button>
                    </td>
                  </tr>
                            ))}
                </tbody>
              </Table>
              {/* {item.name} - {item.address} - {item.phoneNumber} - {item.email}{" "}  */}
              {/* &nbsp; &nbsp;
            <Button onClick={() => editOpen(item)} data-toggle="modal">Edit</Button> &nbsp;&nbsp;
            <Button onClick={() => handleDelete(item)}>Delete</Button> */}

          <Paginate />
        </header>
      </div>
      <Modal show={show} onHide={editClose}>
        <Form onSubmit={handleSubmit(submitEdit)}>
          <Modal.Header closeButton>
            <Modal.Title>Phiếu đăng ký tiêm Vacxin</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group>
              <Form.Label>Họ Và Tên: </Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Exemple: Nguyen Van A"
                {...register("name")}
              ></Form.Control>
              <p>{errors.name?.message}</p>
            </Form.Group>
            <Form.Group>
              <Form.Label>Địa chỉ: </Form.Label>
              <Form.Control
                type="text"
                name="address"
                placeholder="Exemple: 123 Chu Văn An"
                {...register("address")}
              ></Form.Control>
              <p>{errors.address?.message}</p>
            </Form.Group>
            <Form.Group>
              <Form.Label>Số điện thoại: </Form.Label>
              <Form.Control
                type="text"
                name="phoneNumber"
                placeholder="Exemple: 0123456789"
                {...register("phoneNumber")}
              ></Form.Control>
              <p>{errors.phoneNumber?.message}</p>
            </Form.Group>
            <Form.Group>
              <Form.Label>Email: </Form.Label>
              <Form.Control
                type="email"
                name="Email"
                placeholder="Exemple: Exemple@gmail.com"
                {...register("email")}
              ></Form.Control>
              <p>{errors.email?.message}</p>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => editClose()}>
              Đóng
            </Button>
            <Button variant="primary" type="submit">
              Cập Nhật
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default App;
