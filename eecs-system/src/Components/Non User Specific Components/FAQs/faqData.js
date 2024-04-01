const faqData = [
];

const getFaqData = () => {
    const storedData = localStorage.getItem("faqData");
    return storedData ? JSON.parse(storedData) : faqData;
};

export default getFaqData;