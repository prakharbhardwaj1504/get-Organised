import React ,{useState}from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const[inputText,setinputText]=useState("");
  const[content,setcontent]=useState([])
  
  return (
    <div>
      <Header />
      <CreateArea  inputText={inputText} setinputText={setinputText} content={content} setcontent={setcontent}/>
      {content.map((value,index)=><Note key={index} id={index} title={value.title} value={value.innerContent} content={content} setcontent={setcontent}/>)}
      {/* <Note key={1} title="Note title" content="Note content" /> */}
      <Footer />
    </div>
  );
}

export default App;
