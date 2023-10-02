import Diena from "./Diena";

function App() {
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

