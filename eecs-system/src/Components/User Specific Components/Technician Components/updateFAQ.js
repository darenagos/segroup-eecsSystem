import React, { useState } from 'react';
import "./updateFaq.css"
import getFaqData from "../../Non User Specific Components/FAQs/faqData"; // Import the function

function UpdateFAQ() {
  const [faqData, setFaqData] = useState(getFaqData()); 
  const [questionToRemove, setQuestionToRemove] = useState("");
  const [questionToUpdate, setquestionToUpdate] = useState("");
  const [updatedQuestion, setupdatedQuestion] = useState("");
  const [updatedAnswer, setupdatedAnswer] = useState("");
  const [newQuestion, setNewQuestion] = useState("");
  const [newAnswer, setNewAnswer] = useState("");

  const handleAddFaq = (e) => {
    e.preventDefault();
  
    if (newQuestion !== "" && newAnswer !== "" ) {
      const newFaq = {
        Question: newQuestion,
        Answer: newAnswer,
      };
  
      const updatedFaqData = [...faqData, newFaq];
      setFaqData(updatedFaqData);
      setNewQuestion("");
      setNewAnswer("");
  
      localStorage.setItem("faqData", JSON.stringify(updatedFaqData));
    }
  };

  const handleRemoveFaq = (e) => {
    e.preventDefault();
  
    if (questionToRemove !== "") {
      const updatedFaqData = [...faqData];
      updatedFaqData.splice(questionToRemove, 1);
      setFaqData(updatedFaqData);
      setQuestionToRemove("");
      localStorage.setItem("faqData", JSON.stringify(updatedFaqData));
    }
  };

  const handleUpdateFAQ = (e) => {
    e.preventDefault();
    if (questionToUpdate !== "" && updatedQuestion !== "" && updatedAnswer !== "" ) {
      const updatedFaq = {
        Question: updatedQuestion,
        Answer: updatedAnswer,
      };

      const updatedFaqData = [...faqData];
      updatedFaqData[questionToUpdate] = updatedFaq;

      setFaqData(updatedFaqData);
      setupdatedQuestion("");
      setupdatedAnswer("");
      setquestionToUpdate("");
      localStorage.setItem("faqData", JSON.stringify(updatedFaqData));
    }
  }

  return (
    <div>updateFAQ</div>
  )
}

export default updateFAQ