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
  }
  
  export default class CoursePage extends Component<{},State>{
  
    constructor(props:{}){
      super(props);
  
      this.state={
          courses:[],
          load: true
      }
    }
  
      async loadCourses(){
        
        let response=await fetch('http://localhost:3000/courses')
        let data=await response.json() as Course[]
        await delay(2000)
        if(data)
        {
          this.setState({load:false});
        }
        this.setState({
           courses: data,
        })
        
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

