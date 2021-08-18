"use strict";



// Retorna un número aleatorio entre min (incluido) y max (excluido)
const randomEntero = (min, max) =>  Math.floor(Math.random() * (max - min)) + min;

const mostrarMatriz = (matrizDatos, matrizPremiados) => {
    for(let pf=0 ; pf < matrizDatos.length ; pf ++){
        let fila = '';
        for(let pc=0 ; pc < matrizDatos[pf].length ; pc ++){
            if(matrizPremiados[pf][pc]){
                fila += ` {${matrizDatos[pf][pc]}}`;
            }else{
                fila += `  ${matrizDatos[pf][pc]} `;
            }
            
        }
        console.log(fila);
        console.log('');
        //console.log('');
    }
}
  
const poblarDatos = (matriz, f, c ) =>{

    for(let pf=0 ; pf < f ; pf ++){
        matriz.push([]);
        for(let pc=0 ; pc < c ; pc ++){
            matriz[pf].push(randomEntero(0,10));
        }
    }
    return matriz;
}

const poblarPremiados = (matrizPremiados, f, c ) =>{

    for(let pf=0 ; pf < f ; pf ++){
        matrizPremiados.push([]);
        for(let pc=0 ; pc < c ; pc ++){
            matrizPremiados[pf].push(false);
        }
    }
    for(let c=0 ; c<10 ; c++){
        let valido = false;
        let filaRandom = 0;
        let columnaRandom = 0;
        do{
            filaRandom = randomEntero(0,10);
            columnaRandom = randomEntero(0,10);
            // console.log(matrizPremiados);
            if(!matrizPremiados[filaRandom][columnaRandom]){
                valido = matrizPremiados[filaRandom][columnaRandom] = true;
            }
        }while(!valido);

    }
    return matrizPremiados;
}
const vecinaValida = (posicionFilaEvaluada, posicionCOlumnaEvaluada, limiteFila, limiteColumna) => {
    return posicionFilaEvaluada >= 0 
    && posicionFilaEvaluada < limiteFila 
    && posicionColumnaEvaluada >= 0
    && posicionColumnaEvaluada < limiteColumna;
}

const calcularVecinas = (matrizDatos, f, c, limiteF=10, limiteC=10) => {
    let acumulado = 0;
    // sup izq
    if(vecinaValida(f-1, c-1)){
        acumulado += matrizDatos[f][c];
    }
    
    

}
const ejecutar = () => {

    const matrizDatos = poblarDatos([], 10, 10);
    const matrizPremiados = poblarPremiados([], 10, 10);

    mostrarMatriz(matrizDatos, matrizPremiados)
}

ejecutar();