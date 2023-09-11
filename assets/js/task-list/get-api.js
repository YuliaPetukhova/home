import {HtmlGenerator} from "./../lib/";

class GetTableByApi
{
    getStringTable(){
        axios.get('https://official-joke-api.appspot.com/jokes/ten')
        .then(function (response) {
            console.log(response);
            let taskList = document.getElementById("task-list");

            let htmlGenerator = new HtmlGenerator();
            let generatedTable = htmlGenerator.generateTable(response.data);

            taskList.appendChild(generatedTable);
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