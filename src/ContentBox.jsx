import Nav from "./Nav"

export default function ContentBox(){
    return(
    <section className="upBox">
     <div className="col-md-8 upperbox">

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

<div className="col-md-10">
  <Nav/>
</div>

<div className="col-md-2 scroll">
<span></span>
</div>


</div>
    </section>
    )
}