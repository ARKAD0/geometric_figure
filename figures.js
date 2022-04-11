// Codigo del cuadrado 
console.group ("Cuadrados")
const ladoCuadrado = 5; 
console.log ("Los lados del cuadrado miden: " + ladoCuadrado + "cm")

const perimetroCuadrado = ladoCuadrado * 4 ;
console.log ("el perimetro cuadrado mide: " + perimetroCuadrado + "cm") 

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log ("el area de cuadrado mide: " + areaCuadrado + "cm^2")
console.groupEnd()
// Codigo del triangulo 


// Este seria el metodo largo , despues de este escribire un codigo mas ligth
// const ladroTriangulo1 = 6; 
// console.log ("El lado1 del triangulo mide: " + ladroTriangulo1 + "cm")
// const ladroTriangulo2 = 6; 
// console.log ("El lado2 del triangulo mide: " +  ladroTriangulo2  + "cm")
// const baseTriangulo = 4; 
// console.log ("La base del triangulo mide: " + baseTriangulo + "cm")


console.group ("Triangulo")
const ladroTriangulo1 = 6; 
const ladroTriangulo2 = 6; 
const baseTriangulo = 4; 
console.log ("Los lados del triangulo miden: " + ladroTriangulo1 + "cm ," + ladroTriangulo2 + "cm ," + baseTriangulo + "cm. ")

const alturaTriangulo = 5.5;
console.log ("La altura del triangulo mide: " + alturaTriangulo + "cm")

const perimetroTriangulo = ladroTriangulo1 + ladroTriangulo2 + baseTriangulo;
console.log ("el perimetro triangulo mide: " + perimetroTriangulo + "cm") 

const areaTriangulo = ( baseTriangulo + alturaTriangulo ) / 2;
console.log ("el area de triangulo mide: " + areaTriangulo + "cm^2")

console.groupEnd()

// Codigo circulo
console.group ("Circulo")

// Radio
const radioCirculo = 4; 
console.log ("El radio del circulo mide: " + radioCirculo + "cm")

// Diametro 
const diametroCirculo = radioCirculo * 2;
console.log ("El diametro del circulo mide: " + diametroCirculo + "cm")

// PI
//puede asignarse asi const PI = 3.14 o asi:
const PI = Math.PI
console.log ("PI es igual a : " + PI )

// Circunferencia
const perimetroCirculo = diametroCirculo * PI ;
console.log ("El perimetro del circulo mide: " + perimetroCirculo + "cm")

// Area
const areaCirculo =(radioCirculo * radioCirculo) * PI;
console.log ("El area del circulo mide: " + areaCirculo+ "cm^2")

console.groupEnd()