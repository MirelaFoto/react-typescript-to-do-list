import { useState } from "react";
import { ITodo } from "./Todo.types";
import { Button, Input,VStack,Heading,Stack } from '@chakra-ui/react';
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
        <VStack mt="3rem">
        <Heading mb="2rem" textColor="green.700">Write your new task!</Heading>
        <Stack direction="row">
        <Input type="text" value={contentTodo} onChange={contentHandler} />
<Button w="120px" onClick={onBackButton} colorScheme="yellow">Back</Button>
<Button w="120px"colorScheme="green" type="submit">Add Todo</Button></Stack></VStack>
    </form>
    </>
}

export default AddTodo;