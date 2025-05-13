import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import { ThemeProvider } from "./components/theme-provider"

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* Add more routes as needed */}
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
