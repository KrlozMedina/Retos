// https://adventjs.dev/challenges/02
// Te ha llegado una carta ✉️ con todos los regalos que debes
// preparar. El tema es que es una cadena de texto y es muy
// difícil de leer 😱. ¡Menos mal que han puesto cada regalo
// separado por espacio! (aunque ten cuidado, porque al ser
// niños, igual han colado más espacios de la cuenta). 
// Encima nos hemos dado cuenta que algunas palabras vienen
// con un _ delante de la palabra, por ejemplo _playstation,
// que significa que está tachado y no se tiene que contar.
// Transforma el texto a un objeto que contenga el nombre de
// cada regalo y las veces que aparece. Por ejemplo, si
// tenemos el texto:

const carta = 'bici coche balón _playstation bici coche peluche'

function listGifts(letter) {
    // ¡Tú puedes!
    // let items = carta.split(" ");
    // let juguetes = {}

    // for(let i=0; i<items.length; i++){
    //     if (items[i].search("_")){
    //         let item = items[i];
    //         let n = 1;
    //         for (let j=i+1; j<items.length+1; j++){
    //             if (items[i] == items[j]){
    //                 items[j] = "_";
    //                 n++;
    //             }
    //         }
    //         cont = item + ": " + n;
    //         juguetes.bici = n;
    //     }
    // }

    const arrCarta = letter.split(" ");
    return arrCarta.filter((regalo) => {
        // let value = regalo.startsWith("_")

        if (!regalo.search("_")){
            value = true;
        } else {
            value = false;
        }

        if (value !== true && regalo !=="") return regalo !== value
    })
    .reduce((contador, regalo) => {
        contador[regalo] = (contador[regalo] || 0) + 1;
        return contador
    }, {});

    // return juguetes
}

//    Al ejecutar el método debería devolver lo siguiente:

const regalos = listGifts(carta)

console.log(regalos)
/*
{
  bici: 2,
  coche: 2,
  balón: 1,
  peluche: 1
}
*/

// Ten en cuenta que los tests pueden ser más exhaustivos... 😝
// ¡Cuidado con contar espacios vacíos!

// Solucion: https://dev.to/duxtech/adventjs-2-ayuda-al-elfo-a-listar-los-regalos-i74