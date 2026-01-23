import { Header, Footer } from "../components/layout";
import "../assets/css/layout.css";
const MainLayout = ({ children }) => {
  return (
    <>
      <div className="main-container">
        <Header />
        <main className="main">{children}</main>
        <Footer />
      </div>
    </>
  );
};
export default MainLayout