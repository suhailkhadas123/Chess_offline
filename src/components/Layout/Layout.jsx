
import { Outlet, Link } from "react-router-dom";

function Layout() {
  return (
    <div className="app-container">
      
      <nav style={{ padding: "10px", background: "#eee", display: "flex", gap: "15px" }}>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/dashboard">Dashboard</Link>
      </nav>

      
      <main style={{ padding: "20px" }}>
        <Outlet />
      </main>

      
      <footer style={{ marginTop: "20px", padding: "10px", borderTop: "1px solid #ccc" }}>
        <p>© 2026 Suhail Khadas Chess Game</p>
      </footer>
    </div>
  );
}

export default Layout;