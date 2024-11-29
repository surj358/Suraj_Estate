import logo from './logo.svg';
import './App.css';
import { DarkModeProvider, DarkModeprovider } from './components/DarkModeContext';
import { Header } from './components/header';
import { Hero } from './sections/hero';
import { About } from './sections/about';
import { Popularareas } from './sections/popularareas';
import { Properties } from './sections/properties';
import { Client } from './sections/Clients';
import { Footer } from './components/footer';
import { Contact } from './sections/contact';
import { Services } from './sections/Services';
import { Demo } from './sections/demo';


function App() {
  return (
    <div >
      <DarkModeProvider>
        <Header />
        <Hero />
        <About />
        <Popularareas />
        <Properties />
        <Services />
        <Client />
        <Contact />
        <Footer />

        {/* <Demo /> */}
      </DarkModeProvider> 
      
    </div>
  );
}

export default App;
