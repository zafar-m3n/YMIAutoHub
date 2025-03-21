import React from "react";
import Icon from "@/components/ui/Icon";
import Rate from "@/components/ui/Rate";

const testimonials = [
  {
    name: "Ahamed R.",
    review: "Great service! Found my Suzuki Wagon R parts easily, and they arrived fast.",
    rating: 5,
  },
  {
    name: "Nuwan P.",
    review: "Affordable prices and genuine quality. Highly recommend YMIAutoHub!",
    rating: 4,
  },
  {
    name: "Dilini S.",
    review: "Couldn’t find my part elsewhere, but they got it for me. Fantastic customer support!",
    rating: 5,
  },
  {
    name: "Kasun J.",
    review: "Smooth transaction, excellent communication, and top-notch quality parts!",
    rating: 4,
  },
];

const CustomerTestimonials = () => {
  return (
    <section className="py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What Our Customers Say</h2>
        <p className="text-lg text-gray-600 mt-2">Real feedback from our satisfied customers.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-6 bg-white shadow-md rounded-lg flex flex-col items-center space-y-2">
              <p className="text-gray-800 italic">"{testimonial.review}"</p>
              <Rate value={testimonial.rating} disabled />
              <p className="mt-2 font-semibold text-gray-900">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerTestimonials;
