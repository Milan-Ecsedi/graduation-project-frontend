import { useParams } from "react-router-dom";

export default function paramGet(){

    const {courseId}=useParams();





    return {courseId}
}