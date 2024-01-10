import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUPClick=()=>{
       // console.log("handle uppercase function ");
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handleLoClick=()=>{
        // console.log("handle uppercase function ");
         let newText=text.toLowerCase();
         setText(newText);
     }
     const handleCopy=()=>{
        var newtext=document.getElementById("mybox");
        // console.log("handle uppercase function ");
         newtext.select();
         navigator.clipboard.writeText(newtext.value);
     }

     const handleExtraSpaces=()=>{
        var newtext=text.split(/[ ]+/);
        // console.log("handle uppercase function ");
         setText(newtext.join(" "));
     }
    const handleonChange=(event)=>{
       // console.log("handle onchange function ");
        setText(event.target.value);
    }
    const [text,setText]=useState('');
    
  return (
    <>
    <div className='container'>
    <h1 className='my-3'>{props.headingText}</h1>
    <div className="my-3">
    <textarea className="form-control" value={text} id="mybox" onChange={handleonChange} rows="6"></textarea>
    </div>
    <button className="btn btn-outline-primary " type="submit" onClick={handleUPClick}>Convert to Upppercase</button>
    <button className="btn btn-outline-primary m-2" type="submit" onClick={handleLoClick}>Convert to Lowercase</button>
    <button className="btn btn-outline-primary m-2" type="submit" onClick={handleCopy}>Copy text</button>
    <button className="btn btn-outline-primary m-2" type="submit" onClick={handleExtraSpaces}>Clear Extra spaces</button>
    </div>
    <div className="container my-2">
        <h1>Text Summery</h1>
        <p>{text.split(" ").length} Words and {text.length} Characters</p>
        <p>{0.008 * text.split(" ").length} minutes to read </p>
        <h3>Preview :</h3>
        <div>{text}</div>
    </div>
    </>
  )
}
