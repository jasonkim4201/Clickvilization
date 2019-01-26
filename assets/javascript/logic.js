$(document).ready(function() {
  console.log("ready");

var resources = function(name) {
  this.name = name;
  this.total = 0;
  this.limit = 500;
  this.increment = 1;
};

var housing = function(name, total, capacity, foodReq, woodReq, stoneReq, ironReq) {
  this.name = name;
  this.total = 0;
  this.capacity = capacity;
  this.requirements = {
    food: foodReq,
    wood: woodReq,
    stone: stoneReq,
    iron: ironReq
  }
}
  
var food = new resources("Food");
var wood = new resources("Wood");
var stone = new resources("Stone");
var iron = new resources("Iron");
var hide = new resources("Hide");
var coal = new resources("Coal");
var gold = new resources("Gold");

var hut = new housing("Hut", 0, 1, 0, 5, 5, 0);
var cabin = new housing("Log Cabin", 0, 4, 0, 20, 10, 0);
var cottage = new housing("Cottage", 0, 10, 0, 35, 20, 5);

var population = {
  current: 0,
  max: 0,
  idle: 0
};

console.log(food);
console.log(wood);
console.log(stone);
console.log(iron);   
console.log(gold);
console.log(hut);
console.log(cabin);

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

    case "cattleBtn":
    if (hide.total >= hide.limit) {
      return console.log(`Hide limit of ${hide.limit} has been reached.`);
    } else {
      hide.total += hide.increment;
      food.total += (1);
      updateResources();
    }
    break;

    case "coalBtn":
    if (coal.total >= coal.limit) {
      return console.log(`Coal limit of ${coal.limit} has been reached.`);
    } else {
      coal.total += coal.increment;
      updateResources();
    }
    break;

    case "goldBtn":
    if (gold.total >= gold.limit) {
      return console.log(`Gold limit of ${gold.limit} has been reached.`);
    } else {
      gold.total += gold.increment;
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
    console.log(`Idle population: ${population.idle}`);
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
      wood.total -= cottage.requirements.wood;
      stone.total -= cottage.requirements.stone;
      iron.total -= cottage.requirements.iron;
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
(population.max === 0) ? $("#maxPop").html("Maximum population: None! Housing required!") : $("#maxPop").html(`Maximum  population: ${population.max}`);


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
  /* console.log(`Max population: ${population.max}.`); */

}

//Something tells me I shouldn't just spam this function all over the place....whatever what could possibly go wrong!
//Probably going to regret it stupidly when you have the resource addition automated and it tries to execute the function multiple times per sec. Whatever that's a major bug or potential dumster fire for another day.
// Maybe make a function purely just to check resource requirement...

var updateResources = () => {
  $("#foodTotal").html(food.total);
  $("#woodTotal").html(wood.total);
  $("#stoneTotal").html(stone.total);
  $("#ironTotal").html(iron.total);
  $("#hideTotal").html(hide.total);
  $("#coalTotal").html(coal.total);
  $("#goldTotal").html(gold.total);
  
  if (wood.total < 5 || stone.total < 5) {
    $("#hut").prop("disabled", true);
  } else if (wood.total >= 5 && stone.total >= 5) {
    $("#hut").prop("disabled", false);
  }

  if (wood.total < 20 || stone.total < 10) {
    $("#cabin").prop("disabled", true);
  } else if (wood.total >= 20 && stone.total >= 10) {
    $("#cabin").prop("disabled", false);
  }

  if (wood.total < 35 || stone.total < 20 || iron.total < 5) {
    $("#cottage").prop("disabled", true);
  } else if (wood.total >= 35 && stone.total >= 20 && iron.total >= 5) {
    $("#cottage").prop("disabled", false);
  }

//check to see if a certain tech has been unlocked then prevent them from being disabled
// ie when mining tools have been unlocked prevent mining button from being disabled.
      //this will also rename gather stone to mine stone which will also increase the increment
// farming tools will allow an increase in increment on push of harvest food button.


//think about making a upgrade increment function to update increment settings. maybe within the functions it lists if x upgrade is true then add y amount to increment to specified resource

  //add statment to disable #civBtn if population.current === population.max
  if (population.current === population.max || food.total < 20) {
    $("#civBtn").prop("disabled", true);
  } else if (population.current < population.max && food.total >= 20) {
    $("#civBtn").prop("disabled", false);
  }

} // end of updateResources



//specialized items may include gold, coal, livestock(more food and leather?), and something???
//items gathered from each resources tabs combined with special buildings that will produce special manufactured items
// eventually make something where 1 stone will produce 4 units of sand. Sand will be used to make glass and that in turn to make more advanced things


//Make a debug function so you dont have to click a billion times while testing....


//END OF DOCUMENT.READY
})