var array = [4, 5, 6, 7];


var avg = average(array);

alert(avg);

function average(x){
var sum=0;
var counter=0;
for (i=0; i< x.length; i++){ 
sum+=x[i];
counter++;
}
return sum/counter;
}
