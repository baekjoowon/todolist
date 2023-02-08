
 function Modal(props){
    return(
       <div className='list-wrapper'>
       <div className='list' key={props.i}>
         <div>
         <h2 className='todo-title'>{props.title[props.i]}</h2>
         <div>{props.text[props.i]}</div>
         </div>
         <div className='button-set'>
          
         <button className='todo-delete-button button' onClick={()=>{
            let copy = [...props.title];
            copy.splice(props.i,1);
            props.setTitle(copy); 

            let copy2 = [...props.text]; 
            copy2.splice(props.i,1); props.setText(copy2); 

            let copy3 = [...props.isDone]; 
            copy3.splice(props.i,1); 
            props.setIsDone(copy3);
            
            }}>
               삭제하기</button>
         {
           props.isDone[props.i]==true
           ?<button className='todo-complete-button button' onClick={()=>{let copy = [...props.isDone]; copy[props.i] = false; props.setIsDone(copy)}}>취소</button>
           :<button className='todo-complete-button button' onClick={()=>{let copy = [...props.isDone]; copy[props.i] = true; props.setIsDone(copy)}}>완료</button>
           }
           </div>
        
     </div>
     </div>
     
     )
     
    
  } 
  export default Modal;
