export class HtmlGenerator
{
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

    generateTable(data) {
        let table = document.createElement("table");

        table.classList.add('generatedTable');
        table.classList.add('table');
        table.classList.add('table-striped');
        
        let thead = this.generateThead(data);
        table.appendChild(thead);
        

        let tbody = this.generateTbody(data);
        table.appendChild(tbody);
        return table;

        // table.appendChild(thead);
        // table.appendChild(tbody);

    }

    generateThead(){
        let thead = document.createElement("thead");

        let trHead = this.generateTrhead();
        thead.appendChild(trHead);

        return thead;
    }

    generateTrhead(){
        let trHead = document.createElement("tr");
        let thType = document.createElement("th");
        let thSetup = document.createElement("th");
        let thPunchline = document.createElement("th");
        let thId = document.createElement("th");

        thType.classList.add('col-2');
        thType.innerHTML = 'Когда сделать';

        thSetup.classList.add('col-4');
        thSetup.innerHTML = 'Задание';

        thPunchline.classList.add('col-2');
        thPunchline.innerHTML = '<i class="fab fa-btc"></i>';

        thId.classList.add('col-2');
        thId.innerHTML = '<i class="fas fa-check"></i>';

        // thead.appendChild(trHead);

        trHead.appendChild(thType);
        trHead.appendChild(thSetup);
        trHead.appendChild(thPunchline);
        trHead.appendChild(thId);

        return trHead;
    }


    generateTbody(tbodyData) {
        let tbody = document.createElement("tbody");

        tbodyData.forEach((rowData, rowIndex) => {
            let row = this.generateRow(rowData, rowIndex);
            tbody.appendChild(row);
        });

        return tbody;
    }

    generateRow(rowData, rowIndex){
        let row = document.createElement("tr");

        row.classList.add('row-' + rowIndex);

        for (const [columnIndex, columnData] of Object.entries(rowData)) {
            let column = this.generateColumn(columnIndex, columnData);
            row.appendChild(column);
        }

        return row;
    }

    generateColumn(columnIndex, columnData){
        let td = document.createElement("td");

        td.classList.add(columnIndex);
        td.innerHTML = columnData;

        return td;
    }



    // generateTbody(data) {
    //     let tbody = document.createElement("tbody")
    //     data.forEach((jsonRow, index) => {
    //         let row = document.createElement("tr");
    //         row.classList.add('row-' + index);

    //         for (const [key, value] of Object.entries(jsonRow)) {
    //             let td = document.createElement("td");
    //             td.classList.add(key);
    //             td.innerHTML = value;
                
    //             row.appendChild(td)
    //         }
            
    //         tbody.appendChild(row);
    //     });

    //     return tbody;
    // }
}
