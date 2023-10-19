import {useState, useEffect} from 'react';

//this function and other five function in used for fetching different data from the express server.
export default function Certificate() {
   const [data, setdata] = useState([]); 
   const list = data.map((item) => 
         <div>{item}</div>
   );
   useEffect(() => {
       fetch("http://localhost:8000/getCertificate")
       .then(res => res.json())
       .then(json => setdata(json))
       .catch((error) => console.error("Error fetching Overview data:", error))
   }, []);
   return (
     <div>
         {list}
     </div>

);
};