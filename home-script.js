'use strict';

let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbarCenteredExample").style.top = "0";
  } else {
    document.getElementById("navbarCenteredExample").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}

/*-------READ-MORE---------------------------------*/
const taskCells = document.querySelectorAll('td.task');

taskCells.forEach(taskCell => {
    taskCell.addEventListener("click", showHide);
});

function showHide(event) {
  const cell = event.target;
  const td = cell.parentElement;
  const short = td.getElementsByClassName('short')[0];
  const full = td.getElementsByClassName('full')[0];

    short.classList.toggle('d-none');
    full.classList.toggle('d-none');
}   