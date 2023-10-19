import {useState, useEffect} from 'react';


export default function Overview() {
   const [data, setdata] = useState([]); 
   const list = data.map((item) => 
         <div>{item}</div>
   );
   useEffect(() => {
       fetch("http://localhost:8000/getOverview")
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


