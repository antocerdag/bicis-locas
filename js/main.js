function validateForm(){
	var nombre = document.getElementById("name").value;
	var apellido = document.getElementById("lastname").value;
	var email = document.getElementById("input-email").value;
	var password = document.getElementById("input-password").value;
	var select = document.getElementsByClassName("form-control").selectedIndex;


	/*if(!(/^[A-Z][a-z]{3,19}$/).test(nombre)){
		alert("Ingrese un nombre válido");
	} if(!!(/^[A-Z][a-z]{3,19}$/).test(apellido)){
		alert("Ingrese un apellido válido");
	} if(!(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(email))){
		alert("Ingrese un correo valido");
	}*/ if((password == "password") || (password == 123456) || (password == 098754) || (!(/^([0-9].{6,15}$/).test(password)) ){
		alert("Ingrese una clave válida");
	}


	/*if( select == null || select == 0 ) {
  		alert("Debe seleccionar su bicicleta");
	} 

	if((nombre.length == 0) || (apellido.length == 0) || (email.length == 0) || (password.length == 0)){
		alert("Debe completar todos los campos");
	}
*/

}