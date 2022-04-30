/*Desafío uno JavaScript*/
/*
Bucle WHILE: Mientras se cumpla una condición se cumple el código {}
-----------------------------------------
inicializador
while (condición de salida) {
	código a ejecutar

	expresión final
} 
-----------------------------------------
Bucle FOR: Ejecutamos X cantidad de veces un bloque de código.
-----------------------------------------
for (inicializador; condición de salida; expresión final) {
	bloque de código a ejecutar
}
-----------------------------------------
*/
let usuario = "daniel";
let pass = "vega";
let introduceUsuario;
let introducePass;

introduceUsuario = prompt("Usuario autorizado para ejecutar el bucle.");
introducePass = prompt("Contraseña.");

if (introduceUsuario != usuario || introducePass != pass) {
	alert("Error. Usuario y/o contraseña no válidos.");
}
else {
    alert("El bucle va a comenzar.");
    for(i=10;i>=-19;i--){
        if (i == 0) {
            console.log("Bienvenido " + usuario);
		continue;
	}
	document.write("El valor del bucle es: " + i + "<br>");
	if (i == -10) {
		break;
	}
}

document.write("El bucle ha finalizado.");
}