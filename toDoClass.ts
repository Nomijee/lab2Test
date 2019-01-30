
import {todoInterface} from './interface';

class Todo implements todoInterface {
    constructor() { }
    tasks: Array<string> = [];
    addTask(x: string): number {
        let y: number;
        this.tasks.push(x); console.log("=========== NEW TASK ==========="); console.log('Task "' + x + '" inserted in the list'); y = this.tasks.length; return y;
    }
    listAllTasks() { console.log(""); console.log("START: Items on list"); console.log(""); this.tasks.forEach(function (task) { console.log(task); }); console.log(""); console.log("END: Items on list"); console.log(""); }
    deleteTask(x: string): number {
        let key: string = x; let index: number = this.tasks.indexOf(key, 0); if (index > -1) { this.tasks.splice(index, 1); } console.log("=========== TASK REMOVED ==========="); console.log('Task "' + x + '" removed from the list');
        return this.tasks.length;
    }
}
let myTodos = new Todo(); console.log("Number of items:", myTodos.addTask('This is our first task')); console.log("Number of items:", myTodos.addTask('This is our second task!!!')); myTodos.listAllTasks(); console.log("Number of items:", myTodos.deleteTask('This is our second task!!!')); myTodos.listAllTasks();



