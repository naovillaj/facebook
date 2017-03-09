
var usuarios = ["naovillaj@gmail.com", "florc@laboratoria.la", "ximevi@gmail.com"];
var encontro = false; 

window.addEventListener('load',function() {
  var loginButton = document.getElementById('ingresar');
  
  loginButton.addEventListener('click',function(e) {
  	e.preventDefault();
  	
  	if(document.getElementById("usuario").value == ""){
	 document.getElementById("mensaje1").innerHTML = "El campo de usuario no puede estar en blanco";
	}else if (document.getElementById("contraseña").value == "" ){

		document.getElementById("mensaje2").innerHTML = "El campo de contraseña no puede estar en blanco";

	}else{
	var count = 0;
		 usuarios.forEach(function(e){

		 	if(e == document.getElementById("usuario").value){
		 		count++;
		 		console.log(count)
		 	}

		});

		 if(count==1){
		 	window.location = "muro.html";
		  } else {
		 	alert("Usuario no registrado");
		 }
	 
	} 
   
  });
});




