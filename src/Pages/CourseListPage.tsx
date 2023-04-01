import React, { Component } from 'react';
import CourseCard from '../components/CourseCard';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Spinner from '../components/Spinner';
import { Course } from '../Course';
import delay from '../delay';


interface State{
    courses: Course[];
    load:boolean;
    errormess:string[];
  }
  
  export default class CourseListPage extends Component<{},State>{
  
    constructor(props:{}){
      super(props);
  
      this.state={
          courses:[],
          load: true,
          errormess:[],
      }
    }
  
      async loadCourses(){
        
        let response=await fetch('http://localhost:3000/course/list')
        let data=await response.json() as Course[]
        await delay(2000)
        if(data){
          this.setState({load:false});
          this.setState({
           courses: data, 
        })
        }
        if(!response.ok)
        {
          /*let res= await response.json() as ResponseMess;
          this.setState({load:false});
          this.setState({errormess: res.message})*/
        }
        
        
        
    }
    
    componentDidMount() {
      


      this.loadCourses()
      
      
      
    }


    render(){

        return <div>
            <Header/>
      {this.state.load ? <Spinner/> : this.state.courses.map(course => <CourseCard course={course}/>
        )}
        
        <Footer/>
        </div>

    }
}

