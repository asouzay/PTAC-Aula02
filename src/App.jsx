import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";

import "./globals.css";




export default function App() {

  const nome = "Mariany";
  const sobreNome = "Souza";

  return(
    <div>
        <Header/>
        <Main/>
        <Footer/>
    </div>  
  );


}