import { About } from './components/About/About';
import { Contact } from './components/Contact/Contact';
import { Header } from './components/Header/Header';
import { Nav } from './components/Nav/Nav';
import { Project } from './components/Project/Project';

function App() {
  return (
    <>
     <Header/>
      <Nav/>
     <About/>
     <Project/>
     <Contact/>
    </>
  );
}

export default App;
