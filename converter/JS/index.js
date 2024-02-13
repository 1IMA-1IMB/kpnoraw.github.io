function measureFunc(){ //funksjon til konverteringen
    const userInput = document.getElementById("userInput").value // henter tallet som har blitt skrevet inn
    const from = parseFloat(document.getElementById("from").value) // definerer selecten som har blitt satt å konvertere fra
    const to = parseFloat(document.getElementById("to").value) // definerer selecten som har blitt satt til å konvertere til
    document.getElementById("output").innerHTML = (userInput * from)/ to // regner ut målenhetene, med enten ganging eller deling
}


//palindrom oppg
function palindromFunc(){
    const palindrom = document.getElementById("palindromInput").value.toLowerCase()
    const endret = palindrom.split("").reverse().join("")  

    if (palindrom == endret){ 
        document.getElementById("palindromOutput").innerHTML = "Palindrom" 
    } else {     
        document.getElementById("palindromOutput").innerHTML = "Ikke palindrom" 
    } 
}