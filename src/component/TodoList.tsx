import { ITodo } from "./Todo.types";

  type Props = {
list: ITodo[];
onDeleteHandler: (data:ITodo)=>void;
onEdit:(data:ITodo)=>void;
  }

  
  
  const TodoList = (props: Props) => {
    const {list,onDeleteHandler,onEdit}= props;
return <>

{list.map((todo,i) =>
    <div key={i}>{todo.content} 
    <input type="button" value="Edit" onClick={()=>onEdit(todo)}/>
    <input type="button" value="Delete"  onClick={()=>onDeleteHandler(todo)}/></div>)}
</>
  }
  export default TodoList;