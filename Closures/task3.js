function taskManager() {
    let tasks = [];

    return{
        addtask: function(task){
            tasks.push(task);
            console.log(task);
        },
        getTask: function(){
            return tasks
        }
    }
}
let manager = taskManager();
manager.addtask("Complete Homework");
manager.addtask("Software Enginner");
console.log(manager.getTask());
