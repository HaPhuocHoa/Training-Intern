import { Button, Modal, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { forwardRef, useImperativeHandle, useState } from "react";


const ModalEdit = forwardRef((props, ref) => {
  const [show, setShow] = useState();
  const [dataEdit, setDataEdit] = useState();
  const { dataVacxin, submitDataVacxin } = props;

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

  useImperativeHandle(ref, () => ({
    openEdit(item) {
      setDataEdit(item);
      const newDataEdit = dataVacxin.find((x) => x.name === item.name);
      setValue("name", newDataEdit.name);
      setValue("address", newDataEdit.address);
      setValue("phoneNumber", newDataEdit.phoneNumber);
      setValue("email", newDataEdit.email);
      setShow(true);
    },
  }));

  const editClose = () => {
    setShow(false);
  };

  const submitEdit = (data) => {
    const newList = [...dataVacxin];
    const index = newList.findIndex((x) => x.name === dataEdit.name);
    newList.splice(index, 1, { ...dataEdit, ...data });
    submitDataVacxin(newList);
    editClose();
  };
  return (
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
  )
})
export default ModalEdit;
