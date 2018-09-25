var targetNumber = Math.floor((Math.random() * 129) + 19);
console.log(targetNumber);

$("#target").html(targetNumber);

var counter = 0;


  var numberOptions = [Math.floor((Math.random() * 12) + 1), Math.floor((Math.random() * 12) + 1), Math.floor((Math.random() * 12) + 1), Math.floor((Math.random() * 12) + 1)];
  console.log(numberOptions);

  for (var i = 0; i < numberOptions.length; i++) {
        var imageCrystal = $("<img>");

        imageCrystal.addClass("crystal-image");

        imageCrystal.attr("src", "assets/images/crystal.jpg");

        imageCrystal.attr("data-crystalvalue", numberOptions[i]);
        $("#minerals").html(imageCrystal);
        console.log("success");
  }

  $("#crystal-image").on("click", function() {
      var crystalValue = ($(this).attr("data-crystalvalue"));
      crystalValue = parseInt(crystalValue);
      counter += crystalValue;
      $("#score").append("New score: " + counter);
      
      if (counter === targetNumber) {
            alert("You win!");
            let numberOptions=(numberOptions)
            let 
          }
      
          else if (counter >= targetNumber) {
            alert("You lose!!");
          }
      
        });