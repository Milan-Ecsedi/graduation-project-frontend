import { Component, ReactNode } from "react";
import "bootstrap/dist/css/bootstrap.css"
import { Course } from "../Course";



interface Props{
    course: Course;
}




export default class CourseCard extends Component<Props>{


 
render(): ReactNode {
    

return  <div style={{textAlign:'center'}}>
<center>
<div className="card" style={{width: '800px', marginTop:'5px'}}>
        
{this.props.course.cover_photo === '' ? <p>Borítókép ehez a kurzushoz nem lett feltöltve</p> : <img className="card-image-top" src={this.props.course.cover_photo} alt="Borítókép ehez a kurzushoz nem lett feltöltve"/>}
<div className="card-body courseCard">
<h4 className="card-title">{this.props.course.course_name}</h4>
<p className="card-text">{this.props.course.course_description}</p>
<p className="card-text">{this.props.course.subject}</p>
<p className="card-text">Témakör:{this.props.course.topic}</p>
<button className="btn btn-success grow">Jelentkezz!</button>
</div>


</div>
</center>
</div>
}
}
