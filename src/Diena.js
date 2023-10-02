import Stunda from "./Stunda";

function Diena(props) {

    const stunduSarakstsJSX = prop.stundas.map((stunda) => {
        return <Stunda name={stunda}/>
    })

    return (
    <>
        <p>sodien ir {props.nosaukums}</p>
        <ol>
        {stunduSarakstsJSX}
        </ol>
    </>
    );
} 

export default Diena;