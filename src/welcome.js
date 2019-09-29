import React from "react";
import logo from "./imagens/logo_f_horizontal.png";
import { msg } from "./util/msg"


export default function welcome(){
	return(
		<div>
			<h2 className="welcome text-center">{msg("boas-vindas")}</h2>
			<div className="contaner-fluid" style={{textAlign: "center"}}>				
				<img src={logo} alt="logo xilotool"/>
				<div style={{textAlign:"center", padding: '0 40px 0 40px'}}>
					
					<p className="descricao-xilo">
						{msg("xilotoolEh")}
					</p>
				</div>
			</div>
		</div>
	)
}