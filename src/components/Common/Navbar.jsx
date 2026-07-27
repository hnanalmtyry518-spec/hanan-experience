import "./Navbar.css";
import ScrollProgress from "./ScrollProgress";

function Navbar() {
  return (
    <header className="navbar">

      <div className="logo">
        HANAN.EXE
      </div>

      <nav>

        <a href="#about">من هي حنان؟</a>

        <a href="#timeline">الرحلة</a>

        <a href="#experience">الخبرات</a>

        <a href="#projects">المشاريع</a>

        <a href="#contact">تواصل</a>

      </nav>

     <ScrollProgress />
     
    </header>
  );
}

export default Navbar;