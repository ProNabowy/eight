// ========================================================================================== Selector Elements
const header = document.querySelector("header ul.list");
const mnue = document.querySelector(".fa-bars");
const closeMnue = document.querySelector(".fa-xmark");
// ========================================================================= Covart Function When Window Resize
this.addEventListener("resize" , _ => {
    ChackSizeHeader();
});
// =========================================================================== create Function To do mnue list
const  ChackSizeHeader = function () {
    // ======================================================================= Check If Window less than 768px 
    if(window.innerWidth < 768) {
        // =========================================================================== Convart Header List Left
        header.style.position = "relative";
        header.style.left = "-2000px";
        header.style.transition = "1s";
        mnue.style.cssText += "visibility: visible; opacity: 1;";
    }else {
        // =========================================================================== Convart Header List Left
        header.style.left = "0";
        mnue.style.cssText += "visibility: hidden; opacity: 0;";
    };
    //==================================================== add event when user click to mnue icone to show list 
    mnue.addEventListener("click" , function() {
        //=========================================================================== Convart Header List Left
        header.style.left = "0px";
        closeMnue.style.cssText += "visibility: visible; opacity: 1;";
        mnue.style.cssText += "visibility: hidden; opacity: 0;";
    });
        // ======================================= add event when user click to Close mnue  icone to hide list
    closeMnue.addEventListener("click" , function() {
        header.style.left = "-2000px";
        closeMnue.style.cssText += "visibility: hidden; opacity: 0;";
        mnue.style.cssText += "visibility: visible; opacity: 1;";
    });
        //============================================== Create function when user click on Esacpe on keybord
    window.addEventListener("keyup" , function(e) {
        if(e.key === "Escape") {
            header.style.left = "-2000px";
            closeMnue.style.cssText += "visibility: hidden; opacity: 0;";
            mnue.style.cssText += "visibility: visible; opacity: 1;";
        }
    })
};
// ================================================================================== Calling Function Here
ChackSizeHeader();