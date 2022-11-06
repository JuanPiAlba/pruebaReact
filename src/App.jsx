import React from "react";
import Container from "./components/Container.jsx/Container";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <h1 id="titulo">Hello Word</h1>
      <p id="descripcion">Esta es mi primera pagina de React!</p>
      {/* <Footer/> */}
      <Container />
    </>
  );
};

export default App;
