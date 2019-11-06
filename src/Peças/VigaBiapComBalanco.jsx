import React, { useState, useEffect } from "react";
import {msg} from "../util/msg" 

const VigaBiapComBalanco = (props) => {
    const [b,setB] = useState('');
    const [h0,setH0] = useState('');
    const [h1,setH1] = useState('');
    const [h2,setH2] = useState('');
    const [l0,setL0] = useState('');
    const [l1,setL1] = useState('');
    const [pecaSelecionada, setPecaSelecionada] = useState('');

    useEffect(()=>{
        setPecaSelecionada(props.name);
        setH0('');
        setH1('');
        setH2('');
        setB('');
        setL0('');
        setL1('');
    }, [props.name])

    const changeL0 = (l0) => {
        setH0(3*l0/10);
        setH1(l0/15);
        setH2(3*l0/20);
        setB(l0/45);
        setL1(3*l0);
        setL0(l0);
    }

    const changeL1 = (l1) => {
        setH0(l1/10);
        setH1(l1/45);
        setH2(l1/20);
        setB(l1/135);
        setL1(l1);
        setL0(l1/3);        
    }

    const changeH0 = (h0) => {        
        setL0(h0*10/3);
        setH1(10*h0/45);
        setH2(h0/2);
        setB(10*h0/135);
        setL1(10*h0);
        setH0(h0);
    }
    
    const changeH1 = (h1) => {
        setH0(45*h1/10);
        setH1(h1);
        setH2(45*h1/20);
        setB(h1/3);
        setL1(45*h1);
        setL0(15*h1);
    }

    const changeH2 = (h2) => {
        setH0(2*h2);
        setH1(20*h2/45);
        setH2(h2);
        setB(20*l0/135);
        setL1(20*h2);
        setL0(20*h2/3);
    }

    const changeB = (b) => {
        setH0(135*b/10);
        setH1(3*b);
        setH2(135*b/20);
        setB(b);
        setL1(135*b);
        setL0(45*b);
    }

    const placeholder = msg("input-placeholder");
    const input = "input-field sub-border-brow m-sm-b";
    const size5 = " col-md-4 col-sm-12";

    return (
        <div className="col-md-12 text-center no-padding-sides">				
            <div className={"inline-content" + size5}>
                <label>L: </label>
                <span className={input}>
                    <input type="number" value={l0} name={pecaSelecionada} placeholder={placeholder}  onChange={(event) => changeL0(event.target.value)}/> 
                    m
                </span>
            </div>
            <div className={"inline-content" + size5}>
                <label>L1: </label>
                <span className={input}>
                    <input type="number" value={l1} name={pecaSelecionada} placeholder={placeholder}  onChange={(event) => changeL1(event.target.value)}/> 
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
            <div className={"inline-content" + size5}>	
                <label>H2: </label>					
                <span className={input}>
                    <input type="number" value={h2} name={pecaSelecionada} placeholder={placeholder} onChange={(event) => changeH2(event.target.value)}/> 
                    m
                </span>
            </div>
        </div>
    )
}
export default VigaBiapComBalanco;