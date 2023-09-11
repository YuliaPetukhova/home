import {TaskListGenerator} from "./../lib/html-generator/task-list-generator.js";

class GetTableByApi
{
    getStringTable(){
        axios.get('https://official-joke-api.appspot.com/jokes/ten')
        .then(function (response) {
            // console.log(response);
            let taskList = document.getElementById("task-list");

            let taskListlGenerator = new TaskListGenerator();
            let generatedList = taskListlGenerator.generateList(response.data);

            taskList.appendChild(generatedList);
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