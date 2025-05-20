import { useEffect, useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import { ThemeProvider } from "./components/theme-provider"

function App() {
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false)

  // Lógica para prevenir cierre o recarga
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (hasUnsavedChanges) {
        e.preventDefault()
        e.returnValue = "" // Necesario para mostrar advertencia en algunos navegadores
      }
    }

    window.addEventListener("beforeunload", handleBeforeUnload)
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload)
    }
  }, [hasUnsavedChanges])

  // Simulación para pruebas: activa la advertencia después de 5 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      setHasUnsavedChanges(true)
    }, 5000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* Agrega más rutas aquí si lo necesitas */}
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
