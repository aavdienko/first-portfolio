import './App.css';
import { Header } from './header/Header';
import { Main } from './main/Main';
import { Skills } from './skills/Skills';
import { Projects } from './projects/Projects';
import { Contacts } from './contacts/Contacts'
import { Footer } from './footer/Footer'

const App = () => (
  <div className="App">
    <Header/>
    <Main/>
    <Skills/>
    <Projects/>
    <Contacts/>
    <Footer />
  </div>
)

export default App;


// import React from "react"; 
// import Particles from "react-tsparticles"; 
// import { loadFull } from "tsparticles"; 
// const App = () => { 
//   return ( 
//     <> 
//       <Particles 
//         id="tsparticles" 
//         init={particlesInit} 
//         loaded={particlesLoaded} 
//         options={{ 
//           background: { 
//             color: "rgb(10,10,25)", 
//           }, 
//           fpsLimit: 60, 
//         }} 
//       /> 
//     </> 
//   ); 
// }; 
// export default App; 