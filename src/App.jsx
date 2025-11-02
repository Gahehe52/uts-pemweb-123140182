import { Link, Outlet } from 'react-router-dom'

function App() {
  return (
    <div className="min-h-screen bg-crypto-dark text-crypto-light font-sans">
      <header className="bg-gray-900 shadow-md">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-crypto-yellow">
            CryptoTracker
          </Link>
          <div>
            <Link to="/" className="px-4 text-white hover:text-crypto-yellow">
              Home
            </Link>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-6 py-8">
        <Outlet /> 
      </main>

      <footer className="bg-gray-900 text-center py-4 mt-12">
        <p className="text-gray-400">
          Dibuat untuk UTS PAW - Muhammad Ghama Al Fajri - 123140182
        </p>
      </footer>
    </div>
  )
}

export default App