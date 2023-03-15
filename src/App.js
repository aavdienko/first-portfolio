import './App.css';
import { Header } from './header/Header';
import { Main } from './main/Main';
import { Skills } from './skills/Skills';
import { Projects } from './projects/Projects';
import { Contacts } from './contacts/Contacts'

const App = () => (
  <div className="App">
    <Header/>
    <Main/>
    <Skills/>
    <Projects/>
    <Contacts/>
  </div>
)

export default App;
