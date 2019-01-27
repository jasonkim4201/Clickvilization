$(document).ready(function() {
  console.log("ready");

var resources = function(name) {
  this.name = name;
  this.total = 0;
  this.limit = 500;
  this.increment = 1;
}

class housing {
  constructor(name, total, capacity, food, wood, stone, iron) {
    this.name = name;
    this.total = 0;
    this.capacity = capacity;
    this.requirements = {
      food: food,
      wood: wood,
      stone: stone,
      iron: iron,
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
      wood.total -= hut.requirements.wood;
      stone.total -= hut.requirements.stone;
      hut.total++
      $("#hutCount").html(hut.total);
      updatePopulation();
      updateResources();
      break;

      case "shack":
      wood.total -= shack.requirements.wood;
      stone.total -= shack.requirements.stone;
      shack.total++;
      $("#shackCount").html(shack.total);
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
      food.total -= 20;
      wood.total -= 20;
      stone.total -= 30;
      food.increment++;
      $("#foodRow").empty();
      updateResources();
      break;

      case "lumberTools":
      wood.total -= 25;
      stone.total -= 30;
      wood.increment++;
      $("#treeRow").empty();
      updateResources();
      break;

      case "miningTools":
      wood.total -= 30;
      stone.total -= 40;
      stone.increment++;    
      $("#mineRow").empty();
      $("#stoneBtn").html("Mine Stone");
      $("#ironBtn").prop("disabled", false);
      updateResources();
      break;

      case "animalHusbandry":
      food.total -= 100;
      wood.total -= 85;
      stone.total -= 40;
      iron.total -= 30;
      $("#cowRow").empty();
      updateResources();
      break;

      case "masonry":
      wood.total -= 45;
      stone.total -= 100;
      iron.total -= 30;
      stone.increment++;
      $("#stoneRow").empty();
      updateResources();
      break;

      case "leatherMaking":
      hide.total -= 40;
      wood.total -= 120;
      stone.total -=50;
      iron.total -= 35;
      $("#hideRow").empty();
      updateResources();
      break;

      case "irrigation":
      food.total -= 70;
      wood.total -= 200;
      stone.total -= 125;
      iron.total -= 50;
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
  
  population.max = (hut.total * hut.capacity) +  (shack.total * shack.capacity) + (cabin.total * cabin.capacity) +(cottage.total * cottage.capacity);
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

  (food.total >= 20 && wood.total >= 20 && stone.total >= 30) ? $("#farmTools").prop("disabled", false) : $("#farmTools").prop("disabled", true);

  (wood.total >= 25 && stone.total >= 30) ? $("#lumberTools").prop("disabled", false) : $("#lumberTools").prop("disabled", true);

  (wood.total >= 30 && stone.total >= 40) ? $("#miningTools").prop("disabled", false) : $("#miningTools").prop("disabled", true);

  (food.total >= 100 && wood.total >= 85 && stone.total >= 40 && iron.total >= 30) ? $("#animalHusbandry").prop("disabled", false) : $("#animalHusbandry").prop("disabled", true);

  (wood.total >= 45 && stone.total >= 100 && iron.total >= 30) ? $("#masonry").prop("disabled", false) : $("#masonry").prop("disabled", true);

  (hide.total >= 40 && wood.total >= 120 && stone.total >= 50 && iron.total >= 35) ? $("#leatherMaking").prop("disabled", false) : $("#leatherMaking").prop("disabled", true);

  (food.total >= 70 && wood.total >= 200 && stone.total >= 125 && iron.total >= 50) ? $("#irrigation").prop("disabled", false) : $("#irrigation").prop("disabled", true);
  
  (wood.total >= hut.requirements.wood && stone.total >= hut.requirements.stone) ? $("#hut").prop("disabled", false) : $("#hut").prop("disabled", true);

  (wood.total >= shack.requirements.wood && stone.total >= shack.requirements.stone) ? $("#shack").prop("disabled", false) : $("#shack").prop("disabled", true);
 
  (wood.total >= cabin.requirements.wood && stone.total >= cabin.requirements.stone) ? $("#cabin").prop("disabled", false) : $("#cabin").prop("disabled", true);
 
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