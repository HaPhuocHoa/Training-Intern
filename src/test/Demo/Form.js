// import { useState } from "react"
// import DataForm from "./DataForm"
// const Form = () => {
//     const [name, setName] = useState('')
//     const [citizenID, setCitizenID]= useState('')
//     const [userName, setUserName]= useState('')
//     const [password, setPasswor] = useState('')
//     const [dataList, setDataList] = useState([])

//     const handleName = (event) => {
//         setName(event.target.value)
//     }
//     const handleCitizenID = (event) => {
//         setCitizenID(event.target.value)
//     }
//     const handleUserName = (event) => {
//         setUserName(event.target.value)
//     }
//     const handlePassword = (event) => {
//         setPasswor(event.target.value)
//     }
//     const addData = () => {
//         const newCitizenID = Number(citizenID)
//         if(!name || !userName || !citizenID || !dataList) {
//             alert('Vui lòng nhập đủ thông tin!!!')
//             return;
//         }
//         if(Number.isFinite(newCitizenID) === false || Number.isInteger(newCitizenID) === false ){
//             alert('Vui lòng nhập đúng định dạng CMND/CCCD')
//             return;
//         }
//         let newData = {ID: Math.floor(Math.random()*10000), name: name, citizenID: citizenID, userName: userName, password: password}
//         setDataList([...dataList, newData])
//         setName('')
//         setCitizenID('')
//         setUserName('')
//         setPasswor('')
//     }
//     const deleteData = (ID) => {
//         let newList = dataList
//         newList = newList.filter(data => data.ID !== ID)
//         setDataList(newList)
//     } 
//     return (
//     <>
//     <div>
//         <label>Họ và Tên: </label>
//         <input type="text" value={name} onChange = {(event) => handleName(event)} ></input> <br />
//         <label>CMND/CCCD: </label>
//         <input type="text" value={citizenID} onChange = {(event) => handleCitizenID(event)}></input> <br />
//         <label>Tên tài khoản: </label>
//         <input type="text" value={userName} onChange = {(event) => handleUserName(event)}></input> <br />
//         <label>Mật Khẩu: </label>
//         <input type="password" value={password} onChange = {(event) => handlePassword(event)}></input> <br />
//         <button onClick={() => addData()}>Đăng ký</button>
//     </div>
//     <DataForm 
//         dataList = {dataList}
//         deleteData = {deleteData}
//     />
//     </>
//     )
// }
// export default Form