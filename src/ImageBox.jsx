import ImageSlide from "./ImageSlide";
import { SwiperNavButtons } from "./SwiperNavButton";
import { useState } from "react";
export default function ImageBox(){

let[isActive,setisActive]=useState(false);

function handleClick(){
 setisActive(true);
 setTimeout(function(){
 setisActive(false);
 },2000)
}


    return(
     <section className="upBox">
    <div className="col-md-8 lowerbox">

<div className="box1 col-md-1">
<span> <i class="fa-solid fa-question"></i></span>

 <div className="icon">
   <div className="ic"> </div>
   <div className="ic"> </div>
   <div className="ic"> </div>
   <div className="ic"> </div>
   <div className="ic"> </div>
   <div className="ic"> </div>

 </div>           
</div>

<div className="col-md-10 gallery">
  
  <div className="col-md-2">
   <button class="btn gall-btn" type="button">Gallery</button>
  </div>
  <div className="col-md-3">
  <button className="btn add-btn " type="button" onClick={()=>handleClick()}>+ ADD IMAGE</button>
  </div>

  <div className="col-md-12 slides">  
  <ImageSlide btnval={isActive}/>
  </div>

</div>

{/* <div className="col-md-2 arrows">
    <span><i class="fa-solid fa-arrow-left"></i></span>
    <span><i class="fa-solid fa-arrow-right"></i></span>
</div> */}

     </div>
     </section>
     
    )
}