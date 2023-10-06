import Diena from "./Diena";

function App() {


const visuDienuStunduSaraksts = [
  {
    diena: "pirmdiena" ,
    stundas: [
      "juju" ,
      "on" ,
      "that",
      "beat"
    ]
  },
  {
    diena: "otrdiena" ,
    stundas: [
      "watch me whip" ,
      "vwatxh mw neinei" ,
      "watch me whip whip.",
      "watch me neinie"
    ]
  },
  {
    diena: "tresdiena" ,
    stundas: [
      "Datortikli" ,
      "datortikli" ,
      "sistemas prog",
      "sistemas prog"
    ]
  } , 
  {
    diena: "ceturdiena" ,
    stundas: [
      "sistemu prog" ,
      "vesture" ,
      "latv. val.",
      "ya mum"
    ]
  },
  {
    diena: "piektdiena" ,
    stundas: [
      "your mum" ,
      "le madre" ,
      "tava mamma",
      "ya mum"
    ]
  }

]

  return (
    <>
    <h1>
      pickmin
    </h1>
      <Diena nosaukums="pirmdiena" Stundas={pirmdienasStundas}/>
      <Diena nosaukums="otradiena" Stundas={otradienasStundas}/>
      <Diena nosaukums="tresdiena" Stundas={tresdienasStundas}/>
      <Diena nosaukums="ceturdiena" Stundas={ceturdienasStundas}/>
      <Diena nosaukums="piektdiena" Stunda={piektdienasStundas}/>
    </>
  );
}

export default App;

