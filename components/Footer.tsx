export default function Footer() {
  return (
    <footer className="px-6 py-8 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-600 dark:text-gray-400">
          © 2024 Landon Studio. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a
            href="#"
            className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
          >
            Privacy
          </a>
          <a
            href="#"
            className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
          >
            Terms
          </a>
        </div>
      </div>
    </footer>
  )
}
