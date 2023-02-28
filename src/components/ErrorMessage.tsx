import { Component, ReactNode } from "react";


interface Props{
    Message: string;
}




export default class ErrorMessage extends Component<Props>{

    render(): ReactNode{
        
        return <div>
            <h5>{this.props.Message}</h5>
        </div>
    }

}