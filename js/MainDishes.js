var dice = {
    sides: 5,
    roll: function () {
      var randomNumber = Math.floor(Math.random() * this.sides) * 10;
      //alert(randomNumber);
      return randomNumber;
    }
  }
  
  
  
  //Prints dice roll to the page
  
  function printNumber(number) {
    var placeholder = document.getElementById('placeholder');
    placeholder.innerHTML = number;
  }
  
  var button = document.getElementById('button');
  
  button.onclick = function() {
    var result = dice.roll();
    printNumber("You have won "+result+"%!");
    button.style.visibility = "hidden";
  };

  
  