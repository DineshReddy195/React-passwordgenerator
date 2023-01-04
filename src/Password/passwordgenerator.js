import React from "react";
import { useState } from "react";
import { numbers,upperCaseLetters,lowerCaseLetters,symbols } from "../characters";


function App() {
  const [password, setPassword]=useState(" ");
  const [passwordLength,setPasswordLength]=useState(20);
  const[includeUpperCase,setIncludeUpperCase]=useState(false);
  const[includeLowerCase,setIncludeLowerCase]=useState(false);
  const[includeNum,setIncludeNum]=useState(false);
  const[includeSymbols,setIncludeSymbols]=useState(false);

  const copyToClipboard=()=>{
    const newText=document.createElement('textarea');
    newText.innerText=password;
    document.body.appendChild(newText);
    newText.select();
    document.execCommand('copy');
    newText.remove();
  }
  function handleCopy(e){
    copyToClipboard();
  }

  const handlePassword=(e)=>{
    let characterList='';
    if(password===""){
      // var pRef=document.getElementById('warning');
      // pRef.innerText="Please check any check box for password";
    }
    if(includeUpperCase){
      characterList=characterList+upperCaseLetters;
      // pRef.innerText="";
    }
    if(includeLowerCase){
      characterList=characterList+lowerCaseLetters;
      // pRef.innerText="";
    }
    if(includeNum){
      characterList=characterList+numbers;
      // pRef.innerText="";
    }
    if(includeSymbols){
      characterList=characterList+symbols;
      // pRef.innerText="";
    }
    setPassword(createPassword(characterList))
  }

  const createPassword=(characterList)=>{
    let password='';
    const characterListLength=characterList.length;
    for(let i=0;i<passwordLength;i++){
      const characterIndex=Math.round(Math.random()*characterListLength);
      password=password+characterList.charAt(characterIndex);
    }
    return password;
  }

  
  return (
    <div className='password'>
      <div className='heading'>
        <h1>Password Generator</h1>
      </div>
      <div className='input'>
        <section className='pwd'>
        <input className='text' type="text" onChange={handlePassword} value={password}/>
        <p id="warning"></p>
        </section>
        <section className='icon'>
        <i onClick={handleCopy} className="fa-regular fa-copy"></i>
        </section>
      </div>
      
      <div className='select'>
        <section className='para'>
          <p>Select Password Length</p>
        </section>
        <section className='length'>
            <input type="number" className='number' min='10' max='20' onChange={(e)=>setPasswordLength(e.target.value)} defaultValue={passwordLength}/>
        </section>
      </div>
      <div className='box'>
        <input type="checkbox" className="uppercase" checked={includeUpperCase} onChange={(e)=>setIncludeUpperCase(e.target.checked)}/>Include uppercase letters <br/>
        <input type="checkbox" className="lowercase" checked={includeLowerCase} onChange={(e)=>setIncludeLowerCase(e.target.checked)}/>Include lowercase letters<br/>
        <input type="checkbox" className="numbers" checked={includeNum} onChange={(e)=>setIncludeNum(e.target.checked)}/>Include numbers<br/>
        <input type="checkbox" className="symbols" checked={includeSymbols} onChange={(e)=>setIncludeSymbols(e.target.checked)}/>Include symbols<br/>
      </div><br/>
      <button className='btn'  onClick={handlePassword}>Generate Password</button>
    </div>
  );
}

export default App;





