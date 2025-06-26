export default function Home() {
  return (
    <section className="text-center space-y-6">
      <h2 className="text-4xl font-extrabold tracking-tight">Welcome to <span className="text-indigo-500">Zayro.dev</span></h2>
      <p className="text-lg text-gray-600 dark:text-gray-300">
        A portfolio and engineering hub by Steve — focused on test automation, CI/CD, and AI-enhanced quality engineering.
      </p>
      <div className="flex justify-center gap-4">
        <a
          href="/projects"
          className="px-5 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
        >
          View Projects
        </a>
        <a
          href="/about"
          className="px-5 py-2 border border-indigo-600 text-indigo-600 rounded hover:bg-indigo-50 transition"
        >
          About Me
        </a>
      </div>
    </section>
  )
}
