import About from "./About";
import Banner from "./Banner";
import Call from "./Call";
import Cards from "./Cards";
import Dis from "./Dis";
import Get from "./Get";
import Loc from "./Loc";
import Visionaries from "./Visionaries";
import Suu from "./Suu";
import Header from "./Header";

function App() {
  return (
    <>
    <Header/>
      <Banner />
       <Cards />
       {/* <Suu/> */}
    <About />
       <Visionaries />
     <Call />
   <Dis/>
         <Get/>
      <Loc/> 
    </>
  );
}

export default App;
