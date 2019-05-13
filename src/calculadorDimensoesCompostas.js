import React from "react";
export default function calcularDimensoesCompostas(tipo,dimensao, valor0, valor1){
	let resultado0, resultado1;
	if(dimensao === "s"){
		switch(tipo){
			case "Sistema Pórtico c/ Tirante em MLC":
				resultado = valor/17;
				break;
			case "Sistema Pórtico Curvo em MLC":
				resultado = valor/17;
				break;
			case "Sistema Pórtico em MLC":
				resultado = valor/17;
				break;
		}		
	}else if(tipo === "h"){
		switch(tipo){
			case "Sistema Pórtico c/ Tirante em MLC":
				resultado = valor/17;
				break;
			case "Sistema Pórtico Curvo em MLC":
				resultado = valor/17;
				break;
			case "Sistema Pórtico em MLC":
				resultado = valor/17;
				break;
		}		
	}
	return [resultado0, resultado1]
}
			