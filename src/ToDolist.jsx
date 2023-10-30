import React from "react";
const ToDolist=(props)=>{

 


    return ( 
        <>
        <hr></hr>
        <div className="todo_style">
            <button class="cursor"
            onClick={()=>{
                props.onSelect(props.id)
            }}
            
            
            
            >
                ✖
            </button>
          {props.text}
    </div>
    </>
    )
}
export default ToDolist;