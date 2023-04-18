import React, { Component } from 'react';
import './App.css';
import {Course} from './Course';
import "bootstrap/dist/css/bootstrap.css"
import { Route, Routes } from 'react-router-dom';
import RegisterPage from './Pages/RegisterPage';
import LoginPage from './Pages/LoginPage';
import About from './Pages/About';
import CourseListPage from './Pages/CourseListPage';
import SelectedCourse from './Pages/CoursePage';
import paramGet from './paramGet';
import Profile from './Pages/Profile';

interface State{
  courses: Course[];
}


export default class App extends Component<{},State>{

  constructor(props:{}){
    super(props);

    this.state={
        courses:[]
    }

    }


    /**
     * Backendtől lekéri a kurzusokat egy Course tipusú "courses" nevű array-be
     */
async loadCourses(){
    let response=await fetch('http://localhost:3000/course/list')
    let data=await response.json() as Course[]
    this.setState({
       courses: data,
    })
    
    
}

componentDidMount() {
  
  this.loadCourses()
  
  
  
}


/**
 * 
 * @returns  megfelelő componenset a route alapján
 */
 render(): React.ReactNode{
 return <div>
  <Routes>
    <Route path='/' element={<CourseListPage></CourseListPage>}></Route>
    <Route path='/course=id/:courseId' element={<SelectedCourse/>}></Route>
    <Route path='/register' element={<RegisterPage></RegisterPage>}></Route>
    <Route path='/profile' element={<Profile></Profile>}></Route>  
    
    <Route path='/login' element={<LoginPage></LoginPage>}></Route>
    <Route path='/*' element={<div style={{fontSize:'50px', textAlign:'center'}}>Ez az oldal nem létezik, biztos hogy jól írtad be az url-t? <p style={{fontSize:'500px'}}>🙂</p> </div>}></Route>
    <Route path='/about' element={<About></About>}></Route>
  </Routes>
  </div>
}
}
