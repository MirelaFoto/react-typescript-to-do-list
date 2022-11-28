import { ITodo } from "./Todo.types";

  type Props = {
list: ITodo[]

  }
  
  
  
  const TodoList = (props: Props) => {
    const {list}= props;
return <>

{list.map((todo,i) =>
    <div key={i}>{todo.content} 
    <input type="button" value="Edit"/>
    <input type="button" value="Delete"/></div>)}
</>
  }
  export default TodoList;