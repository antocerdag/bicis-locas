function validateForm(){
	var nombre = document.getElementById("name").value;
	var apellido = document.getElementById("lastname").value;
	var email = document.getElementById("input-email").value;
	var password = document.getElementById("input-password").value;
	var select = document.getElementsByClassName("form-control").selectedIndex;

	if( select == null || select == 0 ) {
  		alert("Debe seleccionar su bicicleta");
	} if(!(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(email))){
		alert("Ingrese un correo valido");
	} if((nombre.length == 0) || (apellido.length == 0) || (email.length == 0) || (password.length == 0)){
		alert("Debe completar todos los campos");
	}


}