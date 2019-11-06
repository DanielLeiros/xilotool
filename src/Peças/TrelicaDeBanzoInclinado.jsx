import React, { useState, useEffect } from "react";
import {msg} from "../util/msg" 

const TrelicaDeBanzoInclinado = (props) => {
    const [h,setH] = useState('');
    const [l,setL] = useState('');
    const [pecaSelecionada, setPecaSelecionada] = useState('');

    useEffect(()=>{
        setPecaSelecionada(props.name);
        setH('');
        setL('');
    }, [props.name])

    const changeL = (l) => {
        setH(l/8);
        setL(l);
    }

    const changeH = (h) => {        
        setL(h*8);
        setH(h);
    }

    const placeholder = msg("input-placeholder");
    const input = "input-field sub-border-brow m-sm-b";
    const size5 = " col-md-4 col-sm-12";

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
                <label>H: </label>
                <span className={input}>
                    <input type="number" value={h} name={pecaSelecionada} placeholder={placeholder}  onChange={(event) => changeH(event.target.value)}/> 
                    m
                </span>
            </div>
        </div>
    )
}
export default TrelicaDeBanzoInclinado;