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
			default:
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
			default:
				break;
		}
	}
	return resultado.toFixed(2)
}
