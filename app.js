var pResultado;
var pScore;
var imgPlayer;
var imgIa;
var spanGanados;
var spanPerdidos;
const opciones = ['piedra','papel','tijeras'];
var ganados = 0;
var perdidos = 0;

window.onload = function(){ //Crear los listeners del evento click para los 3 botones

	inicializar(); // obtener los elementos html que iran cambiando durante el desarrollo del juego

	const botones = document.querySelectorAll('button');
	botones.forEach(function(boton){
		boton.addEventListener('click', startGame);
	});
}

function startGame(eventoBoton){

	//determinar eleccion del jugador
	const playerChoice = eventoBoton.currentTarget.id;

	//determinar eleccion de IA
	const iaChoice = getIaChoice();
	
	//mostrar imagenes de las jugadas realizadas
	imgPlayer.src = "imagenes/"+playerChoice+".png";
	imgIa.src = "imagenes/"+iaChoice+".png";

	//determinar al ganador
	const playerWinner = isPlayerWinner(playerChoice, iaChoice);

	//mostrar resultados
	pResultado.innerHTML = `Has ${playerWinner === true ? 'ganado' : 'perdido'}
							escogiendo <strong>${playerChoice}</strong> en contra de
							<strong>${iaChoice}</strong>`;
	if (playerWinner) {
		ganados++;
		spanGanados.innerHTML = `${ganados}`;
	}else if(playerWinner === null){
		pResultado.innerHTML = "Empate";
	}else{
		perdidos++;
		spanPerdidos.innerHTML = `${perdidos}`;
	}

}

function isPlayerWinner(player, ia){

	if (player === ia){
		return null;
	}

	if (player === 'piedra'){

		if (ia === 'papel'){
			return false;
		}else{
			return true;
		}

	}else if (player === 'papel'){

		if (ia === 'piedra'){
			return true;
		}else{
			return false;
		}

	}else{

		if (ia === 'piedra'){
			return false;
		}else{
			return true;
		}
	}

}

function getIaChoice(){

	var numero = Math.round(Math.random()*2);
	return opciones[numero];
}

function inicializar(){

	pResultado = document.querySelector('#resultado');
	pScore = document.querySelector('#score');
 	imgPlayer = document.querySelector('#player_choice');
 	imgIa = document.querySelector('#ia_choice');
 	spanGanados = document.querySelector('#ganados');
 	spanPerdidos = document.querySelector('#perdidos');
}