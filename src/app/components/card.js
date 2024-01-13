import Link from "next/link";

export default function Card({ data }) {
  return (
    <div class="m-3 w-96 h-90 overflow-hidden shadow-2xl rounded-md">
      <img
        class="rounded-t-lg w-full h-60"
        src="https://res.cloudinary.com/dhetnxi3h/image/upload/v1705126231/WhatsApp_Image_2024-01-13_at_11.01.05_AM_1_kepwb9.jpg"
        alt={data.title}
      />
      <div class="max-w-sm p-6 bg-white rounded-lg h-full">
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
            Gypsum Unveiled: Navigating Ancient Origins to Architectural Mastery
          </h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Embark on a captivating exploration through time as we unveil the rich
          narrative of gypsum, a mineral with roots reaching millions of years
          into the past. This blog post delves into its geological genesis,
          traces its historical eminence, and illuminates its transformative
          impact on the tapestry of modern architecture.
        </p>
        <Link
          href={`/blog/${data.id}`}
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
