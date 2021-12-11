
import '../App.css';
import React,{ useEffect,useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function App() {

  const[resources,setResources]=useState([])
  const[id,setId]=useState(1)
  const[idClick, setIdClick]=useState(1)

  useEffect(()=>{
    axios.get(`https://reqres.in/api/unknown`)
    .then(res=>{
      console.log(res.data.data)
      setResources(res.data.data)
    })
    .catch(err=>{
      console.log(err)
    })
  },[])

  console.log(resources,"resources")

  return (
    <div>
      
      <ul style={{listStyle:"none",display:"flex",flexWrap:"wrap",justifyContent:"space-around"}}>
        {
          resources.map(resource=>(
            <Link to={`/details/${resource.id}`}style={{background:`${resource.color}`,height:"100px",width:"100px",padding:"20px",alignItems:"center",justifyContent:"center"}}>
              <div className="container" >
                <div style={{fontSize:20,fontWeight:"bold",color:"black",textTransform:"capitalize",textDecoration:"none"}}>
                  {resource.name}
                </div>
                <div style={{fontSize:20,fontWeight:"bold",color:"black"}}>
                  {resource.year}
                </div>
              </div>

            </Link>
          ))
        }
      </ul>
    </div>
  );
}

export default App;
