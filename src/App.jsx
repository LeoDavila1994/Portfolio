import './App.css'
import { Home, Projects, About, Contact, Skills } from "./components"

function App() {


  return (
    <div className='main'>
      <Home />
      <About />
      <Skills />
      <Projects />
    </div>
  )
}

export default App
