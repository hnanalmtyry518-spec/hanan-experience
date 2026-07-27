import { useState } from "react";
import Home from "./pages/Home";
import BootScreen from "./components/Boot/BootScreen";

function App() {

  const [loaded, setLoaded] = useState(false);

  return loaded ? (
    <Home />
  ) : (
    <BootScreen onFinish={() => setLoaded(true)} />
  );

}

export default App;