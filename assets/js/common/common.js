document.addEventListener("DOMContentLoaded", () => {
    let bottomMenu = document.querySelector("#bottom-menu");
    let prevPageYOffset = window.pageYOffset;
    let timeout;

    window.onscroll = function () {
        if (timeout) {
            window.clearTimeout(timeout);
            timeout = null;
        }
        if (window.pageYOffset > prevPageYOffset) {
            bottomMenu.style.display = "none";
            timeout = window.setTimeout(function(){
                  bottomMenu.style.display = "block";
              }, 2000);
        } else {
            bottomMenu.style.display = "block";
        }
        prevPageYOffset = window.pageYOffset;
    } 
})
