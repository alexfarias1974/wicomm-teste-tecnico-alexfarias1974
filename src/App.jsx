import BlackSkullTeam from './components/BlackSkullTeam';
import ClassCardCarousel from './components/ClassCardCarousel';
import Header from './components/Header';
import MainCarousel from './components/MainCarousel';
import NavBar from './components/NavBar';
import NewProductCardCarousel from './components/NewProductCardCarousel';
import Promotions from './components/Promotions';

function App() {
  
  return (
    <>
      <Header />
      <NavBar />
      <MainCarousel />
      <ClassCardCarousel />
      <NewProductCardCarousel />
      <BlackSkullTeam />
      <Promotions />
    </>
  )
}

export default App
