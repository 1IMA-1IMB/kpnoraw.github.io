
let gallons = 3.785141 ;
let ounces = 0.0295735 ;
let cups = 0.236588 ;
let tablespoons = 0.0147868 ;

function measureFunc(input) {

measure = document.getElementById("maalenhet");
measure.value 

if(measure.value == "tablespoons"){
    document.getElementById("maalenhetOutput").innerHTML = input / tablespoons;
}else if(measure.value == "ounces"){
    document.getElementById("maalenhetOutput").innerHTML = input / ounces;
}else if(measure.value == "cups"){
    document.getElementById("maalenhetOutput").innerHTML = input / cups;
}else if(measure.value == "gallons"){
    document.getElementById("maalenhetOutput").innerHTML = input / gallons;
}

}




