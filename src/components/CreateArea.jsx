import React ,{useState}from "react";

function CreateArea(props) {
  const[input2,setinputText2]=useState("")
  
  function updateText(event){
    const text=event.target.value;
    props.setinputText(text);
    
    }
    function updateContent(event){
      const text2=event.target.value;
      setinputText2(text2);
      
    }
    function ok(event){
      event.preventDefault();
      
      props.setcontent((prevValue)=>{
        // console.log(prevValue);
        return [...prevValue,{title:props.inputText,innerContent:input2}]
      })
      
      props.setinputText("");
      setinputText2("")
    }
  return (
    <div>
      <form>
        <input  onChange={updateText}  value={props.inputText} name="title" placeholder="Title" />
        <textarea  onChange={updateContent} value={input2} name="content" placeholder="Take a note..." rows="3" />
        <button onClick={ok} >Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
