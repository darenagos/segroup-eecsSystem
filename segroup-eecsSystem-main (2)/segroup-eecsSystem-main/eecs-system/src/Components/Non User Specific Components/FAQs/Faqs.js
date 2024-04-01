import React, { useState } from "react";
import "./Faqs.css";
import getFaqData from "./faqData"; 

function Faqs() {
  const [selected, setSelected] = useState(null);
  const faqData = getFaqData(); 

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <div className="container">
      <div className="">
        <h1 className="header">Frequently Asked Questions</h1>
        {faqData.map((item, i) => (
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