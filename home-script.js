let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbarCenteredExample").style.top = "0";
  } else {
    document.getElementById("navbarCenteredExample").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}


/*-------READ-MORE---------------------------------*/
// function readMore(){
//     var dots = document.getElementById("dots");
//     var more = document.getElementById("more");
//     var btn = document.getElementById("btn");

//     if(dots.style.display === "none"){
//         dots.style.display = "inline";
//         btn.innerHTML = "Подробнее";
//         more.style.display = "none";
//     } else {
//         dots.style.display = "none";
//         btn.innerHTML = "Скрыть";
//         more.style.display = "inline";
//     }
// }


// if (document.addEventListener){
//     document.addEventListener("click", function(event)){
//         var targetElement = event.target;
//         console.log(targetElement);
//     };
// } else if (document.attachEvent) {    
//     document.attachEvent("onclick", function(){
//         var targetElement = event.target;
//         console.log(targetElement);
//     });
// }


const taskCells = document.querySelectorAll('td.task');

function handleClick(event) {
    console.log(event.target)
    console.log("hi,bitch")
}
taskCells.forEach(taskCell => {
    taskCell.addEventListener("click", handleClick);
});