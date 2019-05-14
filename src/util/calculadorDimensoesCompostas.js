import React from "react";
export default function calcularDimensoesCompostas(tipo, s0, s1){
	let resultado;
	switch(tipo){
		case "Sistema Pórtico c/ Tirante em MLC":
			resultado = (s0 + s1)/15;
			break;
		case "Sistema Pórtico Curvo em MLC":
			resultado = (s0 + s1)/15;
			break;
		case "Sistema Pórtico em MLC":
			resultado = (s0 + s1)/13;
			break;	
		default:
			break;
	}	
	return resultado
}
			