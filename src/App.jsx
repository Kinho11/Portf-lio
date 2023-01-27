import { About } from './components/About/About';
import { Contact } from './components/Contact/Contact';
import { Experience } from './components/Experience/Experience';
import { Header } from './components/Header/Header';
import { Nav } from './components/Nav/Nav';
import { Project } from './components/Project/Project';
import { RepositorioProvider } from './Context/RepositorioGitHub/RepositorioGitHub';

function App() {
  return (
    <>
    <RepositorioProvider>
      <Header/>
        <Nav/>
      <About/>
      <Experience/>
      <Project/>
      <Contact/>
    </RepositorioProvider>
    </>
  );
}

export default App;
