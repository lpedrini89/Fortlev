function palindromo_Nr(numIni,numFim){

    if (typeof(numIni)!='number' || typeof(numFim)!='number') {
        console.log("Somente números!");
        return;
    }

    if (numIni < 0 || numFim < 0) {
        console.log("Somente números positivos!");
        return;
    }
    
    if (numFim < numIni) {
        console.log("Número Final menor do que o Inicial!");
        return;
    }

    if ((numFim - Math.trunc(numFim) > 0) || (numIni - Math.trunc(numIni) > 0)) {
        console.log("Somente números inteiros!");
        return;
    }

    
    
    
    let array;

    for (i=numIni;i<=numFim;i++){
        texto = String(i);
        array = texto.split("");
        array.reverse();
        arrayString = array.join("");
        if (texto == arrayString)
            console.log(`O número ${texto} é palindromo!`);
    }



}

palindromo_Nr(1,20)