import React, {useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {   
    const [text, setText] = useState('Enter text here');
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Conerted to upper case", "success");
    }
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Conerted to lower case", "success");
    }
    const handleClClick = ()=>{
        setText("")
    }
    const handleOnChange = (event)=>{
        console.log("It will change its state actively");
        setText(event.target.value)
    }
    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }
    const handleCopy = () =>{
        var text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value)
    }
  return (
    <>
    <div className='container' style={{color: props.mode ==='light'?'black':'white'}}>
        <h1>{props.heading}</h1>
        <div className="form-group">
            <textarea className="form-control" id="myBox" value={text} style={{backgroundColor: props.mode ==='light'?'white':'grey', color: props.mode ==='light'?'black':'white'}} onChange={handleOnChange} rows="8"></textarea> 
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-2" onClick={handleClClick}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-2" style={{color: props.mode ==='light'?'black':'white'}}>
        <h1>Your Text summary</h1>
        <p>{text.split(" ").length} word, {text.length} characters</p>
        <p>{0.08 * text.split(" ").length} minutes will be taken to read it</p>
        <p>{text.length>0?text:"Enter something to preview it here"}</p>
    </div>
    </>
  )
}
TextForm.prototype = {heading: PropTypes.string,
             
}