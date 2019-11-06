import React, { useState, useEffect } from "react";
import {msg} from "../util/msg" 

const Arco = (props) => {
    const [b,setB] = useState('');
    const [h,setH] = useState('');
    const [f,setF] = useState('');
    const [l,setL] = useState('');
    const [pecaSelecionada, setPecaSelecionada] = useState('');

    useEffect(()=>{
        setPecaSelecionada(props.name);
        setH('');
        setF('');
        setB('');
        setL('');
    }, [props.name])

    const changeL = (l) => {
        setH((l/40).toFixed(2));
        setF((l/4).toFixed(2));
        setB((l/120).toFixed(2));
        setL(l);
    }

    const changeH = (h) => {        
        setL((h*40).toFixed(2));
        setF((10*h).toFixed(2));
        setB((h/3).toFixed(2));
        setH(h);
    }
    
    const changeF = (f) => {
        setH((f/10).toFixed(2));
        setL((f*4).toFixed(2));
        setB((f/30).toFixed(2));
        setF(f);
    }

    const changeB = (b) => {
        setH((3*b).toFixed(2));
        setF((30*b).toFixed(2));
        setL((b*120).toFixed(2));
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
                <label>F: </label>					
                <span className={input}>
                    <input type="number" value={f} name={pecaSelecionada} placeholder={placeholder} onChange={(event) => changeF(event.target.value)}/> 
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
                <label>H: </label>
                <span className={input}>
                    <input type="number" value={h} name={pecaSelecionada} placeholder={placeholder}  onChange={(event) => changeH(event.target.value)}/> 
                    m
                </span>
            </div>
        </div>
    )
}
export default Arco;