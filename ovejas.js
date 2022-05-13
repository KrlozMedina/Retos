
// Considera una lista/array de ovejas. Cada oveja tiene un nombre y un color.
// Haz una función que devuelva una lista con todas las ovejas que sean de color
// rojo y que además su nombre contenga tanto las letras n Y a, sin importar el
// orden, las mayúsculas o espacios. Por ejemplo, si tenemos las ovejas:

const ovejas = [
    { name: 'Noa', color: 'azul' },
    { name: 'Euge', color: 'rojo' },
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo'},
    { name: 'AAAAAaaaaa', color: 'rojo' },
    { name: 'Nnnnnnnn', color: 'rojo'}
]

function contarOvejas(ovejas) {
    // aquí tu magia
    let ovejasRojas = ovejas.filter(ove => ove.color == 'rojo');
    let ovejasLetras = ovejasRojas.filter(ove => ove.name.includes("N") || ove.name.includes("a") || ove.name.includes("n") || ove.name.includes("A"));
    ovejas = ovejasLetras;
    return ovejas
}

const ovejasFiltradas = contarOvejas(ovejas)

console.log(ovejasFiltradas)

// [{ name: 'Navidad', color: 'rojo' },
//  { name: 'Ki Na Ma', color: 'rojo' }]

// Recuerda. Debe contener las dos letras 'a' y 'n' en el nombre.
// No cuentes ovejas que sólo tenga una de las letras, debe tener ambas.