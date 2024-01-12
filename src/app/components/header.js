export default function Header() {
  return (
    <div>
      <nav class="bg-white border-gray-200 dark:bg-gray-900">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <a
            href="https://flowbite.com"
            class="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://logo.com/image-cdn/images/kts928pd/production/0edce5f2a29f39d2266c1ded3a9107bfe806736a-357x352.png?w=1080&q=72"
              class="h-8"
              alt="Flowbite Logo"
            />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Blogs
            </span>
          </a>
        </div>
      </nav>
    </div>
  );
}
