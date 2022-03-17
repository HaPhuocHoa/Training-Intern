// import axios from "axios";
// import moment from "moment";
// import { useEffect, useState } from "react";

// const useCustomHook = (url) => {
//     const [data, setData] = useState([]);
//     const [loading, setLoading] = useState(true)

//     useEffect(() => {
//         try {
//             async function fetchData(){
//                 let res = await axios.get(url);
//                   let data = res && res.data ? res.data : [];
               
//                   if(data && data.length > 0 ) {
//                       data.map(item => {
//                           item.Date = moment(item.Date).format('DD/MM/YYYY')
//                           return item
//                       })
//                   }
//                   setData(data);
//                   setLoading(false)
//             }
//             fetchData();
//         }
//         catch (e) {
//             console.log("error")
//         }
//         fetch()
//   }, []);

//   return {
//       data, loading
//   }

// }
// export default useCustomHook;