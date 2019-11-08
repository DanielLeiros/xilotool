import React, {useEffect, useState} from "react";
import {msg} from "./msg";

const LegVigaBiapMlc = () => {
        return (
            <div className="row">
                <div className="info col-6">
                    {msg("legenda")+": "}
                    <li><u>{msg("l")}</u></li>  
                    <li><u>{msg("e")}</u></li> 
                    <li><u>{msg("h")}</u></li>
                    <li><u>{msg("b")}</u></li>
                </div>
                <div className="info col-6">
                    {msg("vão e espaçamentos possíveis")+": "}
                    <li><u>{"L - " + msg("<") + " 40"}</u></li>
                    <li><u>{"E - 5 "+msg("conj a") +" 7m"}</u></li>
                </div>
            </div>
        )
    }

    const LegPorticoAtirantado = () => {
        return (
            <div className="row">
                <div className="info col-6">
                    {msg("legenda")+": "}
                    <li><u>{msg("l")}</u></li>
                    <li><u>{msg("e")}</u></li>
                    <li><u>{msg("a")}</u></li> 
                    <li><u>{msg("h")}</u></li>
                    <li><u>{msg("b")}</u></li>
                    <li><u>{msg("s1")}</u></li>
                    <li><u>{msg("s2")}</u></li>
                </div>
                <div className="info col-6">
                    {msg("vão e espaçamentos possíveis")+": "}
                    <li><u>{"L - 10 " + msg("conj a")+ " 25m"}</u></li>
                    <li><u>{"E - 5 " + msg("conj a")+ " 7m"}</u></li>
                    <li><u>{"a - " + msg("<=")+ " 15º"}</u></li>
                </div>
            </div>
        )
    }

    const LegVigaVagao = () => {
        return (
            <div className="row">
                <div className="info col-6">
                    {msg("legenda")+": "}
                    <li><u>{msg("l")}</u></li>
                    <li><u>{msg("e")}</u></li>
                    <li><u>{msg("a")} </u></li>
                    <li><u>{msg("h0h1")}</u></li>
                    <li><u>{msg("b")}</u></li>
                </div>
                <div className="info col-6">
                    {msg("vão e espaçamentos possíveis")+": "}
                    <li><u>{"L - 10 " + msg("conj a")+ " 30m"}</u></li>
                    <li><u>{"E - 5 " + msg("conj a")+ " 7m"}</u></li>
                    <li><u>{"a - " + msg("<=")+ " 15º"}</u></li>
                </div>
            </div>
        )
    }

    const LegVigaComDuasAguas = () => {
        return (
            <div className="row">
                <div className="info col-6">
                    {msg("legenda")+": "}
                    <li><u>{msg("l")}</u></li>
                    <li><u>{msg("e")}</u></li>
                    <li><u>{msg("a")}</u></li>
                    <li><u>{msg("h0h1")}</u></li>
                    <li><u>{msg("b")}</u></li>
                </div>
                <div className="info col-6">
                    {msg("vão e espaçamentos possíveis")+": "}
                    <li><u>{"L - 10 " + msg("conj a")+ " 40m"}</u></li>
                    <li><u>{"E - 5 " + msg("conj a")+ " 7m"}</u></li>
                    <li><u>{"a - 3º " + msg("conj a")+ " 10    º"}</u></li>
                </div>
            </div>
        )
    }

    const LegVigaBiapComBalanco = () => {
        return (
            <div className="row">
                <div className="info col-6">
                    {msg("legenda")+": "}
                    <li><u>{msg("l0")}</u></li>
                    <li><u>{msg("l1")}</u></li>
                    <li><u>{msg("e")}</u></li>
                    <li><u>{msg("a")}</u></li>
                    <li><u>{msg("h0h1")}</u></li>
                    <li><u>{msg("b")}</u></li>
                </div>
                <div className="info col-6">
                    {msg("vão e espaçamentos possíveis")+": "}
                    <li><u>{"E - 5 " + msg("conj a")+ " 7m"}</u></li>
                    <li><u>{"a - 2º " + msg("conj a")+ " 12º"}</u></li>
                </div>
            </div>
        )
    }

    const LegVigaComberturaDuasAguas = () => {
        return (
            <div className="row">
                <div className="info col-6">
                    {msg("legenda")+": "}
                    <li><u>{msg("l")}</u></li>
                    <li><u>{msg("e")}</u></li>
                    <li><u>{msg("a")}</u></li>
                    <li><u>{msg("h")}</u></li>
                    <li><u>{msg("b")}</u></li>
                </div>
                <div className="info col-6">
                    {msg("vão e espaçamentos possíveis")+": "}
                    <li><u>{"L - 5" + msg("conj a")+ " 7m"}</u></li>
                    <li><u>{"E - 5" + msg("conj a")+ " 10m"}</u></li>
                    <li><u>{"a - máx 12º"}</u></li>
                </div>
            </div>
        )
    }

    const LegPorticoEmDuasAguas= () => {
        return (
            <div className="row">
                <div className="info col-6">
                    {msg("legenda")+": "}
                    <li><u>{msg("l")}</u></li>
                    <li><u>{msg("h0h1")}</u></li>
                    <li><u>{msg("e")}</u></li>
                    <li><u>{msg("a")}</u></li>
                    <li><u>{msg("b")}</u></li>
                </div>
                <div className="info col-6">
                    {msg("vão e espaçamentos possíveis")+": "}
                    <li><u>{"E - 5 " + msg("conj a")+ " 10m"}</u></li>
                    <li><u>{"a - 5 " + msg("conj a")+ " 30º"}</u></li>
                </div>
            </div>
        )
    }

    const LegArco = () => {
        return (
            <div className="row">
                <div className="info col-6">
                    {msg("legenda")+": "}
                    <li><u>{msg("l")}</u></li>
                    <li><u>{msg("e")}</u></li>
                    <li><u>{msg("f")}</u></li>
                    <li><u>{msg("h")}</u></li>
                    <li><u>{msg("b")}</u></li>
                    <li><u>{msg("123art")}</u></li>
                </div>
                <div className="info col-6">
                    {msg("vão e espaçamentos possíveis")+": "}
                    <li><u>{"L - 20 " + msg("conj a")+ " 100m"}</u></li>
                    <li><u>{"E - 5 " + msg("conj a")+ " 10m"}</u></li>
                </div>
            </div>
        )
    }

    const LegTrelicaBanzoParalelo = () => {
        return (
            <div className="row">
                <div className="info col-6">
                    {msg("legenda")+": "}
                    <li><u>{msg("l")}</u></li>
                    <li><u>{msg("h")}</u></li>
                    <li><u>{msg("b")}</u></li>
                </div>
                <div className="info col-6">
                    {msg("vão e espaçamentos possíveis")+": "}
                    <li><u>{"L - 10 " + msg("conj a")+ " 80m"}</u></li>
                </div>
            </div>
        )
    }

    const LegTrelicaBanzoInclinado = () => {
        return (
            <div className="row">
                <div className="info col-6">
                    {msg("legenda")+": "}
                    <li><u>{msg("l")}</u></li>
                    <li><u>{msg("h")}</u></li>
                    <li><u>{msg("e")}</u></li>
                </div>
                <div className="info col-6">
                    {msg("vão e espaçamentos possíveis")+": "}
                    <li><u>{"L - 5 " + msg("conj a")+ " 15m"}</u></li>
                    <li><u>{"E - 2 " + msg("conj a")+ " 4m"}</u></li>
                    <li><u>{"a -  " + msg("inclinacaoIdeal")+ " 10º"}</u></li>
                </div>
            </div>
        )
    }

    const LegGrelha = () => {
        return (
            <div className="row">
                <div className="info col-6">
                    {msg("legenda")+": "}
                    <li><u>{msg("l")}</u></li>
                    <li><u>{msg("h")}</u></li>
                    <li><u>{msg("b")}</u></li>
                </div>
                <div className="info col-6">
                    {msg("vão e espaçamentos possíveis")+": "}
                    <li><u>{"L - " + msg("<")+ " 20m"}</u></li>
                </div>
            </div>
        )
    }

export const Legenda = (props) => {
    const [peca, setPeca] = useState('');

    useEffect(()=>{
        setPeca(props.name);
    }, [props]);

    const escolhePeca = () => {
        switch (peca) {
            case "Viga Bi-apoiada (MLC)":
                return LegVigaBiapMlc();
            case "Viga em duas águas - curva (MLC)":
                return LegVigaComDuasAguas();
            case "Viga de cobertura em duas águas (MLC)":
                return LegVigaComberturaDuasAguas();
            case "Viga Bi-apoiada c/ Balanço (MLC)":
                return LegVigaBiapComBalanco();
            case "Viga vagão (MLC)":
                return LegVigaVagao();
            case "Viga em duas águas (MLC)":
                return LegVigaComDuasAguas();
            case "VigaBiapComBalanco":
                return LegVigaBiapComBalanco();
            case "Arco (MLC)":
                return LegArco();
            case "Pórtico em duas águas (MLC)":
                return LegPorticoEmDuasAguas();
            case "Treliça de banzo inclinado":
                return LegTrelicaBanzoInclinado();
            case "Treliça de banzo paralelo":
                return LegTrelicaBanzoParalelo();
            case "Pórtico atirantado (MLC)":
                return LegPorticoAtirantado();
            case "Grelha (MLC)":
                return LegGrelha();
            default:
                return null
        }
    }

    return (
        <>
            {escolhePeca()}
        </>
    )
}		

export default Legenda;