import { ITodo } from "./Todo.types";
import { Button,Stack ,Box,Text} from '@chakra-ui/react'

  type Props = {
list: ITodo[];
onDeleteHandler: (data:ITodo)=>void;
onEdit:(data:ITodo)=>void;
  }

  
  
  const TodoList = (props: Props) => {
    const {list,onDeleteHandler,onEdit}= props;
return <>

{list.map((todo,i) =>
   <Stack direction='row' justifyContent='center'alignContent="left" key={i}>
   <Box borderWidth="2px" borderRadius="12px" width="22em" height="40px"><Text>{todo.content}</Text> </Box>
 
    <Button colorScheme='blue' width="60px" onClick={()=>onEdit(todo)}>Edit</Button>
    <Button colorScheme='red'width="60px" onClick={()=>onDeleteHandler(todo)}>Delete </Button>
    
    </Stack>)
    }
</>
  }
  export default TodoList;