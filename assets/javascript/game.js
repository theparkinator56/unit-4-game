
var targetNumber = Math.floor((Math.random() * 129) + 19);
console.log(targetNumber);



var counter = 0;
var wins = 0;
var losses= 0;
$("#wins").text(wins);
$("#losses").text(losses);


  var numberOptions = [Math.floor((Math.random() * 12) + 1), Math.floor((Math.random() * 12) + 1), Math.floor((Math.random() * 12) + 1), Math.floor((Math.random() * 12) + 1)];
  console.log(numberOptions);

  for (var i = 0; i < numberOptions.length; i++) {
        var imageCrystal = $("<img>");

        imageCrystal.addClass("crystal-image");

        imageCrystal.attr("src", "assets/images/crystal.jpg");

        imageCrystal.attr("data-crystalvalue", numberOptions[i]);
        $("#minerals").append(imageCrystal);
        console.log("success");
  }

  $(".crystal-image").on("click", function() {
      var crystalValue = ($(this).attr("data-crystalvalue"));
      crystalValue = parseInt(crystalValue);
      counter += crystalValue;
      $("#score").text(counter);
      $("#target").text(targetNumber);
      
      if (counter === targetNumber) {
            alert("You win!");
            counter= 0;
            numberOptions=(numberOptions);
            targetNumber=(targetNumber);
            wins=(wins + 1);

          }
      
          else if (counter >= targetNumber) {
            alert("You lose!!");
            counter= 0;
            numberOptions=(numberOptions);
            targetNumber=(targetNumber);
            losses= (losses+ 1);
            
          }
      
        });
