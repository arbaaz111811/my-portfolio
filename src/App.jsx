// import Toogle from './Components/Body/Toogle.jsx'
import Header from './Components/Header/Header.jsx'
import Banner from './Components/Banner/Banner.jsx'
import Body from './Components/Body/Body.jsx'
import Skill from './Components/Body/Skill.jsx'
import Form from './Components/Body/Form.jsx'
import Footer from "./Components/Footer/Footer.jsx"
import FAQ from "./Components/FAQ/FAQ.jsx"
import Projects from "./Components/Body/Projects.jsx"
import Modal from "./Components/Body/Modal.jsx"
import Testimonials from "./Components/Testimonials/Testimonials.jsx"
// import Products from './Components/Products/Products.jsx'
function App() {

 
  // let obje = {
  //   name: "arbaaz",
  //   name: "arbaaz",
  // }
  // let number = [1,2,3,4,5]

  return (
    <>
      {/* <Header arbaaz={obje} numbers={number[2]}/>
      <Banner arabaaz={obje} />
      <Body/>
      <Skill numbers={number[0]}/> */}
      {/* <Toogle/> */}
      <Modal/>
      <Header />
      <Banner />
      <Body />
      <Skill />
      <Projects />
      <Testimonials/>
      <Form />
      <FAQ />
      <Footer />

      {/* <Products/> */}
      {/* propsdriling */}
    </>
  )
}

export default App