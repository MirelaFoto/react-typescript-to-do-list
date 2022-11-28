export interface ITodo {
id:string;
content:string;

}

export const dummyData : ITodo[] =[{
id: new Date().toJSON().toString(),
content: "Dummy data-Create the todo list"


}]

export enum TodoEnum{
    list,
    add,
}