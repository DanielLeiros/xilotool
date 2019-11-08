import React from "react";
import welcome from "./welcome"
import {msg} from "./util/msg.js";
import vigaBiApMLC from "./imagens/viga-biap-em-mlc.png";
import vigaBiApCorteDuasAguasMLC from "./imagens/viga-bia-corte-duas-aguas-em-mlc.png";
import TesouraMLC from "./imagens/tesoura-em-mlc.png";
import TravBiapBalMLC from "./imagens/travessa-biap-bal-em-mlc.png";
import TrelicaTiranteMLC from "./imagens/trelica-com-tirante-em-mlc.png";
import TrelicaMLC from "./imagens/trelica-em-mlc.png";
import Tesoura2MLC from "./imagens/tesoura-em-mlc-2.png";
import ArcoMLC from "./imagens/arco-em-mlc.png";
import Grelha from "./imagens/grelha-em-mlc.png";
import PorticoCTiranteMLC from "./imagens/portico-c-tirante-em-mlc.png";
import PorticoMLC from "./imagens/portico-em-mlc.png"; 
import Triplas from "./Peças/Triplas";
import VigaVagao from "./Peças/VigaVagao";
import VigaComDuasAguas from "./Peças/VigaComDuasAguas";
import VigaBiapComBalanco from "./Peças/VigaBiapComBalanco";
import Arco from "./Peças/Arco";
import PorticoEmDuasAguas from "./Peças/PorticoEmDuasAguas";
import TrelicaDeBanzoInclinado from "./Peças/TrelicaDeBanzoInclinado";
import PorticoAtirantado from "./Peças/PorticoAtirantado";
import Legenda from "./util/Legendas";

class PortalDePecas extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			selectedPiece: {
				name: "",
				group: "",
				description: "",
				freeSpan: "",
				formula:"",
			},
			pieces: [
				{name: "Viga Bi-apoiada (MLC)", group: "vigas", description: "vigasDescricao", component: "Triplas", image: vigaBiApMLC },

				{name: "Viga vagão (MLC)", group: "vigas", description: "vigasDescricao", component: "VigaVagao", image: vigaBiApMLC},
				
				{name: "Viga em duas águas (MLC)", group: "vigas",description: "vigasDescricao", component: "VigaComDuasAguas", image: vigaBiApCorteDuasAguasMLC},
				
				{name: "Viga em duas águas - curva (MLC)", group: "vigas",description:"vigasDescricao", component: "VigaComDuasAguas", image: TesouraMLC},
				
				{name: "Viga Bi-apoiada c/ Balanço (MLC)", group: "vigas",description:"vigasDescricao", component: "VigaBiapComBalanco", image: TravBiapBalMLC},							
				
				{name: "Pórtico atirantado (MLC)", group: "porticos", description:"porticoDescricao", component: "PorticoAtirantado", image: PorticoCTiranteMLC},
								
				{name: "Pórtico em duas águas (MLC)", group: "porticos", description:"porticoDescricao", component: "PorticoEmDuasAguas", image: PorticoMLC},
			
				{name: "Viga de cobertura em duas águas (MLC)", group: "vigas",description:"vigasDescricao", component: "Triplas", image: TrelicaTiranteMLC},
				
				{name: "Arco (MLC)", group: "arcos",description:"arcosDescricao", component: "Arco", image: ArcoMLC},
			
				{name: "Treliça de banzo paralelo", group: "trelicas",description:"trelicasDescricao", component: "Triplas", image: TrelicaMLC},
				
				{name: "Treliça de banzo inclinado", group: "trelicas",description:"trelicasDescricao", component: "TrelicaDeBanzoInclinado", image: Tesoura2MLC},
			
				{name: "Grelha (MLC)", group: "grelhas",description:"grelhasDescricao", component: "Triplas", image: Grelha},
			]
		}
	}

	componentDidUpdate(){
		let piece = this.state.pieces.filter(el => {
				return el.name === this.props.selectedPiece;
		})[0]
		if(piece){
			if(piece.name !== this.state.selectedPiece.name){
				this.setState({selectedPiece: piece, h: "", b: "", h1: "", l:"", s0:"", s1:""})
			}
		}
	}
			
	render(){
		const name= this.props.selectedPiece;
		const {selectedPiece} = this.state;
		const {group} = selectedPiece;
		const descricaoPeca = selectedPiece.description;

		const PecasManager = (selectedPiece) => {
			const { name, component } = selectedPiece
			switch (component) {
				case "Triplas":
					return <Triplas name={name} />;
				case "VigaVagao":
					return <VigaVagao name={name} />;
				case "VigaComDuasAguas":
					return <VigaComDuasAguas name={name} />;
				case "VigaBiapComBalanco":
					return <VigaBiapComBalanco name={name} />;
				case "Arco":
					return <Arco name={name} />;
				case "PorticoEmDuasAguas":
					return <PorticoEmDuasAguas name={name} />;
				case "TrelicaDeBanzoInclinado":
					return <TrelicaDeBanzoInclinado name={name} />;
				case "PorticoAtirantado":
					return <PorticoAtirantado name={name} />;
				default:
					return welcome();
			}
		}

		const descricao = (
			<span className="col-md-12">
				<img className="img-description" src={selectedPiece.image} alt={selectedPiece.name}/>
				<Legenda name={selectedPiece.name} />
			</span>
		)

		return (
            <div className="card">
                <div className="card-header">
                	{name ? 
	            		<div>
		            		<u>
		                		{msg(name)}
		                	</u>
							<div className="tooltip-w3"><span className="help-info">?</span>
							  <span className="tooltiptext-w3">{msg(group)}<br/>{msg(descricaoPeca)}</span>
							</div>
	                	</div> 
	                	:
	                	null}
                </div>
                <div className="card-body column">
                	<div className="row justify-content-md-center">
		   				{selectedPiece ? PecasManager(selectedPiece) : welcome()}
                	</div>
                	<div className="row justify-content-md-center">
                		{selectedPiece.name ? descricao : null}
                	</div>
                </div>
            </div>
   		)
	}
}

export default PortalDePecas;