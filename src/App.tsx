
import './App.css'
import Footer from './layout/Footer'
import Header from './layout/Header'
import About from './sections/about'

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <div style={{ flex: 1 }}>
        <About />
        {/* Tutaj umieść główną zawartość aplikacji */}
      </div>
      <Footer />
    </div>
  )
}

export default App
