const titulo = document.getElementById("arcoiris");
const bot1 = document.getElementById("boton");
//elemento.style.width = "100px";
//elemento.style.height = "100px";

var RGB = [0, 0, 0];
let indiceColor = 0;
let orden = [true, true, true];

function generarColor(rojo, verde, azul){
    return `rgb(${rojo},${verde},${azul})`;
}

setInterval(() => {
    if(orden[indiceColor]){
        if(RGB[indiceColor]==255){
            orden[indiceColor]=false;
            indiceColor++;
        }else{
            RGB[indiceColor]++;
        }
    }else if(!orden[indiceColor]){
        if(RGB[indiceColor]==0){
            orden[indiceColor]=true;
            indiceColor++;
        }else{
            RGB[indiceColor]--;
        }
    }
    let color = generarColor(RGB[0],RGB[1],RGB[2])
    titulo.style.color = color;
    bot1.style.backgroundColor = color;
    if (indiceColor == 3) {
        indiceColor = 0;
    }
}, 10);