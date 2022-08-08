import './App.css'
import { Home, Projects, About, Contact, Skills, Experience } from "./components"

function App() {


  return (
    <div className='main'>
      <Home />
      <About />
      <Skills />
      <Experience />
      {/* <Projects />
      <Contact /> */}
    </div>
  )
}

export default App
