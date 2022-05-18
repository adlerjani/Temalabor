import { TaskModel } from "./TaskModel";

export interface  CardModel{
    columnId:number,
    title:string,
    todos: TaskModel[]
}