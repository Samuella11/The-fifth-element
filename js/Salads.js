function zoomIn(x) {
    x.style.height = "350px";
    x.style.width = "250px";
}

function zoomOut(x) {
    x.style.height = "190px";
    x.style.width = "139px";
}


function changeColor(obj) {
    if (obj.style.color == 'seagreen') {
        obj.style.color = '#000000';
    } else {
        obj.style.color = 'seagreen';
    }
}