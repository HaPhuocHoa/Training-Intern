import { useState } from "react"
import { Button, Form } from "react-bootstrap"
import { useForm } from "react-hook-form"

const LoginForm = (props) => {
const { register,handleSubmit} = useForm()
const {submitData, errorMessages} = props
const submitForm = (data) => {
    if(submitData) {
        submitData(data)
    }
}
const renderErrorMessage = (name) => 
    name === errorMessages.name && (
        <div>{errorMessages.message}</div>
    )

    return (
        <Form onSubmit={handleSubmit(submitForm)}>
            <Form.Group>
                <Form.Label>Tên đăng nhập: </Form.Label>
                <Form.Control type="text" placeholder="Vui lòng nhập tên đăng nhập" name="userName" {...register("userName")}></Form.Control>
                {/* <div>{errorMessages.message}</div> */}
                {renderErrorMessage('username')}
            </Form.Group>
            <Form.Group>
                <Form.Label>Password: </Form.Label>
                <Form.Control type="password" name="password" placeholder="Vui lòng nhập password" {...register("password")}></Form.Control>
                {/* <div>{errorMessages.message}</div> */}
                {renderErrorMessage('password')}
            </Form.Group>
            <Form.Group>
            <Button type="submit">Đăng nhập</Button>
            </Form.Group>
        </Form>

    )
}
export default LoginForm 