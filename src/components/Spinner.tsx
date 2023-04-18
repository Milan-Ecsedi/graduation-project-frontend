import { Component} from "react";
import spinner from "../images/spinner.gif"

/**
 * A betöltő icon, a főoldal legelején jelenik meg, az időzítés az eltűnése kivülről van megoldva
 */
export default class Spinner extends Component{

render(){
    
return <div style={{textAlign:'center'}}>

    <img src={spinner} alt="Loading..."/>

</div>

}


}