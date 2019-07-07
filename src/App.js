import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import logo from "./imagens/logo.png";
import Pieces from "./pieces.js";
import ReactFlagsSelect from 'react-flags-select';
import 'react-flags-select/css/react-flags-select.css';
import 'react-flags-select/scss/react-flags-select.scss';
import {msg} from "./util/msg.js" 

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      navIsOpen: false,
      navOpen: "App",
      toggle: "navbar-toggle",   
      defaultLang: "BR",
    }
  }

  componentWillMount(){
    const lang = window.localStorage.getItem("language");
    if(lang === "US"){
      this.setState({defaultLang:"US"})
    }
  }

  handleToggleBar = () =>{
    let isOpen = !this.state.navIsOpen
    this.setState({
      navIsOpen: isOpen,
      navOpen: isOpen ? "App nav-open" : "App",
      toggle: isOpen ? "navbar-toggle toggled" : "navbar-toggle"    ,
    })
  }

  onChengePiece = (e) =>{
    this.setState({
      selectedPiece: e
    })
  }

  onSelectLang = (e) =>{
    window.localStorage.setItem("language",e);
    this.setState({defaultLang: e})
  }

  

  render(){
    const piecesList = [
      "Viga Bi-apoiada em MLC",
      "Viga Triapoiada",
      "Viga Bi-apoiada e Corte de duas águas em MLC",
      "Tesoura em MLC",
      "Travessa Bi-apoiada c/ Balanço em MLC",
      "Sistema Pórtico c/ Tirante em MLC",
      "Sistema Pórtico Curvo em MLC",
      "Sistema Pórtico em MLC",
      "Treliça c/ Tirante em MLC",
      "Arco em MLC",
      "Treliça em MLC",
      "Tesoura em MLC 2",
      "Grelha MLC",
      "Sistema Geodésico em MLC"
    ]

    return (
      <div className={this.state.navOpen}>
        <div className="wrapper">
          <div className="sidebar colaps" data-color="wood-texture">
            <div className="logo">
              <a href="#" className="simple-text logo-normal">
                <img src={logo} alt="logo xilotool"/>
              </a>
            </div>
          {/*Criação dos ítens sidebar - Itera sobre o vetor que guarda os nomes das peças e printa como menu*/}
            <div className="sidebar-wrapper" id="sidebar-wrapper">
              <ul className="nav">
               <div className="select-piece">
               </div>
               {piecesList.map((el,i) =>{
                  return(
                   <li key={i}>
                      <a>
                        <div onClick={() => this.onChengePiece(el)} >
                          {msg(el)}
                        </div>
                      </a>
                    </li>
                  )
               })} 
               <br/>
                <br/> 
              </ul>
            </div>
          {/*Fim dos ítens da sidebar*/}            
          </div>
        </div>
        <div className="main-panel" id="main-panel">
          <nav className="navbar navbar-expand-lg navbar-transparent bg-primary navbar-absolute">
            <div className="container-fluid">
              <div className="navbar-wrapper">
                <div className={this.state.toggle} onClick={this.handleToggleBar}>
                  <button type="button" className="navbar-toggler">
                    <span className="navbar-toggler-bar bar1"></span>
                    <span className="navbar-toggler-bar bar2"></span>
                    <span className="navbar-toggler-bar bar3"></span>
                  </button>
                </div>
              </div>
              <div className="collapse navbar-collapse justify-content-end" id="navigation">
                <ul className="navbar-nav">
                   <li className="nav-item">
                    <a className="nav-link" href="https://www.labem.ct.ufrn.br/">
                      <span>Labem</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="https://www.facebook.com/csufrn/">
                      <span>CS UFRN</span>
                      </a>
                  </li>
                  <li className="nav-item">
                    <ReactFlagsSelect 
                      countries={["US", "BR"]} 
                      customLabels={{"US": "en-US","BR": "pt-BR"}} 
                      defaultCountry={this.state.defaultLang}
                      onSelect={this.onSelectLang}
                      />
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="panel-header panel-header-sm" >
          </div>
          <div className="content" style={{padding: "0px 30px"}}>
            <div className="row">
              <div className="col-md-12">
          {/*Chamando componente para calcular e imprimir na tela!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!11*/}
                <Pieces selectedPiece={this.state.selectedPiece}/>
          {/*Componente chamado e impresso na tela com sucesso ou quase!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!11*/}
              </div>
            </div>
          </div>
            
          <footer className="footer">
            <div className="container-fluid">
              <nav>
                <ul>
                  <li>
                    <a href="https://www.labem.ct.ufrn.br/">
                      Labem
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/csufrn/">
                      CS
                    </a>
                  </li>
                </ul>
              </nav>
             </div>
          </footer> 
        </div>  
      </div>
    );
  }
}

export default App;
