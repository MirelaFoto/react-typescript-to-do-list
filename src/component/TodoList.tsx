import { ITodo } from "./Todo.types";

  type Props = {
list: ITodo[]

  }
  
  
  
  const TodoList = (props: Props) => {
    const {list}= props;
return <>
<p>TodoList</p>
{list.map((todo,i) =>
    <div key={i}>{todo.content}</div>)}
</>
  }
  export default TodoList;