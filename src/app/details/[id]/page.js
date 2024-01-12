"use client";

import data from "@/app/data";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Details({ params }) {
  let [blog, setBlog] = useState("");

  useEffect(() => {
    setBlog(data[params.id - 1]);
  }, []);

  return (
    <div>
      <div class="mt-8 ml-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-10 h-10"
        >
          <Link href={"/"}>
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
            />
          </Link>
        </svg>
      </div>

      <main class="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white  antialiased">
        <div class="flex justify-center ">
          <h1>{blog.title}</h1>
        </div>
        <br />
        <div class="flex justify-between px-4 mx-auto max-w-screen-xl dark:bg-gray-900">
          <article class="p-10 text-white mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
            <figure>
              <img src={blog.img} alt="" />
              <figcaption>
                <b>Author:</b> {blog.author}
              </figcaption>
              <figcaption>
                <b>Date:</b> {blog.date}
              </figcaption>
            </figure>
            <br />
            <p>{blog.body}</p>
            <p></p>
          </article>
        </div>
      </main>
    </div>
  );
}
