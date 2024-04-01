import React, { useState } from "react";
import "./updateFaq.css";
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

    if (newQuestion !== "" && newAnswer !== "") {
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
    if (
      questionToUpdate !== "" &&
      updatedQuestion !== "" &&
      updatedAnswer !== ""
    ) {
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
  };

  return (
    <div className="grid-container-technician">
      <div className="box-techician">
        <form id="add_form" onSubmit={handleAddFaq}>
          <input
            className="input"
            type="text"
            placeholder="New Question"
            value={newQuestion}
            onChange={(e) => setNewQuestion(e.target.value)}
          />
          <input
            className="input"
            type="text"
            placeholder="New Answer"
            value={newAnswer}
            onChange={(e) => setNewAnswer(e.target.value)}
          />
          <button type="submit" className="submit_buttons">
            Add FAQ
          </button>
        </form>
        <br />
        <form id="remove_form" onSubmit={handleRemoveFaq}>
          <select
            value={questionToRemove}
            onChange={(e) => setQuestionToRemove(e.target.value)}
            className="select_question"
          >
            <option value="">Select a question to remove</option>
            {faqData.map((faq, index) => (
              <option key={index} value={index}>
                {faq.Question}
              </option>
            ))}
          </select>
          <button type="submit" className="submit_buttons">
            Remove FAQ
          </button>
        </form>
        <br />
        <form id="update_form" onSubmit={handleUpdateFAQ}>
          <select
            value={questionToUpdate}
            onChange={(e) => setquestionToUpdate(e.target.value)}
            className="select_question"
          >
            <option value="">Select a question to update</option>
            {faqData.map((faq, index) => (
              <option key={index} value={index}>
                {faq.Question}
              </option>
            ))}
          </select>
          <input
            className="input"
            type="text"
            placeholder="Updated Question"
            value={updatedQuestion}
            onChange={(e) => setupdatedQuestion(e.target.value)}
          />
          <input
            className="input"
            type="text"
            placeholder="Updated Answer"
            value={updatedAnswer}
            onChange={(e) => setupdatedAnswer(e.target.value)}
          />
          <button type="submit" className="submit_buttons">
            Update FAQ
          </button>
        </form>
      </div>
    </div>
  );
}

export default UpdateFAQ;
