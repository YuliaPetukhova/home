import {TaskListGenerator} from "./../lib/html-generator/task-list-generator.js";

class GetTableByApi
{
    // getStringTable(){
    //     axios.get('https://official-joke-api.appspot.com/jokes/ten')
    //     .then(function (response) {
    //         // console.log(response);
    //         let taskList = document.getElementById("content");

    //         let taskListlGenerator = new TaskListGenerator();
    //         let generatedList = taskListlGenerator.generateList(response.data);

    //         taskList.appendChild(generatedList);
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //     });
    // }
    getStringTable() {
        axios.get('http://192.168.1.141/api/v1/family-task/task-group/group/1')
        .then(function (response) {
            
            let taskGroup = response.data;
            console.log(taskGroup);
            let taskGroupTitle = response.data.title;
            let tasks = taskGroup.tasks;

            let firstTask = tasks[1];
            let taskText = firstTask.text;

            let dedline = firstTask.createdAt;

            let taskGroupTitleElement = document.getElementById("task-group-title");
            taskGroupTitleElement.innerHTML = taskGroupTitle;
            console.log(taskGroupTitleElement);
        

            let taskTextElement = document.getElementsByClassName("task-list-text")[0];
            console.log(taskTextElement);
            taskTextElement.innerHTML = taskText;

            let dataElement = document.getElementsByClassName("task-list__item__date")[0];
            dataElement.innerHTML = dedline;

           
            // let rowTaskItem = document.getElementsByClassName("row");
            // let rowTaskItemSize = document.getElementsByClassName("row-cols-3");
            
            // let taskGroupTitleElement2 = taskGroupTitleElement.getElementById("task-group-title");

            // console.log(response.data.tasks[0]);

            // let taskListlGenerator = new TaskListGenerator();
            // let generatedList = taskListlGenerator.generateList(tasks);
            
            // .preloader.скрыть d-none addclass;
            // preloader.classList.add("d-none");
            
            // let contentSection = document.getElementById("content");
            // contentSection.appendChild(generatedList);
            // console.log(contentSection);
        })
        // .catch(function (error) {
        //     console.log(error);
        // });
    }

    init() {
        this.getStringTable();
    }
}

let getTableByApi = new GetTableByApi();
getTableByApi.init();