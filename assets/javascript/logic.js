$(document).ready(function() {
  console.log("ready");
//GLOBAL VARIABLES
var foodTotal = 0;
var woodTotal = 0;
var stoneTotal = 0;
var ironTotal = 0;
var foodLimit = 2;
var woodLimit = 5;
var stoneLimit = 500;
var ironLimit = 500;


  //on click function on basic resources
  $("#foodBtn, #woodBtn, #stoneBtn, #ironBtn").on("click", function() {   
    if (this.id === "foodBtn") {
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
    }
  
  })

  //if resource total === resource limit then stop function

  // else when partcular resource is click it is added the resource total



})