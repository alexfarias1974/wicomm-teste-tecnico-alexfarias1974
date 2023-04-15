import BlackSkullTeam from './components/BlackSkullTeam';
import ClassCardCarousel from './components/ClassCardCarousel';
import Header from './components/Header';
import MainCarousel from './components/MainCarousel';
import NavBar from './components/NavBar';
import NewProductCardCarousel from './components/NewProductCardCarousel';
import PromotionsCarousel from './components/PromotionsCarousel';

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
    </>
  )
}

export default App
