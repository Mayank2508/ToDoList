import React, { useState } from "react";
import ToDolist from "./ToDolist";


const App=()=>{


  const [inputList,setInputList]=useState("");
  const [Items,setItems]=useState([]);

  const itemEvents=(event)=>{
    setInputList(event.target.value);
  };
  const listOfItems=()=>{
    setItems((oldItems)=>{
      return [...oldItems,inputList];
    })
    setInputList('');

  }
  const deleteItems=(id)=>{
    setItems((oldItems=>{
      return oldItems.filter((arrEle,index)=>{
       return index!==id;
      })
    }))
  }
return (
<>

<div className="main_div" >
  <div className="center_div">
    
    <br/>
    <h1 className="heading">Todo list</h1>
    <br/>
    <input className="beautiful-input" type='text' placeholder="add an item" 
    value={inputList}
    
    onChange={itemEvents}/>
    <button onClick={listOfItems} className="circular-button">
      +
    </button>

    <ul class="custom-list" >
      <li> {/*inputList*/}
      
      {Items.map((itemval,index)=>{
       return <ToDolist   
       key={index}
       id={index}
       text={itemval}   
       onSelect={deleteItems}
       
       
       />
      })}
      
      </li>
    </ul>
        
    </div> 

</div>


</>)
}
export default App;