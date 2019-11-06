import React, {useEffect} from "react";
import {msg} from "./msg";

export const LegVigaBiapMlc = (props) => {
    useEffect(()=>{},[props])
    return (
        <div className="row">
            <div className="info col-6">
                {msg("legenda")+": "}
                <br/>
                {msg("l")}
                <br/>
                {msg("e")} 
                <br/>
                {msg("h")}
                <br/>
                {msg("b")}
            </div>
            <div className="info col-6">
                {msg("vão e espaçamentos possíveis")+": "}
                <br/>
                {"L - " + msg("<") + " 40"}
                <br/>
                {"E - 5 "+msg("conj a") +" 7m"}
            </div>
        </div>
    )
}

export const LegPorticoAtirantado = () => {
    return (
        <div className="row">
            <div className="info col-6">
                <div className="row">
                    <div className="col-6">
                        {msg("legenda")+": "}
                        <br/>
                        {msg("l")}
                        <br/>
                        {msg("e")}
                        <br/>
                        {msg("a")} 
                        <br/>               
                        {msg("h")}
                        <br/>
                        {msg("b")}
                    </div>
                    <div className="col-6"> 
                        <br/>               
                        {msg("s1")}
                        <br/>
                        {msg("s2")}
                    </div>
                </div>
            </div>
            <div className="info col-6">
                {msg("vão e espaçamentos possíveis")+": "}
                <br/>
                {"L - 10 " + msg("conj a")+ " 25m"}
                <br/>
                {"E - 5 " + msg("conj a")+ " 7m"}
                <br/>
                {"a - " + msg("<=")+ " 15º"}
            </div>
        </div>
    )
}

export const LegVigaVagao = () => {
    return (
        <div className="row">
            <div className="info col-6">
                <div className="row">
                    <div className="col-6">
                        {msg("legenda")+": "}
                        <br/>
                        {msg("l")}
                        <br/>
                        {msg("e")}
                        <br/>
                        {msg("a")} 
                        <br/>               
                        {msg("h0h1")}
                        <br/>
                        {msg("b")}
                    </div>
                </div>
            </div>
            <div className="info col-6">
                {msg("vão e espaçamentos possíveis")+": "}
                <br/>
                {"L - 10 " + msg("conj a")+ " 30m"}
                <br/>
                {"E - 5 " + msg("conj a")+ " 7m"}
                <br/>
                {"a - " + msg("<=")+ " 15º"}
            </div>
        </div>
    )
}

export const LegVigaComDuasAguas = () => {
    return (
        <div className="row">
            <div className="info col-6">
                <div className="row">
                    <div className="col-6">
                        {msg("legenda")+": "}
                        <br/>
                        {msg("l")}
                        <br/>
                        {msg("e")}
                        <br/>
                        {msg("a")} 
                        <br/>               
                        {msg("h0h1")}
                        <br/>
                        {msg("b")}
                    </div>
                </div>
            </div>
            <div className="info col-6">
                {msg("vão e espaçamentos possíveis")+": "}
                <br/>
                {"L - 10 " + msg("conj a")+ " 40m"}
                <br/>
                {"E - 5 " + msg("conj a")+ " 7m"}
                <br/>
                {"a - 3º " + msg("conj a")+ " 10    º"}
            </div>
        </div>
    )
}

export const LegVigaBiapComBalanco = () => {
    return (
        <div className="row">
            <div className="info col-6">
                <div className="row">
                    <div className="col-6">
                        {msg("legenda")+": "}
                        <br/>
                        {msg("l0")}
                        <br/>
                        {msg("l1")}
                        <br/>
                        {msg("e")}
                        <br/>
                        {msg("a")} 
                        <br/>               
                        {msg("h0h1")}
                        <br/>
                        {msg("b")}
                    </div>
                </div>
            </div>
            <div className="info col-6">
                {msg("vão e espaçamentos possíveis")+": "}
                <br/>
                {"E - 5 " + msg("conj a")+ " 7m"}
                <br/>
                {"a - 2º " + msg("conj a")+ " 12º"}
            </div>
        </div>
    )
}

export const LegVigaComberturaDuasAguas = () => {
    return (
        <div className="row">
            <div className="info col-6">
                <div className="row">
                    <div className="col-6">
                        {msg("legenda")+": "}
                        <br/>
                        {msg("l")}
                        <br/>
                        {msg("e")}
                        <br/>
                        {msg("a")} 
                        <br/>               
                        {msg("h")}
                        <br/>
                        {msg("b")}
                    </div>
                </div>
            </div>
            <div className="info col-6">
                {msg("vão e espaçamentos possíveis")+": "}
                <br/>
                {"L - 5" + msg("conj a")+ " 7m"}
                <br/>
                {"E - 5" + msg("conj a")+ " 10m"}
                <br/>
                {"a - máx 12º"}
            </div>
        </div>
    )
}

export const LegPorticoEmDuasAguas= () => {
    return (
        <div className="row">
            <div className="info col-6">
                <div className="row">
                    <div className="col-6">
                        {msg("legenda")+": "}
                        <br/>
                        {msg("l")}
                        <br/>
                        {msg("h0h1")}
                        <br/>
                        {msg("e")} 
                        <br/>               
                        {msg("a")}
                        <br/>
                        {msg("b")}
                    </div>
                </div>
            </div>
            <div className="info col-6">
                {msg("vão e espaçamentos possíveis")+": "}
                <br/>
                {"E - 5 " + msg("conj a")+ " 10m"}
                <br/> 
                {"a - 5 " + msg("conj a")+ " 30º"}
            </div>
        </div>
    )
}

export const LegArco = () => {
    return (
        <div className="row">
            <div className="info col-6">
                <div className="row">
                    <div className="col-6">
                        {msg("legenda")+": "}
                        <br/>
                        {msg("l")}
                        <br/>
                        {msg("e")}
                        <br/>
                        {msg("f")} 
                        <br/>               
                        {msg("h")}
                        <br/>
                        {msg("b")}
                        <br/>
                        {msg("123art")}
                    </div>
                </div>
            </div>
            <div className="info col-6">
                {msg("vão e espaçamentos possíveis")+": "}
                <br/>
                {"L - 20 " + msg("conj a")+ " 100m"}
                <br/>
                {"E - 5 " + msg("conj a")+ " 10m"}
            </div>
        </div>
    )
}

export const LegTrelicaBanzoParalelo = () => {
    return (
        <div className="row">
            <div className="info col-6">
                <div className="row">
                    <div className="col-6">
                        {msg("legenda")+": "}
                        <br/>
                        {msg("l")}
                        <br/>               
                        {msg("h")}
                        <br/>
                        {msg("b")}
                    </div>
                </div>
            </div>
            <div className="info col-6">
                {msg("vão e espaçamentos possíveis")+": "}
                <br/>
                {"L - 10 " + msg("conj a")+ " 80m"}
            </div>
        </div>
    )
}

export const LegTrelicaBanzoInclinado = () => {
    return (
        <div className="row">
            <div className="info col-6">
                <div className="row">
                    <div className="col-6">
                        {msg("legenda")+": "}
                        <br/>
                        {msg("l")}
                        <br/>               
                        {msg("h")}
                        <br/>
                        {msg("e")}
                    </div>
                </div>
            </div>
            <div className="info col-6">
                {msg("vão e espaçamentos possíveis")+": "}
                <br/>
                {"L - 5 " + msg("conj a")+ " 15m"}
                <br/>
                {"E - 2 " + msg("conj a")+ " 4m"}
                <br/>
                {"a -  " + msg("inclinacaoIdeal")+ " 10º"}
            </div>
        </div>
    )
}

export const LegGrelha = () => {
    return (
        <div className="row">
            <div className="info col-6">
                <div className="row">
                    <div className="col-6">
                        {msg("legenda")+": "}
                        <br/>
                        {msg("l")}
                        <br/>               
                        {msg("h")}
                        <br/>
                        {msg("b")}
                    </div>
                </div>
            </div>
            <div className="info col-6">
                {msg("vão e espaçamentos possíveis")+": "}
                <br/>
                {"L - " + msg("<")+ " 20m"}
            </div>
        </div>
    )
}