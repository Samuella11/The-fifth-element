// click funtion, printing input information
$('#btn').click(function () {
    let name = $("#name").val();
    let YearMonthDate = $('#date').val();
    let time = $('#time').val();
    let guests = $('#guests').val();




    $("#content ul").append('<li>' + name + '</li>');
    $("#content ul").append('<li>' + YearMonthDate + '</li>');
    $("#content ul").append('<li>' + time + '</li>');
    $("#content ul").append('<li>' + guests + '</li>');



});

// slide function
function toggleForm() {
    let container = document.querySelector('.container');
    container.classList.toggle('active')
}