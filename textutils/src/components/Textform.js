import React, { useState } from 'react'


export default function Textform(props) {

    const handleupClick = () => {
        // console.log("Btn clicked" + text);
        let newtxt = text.toUpperCase();
        setText(newtxt)
    }

    const handleloClick = () => {
        // console.log("Btn clicked" + text);
        let newtxt = text.toLowerCase();
        setText(newtxt)
    }
    const handleclear = () => {
        // console.log("Btn clicked" + text);
        let newtxt ='';
        setText(newtxt)
    }

    const handlecopy = () => {
        // console.log("Btn clicked" + text);
        var text=document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text.value); 
    }
    const handleExtraSpaces = () => {
        // console.log("Btn clicked" + text);
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    const handleOnchange = (event) => {
        console.log("on changed");
        setText(event.target.value)
    }

    const [text, setText] = useState("");
    return (
        <>
            <div className="container" style={{color:props.mode === 'dark' ? 'white' : 'black'}}>
                <h1 >{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" style={{backgroundColor:props.mode === 'dark' ? 'grey' : 'white',color:props.mode === 'dark' ? 'white' : 'black'}} value={text} onChange={handleOnchange} id="myBox" rows="6"></textarea>
                </div>

                <button className="btn btn-danger mx-2" onClick={handleupClick} style={{color:props.mode === 'dark' ? 'white' : 'dark'}} >Convert To Uppercase</button>
                <button className="btn btn-success mx-2" onClick={handleloClick} >Convert To Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleclear}>Clear</button>
                <button className="btn btn-primary mx-2" onClick={handlecopy}>Copy Text</button>
                <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Spaces</button>


            </div>
            <div className="container my-3" style={{color:props.mode === 'dark' ? 'white' : 'black'}}>
                <h3>Text Summary</h3>
                <p> <b> {text.split(" ").length -1} words </b> and <i>{text.length} character </i> </p>
                <p>{0.008 * text.split(" ").length} minutes to read {text.split(" ").length-1} words</p>
            
                <h3>Preview</h3>
                <p><i>{text.length>0 ? text : "Enter your text to preview here...!"}</i></p>
            </div>

        </>
    )
}
