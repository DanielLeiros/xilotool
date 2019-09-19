import React from "react";
import welcome from "./welcome"
import calcularDimensoesSimples from "./util/calculadorDimensoesSimples.js";
import calcularDimensoesAlturaDupla from "./util/calculadorDimensoesAlturaDupla.js";
import calcularDimensoesCompostas from "./util/calculadorDimensoesCompostas.js";
import {msg} from "./util/msg.js";
import vigaBiApMLC from "./imagens/viga-biap-em-mlc.png";
import vigaTriApMLC from './imagens/viga-tri-apoiada.png';
import vigaBiApCorteDuasAguasMLC from "./imagens/viga-bia-corte-duas-aguas-em-mlc.png";
import TesouraMLC from "./imagens/tesoura-em-mlc.png";
import TravBiapBalMLC from "./imagens/travessa-biap-bal-em-mlc.png";
import TrelicaTiranteMLC from "./imagens/trelica-com-tirante-em-mlc.png";
import TrelicaMLC from "./imagens/trelica-em-mlc.png";
import Tesoura2MLC from "./imagens/tesoura-em-mlc-2.png";
import ArcoMLC from "./imagens/arco-em-mlc.png";



class Pieces extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			h: null,
			h1:null,
			l: null,
			s0:null,
			s1:null,
			selectedPiece: {
				name: "",
				group: "",
				description: "",
				inclination:"",
				freeSpan: "",
				formula:"",
			},
			pieces: [
				{name: "Viga Bi-apoiada em MLC", group: "vigas", description: "vigasDescricao",inclination: "<5º", freeSpan:"<40", formula: "simples", imagem: vigaBiApMLC},

				{name: "Viga Triapoiada" , group: "vigas",description: "vigasDescricao",  inclination: "0º", freeSpan:"10-30", formula: "simples", imagem:vigaTriApMLC},
				
				{name: "Viga Bi-apoiada e Corte de duas águas em MLC", group: "vigas",description: "vigasDescricao", inclination: "3º-10º", freeSpan:"10-40", formula: "alturaDupla", imagem: vigaBiApCorteDuasAguasMLC},
				
				{name: "Tesoura em MLC", group: "arcos",description:"arcosDescricao", inclination: "3º-10º", freeSpan:"10-40", formula: "alturaDupla", imagem: TesouraMLC},
				
				{name: "Travessa Bi-apoiada c/ Balanço em MLC" , group: "arcos",description:"arcosDescricao", inclination: "<5º", freeSpan:"<40", formula: "simples", imagem: TravBiapBalMLC},							
				
				{name: "Sistema Pórtico c/ Tirante em MLC", group: "porticos", description:"porticoDescricao", inclination: ">= 15º", freeSpan:"<10-30", formula: "composta"},
				
				{name: "Sistema Pórtico Curvo em MLC", group: "porticos", description:"porticoDescricao", inclination: "<15º", freeSpan:"<15-40", formula: "composta"},
				
				{name: "Sistema Pórtico em MLC", group: "porticos", description:"porticoDescricao", inclination: "<15º", freeSpan:"<10-30", formula: "composta"},
				
				{name: "Treliça c/ Tirante em MLC", group: "trelicas",description:"trelicasDescricao", inclination: ">= 15º", freeSpan:"10-100", formula: "simples", imagem: TrelicaTiranteMLC},
				
				{name: "Arco em MLC", group: "arcos",description:"arcosDescricao", inclination: "í/L >= 0,144", freeSpan:"20-100", formula: "simples", imagem: ArcoMLC},
				
				{name: "Treliça em MLC", group: "trelicas",description:"trelicasDescricao", inclination: "0º", freeSpan:"30-80", formula: "simples", imagem: TrelicaMLC},
				
				{name: "Tesoura em MLC 2", group: "arcos",description:"arcosDescricao", inclination: ">=10º", freeSpan:"25-90", formula: "simples", imagem: Tesoura2MLC},
				
				{name: "Grelha MLC", group: "grelas",description:"grelasDescricao", inclination: "-", freeSpan:"<25m", formula: "simples"},

				{name: "Sistema Geodésico em MLC", group: "geodescos",description:"geodesicoDescricao", inclination: "-", freeSpan:"L<200m", formula: "semCalculo"}
			]
		}
	}

	componentDidUpdate(){
		let piece = this.state.pieces.filter(el => {
				return el.name === this.props.selectedPiece;
		})[0]
		if(piece){
			if(piece.name !== this.state.selectedPiece.name){
				this.setState({selectedPiece: piece, h: "", h1: "", l:"", s0:"", s1:""})
			}
		}
	}

	changeHSimples = (event) => {
		this.setState({
			h: event.target.value,
			l: calcularDimensoesSimples(event.target.name ,"h", event.target.value),
		})
	}

	changeLSimples = (event) => {
		this.setState({
			h: calcularDimensoesSimples(event.target.name ,"l", event.target.value),
			l: event.target.value,
		})
	}

	changeHAlturaDupla = (event) => {
		let results = calcularDimensoesAlturaDupla(event.target.name ,"h", event.target.value)
		if(results){	
			this.setState({
				h: event.target.value,
				h1: results[0],  
				l: results[1],
			})
		}
	}

	changeH1AlturaDupla = (event) => {
		let results = calcularDimensoesAlturaDupla(event.target.name ,"h1", event.target.value)
		if(results){
			this.setState({
				h: results[0],  
				h1: event.target.value,
				l: results[1],
			})
		}
	}

	changeLAlturaDupla = (event) => {
		let results = calcularDimensoesAlturaDupla(event.target.name ,"l", event.target.value)
		if(results){
			this.setState({
				h: results[0],
				h1: results[1],  
				l: event.target.value,
			})
		}
	}

	changeS0 = (event) => {
		this.setState({
			s0 : event.target.value
		})
	}

	changeS1 = (event) => {
		this.setState({
			s1 : event.target.value
		})
	}

	calculateByComposedHigh = (event) => {
		if(this.state.s0 && this.state.s1){
			let resposta = calcularDimensoesCompostas(event.target.name, parseInt(this.state.s0), parseInt(this.state.s1))
			this.setState({
				h: resposta
			})
		}
	}
			
	render(){
		const name= this.props.selectedPiece;
		const {selectedPiece, h, h1,l, s0, s1} = this.state;
		const {group} = selectedPiece;
		const descricaoPeca = selectedPiece.description;
		const placeholder = msg("input-placeholder");
		const input = "input-field sub-border-brow m-sm-b";
		const size5 = " col-md-5 col-sm-12";
		const size3 = " col-md-6 col-sm-12";

		const simples = (
			<div className="col-md-12 text-center no-padding-sides">				
					<div className={"inline-content" + size5}>	
						<label>H: </label>					
						<span className={input}>
							<input type="number" value={h} name={name} placeholder={placeholder} onChange={(event) => this.changeHSimples(event)}/> 
							m
						</span>
					</div>
					<div className={"inline-content" + size5}>
						<label>L: </label>
						<span className={input}>
							<input type="number" value={l} name={name} placeholder={placeholder}  onChange={(event) => this.changeLSimples(event)}/> 
							m
						</span>
					</div>
			
			</div>
		);

		const alturaDupla = (
			<div className="col-md-12 text-center no-padding-sides">
				<div className={"inline-content" + size3}>
					<label>H<sub>0</sub>:</label>
					<span className={input}>
						<input type="number" value={h} name={name} placeholder={placeholder} onChange={(event) => this.changeHAlturaDupla(event)}/> 
						m
					</span>
				</div>
				<div className={"inline-content" + size3}>
					<label>H<sub>1</sub>:</label>
					<span className={input}>
						<input type="number" value={h1} name={name} placeholder={placeholder} onChange={(event) => this.changeH1AlturaDupla(event)}/> 
						m
					</span>
				</div>
				<div className={"inline-content" + size3}>
					<label>L:</label>
					<span className={input}>	
						<input type="number" value={l} name={name} placeholder={placeholder} onChange={(event) => this.changeLAlturaDupla(event)}/> 
						m
					</span>
				</div>
			</div>
		);

		const composta = (
			<div className="col-md-12 text-center no-padding-sides">
				<div className={"inline-content" + size3}>
					<label>S<sub>0</sub>:</label>
					<span className={input}>
						<input type="number" value={s0} name={name} placeholder={placeholder} onChange={(event) => this.changeS0(event)}/> 
						m
					</span>
				</div>
				<div className={"inline-content" + size3}>
					<label>S<sub>1</sub>:</label>
					<span className={input}>
						<input type="number" value={s1} name={name} placeholder={placeholder} onChange={(event) => this.changeS1(event)}/> 
						m
					</span>
				</div>
					<button className="btn btn-primary btn-result" name={name} onClick={(event)=> this.calculateByComposedHigh(event)}> Calcular </button>
					<label>H:</label>
					<span className="span-result">{h} m</span>
			</div>
		);

		const info = (
			<span className="info col-md-12 text-center">
				<span>{msg("inclinacao")} {selectedPiece.inclination}</span>
				<span>{msg("vao-livre")} {selectedPiece.freeSpan}</span>
			</span>
		)

		const descricao = (
			<span className="col-md-12">
				<img src={selectedPiece.imagem} />
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
                		{selectedPiece.name ? info : null}
                	</div>
                	<div className="row justify-content-md-center">
		   				{selectedPiece ?

							(selectedPiece.formula === "simples" ?
							simples :
							selectedPiece.formula === "alturaDupla" ?
							alturaDupla : 
							selectedPiece.formula === "composta" ?
							composta :
							selectedPiece.formula === "semCalculo" ?
							null : welcome() 
		   					):
		   					welcome()
			   				}
                	</div>
                	<div className="row justify-content-md-center">
                		{selectedPiece.name ? descricao : null}
                	</div>
                </div>
            </div>
   		)
	}
}

export default Pieces;