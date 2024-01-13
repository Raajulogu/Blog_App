import './header.css'

export default function Header({ head }) {
  return (
    <div class="fixed top-0 w-full">
      <nav class="nav bg-white border-gray-200 dark:bg-gray-900 w-full">
        <div class="header">
          <a href="#" class="title">
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white flex flex-wrap">
              {head}
            </span>
          </a>
          <div
          class="logo"
          >
          <img
            src="https://res.cloudinary.com/dhetnxi3h/image/upload/v1705126326/WhatsApp_Image_2024-01-13_at_11.01.04_AM_ijm7hk.jpg"
            alt="Flowbite Logo"
          />
          </div>
        </div>
      </nav>
    </div>
  );
}
