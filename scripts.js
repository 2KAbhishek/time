function showTime() {
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let half = h > 12 ? "PM" : "AM";

    m = addZero(m);
    s = addZero(s);

    h = h == 0 ? 12 : h;
    h = h > 12 ? h - 12 : h;
    h = addZero(h);

    document.getElementById("clock").innerHTML = h + ":" + m + ":" + s + half;
}

function addZero(i) {
    return i < 10 ? "0" + i : i;
}

setInterval(showTime);
