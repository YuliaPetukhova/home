'use strict';

export class HomeTaskList
{
    toggleTasksOnClick() {
        const self = this;
        document.addEventListener("click", function(e) {
            const target = e.target.closest('td.task');
        
            if(target) {
                self.showHide(e)
            }
        });
    }

    showHide(event) {
        const cell = event.target;
        const td = cell.parentElement;
        const short = td.getElementsByClassName('short')[0];
        const full = td.getElementsByClassName('full')[0];
    
        short.classList.toggle('d-none');
        full.classList.toggle('d-none');
    }

    init() {
        this.toggleTasksOnClick();
    }
}
