import React from "react";
import { useState } from "react";

import "./Faqs.css";

function Faqs() {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  const data = [
    {
      Question: "Question 1",
      Answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vulputate pellentesque suscipit. Proin a nisi id nisl dignissim pharetra eu ut eros. Sed cursus nisi arcu, ac imperdiet sem auctor in. Proin sed lacus ac diam molestie commodo. Donec eget quam vitae mauris facilisis vehicula. Integer ullamcorper ligula at augue molestie, molestie tempor nibh molestie. Mauris aliquet felis elit, at accumsan tellus maximus eget.",
    },
    {
      Question: "Question 2",
      Answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vulputate pellentesque suscipit. Proin a nisi id nisl dignissim pharetra eu ut eros. Sed cursus nisi arcu, ac imperdiet sem auctor in. Proin sed lacus ac diam molestie commodo. Donec eget quam vitae mauris facilisis vehicula. Integer ullamcorper ligula at augue molestie, molestie tempor nibh molestie. Mauris aliquet felis elit, at accumsan tellus maximus eget.",
    },
    {
      Question: "Question 3",
      Answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vulputate pellentesque suscipit. Proin a nisi id nisl dignissim pharetra eu ut eros. Sed cursus nisi arcu, ac imperdiet sem auctor in. Proin sed lacus ac diam molestie commodo. Donec eget quam vitae mauris facilisis vehicula. Integer ullamcorper ligula at augue molestie, molestie tempor nibh molestie. Mauris aliquet felis elit, at accumsan tellus maximus eget.",
    },
  ];

  return (
    <div className="container">
      <div className="">
        <h1 className="header">Frequently Asked Questions</h1>
        {data.map((item, i) => (
          <div className="item" key={i}>
            <div className="title" onClick={() => toggle(i)}>
              <h2>{item.Question}</h2>
              <span>{selected === i ? "-" : "+"}</span>
            </div>
            <div className={selected === i ? "content show" : "content"}>
              {item.Answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faqs;
