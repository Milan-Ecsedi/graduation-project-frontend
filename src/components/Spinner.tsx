import { Component, ReactNode } from "react";
import spinner from "../images/spinner.gif"

export default class Spinner extends Component{

render(){
    
return <div style={{textAlign:'center'}}>

    <img src={spinner} alt="Loading..."/>

</div>

}


}