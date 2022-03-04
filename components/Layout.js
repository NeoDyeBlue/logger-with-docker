import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="container-fluid min-vh-100 d-flex flex-column p-0">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
