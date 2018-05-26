function time() {
    var time = new Date();
    //hours
    var h = time.getHours() % 12;
    //mins
    var m = time.getMinutes();
    //seconds
    var s = time.getSeconds();
    //milliseconds
   // var ms = time.getMilliseconds();

    // Declaration of AM or PM
    var us = 'AM';
    if (h > 12) {
        us = 'PM'
    }

    // Adds the 0 infront of the number if its less than 2 digits
    if (h < 10) {
        h = '0' + h;
    }
    if (m < 10) {
        m = '0' + m;
    }
    if (s < 10) {
        s = '0' + s;
    }
    var main = h + ":" + m + ":" + s + " " + us; // + ":" + ms;

  
    document.getElementById("container").innerText = main;
    document.getElementById("container").textContent = main;


}


// milliseconds it takes to update the time function
setInterval(time, 1);
