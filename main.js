function showTime(){

    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var session = "AM";

     if(h==0){
         h = 12; //12 hour format
     }

     if(h>12){
         h=h-12; //12 hour fomart
         session = "pm"
    } 

    // if(h<10) {
    //     h="0"+h
    // }

    // if(h<10){
    //     m="0"+m
    // }

    // if(s<10){
    //     s="0"+s
    // }

    h =(h<10)?"0"+h:h
    m =(m<10)?"0"+m:m
    s =(s<10)?"0"+s:s
    document.getElementById("Digiclock").innerHTML = h + ":" + m + ":" + s + session;

    setTimeout(showTime,1000);
}

showTime();