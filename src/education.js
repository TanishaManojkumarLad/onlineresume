import {useState, useEffect} from 'react';


export default function Education() {
   const [data, setdata] = useState([]); 
   const list = data.map((item) => 
         <div>{item}</div>
   );
   useEffect(() => {
       fetch("http://localhost:8000/getEdu")
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