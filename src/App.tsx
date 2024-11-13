import './App.css'
import Hero from './sections/Hero/Hero'
import Education from './sections/Education/Education'
import Experience from './sections/Experience/Experience'
import Spacer from './components/Spacer/Spacer'
import Projects from './sections/Projects/Projects'
import Contact from './sections/Contact/Contact'
function App() {
  return (
    <>
      <Hero/>
      <Spacer/>
      <Education/>
      <Spacer/>
      <Experience/>
      <Spacer/>
      <Projects/>
      <Spacer/>
      <Contact/>
    </>
  )
}

export default App
