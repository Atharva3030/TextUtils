import React,{useState} from 'react'

export default function TextForm(props) {

    const handleUpClick = ()=>{
        console.log("Uppercase was Clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to upper case", "success");
    }

    const handleLoClick = ()=>{
      console.log("Uppercase was Clicked" + text);
      let newText = text.toLowerCase();
      setText(newText)
      props.showAlert("Converted to lower case","success");

  }

  const handleItClick = ()=>{
    console.log("Uppercase was Clicked" + text);
    let newText = '';
    setText(newText)
}

    const handleOnChange = (event)=>{
        console.log("on Change");
        setText(event.target.value)
    }

    const [text, setText] = useState("");
  return (
    <>
    <div className="container" style={{color: props.mode===`dark`?`white`:`black`}}>
        <h1>{props.heading}</h1>
  <div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode===`dark`?`grey`:`white`, color: props.mode===`dark`?`white`:`black` }} id="myBox" rows="8"></textarea>
  </div> 
  <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
  <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
  <button className="btn btn-primary mx-1" onClick={handleItClick}>Convert to Clear</button>
    </div>
    
    <div className="container my-4" style={{color: props.mode===`dark`?`white`:`black`}}>
      <h1 >Your text summary </h1>
      <p>{text.split(" ").length} word {text.length} letters</p>
      <p>{0.008 * text.split(" ").length}Minute read</p>
      <h2>preview</h2>
      <p>{text.length>0?text:"Enter something in the box to preview it here"}</p>
    </div>
    </>
  )
}
