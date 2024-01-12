export default function Header({head}) {
  return (
    <div class='fixed top-0 w-full'>
      <nav class="bg-white border-gray-200 dark:bg-gray-900">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <a
            href="#"
            class="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white flex flex-wrap">
              {head}
            </span>
          </a>
          <img
              src="https://cdn.pixabay.com/photo/2018/03/08/07/22/man-3207968_1280.jpg"
              class="h-20"
              alt="Flowbite Logo"
            />
        </div>
      </nav>
    </div>
  );
}
