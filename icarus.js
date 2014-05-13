function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var meridian = formatMeridian(h);
    h = meridian[0];
    merid = meridian[1];
    m = formatTime(m);
    s = formatTime(s);
    document.getElementById('clock').innerHTML = h + ":" + m + ":" + s + " " + merid;
    setTimeout(startTime, 1000);    // recursive call for clock
};

function formatMeridian(h) {
    var merid = 'AM';
    if (h > 12) { h -= 12; merid = 'PM'; }
    else if (h == 12) { merid = 'PM'; }
    return [h, merid];
}

function formatTime(t) {
    if ( t < 10 ) { t = "0" + t; } // add zero in front of single digit number
    return t;
};

window.onload = function() {
    startTime();
};