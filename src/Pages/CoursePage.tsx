import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";



export default function Course(){


const {courseId}=useParams();



return <div>

<Header></Header>

<div>
    <p> {courseId}</p>
</div>


<Footer></Footer>
</div>


}