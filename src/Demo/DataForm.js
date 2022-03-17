// const DataForm = (props) => {
//     const {dataList, deleteData} = props
//     const handleDelete = (ID) => {
//         deleteData(ID)
//     }
//     return (
//         <>
//         <div> --- Data list ---</div>
//         {dataList.map(data => {
//             return (
//                 <div key={data.ID}>{data.name} - {data.citizenID} - {data.userName} - {data.password} 
//                 &nbsp; &nbsp; <button onClick={() => handleDelete(data.ID)}>Delete data</button>
                
//                 </div>
//             )
//         })}
//         </>
// )
// }
// export default DataForm