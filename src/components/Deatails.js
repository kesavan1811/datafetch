import React from 'react'
import { useEffect,useState } from 'react';
import axios from 'axios';
import '../App.css'
import { useParams } from 'react-router';

function Deatails() {

    const[resources,setResources]=useState([])
    const params=useParams()
    console.log(params)
    useEffect(()=>{
      axios.get(`https://reqres.in/api/unknown/${params.id}`)
      .then(res=>{
        setResources(res.data.data)
      })
      .catch(err=>{
        console.log(err)
      })
    },[params.id])


    return (
        <div style={{display:"flex",flexDirection:"column",justifyContent:"space-between",padding:10,alignItems:"center",backgroundColor:`${resources.color}`,width:200,height:200}}>
            <div style={{fontSize:20,fontWeight:"bold"}}>
            {resources.name}
            </div>
            <div style={{fontSize:20,fontWeight:"bold"}}>
              {resources.year}
            </div>
            <div>
              <span>Pantone Value</span>
              <div style={{fontSize:20,fontWeight:"bold"}}>
              {resources.pantone_value}
              </div>
              
            </div>
        </div>
    )
}

export default Deatails
