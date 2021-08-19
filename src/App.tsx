import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';



export type Note = {
  id : number,
  title : string,
  description : string
}

export type NoteType = Note[]

function App() {
  const [title , setTitle] = useState<string>("")
  const [description , setDescription] = useState<string>("")
  const [note , setNote] = useState<NoteType>([])
  
  function handleInputChange(e : any){
    setTitle(e.target.value)
  }
  function handleDescriptionChagne(e : any) {
    setDescription(e.target.value)
  }

  function addNote(){
    setNote((note) => note.concat({
      id : note.length + 1,
      title ,
      description
    }))
    setTitle("")
    setDescription("")
  }

  function handleDeleteNote(noteId : number){
      setNote(note.filter((note ) => note.id !== noteId))
  }

  return (
    <div className="App">
     Note App
     <input 
     value={title}
     placeholder="Title"
     onChange={handleInputChange}
     />
      <textarea
     value={description}
     placeholder="Description"
     onChange={handleDescriptionChagne}
     />
     <div>Current title : {title}</div>
  <div>Description : {description}</div>

  <div>
    <button onClick={() => addNote()}>Add Note</button>
  </div>
  <hr/>
  <hr/>
  <div>
    Notes will be added here :
    {note.map((note) => (
      <div>
        Title : {note.title}
        Description : {note.description}
        <button onClick={() => handleDeleteNote(note.id)}>Delete Note</button>
      </div>
    ))}
  </div>
    </div>
  );
}

export default App;
