// import { useEffect, useState } from "react";
import useCustomHook from "../customize/customhook";


const Covid = () => {

 const {data : datacovid, loading} = useCustomHook("https://api.covid19api.com/country/vietnam?from=2021-10-01T00%3A00%3A00Z&to=2021-10-20T00%3A00%3A00Z")
 
 return (
    <table>
      <thead>
        <tr>
            {console.log(datacovid)}
          <th>Confirmed</th>
          <th>Deaths</th>
          <th>Recovered</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {loading === false && datacovid &&
          datacovid.length > 0 &&
          datacovid.map((item) => {
              return(
            <tr key={item.ID}>
              <td>{item.Confirmed}</td>
              <td>{item.Deaths}</td>
              <td>{item.Recovered}</td>
              <td>{item.Date}</td>
            </tr>
              )
          })
        }

        {loading === true &&
        <tr>
          <td>...Loading</td>
        </tr>
        }
      </tbody>
    </table>
  );
};

export default Covid;
