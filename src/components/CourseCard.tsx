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
        
{this.props.course.cover_photo == '' ? null : <img className="card-image-top" src={this.props.course.cover_photo} alt="Borítókép ehez a kurzushoz nem lett feltöltve" style={{width: '800px'}}/>}
<div className="card-body">
<h4 className="card-title" style={{textAlign: 'center'}}>{this.props.course.course_name}</h4>
<p className="card-text" style={{textAlign: 'center'}}>{this.props.course.course_description}</p>
<p className="card-text" style={{textAlign: 'center'}}>{this.props.course.subject}</p>
<p className="card-text" style={{textAlign: 'center'}}>Témakör:{this.props.course.topic}</p>
<a href="#" className="btn btn-success grow">Jelentkezz!</a>
</div>


</div>
</center>
</div>
}
}
