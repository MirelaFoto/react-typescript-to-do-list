export interface ITodo {
id:string;
content:string;

}

export const dummyData : ITodo[] =[{
id: new Date().toJSON().toString(),
content: "Create the todo list"


}]