import { Component, ReactNode } from "react";


interface Props{
    message: string[];
}




export default class MessageBox extends Component<Props>{

    render(): ReactNode{
        
        return <div>
            <h5 style={this.props.message[0] === 'Sikeres regisztráció' ? { color: 'green' } : { color: 'red' }}>{this.props.message}</h5>
        </div>
    }

}