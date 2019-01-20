$(document).ready(function() {
  console.log("ready");
//GLOBAL VARIABLES
var foodTotal = 0;
var woodTotal = 0;
var stoneTotal = 0;
var ironTotal = 0;
var foodLimit = 5;
var woodLimit = 5;
var stoneLimit = 5;
var ironLimit = 5;

//add resource limits on to html page
$("#foodLimit").html(foodLimit);
$("#woodLimit").html(woodLimit);
$("#stoneLimit").html(stoneLimit);
$("#ironLimit").html(ironLimit);

  //on click function on basic resources
  $("#foodBtn, #woodBtn, #stoneBtn, #ironBtn").on("click", function() {   
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





})