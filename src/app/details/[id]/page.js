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
          <article class="text-justify p-10 mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
            <p>{blog.body}</p>
          </article>
        </div>
        <br />
        <div class="flex justify-between px-4 mx-auto max-w-screen-xl ">
          <article class="text-justify p-10 mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
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
            <p>{blog.content}</p>
          </article>
        </div>
      </main>
    </div>
  );
}
