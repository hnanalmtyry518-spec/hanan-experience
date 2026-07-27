import "./MainLayout.css";

function MainLayout({ title, children }) {
  return (
    <main className="layout">

      <div className="container">

        <h1 className="page-title">
          {title}
        </h1>

        <div className="page-content">
          {children}
        </div>

      </div>

    </main>
  );
}

export default MainLayout;