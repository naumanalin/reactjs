 import { lazy, Suspense } from "react";

import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Portfolio-Projects/Projects";

const App = () => {
  return (
    <main className="wrapper">
      <Hero/>
      <Services/>
      <Projects/>
      <Contact/>
    </main>
  )
}

export default App