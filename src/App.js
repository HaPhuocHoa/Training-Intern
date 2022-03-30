
import './assets/styles/index.scss'
import LoginForm from './test/staffManagement/login';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [errorMessages, setErrorMessages] = useState({})
  const [isSubmitted, setIsSumitted] = useState(false);
  const [database, setDatabase] = useState()
  // const database = [
  //   {
  //     username: 'user1',
  //     password: 'pass1'
  //   }
  // ]

    useEffect(() => {
      const fetchData = async () => {
        const res = await axios.get('http://localhost:3004/user')
        setDatabase(res.data)
        console.log(res.data)
      }
      
      fetchData();
    },[])


  const errors = {
    username: "Ten dang nhap khong kha dung",
    password: "Password khong kha dung"
  }
  
  const submitForm = (data) => {
    console.log(database)
    const userData = database.find((user) => user.username === data.userName)
    if(userData){
      if(userData.password !== data.password){
        setErrorMessages({name: "password", message: errors.password})
      } 
      else {setIsSumitted(true)
      }
    } else {
      setErrorMessages({name: "username", message: errors.username})
    }
  }

  return (
      <div>
        {isSubmitted ? <div>Đăng nhập thành công</div> : <LoginForm submitData = {submitForm} errorMessages={errorMessages}/>}
      </div>
  );
}

export default App;
