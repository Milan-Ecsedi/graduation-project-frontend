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
            <h1 className="card-title">Rólunk</h1>
        <p className="card-text">Ez a project az MDM csapat álltal lett elkészítve.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam faucibus enim sed est ultricies ultrices. Pellentesque eget ex quis augue congue tincidunt. Morbi at auctor elit, sit amet vehicula lorem. Curabitur nec venenatis ex. Nullam ut aliquam elit. Integer vestibulum tortor non ipsum finibus, sit amet placerat neque aliquet. Fusce non risus nec neque consectetur malesuada. Cras convallis in metus sit amet aliquam. Nunc lacinia, nisl vel hendrerit facilisis, ex metus tincidunt nulla, nec posuere eros lacus quis sem. Nunc condimentum at erat et aliquam. Donec ullamcorper eros imperdiet, posuere erat a, convallis velit. Integer venenatis erat enim, at dictum augue posuere in. Nam vitae eleifend lectus, at congue urna. Vestibulum euismod vehicula ante.

Nulla eu massa eget dui suscipit pellentesque. Quisque dignissim et augue sed interdum. Donec porttitor fringilla finibus. Vestibulum sollicitudin magna vel mauris pellentesque accumsan. Quisque condimentum tellus eget odio tristique mattis. Phasellus interdum justo dignissim felis consequat, non ullamcorper velit lobortis. Cras at feugiat ligula, quis facilisis lorem.

Mauris ac sapien pretium, molestie purus at, eleifend ipsum. Vivamus et velit malesuada nunc vehicula cursus eu sed enim. Sed ultricies sollicitudin est, vel auctor nulla. Vestibulum nibh purus, dignissim eget ante luctus, viverra dapibus turpis. Vivamus sit amet dapibus augue. Aliquam erat volutpat. Aliquam erat volutpat. Sed pretium neque nisl, ac ullamcorper lectus ornare vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam posuere lacus vel magna aliquet, vitae bibendum urna mattis. Quisque vitae malesuada tortor.

Nunc mattis orci quis commodo molestie. Nam quis nulla nunc. Phasellus porta consectetur mauris a egestas. Nullam et mollis tellus, id faucibus velit. Vestibulum efficitur dignissim velit interdum faucibus. Proin maximus metus in purus sodales, tincidunt molestie orci porttitor. Phasellus nisl erat, lacinia in dolor id, pharetra mollis enim. Maecenas vestibulum ante mauris, a vehicula ex consectetur at. Donec et venenatis augue.

Nulla erat odio, lobortis vitae egestas sollicitudin, venenatis venenatis enim. Proin egestas lacus vitae nunc commodo, et pellentesque erat interdum. Integer venenatis mattis sagittis. Morbi nisl lacus, viverra eleifend ornare nec, pulvinar in urna. Phasellus eu felis eget nunc blandit gravida. Etiam laoreet mauris eget congue auctor. Phasellus sed est non mauris porta venenatis non ut orci. Maecenas lacinia porta velit interdum sodales. Nullam velit metus, pretium nec sem vitae, blandit eleifend massa.</p>
        </div>
        </center>
        <Footer/>
    </div>
}
 

}