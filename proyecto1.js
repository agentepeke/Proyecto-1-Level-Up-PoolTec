//Fernando Quiñonez
const keysAndValues = {
    A: "Fernando",
    K: "Juan",
    Z: "Maria",
    F:"Adrian"
};

//Funcion para ordenar las Keys and values.
const ordenar = Object.keys(keysAndValues) //Se obtiene una matriz de las claves del objeto.
.sort()                              //Método para ordenar la matriz.
.reduce((accumulator, key)=>{       //Método para obtener un objeto con claves ordenadas.
    accumulator[key] = keysAndValues[key];
    return accumulator;
},{});
console.log(Object.keys(ordenar)); //Imprimir las keys
console.log(Object.values(ordenar));//Imprimir los Values
