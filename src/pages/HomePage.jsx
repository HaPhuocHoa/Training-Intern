import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { addNewHobby, setActiveHobby } from "../actions/hobby"
import HobbyList from "../components/Home/HobbyList"
const HomePage = () => {
    const hobbyList = useSelector(state => state.hobby.list)
    const activeId = useSelector(state => state.hobby.activeId)
    const dispatch = useDispatch()
    console.log("Hobby list: ", hobbyList)

const randomNumber = () => {
    return Math.floor(Math.random()*100000 + 1)
}

const handleAddNewHobby = () => {
    const newId = randomNumber ()
    const newHobby = {
        id: newId ,
        title: `Hobyy so ${newId}`
    }
    const action = addNewHobby(newHobby);
    dispatch(action)
}
const handleHobbyClick = (hobby) => {
    const action = setActiveHobby(hobby);
    dispatch(action)
}
    return(
        <div className="home-page">
            <h1>WELCOME TO REDUX</h1>
            <button onClick={() => handleAddNewHobby()}>Add Hobby</button>
            <HobbyList  
            activeId = {activeId}
            hobbyList={hobbyList}
            onHobbyClick = {handleHobbyClick}
            />
        </div>
    )
}
export default HomePage