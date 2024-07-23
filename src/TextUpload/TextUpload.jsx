import React , {useState} from "react";

import './TextUpload.css'



const TextUpload= ({setLang, setMyText, analyseText})=> {

    
    return (
        <>
        <div className="upload-div">
            <div className="upload-textAreaDiv">
           <textarea  className="upload-textArea" onChange={(e) =>setMyText(e.target.value)} placeholder="Please enter the text here."/>     
            </div>
<div className="lang-buttons">
    <button className="lang-yoruba" onClick={(e)=> { setLang("Yoruba") ; }}>
        Yoruba
    </button>
    <button  className="lang-igbo" onClick={(e)=> { setLang("igbo") ; }}>
     Igbo
    </button>
    <button className="lang-hausa" onClick={(e)=> { setLang("hausa") ; }}>
       Hausa
    </button>
</div>
<div className="submitButton">
    <button onClick={analyseText}>Submit</button>
</div>

        </div>
        </>   
         )
}
export default TextUpload