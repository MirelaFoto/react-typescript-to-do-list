import { useState } from "react";
import { ITodo } from "./Todo.types";

type Props = {
onBackButton:()=>void;
onSubmitHandler:(data:ITodo)=>void;
}


const AddTodo = (props: Props) =>{

    const [contentTodo,setContentTodo] = useState("")

    const {onBackButton,onSubmitHandler} = props
   const contentHandler = (e:any) =>{
    setContentTodo(e.target.value)

   }
   const onSubmitFormHandler=(e:any)=>{
    e.preventDefault()
    const data: ITodo={
        id: new Date().toJSON().toString(),
        content: contentTodo,
}
onSubmitHandler(data);
onBackButton();
   }
    return <>
    <form onSubmit={onSubmitFormHandler}>
        <label>Write your  task!</label>
        <input type="text" value={contentTodo} onChange={contentHandler} />
<input type="button" value="Back" onClick={onBackButton}></input>
<input type="submit" value="Add Todo" ></input>
    </form>
    </>
}

export default AddTodo;