// Usare el metodo funcion para dale un toque dinamico la forma de montar mi codigo 
// ** Codigo del cuadrado **
console.group ("Cuadrados")
// const ladoCuadrado = 5; 
// console.log ("Los lados del cuadrado miden: " + ladoCuadrado + "cm")
// Reemplazo la constante ladoCuadrado dandole a la funcion el parametro lado. De hecho lo ire haciendo en cada constante. 
function perimetroCuadrado(lado) 
{
    return lado * 4;
}

// console.log ("el perimetro cuadrado mide: " + perimetroCuadrado + "cm") 

function areaCuadrado(lado) 
{
    return lado * lado;
} 

// console.log ("el area de cuadrado mide: " + areaCuadrado + "cm^2");

console.groupEnd()

console.group ("Triangulo")
// ** Codigo del triangulo  **
// const ladroTriangulo1 = 6 
// const ladroTriangulo2 = 6
// const baseTriangulo = 4; }
// console.log ("Los lados del triangulo miden: " + ladroTriangulo1 + "cm ," + ladroTriangulo2 + "cm ," + baseTriangulo + "cm. ")

// const alturaTriangulo = 5.5;
// console.log ("La altura del triangulo mide: " + alturaTriangulo + "cm")

function perimetroTriangulo(lado1, lado2, base)  
{
    return lado1 + lado2 + base;
}
// console.log ("el perimetro triangulo mide: " + perimetroTriangulo + "cm") 

// const areaTriangulo = ( baseTriangulo + alturaTriangulo ) / 2;
function areaTriangulo(base, altura, base)  
{
    return (base + altura) / 2;
}
// console.log ("el area de triangulo mide: " + areaTriangulo + "cm^2")

console.groupEnd()

// ** Codigo circulo **

console.group ("Circulo")

// Radio
// const radioCirculo = 4; 
// console.log ("El radio del circulo mide: " + radioCirculo + "cm")

// Diametro 
// const diametroCirculo = radioCirculo * 2;
// console.log ("El diametro del circulo mide: " + diametroCirculo + "cm")
function diametroCirculo(radio) 
{
    return radio * 2;
}

// PI
//puede asignarse asi const PI = 3.14 o asi:
const PI = Math.PI
console.log ("PI es igual a : " + PI )

// Circunferencia
// const perimetroCirculo = diametroCirculo * PI ;
// console.log ("El perimetro del circulo mide: " + perimetroCirculo + "cm")
function perimetroCirculo(diametro)
{
    return diametro * PI;
}


// Area
// const areaCirculo =(radioCirculo * radioCirculo) * PI;
// console.log ("El area del circulo mide: " + areaCirculo+ "cm^2")
function areaCirculo(radio) 
{
    return (radio * 2 ) * PI;
}

console.groupEnd()