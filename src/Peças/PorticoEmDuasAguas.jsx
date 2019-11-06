import React, { useState, useEffect } from "react";
import {msg} from "../util/msg" 

const PorticoEmDuasAguas = (props) => {
    const [b,setB] = useState('');
    const [h0,setH0] = useState('');
    const [h1,setH1] = useState('');
    const [l,setL] = useState('');
    const [pecaSelecionada, setPecaSelecionada] = useState('');

    useEffect(()=>{
        setPecaSelecionada(props.name);
        setH0('');
        setH1('');
        setB('');
        setL('');
    }, [props.name])

    const changeL = (l) => {
        setH0(l/40);
        setH1(l/17);
        setB(l/51);
        setL(l);
    }

    const changeH0 = (h0) => {        
        setL(h0*40);
        setH1(40*h0/17);
        setB(40*h0/51);
        setH0(h0);
    }
    
    const changeH1 = (h1) => {
        setH0(17*h1/40);
        setL(h1*17);
        setB(h1/3);
        setH1(h1);
    }

    const changeB = (b) => {
        setH0(51*b/40);
        setH1(51*b/17);
        setL(b*51);
        setB(b);
    }

    const placeholder = msg("input-placeholder");
    const input = "input-field sub-border-brow m-sm-b";
    const size5 = " col-md-6 col-sm-12";

    return (
        <div className="col-md-12 text-center no-padding-sides">				
            <div className={"inline-content" + size5}>
                <label>L: </label>
                <span className={input}>
                    <input type="number" value={l} name={pecaSelecionada} placeholder={placeholder}  onChange={(event) => changeL(event.target.value)}/> 
                    m
                </span>
            </div>
            <div className={"inline-content" + size5}>	
                <label>B: </label>					
                <span className={input}>
                    <input type="number" value={b} name={pecaSelecionada} placeholder={placeholder} onChange={(event) => changeB(event.target.value)}/> 
                    m
                </span>
            </div>
            <div className={"inline-content" + size5}>
                <label>H0: </label>
                <span className={input}>
                    <input type="number" value={h0} name={pecaSelecionada} placeholder={placeholder}  onChange={(event) => changeH0(event.target.value)}/> 
                    m
                </span>
            </div>
            <div className={"inline-content" + size5}>	
                <label>H1: </label>					
                <span className={input}>
                    <input type="number" value={h1} name={pecaSelecionada} placeholder={placeholder} onChange={(event) => changeH1(event.target.value)}/> 
                    m
                </span>
            </div>
        </div>
    )
}
export default PorticoEmDuasAguas;