import React , {useEffect} from "react";
import './TextResult.css'
const TextResult = ({result})=> {

    useEffect(() => {

    }, [])
    return (
        <>
        <div className="resultDiv">
{result}
        </div>
        </>   
         )
}
export default TextResult