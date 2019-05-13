import React from "react";
import calcularDimensoesSimples from "./calculadorDimensoesSimples.js";
import calcularDimensoesAlturaDupla from "./calculadorDimensoesAlturaDupla.js";

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
		console.log("piece",piece)
		if(piece){
			if(piece.name !== this.state.selectedPiece.name){
				this.setState({
						selectedPiece: piece,
						h: "",
						h1: "",
						l:"",
						s0:"",
						s1:""
					})
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
			
	render(){

		const simples = (
			<div className="columns">
				<input value={this.state.h} name={this.props.selectedPiece} placeholder={"Insira um valor..."} onChange={(e) => this.changeHSimples(e)}/>
				<input value={this.state.l} name={this.props.selectedPiece} placeholder={"Insira um valor..."}  onChange={(e) => this.changeLSimples(e)}/>
			</div>
		);

		const alturaDupla = (
			<div className="columns">
				<input value={this.state.h} name={this.props.selectedPiece} placeholder={"Insira um valor..."} onChange={(e) => this.changeHAlturaDupla(e)}/>
				<input value={this.state.h1} name={this.props.selectedPiece} placeholder={"Insira um valor..."} onChange={(e) => this.changeH1AlturaDupla(e)}/>
				<input value={this.state.l} name={this.props.selectedPiece} placeholder={"Insira um valor..."} onChange={(e) => this.changeLAlturaDupla(e)}/>
			</div>
		);

		const composta = (
			<div className="columns">
				<label>Alguma coisa:</label>
				<input value={this.state.s0} name={this.props.selectedPiece} placeholder={"Insira um valor..."} onChange={(e) => this.changeHAlturaDupla(e)}/>
				<input value={this.state.s1} name={this.props.selectedPiece} placeholder={"Insira um valor..."} onChange={(e) => this.changeH1AlturaDupla(e)}/>
				<span>=></span>
				<output value={this.state.h} name={this.props.selectedPiece} />
			</div>
		);


		return (
            <div className="card">
              <div className="card-header">
                <u>{this.props.selectedPiece}</u>
              </div>
              <div className="card-body ">
   				{this.state.selectedPiece ?		
					(this.state.selectedPiece.formula === "simples" ?
					simples :
					this.state.selectedPiece.formula === "alturaDupla" ?
					alturaDupla : 
					this.state.selectedPiece.formula === "composta" ?
					composta : null 	
   					):
   					null
   				}
              </div>
            </div>
   		)
	}
}

export default Pieces;