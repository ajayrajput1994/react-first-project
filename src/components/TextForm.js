import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUPClick=()=>{
       // console.log("handle uppercase function ");
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Text Convert to UpperCase !","success");
    }
    const handleLoClick=()=>{
        // console.log("handle uppercase function ");
         let newText=text.toLowerCase();
         setText(newText);
         props.showAlert("Text Convert to LowerCase !","success");
     }
     const handleCopy=()=>{
        var newtext=document.getElementById("mybox");
        // console.log("handle uppercase function ");
         newtext.select();
         navigator.clipboard.writeText(newtext.value);
         document.getSelection().removeAllRanges();
         props.showAlert("Text Copy Clipboard !","success");
     }

     const handleExtraSpaces=()=>{
        var newtext=text.split(/[ ]+/);
        // console.log("handle uppercase function ");
         setText(newtext.join(" "));
         props.showAlert("Remove extra spaces !","success");
     }
    const handleonChange=(event)=>{
       // console.log("handle onchange function ");
        setText(event.target.value);
    }
    const [text,setText]=useState('');
    
  return (
    <>
    <div className='container' style={{backgroundColor:props.mode==='light'?'dark':'light',color:props.mode==='dark'?'white':'black'}}>
    <h1 className='my-3'>{props.headingText}</h1>
    <div className="my-3" >
    <textarea className="form-control" value={text} id="mybox" onChange={handleonChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} rows="6"></textarea>
    </div>
    <button className="btn btn-outline-primary " type="submit" onClick={handleUPClick}>Convert to Upppercase</button>
    <button className="btn btn-outline-primary m-2" type="submit" onClick={handleLoClick}>Convert to Lowercase</button>
    <button className="btn btn-outline-primary m-2" type="submit" onClick={handleCopy}>Copy text</button>
    <button className="btn btn-outline-primary m-2" type="submit" onClick={handleExtraSpaces}>Clear Extra spaces</button>
    </div>
    <div className="container my-2" style={{backgroundColor:props.mode==='light'?'dark':'light',color:props.mode==='dark'?'white':'black'}}>
        <h1>Text Summery</h1>
        <p>{text.split(/\s+/).filter((e)=>{return e.length!==0}).length} Words and {text.length} Characters</p>
        <p>{0.008 * text.split(" ").length} minutes to read </p>
        <h3>Preview :</h3>
        <div>{text.length>0?text:'Enter text to read preview.'}</div>
    </div>
    </>
  )
}
