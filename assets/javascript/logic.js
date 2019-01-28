$(document).ready(function() {
  console.log("ready");

var resources = function(name) {
  this.name = name;
  this.total = 0;
  this.limit = 500;
  this.increment = 1;
}

class housing {
  constructor(name, total, capacity, foodAmount, woodAmount, stoneAmount, ironAmount, hideAmount, coalAmount, goldAmount) {
    this.name = name;
    this.total = 0;
    this.capacity = capacity;
    this.req = {
      food: foodAmount,
      wood: woodAmount,
      stone: stoneAmount,
      iron: ironAmount,
      hide: hideAmount,
      coal: coalAmount,
      gold: goldAmount
    };
  }
}
  
class tech {
  constructor(name, foodAmount, woodAmount, stoneAmount, ironAmount, hideAmount, coalAmount, goldAmount) {
    this.name = name;
    this.req = {
      food: foodAmount,
      wood: woodAmount,
      stone: stoneAmount,
      iron: ironAmount,
      hide: hideAmount,
      coal: coalAmount,
      gold: goldAmount
    };
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
var shack = new housing("Shack", 0, 3, 0, 15, 10, 0);
var cabin = new housing("Log Cabin", 0, 6, 0, 35, 12, 0);
var cottage = new housing("Cottage", 0, 10, 0, 35, 20, 5);

var farmTools = new tech("Farming Tools", 20, 20, 30, 0, 0, 0, 0);
var lumberTools = new tech("Lumbering Tools", 0, 25, 30, 0, 0, 0, 0);
var miningTools = new tech("Mining Tools", 0, 30, 40, 0, 0, 0, 0);
var animalHusbandry = new tech("Animal Husbandry", 100, 85, 40, 30, 0, 0, 0);
var masonry = new tech("Masonry", 0, 45, 100, 30, 0, 0, 0);
var leatherMaking = new tech("Leather Making", 0, 120, 50, 35, 40, 0, 0);
var irrigation = new tech("Irrigation", 70, 200, 125, 50, 0, 0, 0);

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
console.log(shack);
console.log(cabin);

/* var maxPopulation = (hut.total * hut.capacity) + (cabin.total * cabin.capacity) +(cottage.total * cottage.capacity);
console.log(`max pop: ${maxPopulation}`); */

//add resource limits on to html page
$("#foodLimit").html(food.limit);
$("#woodLimit").html(wood.limit);
$("#stoneLimit").html(stone.limit);
$("#ironLimit").html(iron.limit);

/* CLICKITY CLICKY ZONEEEEEEE */

  $(".resource").on("click", function() {   
  switch (this.id) {
    case "foodBtn":
    if (food.total >= food.limit) {
      return console.log(`Food limit of ${food.total} has been reached.`);
    } else {
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
    console.log(`Idle population: ${population.idle}`);
    console.log(`Current pop: ${population.current}`);
    updateResources();
    
  })



  //on click function for housing button group
  $(".housingBtn").on("click", function() {
  
    switch (this.id) {
      case "hut":
      wood.total -= hut.req.wood;
      stone.total -= hut.req.stone;
      hut.total++
      $("#hutCount").html(hut.total);
      updatePopulation();
      updateResources();
      break;

      case "shack":
      wood.total -= shack.req.wood;
      stone.total -= shack.req.stone;
      shack.total++;
      $("#shackCount").html(shack.total);
      updatePopulation();
      updateResources();
      break;
      
      case "cabin":
      wood.total -= cabin.req.wood;
      stone.total -= cabin.req.stone;
      cabin.total++;
      $("#cabinCount").html(cabin.total);
      updatePopulation();
      updateResources();
      console.log("You built a Log Cabin!");
      break;
      
      default:
      console.log("Something went horribly wrong and you shouldn't be seeing this.");
      break;
    }

  });

  $(".tech").on("click", function() {
    switch(this.id) {
      case "farmTools":
      food.total -= farmTools.req.food;
      wood.total -= farmTools.req.wood;
      stone.total -= farmTools.req.stone;
      food.increment++;
      $("#foodRow").empty();
      updateResources();
      break;

      case "lumberTools":
      wood.total -= lumberTools.req.wood;
      stone.total -= lumberTools.req.stone;
      wood.increment++;
      $("#treeRow").empty();
      updateResources();
      break;

      case "miningTools":
      wood.total -= miningTools.req.wood;
      stone.total -= miningTools.req.stone;
      stone.increment++;    
      $("#mineRow").empty();
      $("#stoneBtn").html("Mine Stone");
      $("#ironBtn").prop("disabled", false);
      updateResources();
      break;

      case "animalHusbandry":
      food.total -= animalHusbandry.req.food;
      wood.total -= animalHusbandry.req.wood;
      stone.total -= animalHusbandry.req.stone;
      iron.total -= animalHusbandry.req.iron;
      $("#cowRow").empty();
      updateResources();
      break;

      case "masonry":
      wood.total -= masonry.req.wood;
      stone.total -= masonry.req.stone;
      iron.total -= masonry.req.iron;
      stone.increment++;
      $("#stoneRow").empty();
      updateResources();
      break;

      case "leatherMaking":
      wood.total -= leatherMaking.req.wood;
      stone.total -= leatherMaking.req.stone;
      iron.total -= leatherMaking.req.iron;
      hide.total -= leatherMaking.req.hide;
      $("#hideRow").empty();
      updateResources();
      break;

      case "irrigation":
      food.total -= irrigation.req.food;
      wood.total -= irrigation.req.wood;
      stone.total -= irrigation.req.stone;
      iron.total -= irrigation.req.iron;
      food.increment++;
      $("#waterRow").empty();
      updateResources();
      break;

      default:
      break;
    }
  });  

//Display Max pop
(population.max === 0) ? $("#maxPop").html("Maximum population: None! Housing required!") : $("#maxPop").html(`Maximum  population: ${population.max}`);

/* FUNCTION ZONE */

//calculate current/max population funtion
var updatePopulation = () => {
  population.current = (population.idle);
  $("#currentPop").html(`Population: ${population.current}`);
  $("#popDisplay").html(population.current);
  
  population.max = (hut.total * hut.capacity) + (shack.total * shack.capacity) + (cabin.total * cabin.capacity) +(cottage.total * cottage.capacity);
  $("#maxPop").html(`Maximum  population: ${population.max}`);
  /* console.log(`Max population: ${population.max}.`); */
}

var updateResources = () => {
  $("#foodTotal").html(food.total);
  $("#woodTotal").html(wood.total);
  $("#stoneTotal").html(stone.total);
  $("#ironTotal").html(iron.total);
  $("#hideTotal").html(hide.total);
  $("#coalTotal").html(coal.total);
  $("#goldTotal").html(gold.total);

  (food.total >= farmTools.req.food && wood.total >= farmTools.req.wood && stone.total >= farmTools.req.stone) ? $("#farmTools").prop("disabled", false) : $("#farmTools").prop("disabled", true);

  (wood.total >= lumberTools.req.wood && stone.total >= lumberTools.req.stone) ? $("#lumberTools").prop("disabled", false) : $("#lumberTools").prop("disabled", true);

  (wood.total >= miningTools.req.wood && stone.total >= miningTools.req.stone) ? $("#miningTools").prop("disabled", false) : $("#miningTools").prop("disabled", true);

  (food.total >= animalHusbandry.req.food && wood.total >= animalHusbandry.req.wood && stone.total >= animalHusbandry.req.stone && iron.total >= animalHusbandry.req.iron) ? $("#animalHusbandry").prop("disabled", false) : $("#animalHusbandry").prop("disabled", true);

  (wood.total >= masonry.req.wood && stone.total >= masonry.req.stone && iron.total >= masonry.req.iron) ? $("#masonry").prop("disabled", false) : $("#masonry").prop("disabled", true);

  (hide.total >= leatherMaking.req.hide && wood.total >= leatherMaking.req.wood && stone.total >= leatherMaking.req.stone && iron.total >= leatherMaking.req.iron) ? $("#leatherMaking").prop("disabled", false) : $("#leatherMaking").prop("disabled", true);

  (food.total >= irrigation.req.food && wood.total >= irrigation.req.wood && stone.total >= irrigation.req.stone && iron.total >= irrigation.req.iron) ? $("#irrigation").prop("disabled", false) : $("#irrigation").prop("disabled", true);
  
  (wood.total >= hut.req.wood && stone.total >= hut.req.stone) ? $("#hut").prop("disabled", false) : $("#hut").prop("disabled", true);

  (wood.total >= shack.req.wood && stone.total >= shack.req.stone) ? $("#shack").prop("disabled", false) : $("#shack").prop("disabled", true);
 
  (wood.total >= cabin.req.wood && stone.total >= cabin.req.stone) ? $("#cabin").prop("disabled", false) : $("#cabin").prop("disabled", true);
 
  if (population.current === population.max || food.total < 20) {
    $("#civBtn").prop("disabled", true);
  } else if (population.current < population.max && food.total >= 20) {
    $("#civBtn").prop("disabled", false);
  }

} // end of updateResources

//Make a debug function so you dont have to click a billion times while testing for certain things
var debug = () => {
  food.total = 200;
  wood.total = 200;
  stone.total = 200;
  iron.total = 200;
  hide.total = 200;
  updateResources();
}
//debug();
//specialized items may include gold, coal, livestock(more food and leather?), and something???
//items gathered from each resources tabs combined with special buildings that will produce special manufactured items
// eventually make something where 1 stone will produce 4 units of sand. Sand will be used to make glass and that in turn to make more advanced things


//END OF DOCUMENT.READY
});