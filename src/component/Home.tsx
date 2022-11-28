import { Heading } from '@chakra-ui/react'
import { useState } from 'react'
import { dummyData, ITodo } from './Todo.types'
import TodoList from './TodoList'



const Home = () => {
const [todoList, setTodoList]= useState(dummyData as ITodo[])




    return <> 
    <Heading as='h2' textAlign="center" textColor='green'> React-Typescript Todo List </Heading>

    <TodoList list={todoList} />
    </>

}

export default Home;