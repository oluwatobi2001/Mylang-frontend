


import { useState } from 'react'
import Nav from './Nav/Nav';
import './App.css'
import axios from 'axios'
import TextResult from './TextResult/TextResult';
import TextUpload from './TextUpload/TextUpload';
const App = () => {
   

    const  [myText, setMyText] = useState("");
const [result, setResults] = useState("")
const [lang, setLang] = useState("")
    const analyseText = async()=> {
       
        const data = {
          text: myText,
          lang: lang
        };
        console.log(data)
const res =  await axios.post("https://hashnode-backend-mylang.onrender.com/google-ai", data);
console.log(res.data);
setResults(res.data);

    }
 return (

   <>
  

   
 <Nav />
 <div className='langApp'>

  <div className='textUploadDiv'>
    <TextUpload  setMyText={setMyText}  setLang={setLang} myText={myText} analyseText={analyseText} />
  </div>

<div className='divider'>

</div>
<div className='textResultDiv'>
  <TextResult result={result}/>
</div>

 </div>


   
   </>
 )


}

export default App;
