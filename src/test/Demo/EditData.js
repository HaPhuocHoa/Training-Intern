import { Modal, Form, Button } from "react-bootstrap"
import { useForm } from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useState } from "react"
const EditData = () => {
    const [show, setShow] = useState(true)
    const schema = yup.object().shape({
        name: yup.string().required(),
        address: yup.string().required(),
        email: yup.string().email().required(),
        phoneNumber: yup.number().required().integer()
    })
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    })
    console.log('abbb')
    return(
        <Modal show={show}>
            <Modal.Header closeButton>
            <Modal.Title>Phiếu đăng ký tiêm Vacxin</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form.Group>
                <Form.Label>Họ Và Tên: </Form.Label>
                <Form.Control type="text" name = "name" placeholder="Exemple: Nguyen Van A"  {...register("name")}></Form.Control>
                <p>{errors.name?.message}</p>
            </Form.Group>
            <Form.Group>
                <Form.Label>Địa chỉ: </Form.Label>
                <Form.Control type="text" name = "address" placeholder="Exemple: 123 Chu Văn An" {...register("address")}></Form.Control>
                <p>{errors.address?.message}</p>
            </Form.Group>
            <Form.Group>
                <Form.Label>Số điện thoại: </Form.Label>
                <Form.Control type="text" name = "phoneNumber" placeholder="Exemple: 0123456789"  {...register("phoneNumber")}></Form.Control>
                <p>{errors.phoneNumber?.message}</p>
            </Form.Group>
            <Form.Group>
                <Form.Label>Email: </Form.Label>
                <Form.Control type="email" name = "Email" placeholder="Exemple: Exemple@gmail.com" {...register("email")} ></Form.Control>
                <p>{errors.email?.message}</p>
            </Form.Group>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" >Đóng</Button>
            <Button variant="primary" type="submit">Đăng Ký</Button>
            </Modal.Footer>
        </Modal>
    )
}
export default EditData