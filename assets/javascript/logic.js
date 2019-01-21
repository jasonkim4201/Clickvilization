$(document).ready(function() {
  console.log("ready");
//GLOBAL VARIABLES
var foodTotal = 0;
var woodTotal = 0;
var stoneTotal = 0;
var ironTotal = 0;
var foodLimit = 500;
var woodLimit = 500;
var stoneLimit = 500;
var ironLimit = 500;
//Maybe it would be smarter to declare global variables and make objects and stuff
var food = {
  name: "food",
  total: 0,
  increment: 1
}

//add resource limits on to html page
$("#foodLimit").html(foodLimit);
$("#woodLimit").html(woodLimit);
$("#stoneLimit").html(stoneLimit);
$("#ironLimit").html(ironLimit);

  //on click function on basic resources
  $(".resource").on("click", function() {   
  //EXPIERIMENTAL SWITCH STATEMENT
  switch (this.id) {
    case "foodBtn":
    if (foodTotal >= foodLimit) {
      return console.log(`Food limit of ${foodLimit} has been reached.`);
    } else {
      //when specific resource is clicked then it is added to the total and updated on html page.
      foodTotal++;
      $("#foodTotal").html(foodTotal);
      console.log(`Food: ${foodTotal}`);
    }
    break;
    
    case "woodBtn":
    if (woodTotal >= woodLimit) {
      return console.log(`Wood limit of ${woodLimit} has been reached.`);
    } else {
      woodTotal++;
      $("#woodTotal").html(woodTotal);
      console.log(`Wood: ${woodTotal}`);
    }
    break;

    case "stoneBtn":
    if (stoneTotal >= stoneLimit) {
      return console.log(`Stone limit of ${stoneLimit} has been reached.`);
    } else {
      stoneTotal++;
      $("#stoneTotal").html(stoneTotal);
      console.log(`Stone: ${stoneTotal}`);
    }
    break;

    case "ironBtn":
    if (ironTotal >= ironLimit) {
      return console.log(`Iron limit of ${ironLimit} has been reached.`);
    } else {
      ironTotal++;
      $("#ironTotal").html(ironTotal);
      console.log(`Iron: ${ironTotal}`);
    }
    break;

    default:
    break;
  }
    
  })



  //on click function for housing button group
  //if resource(later will include tech) requirements is met then button will not be disabled
  //determine which is clicked with switch statement
  $(".housingBtn").on("click", function() {
    console.log("A button in the housing area has been clicked.");

    switch (this.id) {
      case "hut":
      console.log("You built a hut!");
      break;

      case "cabin":
      console.log("You built a cabin!");
      break;
      
      case "cottage":
      console.log("You built a cottage!");
      break;
      
      default:
        break;
    }

  });






})