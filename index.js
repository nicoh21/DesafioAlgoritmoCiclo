

let pregunta = prompt("¿Ya tiene un usuario?")

while(pregunta != "si"){
    alert("Cree su usuario en www.createuser.com")
    pregunta = prompt("¿Ya tiene un usuario?")
}


let usuario = prompt("Ingrese el nombre de usuario")

while(usuario != "Nico"){
    alert("Usuario incorrecto");
    usuario = prompt("Ingrese el nombre de usuario")
}

let contraseña = prompt("Ingrese su contraseña")

while(contraseña != "nicolas"){
    alert("Contraseña incorrecta");
    contraseña = prompt("Ingrese su contraseña")

}

alert("Bienvenido Nico!!!!");