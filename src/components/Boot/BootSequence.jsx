import { useNavigate } from "react-router-dom";
import TypeWriter from "./TypeWriter";

function BootSequence() {
const navigate = useNavigate();
  return (

    <div className="terminal">

      <TypeWriter text="> boot hanan.exe" />

      <TypeWriter text="Loading Profile..." />

      <TypeWriter text="Loading Education..." />

      <TypeWriter text="Loading Experience..." />

      <TypeWriter text="Loading Projects..." />

      <TypeWriter text="Loading Creativity..." />

      <br />

     <button
  className="begin-btn"
  onClick={() => navigate("/intro")}
>
  BEGIN
</button>
    </div>

  );

}

export default BootSequence;