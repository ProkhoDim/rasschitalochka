import React from 'react';
import AppBar from './components/AppBar';
// import TotalBalance from './components/TotalBalance';
import ModalBtn from './components/ModalBtn';
import SideBar from './components/Sidebar';

// function App() {
//   // return <div className="App"></div>;
//   <Logo />;
// }

const App = () => (
  <>
    <AppBar />
    <SideBar />
    {/* <TotalBalance /> */}
    <ModalBtn />
  </>
);

export default App;
