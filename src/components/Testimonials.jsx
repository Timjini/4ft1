import React, { useEffect } from "react";
import Splide from "@splidejs/splide";
import "@splidejs/splide/dist/css/splide.min.css";

const testimonials = [
  {
    text: "Had an awesome time training with Dwain! It really helped me work on my speed and explosiveness. The exercises were tough but fun—big thanks for the session!",
    athlete: "Eray Coemert",
    occupation: "Footballer",
    image: "https://img.uefa.com/imgml/TP/players/3/2024/324x324/250076183.jpg",
  },
  {
    text: "Dwain and I had several sessions together. The focus was aimed at improving my explosive speed and athletism...",
    athlete: "binksy6",
    occupation: "Footballer",
    image: "https://pbs.twimg.com/profile_images/1698543707161546753/opSJ7Rj-_400x400.jpg",
  },
  {
    text: "I’m Indiana Pedder and I'm 16 years old and I’ve been training with Dwain for the last 3 years whilst playing for Spurs academy...",
    athlete: "Indiana Pedder",
    occupation: "Footballer",
    image: "https://raw.githubusercontent.com/Timjini/portal/refs/heads/main/app/assets/images/user.png",
  },
];

const TestimonialCarousel = () => {
  useEffect(() => {
    new Splide("#testimonial-carousel", {
      type: "fade",
      autoplay: true,
      interval: 3000,
      pauseOnHover: false,
      loop: true,
    }).mount();
  }, []);

  return (
    <section className="my-12 py-12 ">
      <section id="testimonial-carousel" className="splide pb-2" aria-label="Testimonials">
        <div className="splide__track">
          <ul className="splide__list">
            {testimonials.map((testimonial, index) => (
              <li key={index} className="splide__slide">
                <figure className="max-w-screen-md mx-auto text-center">
                  <blockquote>
                    <p className="text-lg font-medium text-gray-900">{testimonial.text}</p>
                  </blockquote>
                  <figcaption className="flex items-center justify-center mt-6 space-x-3">
                    <img className="w-24 h-24 rounded-full" src={testimonial.image} alt={testimonial.athlete} />
                    <div className="flex items-center divide-x-2 divide-gray-500">
                      <div className="pr-3 font-medium text-gray-900">{testimonial.athlete}</div>
                      <div className="pl-3 text-sm font-light text-gray-500">{testimonial.occupation}</div>
                    </div>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </section>
  );
};

export default TestimonialCarousel;