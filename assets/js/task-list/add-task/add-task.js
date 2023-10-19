
    //   document.getElementsByClassName("add-task-form")[0].addEventListener("submit", function(event){
    //     event.preventDefault();

        
    //     let formData = new FormData(document.getElementsByClassName("add-task-form")[0]);
        // output as an object
        // console.log(Object.fromEntries(formData));

        // getFormData;

        // send api request add task;
    //   });

     


      function getData(form) {
        let formData = new FormData(document.getElementsByClassName("add-task-form")[0]);
      
        for (let pair of formData.entries()) {
          console.log(pair[0] + ": " + pair[1]);
        }
      
        console.log(Object.fromEntries(formData));
      }
      
      document.getElementsByClassName("add-task-form")[0].addEventListener("submit", function (e) {
        e.preventDefault();
        getData(e.target);
      
        axios.post('http://192.168.1.141/api/v1/family-task/task/create', {
          taskGroupId: '',
          text: ''
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      });