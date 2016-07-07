var min = 1;
var max = 100;

var randNum = randomizer(min, max);

alert(randNum);

function randomizer(min, max){
 return Math.floor(Math.random()*(max-min+1)+min);
}
