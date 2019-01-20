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


  //on click function on basic resources
  $("#foodBtn, #woodBtn, #stoneBtn, #ironBtn").on("click", function() {   
    /* if (this.id === "foodBtn") {
      //check to see if limit has not been reached
      if (foodTotal >= foodLimit) {
        return console.log(`Food limit of ${foodLimit} has been reached.`);
      }
      //when specific resource is clicked then it is added to the total and updated on html page.
      else {
      foodTotal++;
      console.log(`Food: ${foodTotal}`);
      }
    }
    else if (this.id === "woodBtn") {
      if (woodTotal >= woodLimit) {
        return console.log(`Wood limit of ${woodLimit} has been reached.`);
      } 
      else {
      woodTotal++;
      console.log(`Wood: ${woodTotal}`);
      }  
    }
    else if (this.id === "stoneBtn") {
      stoneTotal++;
      console.log(`Stone: ${stoneTotal}`);
    }
    else if (this.id === "ironBtn") {
      ironTotal++;
      console.log(`Iron: ${ironTotal}`);
    } */
  //EXPIERIMENTAL SWITCH STATEMENT
  switch (this.id) {
    case "foodBtn":
    if (foodTotal >= foodLimit) {
      return console.log(`Food limit of ${foodLimit} has been reached.`);
    } else {
      foodTotal++;
      console.log(`Food: ${foodTotal}`);
    }
    break;
    
    case "woodBtn":
    if (woodTotal >= woodLimit) {
      return console.log(`Wood limit of ${woodLimit} has been reached.`);
    } else {
      woodTotal++;
      console.log(`Wood: ${woodTotal}`);
    }
    break;

    case "stoneBtn":
    if (stoneTotal >= stoneLimit) {
      return console.log(`Stone limit of ${stoneLimit} has been reached.`);
    } else {
      stoneTotal++;
      console.log(`Stone: ${stoneTotal}`);
    }
    break;

    case "ironBtn":
    if (ironTotal >= ironLimit) {
      return console.log(`Iron limit of ${ironLimit} has been reached.`);
    } else {
      ironTotal++;
      console.log(`Iron: ${ironTotal}`);
    }
    break;

    default:
    break;
  }
    
  })

  //if resource total === resource limit then stop function

  // else when partcular resource is click it is added the resource total



})