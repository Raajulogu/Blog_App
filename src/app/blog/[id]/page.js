"use client";

import Header from "@/app/components/header";
import data from "@/app/data";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Details({ params }) {
  let [blog, setBlog] = useState("");

  useEffect(() => {
    setBlog(data[params.id - 1]);
  }, []);
  console.log(blog);
  return (
    <div>
      <Header head={blog.title} />
      <div class="mt-20 ml-10  pt-20"></div>
      <main class="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white  antialiased">
        <div class="flex justify-center ">
          <article class="text-center p-10 mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
            <p>
              <b>
                {" "}
                Embark on a captivating exploration through time as we unveil
                the rich narrative of gypsum, a mineral with roots reaching
                millions of years into the past. This blog post delves into its
                geological genesis, traces its historical eminence, and
                illuminates its transformative impact on the tapestry of modern
                architecture.
              </b>
            </p>
          </article>
        </div>
        <div class="flex justify-between px-4 mx-auto max-w-screen-xl ">
          <article class="text-justify p-10 mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
            <figure>
              <img
                src="https://res.cloudinary.com/dhetnxi3h/image/upload/v1705126231/WhatsApp_Image_2024-01-13_at_11.01.05_AM_1_kepwb9.jpg"
                alt=""
              />
            </figure>
            <br />
            <p>
              <b>Geological Marvel and Mining Exploration</b>
              <br />
              <br />
              Gypsum, a mineral of extraordinary prevalence, traces its origins
              to ancient saltwater layers that have undergone a mesmerizing
              transformation over epochs. As water gradually retreated, it left
              behind intricate crystal formations, transforming gypsum into a
              geological marvel. Today, this mineral is mined from sedimentary
              rock formations around the world, revealing its fascinating
              crystal projections, aptly earning it the moniker—the Spear Stone.
              The mining exploration of gypsum unveils the breathtaking journey
              of this mineral, from its humble beginnings in ancient seabeds to
              the walls and ceilings of modern constructions.
              <br />
              <br />
              <b>Echoes from Antiquity</b>
              <br />
              <br />
              The historical resonance of gypsum reverberates through time. This
              mineral was a silent yet integral contributor to the architectural
              grandeur of ancient civilizations. In ancient Israel (circa 7000
              BC), gypsum was used for floor screeds, indicating its early use
              in construction. Moving to Egypt circa 3000 BC, gypsum played a
              crucial role in the construction of the Cheops Pyramid, showcasing
              its early importance. These historical uses highlight gypsum's
              versatility and durability, qualities that have been recognized
              and utilized for thousands of years.
              <br />
              <br />
              <b>Gypsum's Modern-day Embrace</b>
              <br />
              <br />
              In contemporary architecture, gypsum's enduring relevance and
              adaptability are unmistakable. It's a cornerstone material, used
              in homes, offices, factories, and airports. Gypsum's aesthetic
              appeal is just the tip of the iceberg; it also provides acoustic
              comfort, thermal insulation, and inherent strength. These
              qualities make it indispensable in modern architectural design,
              blending beauty with functionality in the spaces we inhabit every
              day.
              <br />
              <br />
              <b>Versatility Beyond Aesthetics</b>
              <br />
              <br />
              Gypsum's influence in modern construction is profound. Annually,
              an impressive 5 million tonnes of gypsum-based plaster are used in
              European interiors. Its versatility is evident in everything from
              intricate residential designs to practical everyday items.
              Gypsum's ability to adapt to various construction needs while
              maintaining its functional and aesthetic qualities makes it a
              dynamic force in the construction industry.
              <br />
              <br />
              <b>Gypsum's Enduring Virtues</b>
              <br />
              <br />
              The true allure of gypsum lies in its remarkable qualities that
              make it a staple in contemporary construction. It is
              non-combustible, with crystal water that provides up to 4 hours of
              fire protection. Gypsum's sound insulation properties and low
              thermal conductivity are essential in crafting safe,
              energy-efficient, and sustainable spaces. These qualities position
              gypsum not just as a building material but as a key component in
              creating environments that prioritize safety and comfort.
              <br />
              <br />
              <b>Conclusion</b>
              <br />
              <br />
              Navigating through gypsum's legacy, it's clear that this mineral
              is more than a construction material; it's an architectural
              maestro. From its ancient origins to its modern mastery, gypsum's
              journey intertwines with human civilization, leaving a lasting
              impact on architectural innovation and design. Its story is a
              testament to the enduring qualities that have made it an integral
              part of our built environment throughout history and into the
              present day.
            </p>
          </article>
        </div>
      </main>
    </div>
  );
}
