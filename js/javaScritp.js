window.onload=function(){
document.getElementById("empezar").onclick=welcome;
document.getElementById("buttonContinuar").onclick=listoJuega;
document.getElementById("buttonCancelar").onclick=listoJuega;
}

function welcome(){
		var userName=document.getElementById("nameUser").value;

	if(userName!=""){
		document.getElementById("viewName").innerHTML=userName.toUpperCase();
		document.getElementById("accesoTrivia").style.display="block";
		document.getElementById("nameTrivia").style.display="none";


	}else{
		alert("Escribe tu nombre primero");
	}

}
function listoJuega(){
	var respuestaUno=document.getElementById("pregunta1");
	var respuestaDos=document.getElementsByName('pregunta2');
	var respuestaTres=document.getElementsByName('pregunta3');
	var respuestaCuatro=document.getElementsByName('pregunta4');
	var condicion=0;
	var contadorCorrecta=-1;
	var contadorIncorrecta=-1;
	var respuestaCorrecta= new Array();
	var respuestaIncorrecta=new Array();

	document.getElementById('buttonContinuar').addEventListener('click',function(){
			document.getElementById("trivia1").style.display="block";
			document.getElementById("accesoTrivia").style.display="none";
	});
	document.getElementById('preguntaUno').addEventListener('click',function(){

			if(respuestaUno.value!=""){
					if(respuestaUno.value>=4){
						alert("Ingrese un numero menor a cuatro");
					}else{
						document.getElementById("trivia1").style.display="none";
						document.getElementById("trivia2").style.display="block";

						if(respuestaUno.value !== "1"){
							respuestaIncorrecta[++contadorIncorrecta]="Pregunta 1";
							}
						else{
							respuestaCorrecta[++contadorCorrecta]="Pregunta 1";
						}
					}

			}else{
				alert("Ingrese la respuesta");

			}
	});
	document.getElementById('preguntaDos').addEventListener('click',function(){
		document.getElementById("trivia2").style.display="none";
		document.getElementById("trivia3").style.display="block";
		for(var i=0; i<respuestaDos.length; i++) {
			if(respuestaDos[i].checked==true && respuestaDos[i].value=="Jefferson Agustín Farfán Guadalupe"){
				condicion=1;
			}
		}
		if(condicion==1){
			contadorCorrecta++;
		respuestaCorrecta[contadorCorrecta]="Pregunta 2 ";
		}else{
			contadorIncorrecta++;
		respuestaIncorrecta[contadorIncorrecta]="Pregunta 2";

		}
	});
	document.getElementById('preguntaTres').addEventListener('click',function(){
		document.getElementById("trivia3").style.display="none";
		document.getElementById("trivia4").style.display="block";
		var condicionTres;
		for(var i=0; i<respuestaTres.length; i++) {
			if(respuestaTres[i].checked==true && respuestaTres[i].value=="1"){
				condicionTres=1
			}
		}
		if(condicionTres==1){
			contadorCorrecta++;
			respuestaCorrecta[contadorCorrecta]="Pregunta 3";
		}else{
			contadorIncorrecta++;
			respuestaIncorrecta[contadorIncorrecta]="Pregunta 3";
		}
	});
	document.getElementById('preguntaCuatro').addEventListener('click',function(){
		document.getElementById("trivia4").style.display="none";
		document.getElementById("resultado").style.display="block";
		var condicionCuatro;
		for(var i=0; i<respuestaCuatro.length; i++) {
			if(respuestaCuatro[i].checked==true && respuestaCuatro[i].value=="3"){
				condicionCuatro=1;
				}
		}
		if(condicionCuatro==1){
			contadorCorrecta++;
			respuestaCorrecta[contadorCorrecta]="Pregunta 4";
		}else{
			contadorIncorrecta++;
			respuestaIncorrecta[contadorIncorrecta]="Pregunta 4";
		}
		var total=contadorCorrecta+contadorIncorrecta;
		text = "<ol>";
		for (var i = 0; i<=contadorCorrecta; i++) {
			text += "<li>" + respuestaCorrecta[i]; + "</li>";
		};
		text += "</ol>";
			document.getElementById("respuestaCorrecta").innerHTML=text;

		text2 = "<ol>";
		for (var k = 0; k<=contadorIncorrecta; k++) {
			text2 += "<li>" + respuestaIncorrecta[k]; + "</li>";
		};
		text2 += "</ol>";
			document.getElementById("respuestaIncorrecta").innerHTML=text2;
debugger
			if(respuestaCorrecta.length>respuestaIncorrecta.length){
				document.getElementById("calificacion")	.innerHTML="FELICIDADES!!!!";
			}
			if (respuestaCorrecta.length==respuestaIncorrecta.length) {
				document.getElementById("calificacion")	.innerHTML="INTENTALO! PUEDES MEJORAR";
			}
			if(respuestaCorrecta.length<respuestaIncorrecta.length){
				document.getElementById("calificacion")	.innerHTML="UY! QUE PASO!";
			}

				});
	document.getElementById('buttonCancelar').addEventListener('click',function(){
		document.getElementById("notificacion").innerHTML="!JUGAREMOS PARA LA PROXIMA!";

		document.getElementById('accesoTrivia').style.display="none";
		document.getElementById('triviaCancelado').style.display="block";
	});

// respuestas


}







//window.addEventListener('load',listoJuega,false);
