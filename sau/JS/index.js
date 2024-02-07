let sauer = 100 ;

//Oppgave 1a
function tellEnSau (){

    sauer -= 1; 

    // Oppg 1d
    if (sauer > 0){

        console.log('Du har ' + sauer + ' sauer igjen å telle før du sovner.');
    } else {

        console.log('zzz zzz zzz');
    }
}

tellEnSau();

//Oppgave 1b
function tellNoenSauer(antall){

    sauer -= antall; 

    console.log('Du har ' + sauer + ' sauer igjen å telle før du sovner.');
}

tellNoenSauer(60);


//Oppgave 1c
function mistetTellingen(){

    sauer = 1000;

    console.log(sauer);
}

mistetTellingen();

//Oppgave 1e og 1f
function klippSauer(antallSauer){

    if (antallSauer > 0 && 10>=antallSauer){

        console.log('Du fikk nok ull til et par sokker!');
    } else if (antallSauer > 10 && 30>=antallSauer){

        console.log('Du fikk nok ull til et par sokker!');
    } else if (antallSauer > 30 && 50>=antallSauer){

        console.log('Du fikk nok ull til en kjeledress og sengetøy!');
    } else if (antallSauer > 50 && 80>=antallSauer){

        console.log('Du fikk nok ull til en saue-klone!');
    } else if (antallSauer > 80 && 100>=antallSauer){

        console.log('Du fikk nok ull til et ull-hoppeslott!');
    } else if(antallSauer>100) {
 
        console.log("zzz zzz zzz")
 
    }

}

klippSauer(50);

klippSauer(24);

klippSauer(88);

//Oppg 2
//Jeg har ikke peiling på hva jeg driver med. Lærerne gidder ikke å vise oss hvordan vi løser det.
//De går rundt og hjelper de som ikke kan det, men det er såpass mange av oss at de heller burde gjøre det på tavla. Jeg er sur. 

p