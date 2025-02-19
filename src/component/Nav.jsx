import React from "react";

export default function Nav() {
  return (
    <div className="fixed w-[100vw] h-[10vh] z-20">
      <div className="min-w-[100%] h-[10vh] bg-blue-400 flex flex-row justify-between items-center">
        <div className="float-left m-2 text-white font-bold">MANDARINDIKTI</div>
        <div className="mr-20">
          <a className="hover:text-white m-2" href="#hsk1">
            HSK 1
          </a>
          <a className="hover:text-white m-2" href="#hsk2">
            HSK 2
          </a>
        </div>
      </div>
    </div>
  );
}
