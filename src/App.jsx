import { BrowserRouter } from "react-router-dom"
import {LoadingPage, Header, Navbar, AboutUs, Services, OurTeam, OurWork, Contact, Footer} from "./components/"

function App() {
  return (
    <BrowserRouter>
      <LoadingPage />
      <header>
        <Navbar />
        <Header />
      </header>
      <AboutUs />
      <Services />
      <OurTeam />
      <OurWork />
      <Contact />
      <Footer />
    </BrowserRouter>
  )
}

export default App
