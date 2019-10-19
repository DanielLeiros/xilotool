export const msg = (prop) =>{
	const lang = window.localStorage.getItem("language");
	if(lang === "US"){
		return en[prop]
	}else{
		return pt[prop]
	}
}

const pt = 
{
	"boas-vindas": "Bem vindo!",
	"contato": "Contatos: ",
	"xilotoolEh": "O Xilo Tool é uma ferramenta expedita para pré-dimensionamento de elementos estruturais em madeira. A  ferramenta permitirá que estudantes e projetistas explorem de maneira dinâmica as diversas possibilidades de apresentação, variação dimensional e tipos possíveis de peças construtivas do material citado. A plataforma abrange tanto o caráter didático, mais voltado à prática e aplicação, como o profissional, aplicado à fase de estudo preliminar de projetos em desenvolvimento nas áreas de arquitetura ou engenharia.",
	"Viga Bi-apoiada em MLC":"Viga Bi-apoiada em MLC",
	"Viga Triapoiada":"Viga Triapoiada",
	"Viga Bi-apoiada e Corte de duas águas em MLC":"Viga Bi-apoiada e Corte de duas águas em MLC",
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
	"vigas":"Vigas",
	"grelhas":"Grelhas",
	"arcos": "Arcos",
	"trelicas": "Treliças",
	"tesouras": "Tesouras",
	"porticos": "Pórticos",
	"geodesicos": "Geodésicos",
	"vigasDescricao": "São elementos estruturais lineares, sólidos e rígidos que podem ser empregados em posição horizontal ou inclinada. Engel as classifica como elemento de seção ativa e são projetadas para resistirem aos esforços de flexão, cisalhamento, torção, tração e compressão.  Diferentes tipologias de viga: simplesmente apoiada, em balanço; bi-engastada, viga Gerber; contínua, viga coluna; viga balcão; Vierendeel." ,
	"grelhasDescricao": "São estruturas constituídas por barras/vigas interceptadas entre si cujos carregamentos ocorrem na direção perpendicular ao plano. As grelhas são sistemas de seção ativa.",
	"arcosDescricao": "São barras curvas nas quais os esforços solicitantes são predominantemente de compressão normal, por vezes recebendo de forma simultânea a ação do momento fletor. Tais como as vigas e as grelhas, são sistemas de seção ativa.",
	"trelicasDescricao": "As treliças são sistemas reticulados indeformáveis. Engel as classifica como elementos vetor ativos, os quais fazem a transferência de carregamentos por meio de elementos rígidos, interligados por nós, configurados na forma triangular. A eficiência das treliças depende da atuação individual de cada um desses elementos solicitados à  tração e à compressão.",
	"tesourasDescricao": "As tesouras são uma montagem de várias peças formando uma estrutura rígida, geralmente de forma triangular. São capazes de suportar cargas sobre vãos mais ou menos grandes, sem suporte intermediário.",
	"porticoDescricao": "São estruturas lineares planas, neles os esforços atuam de forma coplanar. Engel os classifica como elementos de seção ativa.Diferentes tipos de pórticos: pórtico simples, pórtico tridimensional, rígidos ou articulados.",
	"geodesicoDescricao": "São estruturas formadas por polígonos planos cuja interseção de seus vértices coincidem com uma superfície esférica ou oval. ",
}

const en = 
{
	"boas-vindas": "Welcome!",
	"contato": "Contacts: ",
	"xilotoolEh": "Xilo Tool is an expedited tool for pre-sizing selected wood elements. The tool selects students and designers to explore ways to choose the various presentation possibilities, dimensional variation, and possible types of constructional parts of the cited material. The platform covers both the didactic character, more focused on practice and application, as the professional, applied to the preliminary study phase of projects under development in the areas of architecture or engineering.",
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
	"vao-livre":"Gap:",
	"vigas":"Beams",
	"grelhas":"Beam Grid Systems",
	"arcos": "Archs",
	"trelicas": "Truss",
	"tesouras": "Scissors",
	"porticos": "Porticos",
	"geodesicos": "Geodesics",
	"vigasDescricao": "They are linear, solid and rigid structural elements that can be used in a horizontal or inclined position. By Engel classification they are section-active elements designed to withstand bending, shearing, torsion, tension strength and compression forces. Different types of beams- simply supported beam, cantilever; double-girder beam, Gerber beam; continuous beam, beam column; Vierendeel beam.",
	"grelhasDescricao": "They are structures created by interception of bars or beams whose loads occurs in the perpendicular to the plane direction. The grids are section-active system.",
	"arcosDescricao": "They are curved bars in which the compression forces are predominant, sometimes simultaneously receiving the action of the bending moment. The arches are section-active system.",
	"trelicasDescricao": "Trusses are non-deformable lattice systems. By Engel classification they are vector-active elements, which make the transfer of loads by means of rigid elements, interconnected by nodes, in the triangular arrangement. The efficiency of the trusses depends on the individual performance of each of these elements required for strength and compression.",
	"tesourasDescricao": "Scissors are a multi-piece assembly forming a rigid structure, usually triangular in shape. They are able to withstand loads on more or less large spans without intermediate support.",
	"porticoDescricao": "They are planar linear structures, in which the forces act in a coplanar way. By Engel classification they are section-active elements. Different types of portico - simple portic, three-dimensional, rigid, articulated.",
	"geodesicoDescricao": "They are structure shaped by planar polygons whose intersection of their vertices coincide with a spherical or oval surface.",

	}
