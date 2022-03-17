import { useEffect } from "react"

const EditForm = (props) => {
   const {dataEdit, setSubmit} = props
   console.log(dataEdit)
   useEffect(()=>{
    const handleData = () => {
        setSubmit(dataEdit)
    }
       if(dataEdit) {
        handleData()
    
       }
   }, [])
  
   return null;
} 
export default EditForm