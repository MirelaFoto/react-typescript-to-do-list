import { Heading } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import AddTodo from './AddTodo'
import EditTodo from './EditTodo'
import {  ITodo, TodoEnum } from './Todo.types'
import TodoList from './TodoList'
import { Button } from '@chakra-ui/react'


const Home = () => {
const [todoList, setTodoList]= useState([] as ITodo[])
const [showAddPage, setShowAddPage]= useState(TodoEnum.list)
const [editTodoData,setEditTodoData]=useState({} as ITodo)

useEffect(() => {
    const listOfTodos = window.localStorage.getItem("TodoList");
    if (listOfTodos) {
      setToLocalStorageTodoList(JSON.parse(listOfTodos));
    }
  }, []);

const setToLocalStorageTodoList = (list: ITodo[]) => {
    setTodoList(list);
    window.localStorage.setItem("TodoList", JSON.stringify(list));
  };
const onAddTodo = ()=>{
    setShowAddPage(TodoEnum.add)
   
}
const showListHandler=()=>{
    setShowAddPage(TodoEnum.list)
}
const addTodoHandler=(data:ITodo)=>{
    setToLocalStorageTodoList([...todoList, data]);


}
const deleteTodo =(data:ITodo)=>{
    const indexTodo=todoList.indexOf(data);
    const newList=[...todoList]
    newList.splice(indexTodo,1)
    setToLocalStorageTodoList(newList)
}

const editTodo =(data:ITodo)=>{
setShowAddPage(TodoEnum.edit);
setEditTodoData(data)

}
const updateData=(data:ITodo)=>{
    const filteredData = todoList.filter((x) => x.id === data.id)[0];
    const indexOfRecord =todoList.indexOf(filteredData);
    const newData = [...todoList];
    newData[indexOfRecord] = data;
    setToLocalStorageTodoList(newData);
}
    return <> 
    <Heading as='h2' textAlign="center" textColor='green'> React-Typescript Todo List </Heading>
   
    {showAddPage === TodoEnum.list &&  (<> 
     <Button mb="3rem" colorScheme="teal" type="button" width="120px"onClick={onAddTodo}>Create Todo</Button>
    <TodoList list={todoList} onDeleteHandler={deleteTodo} onEdit={editTodo} />
    </>)}
    {showAddPage === TodoEnum.add && <AddTodo onBackButton={showListHandler} onSubmitHandler={addTodoHandler} />}

{showAddPage === TodoEnum.edit && <EditTodo data={editTodoData} onUpdateTodo={updateData} onBackButton={showListHandler}/>}
   
    </>

}

export default Home;