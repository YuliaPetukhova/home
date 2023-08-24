'use strict';

class BottomMenu
{
    SHOW_TIMER = 2000;

    timeout;
    bottomMenu;
    prevPageYOffset;

    constructor() {
        this.bottomMenu = document.querySelector("#bottom-menu");
        this.prevPageYOffset = window.pageYOffset;
    }

    clearTimeout() {
        if (this.timeout) {
            window.clearTimeout(this.timeout);
        }
    }
    
    hideMenu() {
        this.bottomMenu.style.display = "none";
    }

    showMenu() {
        this.bottomMenu.style.display = "block";
    }

    handleScroll() {
        this.visibilityMenuOnScroll();
    }
    
    handleScrollUp() {
        if (window.pageYOffset < this.prevPageYOffset) {
            this.showMenu();
        }
    }

    handleScrollDown() {
        let self = this;

        if (window.pageYOffset > this.prevPageYOffset) {
            this.hideMenu();
            this.timeout = window.setTimeout(function(){
                self.showMenu();
            }, self.SHOW_TIMER);
        }
    }

    resetPrevPageYOffset() {
        this.prevPageYOffset = window.pageYOffset;
    }

    visibilityMenuOnScroll() {
        let self = this;

        window.onscroll = function () {
            self.clearTimeout();
            self.handleScrollUp();
            self.handleScrollDown();
            self.resetPrevPageYOffset();
        }   
    }

    init() {
        this.handleScroll();
    }
}

let bottomMenuObject = new BottomMenu();
bottomMenuObject.init();
