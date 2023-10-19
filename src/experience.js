import {useState, useEffect} from 'react';


export default function Experience() {
   const [data, setdata] = useState([]); 
   const list = data.map((item) => 
         <li>{item}</li>
   );
   useEffect(() => {
       fetch("http://localhost:8000/getExp")
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