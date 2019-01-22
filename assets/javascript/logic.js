//🎵Sweet dreams are made of these. Who am I to disagree? I traveled the world and the seven seas. Everybody is looking for something🎵
$(document).ready(function() {
  console.log("ready");
//GLOBAL VARIABLES
//Maybe it would be smarter to declare global variables as objects since these variables will have several values
var population = {
  current: 0,
  max: 0,
  idle: 0
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

/* CLICKITY CLICKY ZONEEEEEEE */

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
      updateResources();
    }
    break;
    
    case "woodBtn":
    if (wood.total >= wood.limit) {
      return console.log(`Wood limit of ${wood.limit} has been reached.`);
    } else {
      wood.total += wood.increment;
      updateResources();
    }
    break;

    case "stoneBtn":
    if (stone.total >= stone.limit) {
      return console.log(`Stone limit of ${stone.limit} has been reached.`);
    } else {
      stone.total += stone.increment;
      updateResources();
    }
    break;

    case "ironBtn":
    if (iron.total >= iron.limit) {
      return console.log(`Iron limit of ${iron.limit} has been reached.`);
    } else {
      iron.total += iron.increment;
      updateResources();
    }
    break;

    default:
    break;
  }
    
  })

//add civilian will cost 20 food.
  $("#civBtn").on("click", function() {
    food.total -= 20;
    population.idle++;
    updatePopulation();
    /* $("#currentPop").html(`Population: ${population.current}`);
    $("#popDisplay").html(population.current); */
    console.log(`Current pop: ${population.current}`);
    updateResources();
    
  })



  //on click function for housing button group
  //if resource(later will include tech) requirements is met then button will not be disabled
  //determine which is clicked with switch statement
  $(".housingBtn").on("click", function() {
  
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
      wood.total -= cabin.requirements.wood;
      stone.total -= cabin.requirements.stone;
      cabin.total++;
      $("#cabinCount").html(cabin.total);
      updatePopulation();
      updateResources();
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
  $("#maxPop").html("Maximum population: None! Housing required!");
} else {
  $("#maxPop").html(`Maximum  population: ${population.max}`);
}

/* FUNCTION ZONE */

//calculate current/max population funtion
var updatePopulation = () => {
  //calculate current pop
  population.current = (population.idle);
  $("#currentPop").html(`Population: ${population.current}`);
  $("#popDisplay").html(population.current);
  //calculate max pop
  population.max = (hut.total * hut.capacity) + (cabin.total * cabin.capacity) +(cottage.total * cottage.capacity);
  $("#maxPop").html(`Maximum  population: ${population.max}`);
  console.log(`Max population: ${population.max}.`);

}

//Something tells me I shouldn't just spam this function all over the place....whatever what could possibly go wrong!
//Probably going to regret it stupidly when you have the resource addition automated and it tries to execute the function multiple times per sec. Whatever that's a major bug or potential dumster fire for another day.
// Maybe make a function purely just to check resource requirement...

var updateResources = () => {
  $("#foodTotal").html(food.total);
  $("#woodTotal").html(wood.total);
  $("#stoneTotal").html(stone.total);
  $("ironTotal").html(iron.total);
  
  if (food.total > 19 && population.max > 0) {
    $("#civBtn").prop("disabled", false);
  } else { //double check later if i should use an if else instead to be safe
    $("#civBtn").prop("disabled", true);
  }

  if (wood.total < 5 && stone.total < 5) {
    $("#hut").prop("disabled", true);
  } else if (wood.total >= 5 && stone.total >= 5) {
    $("#hut").prop("disabled", false);
  }

  if (wood.total < 20 && stone.total < 10) {
    $("#cabin").prop("disabled", true);
  } else if (wood.total >= 20 && stone.total >= 10) {
    $("#cabin").prop("disabled", false);
  }

  if (wood.total < 35 && stone.total < 20 && iron.total < 5) {
    $("#cottage").prop("disabled", true);
  } else if (wood.total >= 35 && stone.total >= 20 && iron.total >= 5) {
    $("#cottage").prop("disabled", false);
  }


  //add statment to disable #civBtn if population.current === population.max
  if (population.current === population.max && food.total < 20) {
    $("#civBtn").prop("disabled", true);
  } else if (population.current < population.max && food.total >= 20) {
    $("#civBtn").prop("disabled", false);
  }

}



//specialized items may include gold, coal, livestock(more food and leather?), and something???
//items gathered from each resources tabs combined with special buildings that will produce special manufactured items
// eventually make something where 1 stone will produce 4 units of sand. Sand will be used to make glass and that in turn to make more advanced things





//END OF DOCUMENT.READY
})