import { useState } from "react";
import "./App.css";
import Mandarin from "./component/Mandarin";
function App() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[100vh]">
      <div className="font-bold ">MANDARIN DICTIONARY</div>
      <div>
        <Mandarin />
      </div>
    </section>
  );
}

export default App;
