/*
function collBoxToBox(b1, b2){
    return ! ((b2.x >= b1.x + b1.width)
    || (b2.x + b2.width <= b1.x)
    || (b2.y >= b1.y + b1.height)
    || (b2.y + b2.height <= b1.y));
}

var box_nav = document.getElementById("navigation").getBoundingClientRect(),
sect = document.getElementById("page_box"),
box_sect = sect.getBoundingClientRect();

window.onmouseover =  function(){

    if(collBoxToBox(box_nav, box_sect)){
        console.log("3");
        document.getElementById("navigation").style.backgroundColor="black";
    }
    else{
        document.getElementById("navigation").style.backgroundColor="none";
    }
};

*/



window.onscroll = function() {
    let bg_color = "#1d1c1c";
    let sect = document.getElementById("page_box"), box_sect = sect.getBoundingClientRect(),box_sect2 = document.getElementById("page_box").getBoundingClientRect() ;
    console.log(document.documentElement.scrollTop);
    if (document.documentElement.scrollTop >= 0) {
        document.getElementById("navigation").style.background = "none";
        document.getElementById("navigation").style.width = "100%";
    }
    if (document.documentElement.scrollTop >= 589) {
        document.getElementById("navigation").style.background = bg_color;
       
    }
    
    if (document.documentElement.scrollTop >= 1820) {
        document.getElementById("navigation").style.background = "none";
      

    }
    if (document.documentElement.scrollTop >= 2414) {
        document.getElementById("navigation").style.background = bg_color;
      
    }
    if (document.documentElement.scrollTop >= 3534) {
        document.getElementById("navigation").style.background = "none";
     

    }
    if (document.documentElement.scrollTop >= 3902) {
        document.getElementById("navigation").style.background = bg_color;
      
    }


    
}
