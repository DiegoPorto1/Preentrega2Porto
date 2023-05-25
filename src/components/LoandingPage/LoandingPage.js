import React , {useState,useEffect}from "react";
import NavBar from "../NavBar/NavBar";
import './loader.css'
export const Loader = () => {
    const [loanding, setLoanding] = useState(true);
useEffect (()=>{
    setTimeout(()=>setLoanding(false),3000)

},[])
return(
    <div>
        <div>{loanding ? <img className="loanding"></img> : '' }</div>
    </div>
)
}


