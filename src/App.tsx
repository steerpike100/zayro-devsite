import { Outlet, Link } from 'react-router-dom'

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-900 text-white p-4 shadow-md">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Zayro</h1>
          <nav className="space-x-4">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/about" className="hover:underline">About</Link>
            <Link to="/projects" className="hover:underline">Projects</Link>
            <Link to="/contact" className="hover:underline">Contact</Link>
          </nav>
        </div>
      </header>

      <main className="flex-1 bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <Outlet />
        </div>
      </main>

      <footer className="bg-gray-800 text-center text-sm text-gray-400 py-4">
        © 2025 Zayro. All rights reserved.
      </footer>
    </div>
  )
}
