import React from "react";
import welcome from "./welcome"
import calcularDimensoesSimples from "./util/calculadorDimensoesSimples.js";
import calcularDimensoesAlturaDupla from "./util/calculadorDimensoesAlturaDupla.js";
import calcularDimensoesCompostas from "./util/calculadorDimensoesCompostas.js";

class Pieces extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			h: "",
			h1:"",
			l: "",
			s0:"",
			s1:"",
			selectedPiece: {
				name: "",
				inclination:"",
				freeSpan: "",
				formula:"",
			},
			pieces: [
				{name: "Viga Bi-apoiada em MLC", inclination: "<5º", freeSpan:"<40", formula: "simples"},

				{name: "Viga Triapoiada", inclination: "0º", freeSpan:"10-30", formula: "simples"},
				
				{name: "Viga Bi-apoiada e Corde de duas águas em MLC", inclination: "3º-10º", freeSpan:"10-40", formula: "alturaDupla"},
				
				{name: "Tesoura em MLC", inclination: "3º-10º", freeSpan:"10-40", formula: "alturaDupla"},
				
				{name: "Travessa Bi-apoiada c/ Balanço em MLC", inclination: "<5º", freeSpan:"<40", formula: "simples"},							
				
				{name: "Sistema Pórtico c/ Tirante em MLC", inclination: ">= 15º", freeSpan:"<10-30", formula: "composta"},
				
				{name: "Sistema Pórtico Curvo em MLC", inclination: "<15º", freeSpan:"<15-40", formula: "composta"},
				
				{name: "Sistema Pórtico em MLC", inclination: "<15º", freeSpan:"<10-30", formula: "composta"},
				
				{name: "Treliça c/ Tirante em MLC", inclination: ">= 15º", freeSpan:"10-100", formula: "simples"},
				
				{name: "Arco em MLC", inclination: "í/L >= 0,144", freeSpan:"20-100", formula: "simples"},
				
				{name: "Treliça em MLC", inclination: "0º", freeSpan:"30-80", formula: "simples"},
				
				{name: "Tesoura em MLC 2", inclination: ">=10º", freeSpan:"25-90", formula: "simples"},
				
				{name: "Grelha MLC", inclination: "-", freeSpan:"<25m", formula: "simples"}
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
		console.log("sdfasd",results)
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
			console.log(this.state.s0, this.state.s1)
			let resposta = calcularDimensoesCompostas(event.target.name, parseInt(this.state.s0), parseInt(this.state.s1))
			console.log(resposta, this.state.s0, this.state.s1)
			this.setState({
				h: resposta
			})
		}
	}
			
	render(){
		const name = this.props.selectedPiece;
		const placeholder = "Insira um valor...";
		const input5 = "no-border-brow col-md-5";
		const input3 = "no-border-brow col-md-3";

		const simples = (
			<div className="col-md-9">				
					<label>h: </label>					
					<input className={input5} value={this.state.h} name={name} placeholder={placeholder} onChange={(event) => this.changeHSimples(event)}/>
					<label>l: </label>
					<input className={input5} value={this.state.l} name={name} placeholder={placeholder}  onChange={(event) => this.changeLSimples(event)}/>
			</div>
		);

		const alturaDupla = (
			<div className="columns">
				<label>h<sub>0</sub>:</label>
				<input className={input3} value={this.state.h} name={name} placeholder={placeholder} onChange={(event) => this.changeHAlturaDupla(event)}/>
				<label>h<sub>1</sub>:</label>
				<input className={input3} value={this.state.h1} name={name} placeholder={placeholder} onChange={(event) => this.changeH1AlturaDupla(event)}/>
				<label>l:</label>
				<input className={input3} value={this.state.l} name={name} placeholder={placeholder} onChange={(event) => this.changeLAlturaDupla(event)}/>
			</div>
		);

		const composta = (
			<div className="columns">
				<label>s<sub>0</sub>:</label>
				<input className={input3} value={this.state.s0} name={name} placeholder={placeholder} onChange={(event) => this.changeS0(event)}/>
				<label>s<sub>1</sub>:</label>
				<input className={input3} value={this.state.s1} name={name} placeholder={placeholder} onChange={(event) => this.changeS1(event)}/>
				
				<button className="btn btn-primary btn-result" name={name} onClick={(event)=> this.calculateByComposedHigh(event)}> Calcular </button>
				<label>h:</label>
				<span className="span-result">{this.state.h}</span>
			</div>
		);

		const info = (
			<div>
				Inclinação: {this.state.selectedPiece.inclination} / Vão livre: {this.state.selectedPiece.freeSpan}
			</div>
		)

		return (
            <div className="card">
                <div className="card-header">
                	<u>{this.props.selectedPiece}</u>
                </div>
                <div className="card-body row justify-content-md-center">   
	   				{this.state.selectedPiece ?

						(this.state.selectedPiece.formula === "simples" ?
						simples :
						this.state.selectedPiece.formula === "alturaDupla" ?
						alturaDupla : 
						this.state.selectedPiece.formula === "composta" ?
						composta : welcome() 	
	   					):
	   					welcome()
		   				}
                </div>
            </div>
   		)
	}
}

export default Pieces;