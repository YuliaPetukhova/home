class GetTableByApi
{
    getStringTable(){
        axios.get('https://official-joke-api.appspot.com/jokes/ten')
        .then(function (response) {
            debugger;
            console.log(response.data);
            // const firstTd = document.querySelector('td');
            // firstTd.innerHTML = response.data[0].setup;

            let tbody = document.querySelector("tbody");
            response.data.forEach((joke, index) => {
                let tr = document.createElement("tr");
                let rowId = 'row-' + index;
                tr.setAttribute("id", rowId);

                let tdDate = document.createElement("td");
                tdDate.innerHTML = joke.id;
                tr.appendChild(tdDate);
                
                let tdTask = document.createElement("td");
                tdTask.classList.add("task");
                let divShortTask = document.createElement("div");
                let divFullTask = document.createElement("div");
                divShortTask.classList.add("short");
                divShortTask.innerHTML = 'joke.setup';
                divFullTask.classList.add("full");
                divFullTask.classList.add("d-none");
                divFullTask.innerHTML = joke.setup;
                tdTask.appendChild(divShortTask)
                tdTask.appendChild(divFullTask)

                // tdTask.innerHTML = joke.setup;
                tr.appendChild(tdTask);

                let tdCredit = document.createElement("td");
                tdCredit.innerHTML = joke.punchline;
                tr.appendChild(tdCredit);

                console.log(joke, index);

                tbody.appendChild(tr);
            });
            
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


//   const firstTd = document.querySelector('td')

// console.log(firstTd.innerHTML)
// // '<label>Логин</label><input type="text" id="login" /><div class="error">Введите логин</div>'

// debugger;
// // Меняем содержимое новым html
// // firstTd.innerHTML = '<div class="success">Вход</div>'

// const fruitsList = document.querySelector("#fruits");
// const grapesListItem = document.createElement("li");

// // add classes
// grapesListItem.classList.add("list-item");

// // add attributes
// grapesListItem.setAttribute("id", "grapes");

// // add events
// grapesListItem.addEventListener("click", () => {
//     alert("You clicked on Grapes!");
// });

// fruitsList.appendChild(grapesListItem);

