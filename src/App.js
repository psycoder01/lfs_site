import React, { useEffect, useState } from "react";
import "./styles/app.css";
import "./styles/custom.css";
import Homepage from "./pages/Homepage";
import Loading from "./components/loading";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setInterval(() => setLoading(false), 3000);
    document.querySelector(".main-container").classList.toggle("hidden");
  }, [loading]);

  return (
    <React.Fragment>
      {loading ? <Loading /> : ""}
      <Homepage />
    </React.Fragment>
  );
}

export default App;
