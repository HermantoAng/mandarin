import React from "react";
import { hskVocabulary } from "./mandarinArr";

export default function Mandarin() {
  return (
    <div>
      <h1 className="justify-center items-center text-center mt-10">
        HSK 1 &amp; 2 Vocabulary
      </h1>
      {hskVocabulary.map((item, index) => (
        <div
          className="flex flex-row justify-left items-center ml-[10em]  p-2 text-[1.2em]"
          key={index}
        >
          <div className="p-2">
            <label>{index + 1}.</label>
          </div>
          <div className="bg-red-50 ">
            <p>{item.word} = </p>
          </div>
          <div>
            <p>{item.pinyin}</p>
          </div>
          <div>
            <p> / {item.meaning}</p>
          </div>
          <div>
            <b className="m-5 text-gray-400 text-[0.8em]">{item.level}</b>
          </div>
        </div>
      ))}
    </div>
  );
}
