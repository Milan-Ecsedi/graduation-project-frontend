import { Component, ReactNode } from "react";

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
            Tel: +36 1 126 93 33
        </li>
       </ul>
       <p>Copyright ©2023 PROJECT: MDM team</p> 
    </footer>
</div>
}


}