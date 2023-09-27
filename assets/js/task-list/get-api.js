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
            console.log('response');
            console.log(response.data.tasks);
            let tasks = response.data.tasks;
            // let tasks = Object.entries(tasks);
            console.log('tasks');
            console.log(tasks);
            let taskListlGenerator = new TaskListGenerator();
            let generatedList = taskListlGenerator.generateList(tasks);
            
            // .preloader.скрыть d-none addclass;
            preloader.classList.add("d-none");
            
            let contentSection = document.getElementById("content");
            contentSection.appendChild(generatedList);
            console.log(contentSection);
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    init() {
        this.getStringTable();
    }
}

let getTableByApi = new GetTableByApi();
getTableByApi.init();