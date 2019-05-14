import React from "react";
import logo from "./imagens/logo_f_horizontal.png";


export default function welcome(){
	return(
		<div className="row justify-content-md-center">
			<img src={logo} alt="logo xilotool" className="col-md-8"/>
			<div style={{textAlign:"center", padding: '0 40px 0 40px'}}>
				<h2>Bem Vindo!</h2>
				<p>
					O xilotool é Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore reiciendis laboriosam accusantium iure voluptatum 
					sapiente excepturi esse voluptatibus unde obcaecati eum neque repellat commodi repudiandae consectetur eaque, magni quo itaque.
					O xilotool é Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore reiciendis laboriosam accusantium iure voluptatum 
					sapiente excepturi esse voluptatibus unde obcaecati eum neque repellat commodi repudiandae consectetur eaque, magni quo itaque.
					luptatibus unde obcaecati eum neque repellat commodi repudiandae consectetur eaque, magni quo itaque.
				</p>
			</div>
		</div>
	)
}