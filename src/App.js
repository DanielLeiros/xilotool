import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import logo from "./imagens/logo_cores.png";
import Pieces from "./pieces.js"

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      navIsOpen: false,
      navOpen: "App",
      toggle: "navbar-toggle"   
      
    }
  }

  handleToggleBar = () =>{
    let isOpen = !this.state.navIsOpen
    this.setState({
      navIsOpen: isOpen,
      navOpen: isOpen ? "App nav-open" : "App",
      toggle: isOpen ? "navbar-toggle toggled" : "navbar-toggle"    ,
      selectedPiece: "Xilotool"
    })
  }

  onChengePiece = (e) =>{
    this.setState({
      selectedPiece: e
    })
  }

  

  render(){
    const piecesList = [
      "Viga Bi-apoiada em MLC",
      "Viga Triapoiada",
      "Viga Bi-apoiada e Corde de duas águas em MLC",
      "Tesoura em MLC",
      "Travessa Bi-apoiada c/ Balanço em MLC",
      "Sistema Pórtico c/ Tirante em MLC",
      "Sistema Pórtico Curvo em MLC",
      "Sistema Pórtico em MLC",
      "Treliça c/ Tirante em MLC",
      "Arco em MLC",
      "Treliça em MLC",
      "Tesoura em MLC 2",
      "Grelha MLC"
    ]

    return (
      <div className={this.state.navOpen}>
        <div className="wrapper">
          <div className="sidebar colaps" data-color="grey-texture">
            <div className="logo">
              <a href="https://www.google.com" className="simple-text logo-normal">
                <img src={logo} alt="logo xilotool"/>
              </a>
            </div>
            <div className="sidebar-wrapper" id="sidebar-wrapper">
              <ul className="nav">
               <div className="select-piece">
                 <u>Selecione uma peça:</u>                   
               </div>
               {piecesList.map((el,i) =>{
                  return(
                   <li key={i}>
                      <a>
                        <div onClick={() => this.onChengePiece(el)} >
                          {el}
                        </div>
                      </a>
                    </li>
                  )
               })} 
               <br/>
                <br/> 
              </ul>
            </div>
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
                    <a className="nav-link" href="https://www.google.com">
                      <i className="now-ui-icons education_hat"></i>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="https://www.google.com">
                      <i className="now-ui-icons travel_info"></i>
                      </a>
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
                    <a href="https://www.creative-tim.com">
                      Creative Tim
                    </a>
                  </li>
                  <li>
                    <a href="http://presentation.creative-tim.com">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="http://blog.creative-tim.com">
                      Blog
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="copyright" id="copyright">
                <a href="https://www.invisionapp.com" rel="noopener noreferrer" target="_blank">Invision</a>. Coded by
                <a href="https://www.creative-tim.com" rel="noopener noreferrer" target="_blank">Creative Tim</a>.
              </div>
            </div>
          </footer> 
        </div>  
      </div>
    );
  }
}

export default App;
