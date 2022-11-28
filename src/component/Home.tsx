import { Heading } from '@chakra-ui/react'
import { useState } from 'react'
import AddTodo from './AddTodo'
import { dummyData, ITodo, TodoEnum } from './Todo.types'
import TodoList from './TodoList'



const Home = () => {
const [todoList, setTodoList]= useState(dummyData as ITodo[])
const [showAddPage, setShowAddPage]= useState(TodoEnum.list)
const onAddTodo = ()=>{
    setShowAddPage(TodoEnum.add)
}
const showListHandler=()=>{
    setShowAddPage(TodoEnum.list)
}
const addTodoHandler=(data:ITodo)=>{
    setTodoList([...todoList,data])


}
const deleteTodo =(data:ITodo)=>{
    const indexTodo=todoList.indexOf(data);
    const newList=[...todoList]
    newList.splice(indexTodo,1)
    setTodoList(newList)
}

    return <> 
    <Heading as='h2' textAlign="center" textColor='green'> React-Typescript Todo List </Heading>
   
    {showAddPage === TodoEnum.list &&  (<> 
     <input type="button" value="Add todo" onClick={onAddTodo}/>
    <TodoList list={todoList} onDeleteHandler={deleteTodo} />
    </>)}
    {showAddPage === TodoEnum.add && <AddTodo onBackButton={showListHandler} onSubmitHandler={addTodoHandler} />}

   
    </>

}

export default Home;