class HtmlGenerator
{
    generateTable() {



            let tbody = document.querySelector("tbody");
            response.data.forEach((joke, index) => {
                let tr = document.createElement("tr");
                let rowId = 'row-' + index;
                tr.setAttribute("id", rowId);

                let tdDate = document.createElement("td");
                tdDate.innerHTML = joke.id;
                // tdDate.innerHTML = propertyValue;
                tr.appendChild(tdDate);
                
                let tdTask = document.createElement("td");
                tdTask.classList.add("task");
                // tdTask.classList.add(propertyKey);

                let divShortTask = document.createElement("div");
                divShortTask.classList.add("short");
                divShortTask.innerHTML = 'joke.setup';

                let divFullTask = document.createElement("div");
                divFullTask.classList.add("full");
                divFullTask.classList.add("d-none");
                divFullTask.innerHTML = joke.setup;

                tdTask.appendChild(divShortTask)
                tdTask.appendChild(divFullTask)

                tr.appendChild(tdTask);

                let tdCredit = document.createElement("td");
                tdCredit.innerHTML = joke.punchline;
                tr.appendChild(tdCredit);

                console.log(joke, index);

                tbody.appendChild(tr);
            });
    // })
};

    init() {
        this.getStringTable();
        }

}
    // generateTable(data) {
    //     let table = document.createElement("table");

    //     let thead = generateThead(data);
    //     let tbody = generateTbody(data);

    //     table.appendChild(thead);
    //     table.appendChild(tbody);
    // }

    // generateTbody() {
    // let tbody = document.createElement("tbody")
    //     data.forEach((jsonRow, index) => {
        // const row = generateRow(jsonRow, index);
    //         tbody.appendChild(row);
    //     });

    //     return tbody;
    // }

    // generateRow(jsonRow, index) {
    //     let row = '';
    //     jsonRow.получитьСписокСвойств().forEach((propertyValue, propertyKey) => {
    //         row += generateColumn(propertyValue, propertyKey)
    //     })

    //     return row;
    // }

    // generateColumn() {

    // }
// }