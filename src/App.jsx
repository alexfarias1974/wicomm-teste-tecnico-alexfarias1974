import BlackSkullTeam from './components/BlackSkullTeam';
import BlogCardCarousel from './components/BlogCardCarousel';
import ClassCardCarousel from './components/ClassCardCarousel';
import Header from './components/Header';
import MainCarousel from './components/MainCarousel';
import NavBar from './components/NavBar';
import NewProductCardCarousel from './components/NewProductCardCarousel';
import PromotionsCarousel from './components/PromotionsCarousel';
import Goals from "./components/Goals";
import Freight from './components/Freight';
import About from './components/About';
import FinalSection from './components/FinalSection';
import Footer from './components/Footer';

function App() {
  
  return (
    <>
      <Header />
      <NavBar />
      <MainCarousel />
      <ClassCardCarousel />
      <NewProductCardCarousel />
      <BlackSkullTeam />
      <PromotionsCarousel />
      <BlogCardCarousel />
      <Goals />
      <Freight />
      <About />
      <FinalSection />
      <Footer />
    </>
  )
}

export default App
