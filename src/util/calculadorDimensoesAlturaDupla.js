export default function calcularDimensoesAlturaDupla(tipo,dimensao, valor){
	console.log(tipo, dimensao, valor)
	let resultado0, resultado1
	if(dimensao === "l"){
		switch (tipo){
			case "Viga Bi-apoiada e Corte de duas águas em MLC":
				resultado0 = valor/30;
				resultado1 = valor/16;
				break;
			case "Tesoura em MLC":
				resultado0 = valor/30;
				resultado1 = valor/16;
				break;
			default:
				break;
		}
	}else if(dimensao === "h"){
		switch (tipo){
			case "Viga Bi-apoiada e Corte de duas águas em MLC":
				resultado0 = valor*30/16;
				resultado1 = valor*30;
				break;
			case "Tesoura em MLC":
				resultado0 = valor*30/16;
				resultado1 = valor*30;
				break;
			default:
				break;
		}
	}else if(dimensao === "h1"){
		switch (tipo){
			case "Viga Bi-apoiada e Corte de duas águas em MLC":
				resultado0 = valor*16/30;
				resultado1 = valor*16;
				break;
			case "Tesoura em MLC":
				resultado0 = valor*16/30;
				resultado1 = valor*16;
				break;
			default:
				break;
		}
	}
	return [resultado0.toFixed(2), resultado1.toFixed(2)]
}
