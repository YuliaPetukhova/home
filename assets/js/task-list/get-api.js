class GetTableByApi
{
    getStringTable(){
        axios.get('https://official-joke-api.appspot.com/jokes/ten')
        .then(function (response) {
            // let HtmlGenerator = new HtmlGenerator();
            // HtmlGenerator.generateTable(response);
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