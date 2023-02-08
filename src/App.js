import './App.css';
import Modal from './components/Modal.js';
import { useState } from 'react';

function App() {

  let [title,setTitle] = useState([]);
  let [text,setText] = useState([]);
  let [isDone,setIsDone] = useState([]);
  let [titleInput,setTitleInput] = useState('');
  let [textInput,setTextInput] = useState('');
  
  
  return (
  <div className='body'>
  <nav className="nav_bar">
    <div>
    <h4>My Todo List</h4>
    </div>
    <div className="react">
    <h4>React</h4>
    </div>
  </nav>
  <form className='add'>
    <div className='input-group'>
    <label className='label'> 제목</label>
    <input type="text" value={titleInput} name="title" class="add-input" onChange={(e)=>{setTitleInput(e.target.value)}}/>
    
    <label className='label'> text</label>
      <input type="text" value={textInput} name="title" class="add-input" onChange={(e)=>{setTextInput(e.target.value)}}/>
    </div>
    <button className='add-button' onClick={
      (e)=>{
      e.preventDefault();

      if(!titleInput){
        alert('제목입력하세요')
      }
      else{
        if(!textInput){
          alert('내용입력하세요')
        }
        else{
          setTitle(title=>[...title,titleInput]);
          setText(text=>[...text,textInput]);
          setIsDone(isDone=>[...isDone,false]);

          setTitleInput('');
          setTextInput('');
          
          
          

          
          

        }
        
      }
      
      
      
      
      }}>
        추가하기</button>
  </form>
  <div className='show'>
    <div className='list-container'>

      <h2>Working..🔥</h2>
    
      {
      
      isDone.map(function(a,i){
        return isDone[i]==false
      ?<Modal isDone={isDone} title={title} text={text} setIsDone={setIsDone} setTitle={setTitle} setText={setText} i={i}>
      </Modal>
      :null;
      })

      }
      </div>

    <div className='list-container'>
    <h2> Done..! 🎉</h2>
    
      
        
      {
      
      isDone.map(function(a,i){
        return isDone[i]==true
      ?<Modal isDone={isDone} title={title} text={text} setIsDone={setIsDone} setTitle={setTitle} setText={setText} i={i} >
      </Modal>
      :null;
      })

      }
      
      </div>
        
        
      
      
    

  </div>
  </div>
  );
}

export default App;

