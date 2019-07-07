export const msg = (prop) =>{
	const lang = window.localStorage.getItem("language");
	if(lang === "US"){
		return en[prop]
	}else{
		return pt[prop]
	}
}

const en = 
{
	"Viga Bi-apoiada em MLC":"Bi-supported beam in GLT",
	"Viga Triapoiada":"Triaploid beam",
	"Viga Bi-apoiada e Corte de duas águas em MLC":"Bi-supported beam and two-way cutting in GLT",
	"Tesoura em MLC":"Scissors in GLT",
	"Travessa Bi-apoiada c/ Balanço em MLC": "Bi-supported crossbar with Balance in GLT",
	"Sistema Pórtico c/ Tirante em MLC":"Gantry System with strap in GLT",
	"Sistema Pórtico Curvo em MLC":"Curved Portico System in GLT",
	"Sistema Pórtico em MLC":"Gantry System in GLT",
	"Treliça c/ Tirante em MLC":"Truss with strap in GLT",
	"Arco em MLC":"Arc in GLT",
	"Treliça em MLC":"Truss in GLT",
	"Tesoura em MLC 2":"Scissors in GLT 2",
	"Grelha MLC":"Grid GLT",
	"Sistema Geodésico em MLC":"Geodetic system in GLT",
	"input-placeholder":"Enter a value...",
	"inclinacao":"Inclination:",
	"vao-livre":"Gap:"
}

const pt = 
{
	"Viga Bi-apoiada em MLC":"Viga Bi-apoiada em MLC",
	"Viga Triapoiada":"Viga Triapoiada",
	"Viga Bi-apoiada e Corte de duas águas em MLC":"Viga Bi-apoiada e Corde de duas águas em MLC",
	"Tesoura em MLC":"Tesoura em MLC",
	"Travessa Bi-apoiada c/ Balanço em MLC": "Travessa Bi-apoiada c/ Balanço em MLC",
	"Sistema Pórtico c/ Tirante em MLC":"Sistema Pórtico c/ Tirante em MLC",
	"Sistema Pórtico Curvo em MLC":"Sistema Pórtico Curvo em MLC",
	"Sistema Pórtico em MLC":"Sistema Pórtico em MLC",
	"Treliça c/ Tirante em MLC":"Treliça c/ Tirante em MLC",
	"Arco em MLC":"Arco em MLC",
	"Treliça em MLC":"Treliça em MLC",
	"Tesoura em MLC 2":"Tesoura em MLC 2",
	"Grelha MLC":"Grelha MLC",
	"Sistema Geodésico em MLC":"Sistema Geodésico em MLC",
	"input-placeholder":"Insira um valor...",
	"inclinacao":"Inclinação:",
	"vao-livre":"Vão livre:",
}