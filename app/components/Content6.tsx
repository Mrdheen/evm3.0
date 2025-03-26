"use client";

import { useState } from "react";
import Image from "next/image";

const faqs = [
  {
    question: "What is Maxwell?",
    answer:
      "Maxwell is a social app designed for electric vehicle (EV) owners, providing them with information about nearby charging stations, real-time availability, and the ability to connect with other EV enthusiasts.",
  },
  {
    question: "How does Maxwell improve the EV charging experience?",
    answer:
      "Maxwell enhances the EV charging experience by offering users real-time updates on charging station availability, personalized recommendations, and a community platform for sharing tips and experiences.",
  },
  { question: "What features make Maxwell stand out from other social apps?", answer: "" },
  { question: "Does Maxwell provide information on charging costs?", answer: "" },
  { question: "Can I find other EV owners to connect with on the app?", answer: "" },
  { question: "What types of payment methods does Maxwell support?", answer: "" },
  { question: "Is my data secure while using Maxwell?", answer: "" },
  { question: "How can I provide feedback or report an issue with the app?", answer: "" },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faqs" className= "bg-gray-50 py-16 px-8">
      <div className="max-w-8xl pl-15 mx-auto grid grid-cols-1 md:grid-cols-2 gap-30">
        {/* FAQ Section */}
        <div>
          <h3 className="text-orange-400 text-2xl font-semibold">FAQs</h3>
          <h2 className="text-6xl font-bold mt-4">
            More Than 1500 Charging Stations & Growing Big
          </h2>
          <div className="mt-8">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b text-gray-800 border-gray-700 py-4">
                <button
                  className="flex justify-between w-full text-left text-3xl font-medium"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  {faq.question}
                  <span>{openIndex === index ? "−" : "+"}</span>
                </button>
                {openIndex === index && (
                  <p className="text-gray-600 text-xl mt-2">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center items-center">
          <Image
            src="/qas.png" // Replace with the actual image
            alt="EV Charging"
            width={560}
            height={1128}
            className="rounded-3xl"
          />
        </div>
      </div>
    </section>
  );
}
