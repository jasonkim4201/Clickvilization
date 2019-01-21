$(document).ready(function() {
  console.log("ready");
//GLOBAL VARIABLES
//Maybe it would be smarter to declare global variables as objects since these variables will have several values
var population = {
  current: 0,
  max: 0
},
food = {
  name: "Food",
  total: 0,
  limit: 500, // + (granary * # of granary) + (upgrade2 * # of upgrade2 buildings)
  increment: 1 // + (farm tool bonus) + (irrigation bonus) + (crop rotation bonus) + (fertilizer bonus)
},
wood = {
  name: "Wood",
  total: 0,
  limit: 500,
  increment: 1
},
stone = {
  name: "Stone",
  total: 0,
  limit: 500,
  increment: 1
},
iron = {
  name: "Iron",
  total: 0,
  limit: 500,
  increment: 1
},
hut = {
  name: "Hut",
  total: 0,
  capacity: 1,
  requirements: {
    food: 0,
    wood: 5,
    stone: 5,
    iron: 0
  }
},
  cabin = {
    name: "Log Cabin",
    total: 0,
    capacity: 4,
    requirements: {
      food: 0,
      wood: 20,
      stone: 10,
      iron: 0
    }
  }
  cottage = {
    name: "Cottage",
    total: 0,
    capacity: 10,
    requirements: {
      food: 0,
      wood: 35,
      stone: 20,
      iron: 5
    }
  }

/* var maxPopulation = (hut.total * hut.capacity) + (cabin.total * cabin.capacity) +(cottage.total * cottage.capacity);
console.log(`max pop: ${maxPopulation}`); */

//add resource limits on to html page
$("#foodLimit").html(food.limit);
$("#woodLimit").html(wood.limit);
$("#stoneLimit").html(stone.limit);
$("#ironLimit").html(iron.limit);

  //on click function on basic resources
  $(".resource").on("click", function() {   
  //EXPIERIMENTAL SWITCH STATEMENT
  switch (this.id) {
    case "foodBtn":
    if (food.total >= food.limit) {
      return console.log(`Food limit of ${food.total} has been reached.`);
    } else {
      //when specific resource is clicked then it is added to the total and updated on html page.
      food.total += food.increment;
      $("#foodTotal").html(food.total);
      console.log(`Food: ${food.total}`);
    }
    break;
    
    case "woodBtn":
    if (wood.total >= wood.limit) {
      return console.log(`Wood limit of ${wood.limit} has been reached.`);
    } else {
      wood.total += wood.increment;
      $("#woodTotal").html(wood.total);
      console.log(`Wood: ${wood.total}`);
    }
    break;

    case "stoneBtn":
    if (stone.total >= stone.limit) {
      return console.log(`Stone limit of ${stone.limit} has been reached.`);
    } else {
      stone.total += stone.increment;
      $("#stoneTotal").html(stone.total);
      console.log(`Stone: ${stone.total}`);
    }
    break;

    case "ironBtn":
    if (iron.total >= iron.limit) {
      return console.log(`Iron limit of ${iron.limit} has been reached.`);
    } else {
      iron.total += iron.increment;
      $("#ironTotal").html(iron.total);
      console.log(`Iron: ${iron.total}`);
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
      //subtract resource requirements from total resources
      //add to hut.total to #hutCount and update #maxPoP
      //update population and resources
      wood.total -= hut.requirements.wood;
      stone.total -= hut.requirements.stone;
      hut.total++
      $("#hutCount").html(hut.total);
      updatePopulation();
      updateResources();
      break;

      case "cabin":
      updatePopulation();
      updateResources();
      console.log("You built a cabin!");
      break;
      
      case "cottage":
      updatePopulation();
      updateResources();
      console.log("You built a cottage!");
      break;
      
      default:
      console.log("Something went horribly wrong and you shouldn't be seeing this.");
      break;
    }

  });

//check to see if user has enough resources to purchase an item. If requirements are met, then button will not be disabled.

//Display Max pop
if (population.max === 0) {
  $("#maxPop").html("<strong>Maximum population:</strong> None! Housing required!");
} else {
  $("#maxPop").html(`Maximum  population: ${population.max}`);
}

/* FUNCTION ZONE */

//calculate current/max population funtion
var updatePopulation = () => {
  //calculate max pop
  population.max = (hut.total * hut.capacity) + (cabin.total * cabin.capacity) +(cottage.total * cottage.capacity);
  $("#maxPop").html(`Maximum  population: ${population.max}`);
  console.log(`Max population: ${population.max}.`);

}

var updateResources = () => {
  $("#foodTotal").html(food.total);
  $("#woodTotal").html(wood.total);
  $("#stoneTotal").html(stone.total);
  $("ironTotal").html(iron.total);
}



})