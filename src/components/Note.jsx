import React from "react";

function Note(props) {
  function deleteit(){
    console.log(props.content)
    props.setcontent((prevValue) =>{
      const mock=[...prevValue]
      mock.splice(props.id,1)
      return mock;
  })
  }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.value}</p>
      <button onClick={deleteit}>DELETE</button>
    </div>
  );
}


export default Note;
