// import { useState } from "react"
// import { Form, Button } from "react-bootstrap"
// import { useForm } from "react-hook-form"
// import {yupResolver} from "@hookform/resolvers/yup"
// import * as yup from "yup"

// const schema = yup.object().shape({
//     name: yup.string().required(),
//     address: yup.string().required(),
//     email: yup.string().email().required(),
//     phoneNumber: yup.number().required().min(10).max(10).integer()
// })
// const FormSignup = () => {
//     const {register, handleSubmit, formState: {errors}} = useForm({
//         resolver: yupResolver(schema)
//     })
//     const submitForm = (data) => {
//         console.log(data)
//     }
//     return(

//         <Form onSubmit={handleSubmit(submitForm)}>
//             <Form.Group>
//                 <Form.Label>Họ Và Tên: </Form.Label>
//                 <Form.Control type="text" name = "name" placeholder="Exemple: Nguyen Van A"  {...register("name")}></Form.Control>
//                 <p>{errors.name?.message}</p>
//             </Form.Group>
//             <Form.Group>
//                 <Form.Label>Địa chỉ: </Form.Label>
//                 <Form.Control type="text" name = "address" placeholder="Exemple: 123 Chu Văn An" {...register("address")}></Form.Control>
//                 <p>{errors.address?.message}</p>
//             </Form.Group>
//             <Form.Group>
//                 <Form.Label>Số điện thoại: </Form.Label>
//                 <Form.Control type="text" name = "phoneNumber" placeholder="Exemple: 0123456789"  {...register("phoneNumber")}></Form.Control>
//                 <p>{errors.phoneNumber?.message}</p>
//             </Form.Group>
//             <Form.Group>
//                 <Form.Label>Email: </Form.Label>
//                 <Form.Control type="email" name = "Email" placeholder="Exemple: Exemple@gmail.com" {...register("email")} ></Form.Control>
//                 <p>{errors.email?.message}</p>
//             </Form.Group>
//             <Form.Group>
//                 <Button variant="secondary" >Đóng</Button>
//                 <Button variant="primary" type="submit">Đăng Ký</Button>
//             </Form.Group>
//         </Form>
//     )
// }
// export default FormSignup