import React, { useState, useEffect } from "react";
import {msg} from "../util/msg" 

const VigaVagao = (props) => {
    const [b,setB] = useState('');
    const [h0,setH0] = useState('');
    const [h1,setH1] = useState('');
    const [l,setL] = useState('');
    const [l1,setL1] = useState('');
    const [pecaSelecionada, setPecaSelecionada] = useState('');

    useEffect(()=>{
        setPecaSelecionada(props.name);
        setH0('');
        setH1('');
        setB('');
        setL('');
        setL1('');
    }, [props.name])

    const changeL = (l) => {
        setH0((l/40).toFixed(2));
        setH1((l/12).toFixed(2));
        setB((l/120).toFixed(2));
        setL1((l/3).toFixed(2));
        setL(l);
    }

    const changeL1 = (l1) => {
        setH0(((l1*3)/40).toFixed(2));
        setH1((l1/4).toFixed(2));
        setB((l1/40).toFixed(2));
        setL((l1*3).toFixed(2));
        setL1(l1);        
    }

    const changeH0 = (h0) => {        
        setL((h0*40).toFixed(2));
        setH1((40*h0/12).toFixed(2));
        setB((h0/3).toFixed(2));
        setL1((40*h0/3).toFixed(2));
        setH0(h0);
    }
    
    const changeH1 = (h1) => {
        setH0((3*h1/10).toFixed(2));
        setL((h1*12).toFixed(2));
        setB((h1/10).toFixed(2));
        setL1((4*h1).toFixed(2));
        setH1(h1);
    }

    const changeB = (b) => {
        setH0((3*b).toFixed(2));
        setH1((10*b).toFixed(2));
        setL((b*120).toFixed(2));
        setL1((40*b).toFixed(2));
        setB(b);
    }

    const placeholder = msg("input-placeholder");
    const input = "input-field sub-border-brow m-sm-b";
    const sizeField = " col-lg-3 col-md-5 col-xs-12";

    return (
        <div className="col-md-12 text-center no-padding-sides">				
            <div className={"inline-content" + sizeField}>
                <label>L: </label>
                <span className={input}>
                    <input type="number" value={l} name={pecaSelecionada} placeholder={placeholder}  onChange={(event) => changeL(event.target.value)}/> 
                    m
                </span>
            </div>
            <div className={"inline-content" + sizeField}>
                <label>L1: </label>
                <span className={input}>
                    <input type="number" value={l1} name={pecaSelecionada} placeholder={placeholder}  onChange={(event) => changeL1(event.target.value)}/> 
                    m
                </span>
            </div>
            <div className={"inline-content" + sizeField }>	
                <label>B: </label>					
                <span className={input}>
                    <input type="number" value={b} name={pecaSelecionada} placeholder={placeholder} onChange={(event) => changeB(event.target.value)}/> 
                    m
                </span>
            </div>
            <br/>
            <div className={"inline-content" + sizeField}>
                <label>H0: </label>
                <span className={input}>
                    <input type="number" value={h0} name={pecaSelecionada} placeholder={placeholder}  onChange={(event) => changeH0(event.target.value)}/> 
                    m
                </span>
            </div>
            <div className={"inline-content" + sizeField}>	
                <label>H1: </label>					
                <span className={input}>
                    <input type="number" value={h1} name={pecaSelecionada} placeholder={placeholder} onChange={(event) => changeH1(event.target.value)}/> 
                    m
                </span>
            </div>
        </div>
    )
}
export default VigaVagao;