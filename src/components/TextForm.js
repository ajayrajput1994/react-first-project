import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUPClick=()=>{
       // console.log("handle uppercase function ");
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handleonChange=(event)=>{
       // console.log("handle onchange function ");
        setText(event.target.value);
    }
    const [text,setText]=useState('Enter text here.');
    
  return (
    <>
    <div className='container'>
    <h1 className='my-3'>{props.headingText}</h1>
    <div className="my-3">
    <textarea className="form-control" value={text} id="mybox" onChange={handleonChange} rows="6"></textarea>
    </div>
    <button className="btn btn-outline-primary " type="submit" onClick={handleUPClick}>Convert to Upppercase</button>
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
