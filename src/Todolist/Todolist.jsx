import { useState } from "react";
import Childtodo from "./Childtodo";


const Todolist = () => {
    const [product, setProduct] = useState('');
    const [price, setPrice] = useState('');
    const [menu, setMenu] = useState([
        // {id: '1', product : 'Fish', price: '200'},
        // {id: '2', product : 'Beef', price: '300'},
        // {id: '3', product : 'Pork', price: '400'}
    ])
    const changeproduct = (event) => {
        setProduct(event.target.value);
    }
    const changeprice = (event) => {
        setPrice(event.target.value);
    }
    const clickadd = () => {
       if (!product || !price) {
            alert('check your product or price is empty')
            return;
        }
        let newmenu = {id: Math.floor(Math.random()*1000), product: product  ,price: price }
        console.log(newmenu)
        setMenu([...menu, newmenu])
        setPrice('');
        setProduct('');
    }
    const deleteList = (id) => {
        let newMenu = menu
        newMenu = newMenu.filter(item => item.id !== id)
        setMenu(newMenu)
    }
    return(
        <>
 
        <label>Product: </label>
        <input type='text' value={product}
            onChange={(event) => changeproduct(event)}
        ></input>
        <label>Price: </label>
        <input type='text' value={price}
            onChange={(event) => changeprice(event)}
        ></input> <br/>
        <button 
            onClick={() => clickadd()}
        >click to add</button>
        <Childtodo 
            menu ={menu}
            deleteList = {deleteList}
        />
        </>
    );
}

export default Todolist