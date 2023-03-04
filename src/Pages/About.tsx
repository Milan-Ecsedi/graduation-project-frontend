import { Component, ReactNode } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "bootstrap/dist/css/bootstrap.css";

export default class About extends Component{


render(): ReactNode {
    
    return <div>
        <Header/>
        <center>
        <div className="card" style={{width: '800px', marginTop:'5px'}}>
        <p className="card-text">Rólunk: Ez a project az MDM csapat álltal lett elkészítve</p>
        </div>
        </center>
        <Footer/>
    </div>
}


}