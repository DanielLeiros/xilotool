import React from "react";

export default function calcularDimensoesSimples (tipo,dimensao, valor) {
	let resultado;
	if(dimensao === "l"){
		switch (tipo){
			case "Viga Bi-apoiada em MLC":
				resultado = valor/17;
				break;
			case "Viga Triapoiada":
				resultado = valor/200;
				break;			
			case "Travessa Bi-apoiada c/ Balanço em MLC":
				resultado = valor/17;
				break;			
			case "Treliça c/ Tirante em MLC":
				resultado = valor/40;
				break;
			case "Arco em MLC":
				resultado = valor/50;
				break;
			case "Treliça em MLC":
				resultado = valor/12;
				break;
			case "Tesoura em MLC 2":
				resultado = valor/8;
				break;
			case "Grelha MLC":
				resultado = valor/20;
				break;
		}
	}else if(dimensao === "h"){
		switch (tipo){
			case "Viga Bi-apoiada em MLC":
				resultado = valor*17;
				break;
			case "Viga Triapoiada":
				resultado = valor*200;
				break;			
			case "Travessa Bi-apoiada c/ Balanço em MLC":
				resultado = valor*17;
				break;			
			case "Treliça c/ Tirante em MLC":
				resultado = valor*40;
				break;
			case "Arco em MLC":
				resultado = valor*50;
				break;
			case "Treliça em MLC":
				resultado = valor*12;
				break;
			case "Tesoura em MLC 2":
				resultado = valor*8;
				break;
			case "Grelha MLC":
				resultado = valor*20;
				break;
		}
	}
	return resultado
}

// function calcularDimensoesAlturaDupla(tipo,dimensao, valor0, valor1){
// 	let resultado0, resultado2
// 	if(dimensao === "l"){
// 		switch (tipo){
// 			case "Viga Bi-apoiada e Corde de duas águas em MLC":
// 				resultado0 = valor/17;
// 				resultado1 = valor/17;
// 				break;
// 			case "Tesoura em MLC":
// 				resultado0 = valor/17;
// 				resultado1 = valor/17;
// 				break;
// 		}
// 	}else if(dimensao === "h"){
// 		switch (tipo){
// 			case "Viga Bi-apoiada e Corde de duas águas em MLC":
// 				resultado0 = valor/17;
// 				resultado1 = valor/17;
// 				break;
// 			case "Tesoura em MLC":
// 				resultado0 = valor/17;
// 				resultado1 = valor/17;
// 				break;
// 		}
// 	}
// 	return [resultado0, resultado1]
// }


// function calcularDimensoesCompostas(tipo,dimensao, valor0, valor1){
// 	let resultado0, resultado1;
// 	if(dimensao === "s"){
// 		switch(tipo){
// 			case "Sistema Pórtico c/ Tirante em MLC":
// 				resultado = valor/17;
// 				break;
// 			case "Sistema Pórtico Curvo em MLC":
// 				resultado = valor/17;
// 				break;
// 			case "Sistema Pórtico em MLC":
// 				resultado = valor/17;
// 				break;
// 		}		
// 	}else if(tipo === "h"){
// 		switch(tipo){
// 			case "Sistema Pórtico c/ Tirante em MLC":
// 				resultado = valor/17;
// 				break;
// 			case "Sistema Pórtico Curvo em MLC":
// 				resultado = valor/17;
// 				break;
// 			case "Sistema Pórtico em MLC":
// 				resultado = valor/17;
// 				break;
// 		}		
// 	}
// 	return [resultado0, resultado1]
// }
// 			