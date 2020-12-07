// Effect function
$(window).scroll(function () {
    $('.pasta').each(function () {
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 700) {
            $(this).addClass("fadeIn");
        }
    });
});

// vote function
window.onload =  setup();

var pointA = 1;
var pointB = 1;
var pointC = 1;
var pointD = 1;
var pointE = 1;



var totalVotes = pointA + pointB + pointC + pointD + pointE;

function addCheese(){
    pointA += 1;
    totalVotes += 1;
    updatePoints();
    console.log(pointA + ' '+ pointB + '' + pointC + '' + pointD + '' + pointE);
}
function addChicken(){
    pointB += 1;
    totalVotes += 1;
    updatePoints();
    console.log(pointA + ' ' + pointB + '' + pointC + '' + pointD + '' + pointE);
}
function addLasagna(){
    pointC += 1;
    totalVotes += 1;
    updatePoints();
    console.log(pointA + ' '+ pointB + '' + pointC + '' + pointD + '' + pointE);
}
function addMeatballs(){
    pointD += 1;
    totalVotes += 1;
    updatePoints();
    console.log(pointA + ' '+ pointB + '' + pointC + '' + pointD + '' + pointE);
}
function addVesuvius(){
    pointE += 1;
    totalVotes += 1;
    updatePoints();
    console.log(pointA + ' '+ pointB + '' + pointC + '' + pointD + '' + pointE);
}

function updatePoints(){
    var percentA = (pointA / totalVotes) * 100;
    var percentB = (pointB / totalVotes) * 100;
    var percentC = (pointC / totalVotes) * 100;
    var percentD = (pointD / totalVotes) * 100;
    var percentE = (pointE / totalVotes) * 100;




    document.getElementById("size-one").innerHTML = Math.round(percentA) + '%';
    document.getElementById("size-two").innerHTML = Math.round(percentB) + '%';
    document.getElementById("size-three").innerHTML = Math.round(percentC) + '%';
    document.getElementById("size-four").innerHTML = Math.round(percentD) + '%';
    document.getElementById("size-five").innerHTML = Math.round(percentE) + '%';

}

function setup() {
    pointA = 1;
    pointB = 1;
    pointC = 1;
    pointD = 1;
    pointE = 1;


    totalVotes = pointA + pointB + pointC + pointD + pointE;

    document.getElementById("option-one").innerHTML = "Mizithra";
    document.getElementById("option-two").innerHTML = "Chicken Piccata";
    document.getElementById("option-three").innerHTML = "Lasagna";
    document.getElementById("option-four").innerHTML = "Spaghetti with Meatballs";
    document.getElementById("option-five").innerHTML = "Spicy Spaghetti Vesuvius";


    updatePoints();
}