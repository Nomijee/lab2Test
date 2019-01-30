//Create an array of strings.
let myTasks: Array<string> = [];

// Create an addTask function: 
//i. It receives a string as a parameter called task. 
//ii. It adds the task to the array. 
//iii. It prints a message in the console indicating the insertion. 
//iv. It returns the number of elements in the array after the insertion.
function addTask(task: string):number{
 
    return myTasks.push(task);

}//end of addTask Function



function listAllTask(){
    console.log("Beginning of an Array");

    myTasks.forEach(function(task){
        console.log(task);

    })
    console.log("End of an Array");
}

function deleteTask(task:string): number {
    let index : number = myTasks.indexOf (task,0);
    if (index  > -1) {
        console.log ("items " + task + "not found!");
    }
    return myTasks.length;
}

addTask("Element1");
addTask("Element2");
addTask("Element3");

listAllTask();
deleteTask("Element2")