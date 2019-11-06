export default function calcularDimensoesTriplas (tipo,dimensao, valor) {
	let resultado = {};
	if(dimensao === "l"){
		switch (tipo){
			case "Viga Bi-apoiada (MLC)":
				resultado.h = valor/17;
				resultado.b = valor/51
				break;	
			case "Viga de cobertura em duas águas (MLC)":
				resultado.h = valor/40;
				resultado.b = valor/120;
				break;	
			case "Treliça de banzo paralelo":
				resultado.h = valor/12;
				resultado.b = valor/48;
				break;
			case "Grelha (MLC)":
				resultado.h = valor/20;
				resultado.b = valor/80;
				break;				
			default:
				break;
		}
		resultado.h = resultado.h.toFixed(2)
		resultado.b = resultado.b.toFixed(2)
	}else if(dimensao === "h"){
		switch (tipo){
			case "Viga Bi-apoiada (MLC)":
				resultado.l = valor*17;
				resultado.b = valor/3;
				break;			
			case "Viga de cobertura em duas águas (MLC)":
				resultado.l = valor*40;
				resultado.b = valor/3;
				break;			
			case "Treliça de banzo paralelo":
				resultado.l = valor*12;
				resultado.b = valor/4;
				break;	
			case "Grelha (MLC)":
				resultado.l = valor*20;
				resultado.b = valor/4;
				break;			
			default:
				break;
		}
		resultado.b = resultado.b.toFixed(2)
		resultado.l = resultado.l.toFixed(2)
	} else if (dimensao === "b"){
		switch (tipo){
			case "Viga Bi-apoiada (MLC)":
				resultado.h = valor*3;
				resultado.l = valor*51;
				break;			
			case "Viga de cobertura em duas águas (MLC)":
				resultado.h = valor*3;
				resultado.l = valor*120;
				break;			
			case "Treliça de banzo paralelo":
				resultado.h = valor*4;
				resultado.l = valor*48;
				break;	
			case "Grelha (MLC)":
				resultado.h = valor*4;
				resultado.l = valor*80;
				break;
		default:
				break;
		}
		resultado.h = resultado.h.toFixed(2)
		resultado.l = resultado.l.toFixed(2)
	}
	return resultado;
}
