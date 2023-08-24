'use strict';

export class HomeTaskList
{
    ExpandTasksOnClick() {
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
    }

    init() {
        this.ExpandTasksOnClick();
    }
}
