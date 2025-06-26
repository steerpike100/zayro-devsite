export default function Home() {
  return (
    <section className="max-w-3xl mx-auto p-6 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
        Welcome to Zayro.dev
      </h1>

      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        A portfolio and engineering hub by Steve —
        focused on test automation, CI/CD, and AI-enhanced quality engineering.
      </p>

      <div className="flex justify-center gap-4 flex-wrap">
        <a
          href="/projects"
          className="px-5 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
        >
          View Projects
        </a>
        <a
          href="/about"
          className="px-5 py-2 bg-gray-300 text-gray-900 rounded-xl hover:bg-gray-400 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 transition"
        >
          About Me
        </a>
      </div>
    </section>
  )
}
