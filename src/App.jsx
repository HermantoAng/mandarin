import { useState } from "react";
import "./App.css";
import Mandarin from "./component/Mandarin";
import Nav from "./component/Nav";
function App() {
  return (
    <section className="relative">
      <Nav />
      <section className="flex flex-col items-center justify-center min-h-[100vh] translate-y-[4em] z-10">
        <div className="font-bold ">MANDARIN DICTIONARY</div>
        <div id="hsk1">
          <Mandarin />
        </div>
        <div id="hsk2">HSK 2</div>
      </section>
    </section>
  );
}

export default App;
