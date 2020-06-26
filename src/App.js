import React, { useEffect, useState } from "react";

//AOS library
import AOS from 'aos';
import 'aos/dist/aos.css';

import "./css/main.css";
import "./css/custom.css";
import "./fonts/index.css";

import Homepage from "./pages/Homepage";
import Loading from "./components/loading";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setInterval(() => setLoading(false), 3000);
    document.querySelector(".main-container").classList.toggle("hidden");
    
    //Intitializing AOS library
    AOS.init();
  }, [loading]);

  return (
    <React.Fragment>
      {loading ? <Loading /> : ""}
      <Homepage />
    </React.Fragment>
  );
}

export default App;
