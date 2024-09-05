import { useState } from "react";

export default function Nav(){

    let[about,setAbout]=useState(true);
    let[exp,setExp]=useState(false);
    let[recom,setRecom]=useState(false);

    const handleAbout=()=>{
     setAbout(true);
     setExp(false);
     setRecom(false); 
    }
 
    const handleExperiance=()=>{
        setAbout(false);
        setExp(true);
        setRecom(false); 
    }
    
    const handleRecommendation=()=>{
        setAbout(false);
        setExp(false);
        setRecom(true); 
    }

    return(
     <div className="col-md-12 navbar">
     
     <div className=" col-md-10 navback d-flex justify-content-between">
        <button class={`btn ${about ? "btn1 btn" : ""}`} type="button" onClick={()=>handleAbout()}>About Me</button>
        <button class={`btn ${exp ? "btn1 btn" : ""}`} type="button" onClick={()=>handleExperiance()}>Experiences</button>
        <button class={`btn ${recom ? "btn1 btn" : ""}`} type="button" onClick={()=>handleRecommendation()}>Recommended</button>
     </div>        

     <div className="content col-md-12">
       <p>Hello!I'm Dave,your sales rep here from Salesforce.I've been<br/>working at this awesome company for 3 years now.</p> 
       <p>I was born and raised in Albany,NY& have been living in Santa<br/>Carla for the past 10 years my wife Tiffany and my 4 years old twin<br/>daughters-Emma and Ella.Both of them are just starting school,<br/>so my calender is usually blocked between 9-10 AM.This is a...</p>  
     </div>

     </div>
    )

}