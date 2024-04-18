import { useTitle } from "../../hooks/useTitle";
import React from "react";
import { Hero } from "./components/Hero";
import { FeaturedProducts } from "./components/FeaturedProduct";
import { Testimonials } from "./components/Testimonials";
import { Faq } from "./components/Faq";


export const HomePage = () => {
  useTitle("Access Latest Computer Science eBooks");
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <Testimonials />
      <Faq />
    </main>
  );
};
