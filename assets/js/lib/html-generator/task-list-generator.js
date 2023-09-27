import {Task} from "../DTO/Task.js";

export class TaskListGenerator
{
    generateList(tasks) {
        console.log(tasks);

        let contentSection = document.getElementById("content");
        contentSection.classList.add('container');

        let taskList = document.createElement("div");
        taskList.classList.add('task-list');

        tasks.forEach((rowData, rowIndex) => {
            // console.log('rowData');
            // console.log(rowData);
            let task = new Task(rowData.id, rowData.text, rowData.createdAt,rowData.doneAt);
            task.appendChild(taskList);
            // console.log('task');
            // console.log(task);
            let card = this.generateCard(task);
            card.appendChild(task);
            console.log('card');
            console.log(card);
        });
    }


    generateCardBody(data){
        let cardBody = document.createElement("div");
        cardBody.classList.add('list-item-body');
        cardBody.classList.add('row');
        cardBody.classList.add('row-cols-3');
        cardBody.appendChild(div);
        console.log(cardBody);
        return cardBody;
    }

    generateListItem(){
        let colDate = document.createElement('div');
        colDate.classList.add('list-item-date');
        colDate.classList.add('col');
        colDate.classList.add('text-muted');
        colDate.innerHTML = 'Дедлайн';

        let colGroup = document.createElement('div');
        colGroup.classList.add('list-item-group');
        colGroup.classList.add('col');
        colGroup.classList.add('text-muted');
        colGroup.innerHTML = 'Группа задач';

        let colPrice = document.createElement('div');
        colPrice.classList.add('list-item-price');
        colPrice.classList.add('col');
        colPrice.classList.add('text-muted');
        colPrice.innerHTML = 'Баллы';

        let colText = document.createElement('div');
        colText.classList.add('list-item-text');
        colText.classList.add('col');
        colText.innerHTML = 'Текст задачи';

        let colCheck = document.createElement('div');
        colCheck.classList.add('list-item-check');
        colCheck.classList.add('col');
        

    }
    
    // generateRow(){
    //     let row = document.createElement("div");
    //     row.classList.add('row');
    //     row.classList.add("row-cols-2");

    //     let columnDate = document.createElement("div");

    //     columnDate.classList.add('col-sm-4');
    //     columnDate.innerHTML = 'Дедлайн';

    //     let columnPrice = document.createElement("div");

    //     columnPrice.classList.add('col-sm-4');
    //     columnPrice.innerHTML = 'Баллы';

    //     columnText.classList.add('col')

    //     columnCheck.classList.add('col-sm-4');
    //     columnCheck.classList.add('actions');
    //     columnCheck.innerHTML = '<i class="fas fa-check"></i>';


    //     // task.appendChild(row);
    //     row.appendChild(columnDate);
    //     row.appendChild(columnPrice);
    //     row.appendChild(columnCheck);

    //     return row;
    // }

    /**
     * @param {Task} task 
     */
    generateCard(task) {
        task.getCreatedAt();
    }
    // generateTable() {

    //     // [{"type":"general","setup":"What type of music do balloons hate?","punchline":"Pop music!","id":266}

    //         let tbody = document.querySelector("tbody");
    //         response.data.forEach((joke, index) => {
    //             let tr = document.createElement("tr");
    //             let rowId = 'row-' + index;
    //             tr.setAttribute("id", rowId);

    //             let tdDate = document.createElement("td");
    //             tdDate.innerHTML = joke.id;
    //             // tdDate.innerHTML = propertyValue;
    //             tr.appendChild(tdDate);
                
    //             let tdTask = document.createElement("td");
    //             tdTask.classList.add("task");
    //             // tdTask.classList.add(propertyKey);

    //             let divShortTask = document.createElement("div");
    //             divShortTask.classList.add("short");
    //             divShortTask.innerHTML = 'joke.setup';

    //             let divFullTask = document.createElement("div");
    //             divFullTask.classList.add("full");
    //             divFullTask.classList.add("d-none");
    //             divFullTask.innerHTML = joke.setup;

    //             tdTask.appendChild(divShortTask)
    //             tdTask.appendChild(divFullTask)

    //             tr.appendChild(tdTask);

    //             let tdCredit = document.createElement("td");
    //             tdCredit.innerHTML = joke.punchline;
    //             tr.appendChild(tdCredit);

    //             console.log(joke, index);

    //             tbody.appendChild(tr);
    //         });
    // // })
    // };

    // init() {
        // this.getStringTable();
    // }

//     generateTable(data) {
//         let table = document.createElement("div");

//         table.classList.add('generatedCard');
//         table.classList.add('container');
//         table.classList.add('text-center');
        
//         let thead = this.generateThead(data);
//         table.appendChild(thead);
        

//         let tbody = this.generateTbody(data);
//         table.appendChild(tbody);
//         return table;

//         // table.appendChild(thead);
//         // table.appendChild(tbody);

//     }

//     generateThead(){
//         let thead = document.createElement("thead");

//         let trHead = this.generateTrhead();
//         thead.appendChild(trHead);

//         return thead;
//     }

//     generateTrhead(){
//         let trHead = document.createElement("tr");
//         let thType = document.createElement("th");
//         let thSetup = document.createElement("th");
//         let thPunchline = document.createElement("th");
//         let thId = document.createElement("th");

//         thType.classList.add('col-2');
//         thType.innerHTML = 'Когда сделать';

//         thSetup.classList.add('col-4');
//         thSetup.innerHTML = 'Задание';

//         thPunchline.classList.add('col-2');
//         thPunchline.innerHTML = '<i class="fab fa-btc"></i>';

//         thId.classList.add('col-2');
//         thId.innerHTML = '<i class="fas fa-check"></i>';

//         // thead.appendChild(trHead);

//         trHead.appendChild(thType);
//         trHead.appendChild(thSetup);
//         trHead.appendChild(thPunchline);
//         trHead.appendChild(thId);

//         return trHead;
//     }


//     generateTbody(tbodyData) {
//         let tbody = document.createElement("tbody");

//         tbodyData.forEach((rowData, rowIndex) => {
//             let row = this.generateRow(rowData, rowIndex);
//             tbody.appendChild(row);
//         });

//         return tbody;
//     }

//     generateRow(rowData, rowIndex){
//         let row = document.createElement("tr");

//         row.classList.add('row-' + rowIndex);

//         for (const [columnIndex, columnData] of Object.entries(rowData)) {
//             let column = this.generateColumn(columnIndex, columnData);
//             row.appendChild(column);
//         }

//         return row;
//     }

//     generateColumn(columnIndex, columnData){
//         let td = document.createElement("td");

//         td.classList.add(columnIndex);
//         td.innerHTML = columnData;

//         return td;
//     }
}