import calcularDimensoesTriplas from "../util/calculadorDimensoesTriplas.js";
import React, { useState, useEffect } from "react";
import {msg} from "../util/msg" 

const Triplas = (props) => {
    const [b,setB] = useState('');
    const [h,setH] = useState('');
    const [l,setL] = useState('');
    const [pecaSelecionada, setPecaSelecionada] = useState('');

    useEffect(()=>{
        setPecaSelecionada(props.name);
        setH('');
        setB('');
        setL('');
    }, [props.name])

	const changeHTriplas = (event) => {
		const resultado = calcularDimensoesTriplas(event.target.name ,"h", event.target.value)
        setB(resultado.b);
        setH(event.target.value);
        setL(resultado.l)
    }

	const changeLTriplas = (event) => {
		const resultado = calcularDimensoesTriplas(event.target.name ,"l", event.target.value)
        setB(resultado.b);
        setH(resultado.h);
        setL(event.target.value)
    }

	const changeBTriplas = (event) => {
		const resultado = calcularDimensoesTriplas(event.target.name ,"b", event.target.value)
        setB(event.target.value);
        setH(resultado.h);
        setL(resultado.l)
	}

    const placeholder = msg("input-placeholder");
    const input = "input-field sub-border-brow m-sm-b";
    const size5 = " col-md-4 col-sm-12";

    return (
        <div className="col-md-12 text-center no-padding-sides">				
            <div className={"inline-content" + size5}>
                <label>L: </label>
                <span className={input}>
                    <input type="number" value={l} name={pecaSelecionada} placeholder={placeholder}  onChange={(event) => changeLTriplas(event)}/> 
                    m
                </span>
            </div>
            <div className={"inline-content" + size5}>	
                <label>H: </label>					
                <span className={input}>
                    <input type="number" value={h} name={pecaSelecionada} placeholder={placeholder} onChange={(event) => changeHTriplas(event)}/> 
                    m
                </span>
            </div>
            <div className={"inline-content" + size5}>	
                <label>B: </label>					
                <span className={input}>
                    <input type="number" value={b} name={pecaSelecionada} placeholder={placeholder} onChange={(event) => changeBTriplas(event)}/> 
                    m
                </span>
            </div>
        </div>
    )
}

export default Triplas;