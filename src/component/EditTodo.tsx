import { useState } from "react";
import { ITodo } from "./Todo.types";

type Props ={
    data:ITodo;
    onBackButton:()=>void;
    onUpdateTodo:(data:ITodo)=>void;
}


const EditTodo =(props:Props)=>{
    const{data,onBackButton,onUpdateTodo}=props;
   
    const [contentTodo,setContentTodo] = useState(data.content)
const contentHandler=(e:any)=>{
    setContentTodo(e.target.value);

}
const onSubmitFormHandler=(e:any)=>{
    e.preventDefault();
    const updatedTodo:ITodo={
        id:data.id,
        content:contentTodo,

    }
    onUpdateTodo(updatedTodo);
    onBackButton();

}
   return <><form onSubmit={onSubmitFormHandler}>
   <input type="text" value={contentTodo} onChange={contentHandler} />
<input type="button" value="Back" onClick={onBackButton}></input>
<input type="submit" value="Confirm" ></input>
</form></> 
}
export default EditTodo;