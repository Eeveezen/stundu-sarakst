import Stunda from "./Stunda";

function Diena(props) {
    const pirmdienasStundas = [
        "datortikli",
        "datortikli",
        "programmesana",
        "programmesana"
    ];
    const otradienasStundas = [
        "datortikli",
        "datortikli",
        "programmesana",
        "programmesana"
    ];
    const tresdienasStundas = [
        "datortikli",
        "datortikli",
        "programmesana",
        "programmesana"
    ];
    const ceturdienasStundas = [
        "datortikli",
        "datortikli",
        "programmesana",
        "programmesana"
    ];
    const piektdienasStundas = [
        "datortikli",
        "datortikli",
        "programmesana",
        "programmesana"
    ];
    return (
    <>
        <p>sodien ir {props.nosaukums}</p>
        <ol>
        <Stunda name={pirmdienasStundas[0]}/>
        <Stunda name={pirmdienasStundas[1]}/>
        <Stunda name={pirmdienasStundas[2]}/>
        <Stunda name={pirmdienasStundas[3]}/>
        </ol>
    </>
    );
} 

export default Diena;