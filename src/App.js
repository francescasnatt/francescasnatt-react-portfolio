import React, {useState} from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

function App() {
const [whatToRender, setWhatToRender] = useState("home")
function Render(){
  switch(whatToRender){
    case "home":
      return <Home />
    case "gallery":
      return <Gallery />
    case "contact":
      return <Contact />
  }
}

  return (
    <div className="App">
      <Header whatToRender = {whatToRender} setWhatToRender = {setWhatToRender}/>
      <div>
        <Render />
      </div>
    </div>
  );
}

export default App;

{/* <Routes>
            <Route path="/home" element={<Home/>} />
            <Route path="/gallery" element={<Gallery/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes> */}