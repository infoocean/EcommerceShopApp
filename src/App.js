import React from 'react';
import './App.css';
import NavbarComponent from './Templates/Header/Navbar';
import RouterComponent from './Routes/MyRoutes';
import FooterComponent from './Templates/Footer/Footer';


function App() {
  return (
    <div className="App">
      {/*Header comp*/}
      <NavbarComponent/>
      {/*My routes comp */}
      <RouterComponent/>
      {/*My Footer comp */}
      <FooterComponent/>
    </div>
  );
}

export default App;
