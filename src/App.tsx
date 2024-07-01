import About from "./components/About/About"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Projects from "./components/Projects/Projects"
import Skills from "./components/Skills/Skills"


function App() {
  return (
    <>
      <Header/>
      <main>
        <About/>
        <Projects/>
        <Skills/>
      </main>
      <Footer/>
    </>
  )
}

export default App
