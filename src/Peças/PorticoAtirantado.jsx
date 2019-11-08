import React, { useState, useEffect } from "react";
import {msg} from "../util/msg" 

const Arco = (props) => {
    const [s1,setS1] = useState('');
    const [s2,setS2] = useState('');
    const [h,setH] = useState(' Resultado ');
    const [b,setB] = useState(' Resultado ');
    const [pecaSelecionada, setPecaSelecionada] = useState('');

    useEffect(()=>{
        setPecaSelecionada(props.name);
        setH('Resultado');
        setS1('');
        setS2('');
        setB('Resultado');
    }, [props.name])

    const calcularValores = () => {
        const x = Number(s1)
        const y = Number(s2)
        if(x > 0 && y > 0){
            setH(((x + y)/15).toFixed(2))
            setB(((y + x)/45).toFixed(2))
        }  
    }

    const placeholder = msg("input-placeholder");
    const input = "input-field sub-border-brow m-sm-b";
    const size3 = " col-md-3 col-sm-12";
    const size2 = " col-md-2 col-sm-12";

    return (
        <div className="col-md-12 text-center no-padding-sides">				
            <div className={"inline-content" + size3}>
                <label>S1: </label>
                <span className={input}>
                    <input type="number" value={s1} name={pecaSelecionada} placeholder={placeholder}  onChange={(event) => setS1(event.target.value)}/> 
                    m
                </span>
            </div>
            <div className={"inline-content" + size3}>	
                <label>S2: </label>					
                <span className={input}>
                    <input type="number" value={s2} name={pecaSelecionada} placeholder={placeholder} onChange={(event) => setS2(event.target.value)}/> 
                    m
                </span>
            </div>
            <button className="btn btn-primary col-md-1 col-sm-12 btn-calcular" onClick={()=> calcularValores()}>{msg("calcular")}</button>
            <div className={"inline-content" + size2}>	
                <label>H: </label>					
                <span className={input}>
                    <output name={pecaSelecionada}>{h}</output>
                    m
                </span>
            </div>
            <div className={"inline-content" + size2}>
                <label>B: </label>
                <span className={input}>
                    <output name={pecaSelecionada}>{b}</output> 
                    m
                </span>
            </div>
        </div>
    )
}
export default Arco;