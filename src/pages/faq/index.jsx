import React from "react";
import Accordion from "@/components/ui/Accordion";

const faqItems = [
  {
    title: "How do I request a part that’s not listed on the website?",
    content:
      "To request a part not listed, simply use our contact form and include the part name or number along with the required quantity. We will review your inquiry and get back to you with a quote as soon as possible.",
  },
  {
    title: "Are the parts you sell brand new or used?",
    content: "All parts we supply are brand new and sourced from reliable manufacturers.",
  },
  {
    title: "Do you offer delivery across Sri Lanka?",
    content:
      "Yes, we offer delivery services throughout Sri Lanka. Please note that additional delivery charges may apply for areas outside Colombo. International shipping is also available and includes freight, insurance, and handling costs.",
  },
  {
    title: "How long does it take to get a response after sending an inquiry?",
    content:
      "We aim to respond as promptly as possible. Typically, you can expect a reply within 2 to 5 business days.",
  },
  {
    title: "Are the parts you sell genuine or aftermarket?",
    content:
      "We supply genuine parts that are imported directly from our trusted suppliers based in Taiwan, China, and Japan.",
  },
  {
    title: "Is there a warranty on the parts?",
    content:
      "Yes, we offer warranty coverage on all parts. Warranty periods and conditions vary by product, so please contact us for specific warranty details regarding your item.",
  },
  {
    title: "Do you support other vehicles besides the Suzuki Wagon R?",
    content:
      "While we specialize in parts for Suzuki Wagon R models, we also supply parts for other popular vehicles in Sri Lanka. Feel free to inquire about availability for your specific vehicle.",
  },
  {
    title: "Can I request bulk quantities of a part?",
    content:
      "Yes, bulk inquiries are welcome. Just mention the required quantity in your message, and we’ll provide availability and pricing accordingly.",
  },
  {
    title: "Do I need to make an account to inquire or purchase a part?",
    content:
      "No account is necessary. You can browse available parts and submit inquiries directly without needing to sign up or log in.",
  },
  {
    title: "Do you support international brands as well as local ones?",
    content:
      "Yes, we source from international suppliers and offer parts for a wide range of globally recognized vehicle brands, in addition to supporting commonly used local models.",
  },
];

const FAQ = () => {
  return (
    <div className="py-16 px-4 md:px-8 max-w-5xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-6">Frequently Asked Questions</h1>
      <p className="text-lg text-gray-600 text-center mb-12">
        If you have a question that isn’t listed here, feel free to reach out to us via our contact page.
      </p>
      <Accordion items={faqItems} />
    </div>
  );
};

export default FAQ;
