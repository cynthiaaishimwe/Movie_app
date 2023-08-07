
import React from "react";
import './style.css'


const Navigation = ({searchNav,setSearch}) =>{
 console.log(searchNav)
return(
    <div className="nav">
      
        <div className="head">
        <input type="text" id="search" value={searchNav} onChange={(e)=> setSearch(e.target.value)} placeholder="Search a movie"></input>
        
    
        </div>
     
        
    </div>
)

}
export default Navigation