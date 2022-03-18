import logo from "./logo.svg";
import "./App.scss";
// import Todolist from "./Todolist/Todolist";
// import Covid from "./view/Covid";
// import Clock from "./clock/index";
// import { useState } from 'react';
// import Nav from "./view/Nav";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";
import Signup from "./Demo/Signup";
import Paginate from "./Demo/Paginate";
import { useState } from "react";


import DataList from "./Demo/DataList";

function App() {
  const [dataVacxin, setDataVacxin] = useState([]);

  const storeData = (finaldata) => {
    let newdata = finaldata;
    setDataVacxin([...dataVacxin, newdata]);
  };

  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>Đăng Ký Tiêm Vắc Xin Covid 19</div>
          <Signup storeData={storeData} />
          <DataList dataVacxin={dataVacxin} setDataVacxin= {setDataVacxin}/>
          <Paginate />
        </header>
      </div>
    </>
  );
}

export default App;
