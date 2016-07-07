var array = [0, 5, 0, 7];

var zeroCount = zeroCounter(array);

alert(zeroCount);

function zeroCounter(x){

var counter=0;
for (i=0; i< x.length; i++){ 
if (x[i]==0){
counter++;
}
}
return counter;
}
