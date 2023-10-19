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
        spinnerPage.render();

        axios.get('http://192.168.1.141/api/v1/family-task/task-group/group/1')
        .then(function (response) {

            const ROOT_TASK = document.getElementById('content');
            let htmlCatalog = '';
            
            let taskGroup = response.data;

            let taskGroupTitle = response.data.title;
            let tasks = taskGroup.tasks;

            let pointTask = '0 баллов';
           
            tasks.forEach(({ createdAt, text, doneAt}) => {
                const isTaskDone = doneAt !== null;
               
                htmlCatalog += `
                <div class="task-list">
                    <div class="task-list__item row row-cols-3">
                        <div class="task-list__item__date col text-muted">${createdAt}</div>
                        <div class="task-list__item__group col text-muted">${taskGroupTitle}</div>
                        <div class="task-list__item__price col text-muted"> ${pointTask}</div>
                        <div class="task-list__item__text">${text}</div>
                        <div class="task-list__item__check col">
                            <input type="checkbox" name="checkbox" ${isTaskDone ? 'checked' : ''}>
                        </div>
                    </div>
                </div>
                `;
                
            });

            setTimeout(() => {
                spinnerPage.handleClear();
            }, 1000);
            
            ROOT_TASK.innerHTML = htmlCatalog;
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