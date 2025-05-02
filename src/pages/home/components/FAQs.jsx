import React from "react";
import FaqItem from "./FaqItem";

const faqs = [
  {
    number: "01",
    question: "Why should I choose Humestic?",
    answer:
      "Bottleneck mice my capacity is full, nor incentivization we need to start advertising on social media, or helicopter view, for what the. Let’s put a pin in that we need to build it so that it scales, are there any leftovers in the kitchen?, if you're not hurting you're not winning loop back.",
  },
  {
    number: "02",
    question: "I like your works, how do we start a project?",
    answer:
      "We offer web development, branding, SEO, and product design tailored to your goals and users. Let’s put a pin in that we need to build it so that it scales, are there any leftovers in the kitchen?, if you're not hurting you're not winning loop back.",
  },
  {
    number: "03",
    question: "What info is required to get a quotation?",
    answer:
      "We offer web development, branding, SEO, and product design tailored to your goals and users. Let’s put a pin in that we need to build it so that it scales, are there any leftovers in the kitchen?, if you're not hurting you're not winning loop back.",
  },
];

const FAQs = () => {
  return (
    <div className="px-[239px] mt-[134px]">
      <div className="flex gap-[80px]">
        <p className="max-w-[280px] text-[#001C4A] text-[24px] font-questrial font-normal tracking-[-0.24px]">
          Frequently asked questions
        </p>
        <h3 className="max-w-[920px] text-[#111] text-[60px] font-questrial font-normal leading-[120%] tracking-[-0.6px]">
          Constant collaboration is how we roll. Let's see if we are a good fit.
        </h3>
      </div>
      <div className="mt-[40px] mb-[40px]">
        {faqs.map((faq, index) => (
          <FaqItem
            key={index}
            number={faq.number}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQs;
