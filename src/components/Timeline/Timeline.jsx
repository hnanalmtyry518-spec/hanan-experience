import "./Timeline.css";
import timeline from "./TimelineData";
import SlideUp from "../Animations/SlideUp";

function Timeline(){

return(

<section className="timeline">

<SlideUp>

<h2 className="timeline-title">

رحلتي

</h2>

<div className="timeline-container">

{

timeline.map((item,index)=>(

<div className="timeline-item" key={index}>

<div className="timeline-icon">

{item.icon}

</div>

<div className="timeline-content">

{

item.year &&

<p className="timeline-year">

{item.year}

</p>

}

<h3>{item.title}</h3>

<p>{item.text}</p>

</div>

</div>

))

}

</div>

</SlideUp>

</section>

)

}

export default Timeline;