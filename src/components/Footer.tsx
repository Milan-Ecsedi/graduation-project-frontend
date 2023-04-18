import { Component, ReactNode } from "react";
    /**
     * Egy nagyon alap láblécet tölt be, app.css-ben egy sima dizájn lett elkészítve 
     */
export default class Footer extends Component{

    
render(): ReactNode {
    
    return <div>
    <footer>
       
       <ul>
        elérhetőségeink:
        <li>
            E-mail: gritos.course@gmail.com
        </li>
        <li>
            Tel: +36 1 999 99 99
        </li>
       </ul>
       <p>Copyright ©2023 PROJECT: MDM team</p> 
    </footer>
</div>
}


}