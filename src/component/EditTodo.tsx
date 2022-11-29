import { useState } from "react";
import { ITodo } from "./Todo.types";
import { Button, Input,Center } from '@chakra-ui/react';

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
   return <><form onSubmit={onSubmitFormHandler}><Center mt="3rem">
   <Input type="text"  width="30%"value={contentTodo} onChange={contentHandler} />
   
<Button colorScheme="yellow"  ml="10px" onClick={onBackButton}>Back</Button>
<Button colorScheme="blue" ml="10px" type="submit">Confirm</Button></Center>
</form></> 
}
export default EditTodo;